"use client";

import { ArrowRight } from "lucide-react";

import SpecularButton from "@/components/ui/specular-button";
import { useIsDark } from "@/hooks/use-is-dark";
import { cn } from "@/lib/utils";

// Specular edge light from React Bits, plus the v1 hover: the dot floods the
// button and the label slides out while a copy with an arrow slides in.
const HoverButton = ({
  href,
  target,
  size = "md",
  className,
  children,
}: {
  href: string;
  target?: string;
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
}) => {
  const isDark = useIsDark();

  return (
    <SpecularButton
      href={href}
      target={target}
      size={size}
      radius={999}
      tint={isDark ? "#ffffff" : "#000000"}
      tintOpacity={isDark ? 0.04 : 0.02}
      textColor={isDark ? "#fafafa" : "#0a0a0a"}
      lineColor={isDark ? "#ffffff" : "#000000"}
      baseColor={isDark ? "#404040" : "#d4d4d4"}
      className={cn(
        // Lift + deeper shadow on hover, press on click (scale lives in SpecularButton).
        "group overflow-hidden font-semibold transition-[translate,scale,box-shadow]! duration-300! hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-12px_rgb(0_0_0/0.5)] active:translate-y-0 motion-reduce:transition-none! dark:hover:shadow-[0_14px_32px_-12px_rgb(255_255_255/0.25)]",
        size === "sm" ? "px-4 py-2" : "px-6 py-3",
        className,
      )}
    >
      <span className="flex items-center gap-2">
        <span
          aria-hidden
          className="bg-foreground size-2 shrink-0 rounded-full transition-transform duration-500 ease-out group-hover:scale-[60] motion-reduce:transition-none"
        />
        <span className="flex items-center gap-2 transition-[translate,opacity] duration-500 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </span>
      <span
        aria-hidden
        className="text-background absolute inset-0 flex translate-x-12 items-center justify-center gap-2 whitespace-nowrap opacity-0 transition-[translate,opacity] duration-500 group-hover:-translate-x-1 group-hover:opacity-100"
      >
        {children}
        <ArrowRight className="size-[18px] shrink-0" />
      </span>
    </SpecularButton>
  );
};
export default HoverButton;
