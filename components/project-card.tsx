"use client";

import Image from "next/image";

import SpotlightCard from "@/components/ui/spotlight-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SocialIcon } from "@/components/social-icon";
import { useIsDark } from "@/hooks/use-is-dark";
import type { projects } from "@/lib/data";

// Cells sit in a gap-px grid, so the frame lines come from the grid, not the card.
const flatCard = {
  "--spotlight-card-surface": "var(--background)",
  "--spotlight-card-border": "transparent",
  "--spotlight-card-shadow": "none",
} as React.CSSProperties;

const ProjectCard = ({ project }: { project: (typeof projects)[number] }) => {
  const isDark = useIsDark();

  return (
    <SpotlightCard
      theme={isDark ? "dark" : "light"}
      style={flatCard}
      className="flex h-full flex-col gap-4 rounded-none p-6 md:p-8"
    >
      <div className="bg-muted relative aspect-video overflow-hidden border">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          sizes="(min-width: 768px) 360px, 100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <span className="text-muted-foreground font-mono text-xs">
            {project.role}
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      <ul className="flex flex-wrap gap-1.5">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/70 rounded-md px-2 py-0.5 text-xs font-medium transition-colors"
          >
            {technology}
          </li>
        ))}
      </ul>

      <div>
        <Button size="sm" className="relative z-[2]" asChild>
          <Link href={project.link.github} target="_blank">
            <SocialIcon
              icon="github"
              className="group-hover/button:-rotate-6"
            />
            Source
          </Link>
        </Button>
      </div>
    </SpotlightCard>
  );
};
export default ProjectCard;
