"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

import { TransitionPanel } from "@/components/ui/transition-panel";
import { cn } from "@/lib/utils";
import { educations, experiences } from "@/lib/data";

const tabs = ["Work", "Education"];

type TimelineItem = {
  key: string;
  logo: React.ReactNode;
  title: string;
  subtitle: string;
  period: string;
  details?: readonly string[];
};

const Timeline = ({ items }: { items: TimelineItem[] }) => (
  <ol className="relative flex flex-col gap-10">
    <span
      aria-hidden
      className="bg-border absolute top-0 bottom-0 left-[23px] w-px"
    />
    {items.map((item) => (
      <li key={item.key} className="relative grid grid-cols-[48px_1fr] gap-5">
        <div className="flex size-12 items-center justify-center rounded-full border bg-white p-1.5">
          {item.logo}
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.subtitle}</p>
            </div>
            <time className="text-muted-foreground shrink-0 font-mono text-xs">
              {item.period}
            </time>
          </div>
          {item.details && (
            <ul className="text-secondary-foreground/90 flex flex-col gap-2 text-sm">
              {item.details.map((detail) => (
                <li key={detail} className="flex gap-3">
                  <span
                    aria-hidden
                    className="bg-muted-foreground/60 mt-2 size-1 shrink-0"
                  />
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </div>
      </li>
    ))}
  </ol>
);

const workItems: TimelineItem[] = experiences.map((experience) => ({
  key: experience.company,
  logo: (
    <Image
      src={experience.logo}
      alt=""
      width={32}
      height={36}
      className="object-contain"
    />
  ),
  title: experience.company,
  subtitle: `${experience.role} · ${experience.location}`,
  period: experience.period,
  details: experience.highlights,
}));

const educationItems: TimelineItem[] = educations.map((education) => ({
  key: education.name,
  logo: (
    <Image
      src={education.image}
      alt=""
      width={36}
      height={36}
      className="object-contain"
    />
  ),
  title: education.institution,
  subtitle: `${education.name} · GPA ${education.gpa}`,
  period: education.year,
}));

const ProfileTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Background"
        className="grid grid-cols-2 divide-x border-b"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab}
            type="button"
            role="tab"
            id={`tab-${index}`}
            aria-selected={activeIndex === index}
            aria-controls="background-panel"
            onClick={() => setActiveIndex(index)}
            className={cn(
              "text-muted-foreground hover:text-foreground relative cursor-pointer py-3 text-sm transition-colors",
              activeIndex === index && "text-foreground",
            )}
          >
            {tab}
            {activeIndex === index && (
              <motion.span
                layoutId="tab-indicator"
                aria-hidden
                className="bg-foreground absolute inset-x-0 -bottom-px h-px"
              />
            )}
          </button>
        ))}
      </div>

      <div
        id="background-panel"
        role="tabpanel"
        aria-labelledby={`tab-${activeIndex}`}
        className="overflow-hidden px-6 py-10 md:px-10"
      >
        <TransitionPanel
          activeIndex={activeIndex}
          transition={{ duration: 0.2, ease: "easeOut" }}
          variants={{
            enter: { opacity: 0, y: -16, filter: "blur(4px)" },
            center: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: { opacity: 0, y: 16, filter: "blur(4px)" },
          }}
        >
          {[
            <Timeline key="work" items={workItems} />,
            <Timeline key="education" items={educationItems} />,
          ]}
        </TransitionPanel>
      </div>
    </div>
  );
};
export default ProfileTabs;
