import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data";

import Image from "next/image";

const Projects = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">My projects</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.name}>
            <div className="relative h-48 w-48">
              <Image src={project.image} alt={project.name} fill />
            </div>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <CardContent className="p-0">
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
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Projects;
