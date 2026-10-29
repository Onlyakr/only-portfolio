"use client";

import { useState } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
  type PanInfo,
} from "motion/react";

type Photo = { src: string; alt: string };

const SWIPE_DISTANCE = 100;

const Card = ({
  photo,
  depth,
  onSwipe,
}: {
  photo: Photo;
  depth: number;
  onSwipe: () => void;
}) => {
  const isTop = depth === 0;
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-20, 20]);
  const opacity = useTransform(x, [-200, -120, 0, 120, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) < SWIPE_DISTANCE) return;
    onSwipe();
    // The card is behind the stack by now, so it can snap back unseen.
    animate(x, 0, { duration: 0.3 });
  };

  // Outer layer places the card in the stack, inner layer follows the drag.
  return (
    <motion.div
      className="absolute inset-0 origin-bottom"
      style={{ zIndex: 10 - depth }}
      animate={
        isTop
          ? { scale: 1, rotate: 0 }
          : { scale: 1 - depth * 0.08, rotate: depth % 2 ? 6 : -6 }
      }
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <motion.div
        className="bg-background size-full origin-bottom overflow-hidden rounded-lg border p-1 shadow-[0_10px_15px_-3px_rgb(0_0_0/0.3),0_4px_6px_-4px_rgb(0_0_0/0.3)] data-[top=true]:cursor-grab data-[top=true]:active:cursor-grabbing"
        data-top={isTop}
        style={{ x, rotate, opacity }}
        drag={isTop ? "x" : false}
        dragSnapToOrigin
        onDragEnd={handleDragEnd}
        onTap={isTop ? onSwipe : undefined}
      >
        <div className="pointer-events-none relative size-full overflow-hidden rounded-md">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority={isTop}
            draggable={false}
            sizes="175px"
            className="object-cover select-none"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

// A swipeable stack: drag or tap the top photo to send it to the back.
const PhotoStack = ({ photos }: { photos: Photo[] }) => {
  const [order, setOrder] = useState(() => photos.map((_, index) => index));

  const sendTopToBack = () => setOrder(([top, ...rest]) => [...rest, top]);

  return (
    <div
      role="group"
      aria-label="Photos, drag or tap to shuffle"
      className="relative h-[233px] w-[175px] touch-pan-y"
    >
      {photos.map((photo, index) => (
        <Card
          key={photo.src}
          photo={photo}
          depth={order.indexOf(index)}
          onSwipe={sendTopToBack}
        />
      ))}
    </div>
  );
};
export default PhotoStack;
