import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data";
import { Github, Globe } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">My projects</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.name}>
            <div className="px-6">
              <div className="relative h-48">
                {project.link.live ? (
                  <Link target="_blank" href={project.link.live}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="border-border cursor-pointer rounded-lg border-2 object-cover transition-all duration-300 hover:scale-105"
                    />
                  </Link>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="border-border rounded-lg border-2 object-cover transition-all duration-300 hover:scale-105"
                  />
                )}
              </div>
            </div>
            <CardHeader className="flex-1 gap-2">
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <CardDescription>
                <ul className="flex gap-2 text-sm">
                  {project.technologies.map((technology) => (
                    <li
                      className="bg-accent dark:bg-muted rounded-md px-2 py-1"
                      key={technology}
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex gap-4">
              {project.link.live && (
                <Button className="text-background/90" asChild>
                  <Link target="_blank" href={project.link.live}>
                    <Globe />
                    <span>Live</span>
                  </Link>
                </Button>
              )}
              <Button className="text-background/90" asChild>
                <Link target="_blank" href={project.link.github}>
                  <Github />
                  <span>Source</span>
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Projects;
