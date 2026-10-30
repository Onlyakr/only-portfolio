import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";

import BlurText from "@/components/ui/blur-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import PhotoStack from "@/components/photo-stack";
import ProfileTabs from "@/components/profile-tabs";
import ProjectGrid from "@/components/project-grid";
import Section from "@/components/section";
import SkillGrid from "@/components/skill-grid";
import HoverButton from "@/components/hover-button";
import WaveEmoji from "@/components/wave-emoji";
import { SocialIcon } from "@/components/social-icon";
import { intro, socialLinks } from "@/lib/data";

const Home = () => {
  return (
    <>
      <section className="flex flex-col items-start gap-10 px-6 py-12 md:flex-row-reverse md:items-center md:justify-between md:px-10 md:py-16">
        <BlurFade delay={0.2} className="self-center md:mr-6">
          <PhotoStack
            photos={[
              { src: "/profile.png", alt: intro.name },
              { src: "/candid.jpg", alt: `Candid photo of ${intro.name}` },
            ]}
          />
        </BlurFade>

        <div className="flex max-w-lg flex-col gap-4">
          <h1 className="flex flex-wrap items-center gap-x-3 text-4xl font-bold tracking-tight">
            <BlurText
              as="span"
              text={`I'm ${intro.name}`}
              trigger="load"
              delay={120}
            />
            <WaveEmoji delay={0.36} />
          </h1>

          <BlurFade delay={0.4}>
            <p className="text-secondary-foreground/90">{intro.about}</p>
          </BlurFade>

          <BlurFade delay={0.5}>
            <p className="text-secondary-foreground/90 leading-relaxed">
              <span className="text-foreground font-bold">Full-stack</span>{" "}
              developer interested in applying AI to how I work and integrating
              it into the systems I build.
            </p>
          </BlurFade>

          <BlurFade delay={0.55}>
            <p className="text-foreground flex items-center gap-2 font-semibold">
              <ArrowDownRight
                aria-hidden
                className="animate-nudge size-5 shrink-0 motion-reduce:animate-none"
              />
              {intro.seeking}
            </p>
          </BlurFade>

          <BlurFade delay={0.6}>
            <div className="mt-4 flex items-center gap-4">
              <HoverButton href="/resume.pdf" target="_blank">
                Resume
              </HoverButton>
              <ul className="text-muted-foreground flex items-center gap-1">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <Button variant="ghost" size="icon" asChild>
                      <Link
                        href={link.href}
                        target="_blank"
                        aria-label={link.name}
                        className="hover:text-foreground"
                      >
                        <SocialIcon
                          icon={link.icon}
                          className="size-5 group-hover/button:-rotate-6"
                        />
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>
        </div>
      </section>

      <Section index="01" title="Background" flush>
        <ProfileTabs />
      </Section>

      <Section index="02" title="Skills" flush>
        <SkillGrid />
      </Section>

      <Section
        index="03"
        title="Featured projects"
        flush
        action={
          <Link
            href="/projects"
            className="group text-muted-foreground hover:text-foreground flex shrink-0 items-center gap-1 text-sm whitespace-nowrap transition-colors"
          >
            view more
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        }
      >
        <ProjectGrid />
      </Section>
    </>
  );
};
export default Home;
