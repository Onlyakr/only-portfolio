import * as motion from "motion/react-client";

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
import { BlurFade } from "@/components/ui/blur-fade";

const Projects = () => {
  return (
    <BlurFade className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">My projects</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.name}>
            <div className="px-8">
              <div className="flex justify-center">
                {project.link.live ? (
                  <Link target="_blank" href={project.link.live}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={500}
                      height={500}
                      className="border-border cursor-pointer rounded-sm border object-cover transition-all duration-300 hover:scale-105"
                    />
                  </Link>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={500}
                    className="border-border rounded-md border object-cover transition-all duration-300 hover:scale-105"
                  />
                )}
              </div>
            </div>
            <CardHeader className="flex-1 gap-1">
              <CardTitle className="text-lg font-semibold">
                <p>{project.name}</p>
              </CardTitle>
              <CardDescription>
                <ul className="text-sm">
                  {project.description.map((description) => (
                    <li key={description}>{description}</li>
                  ))}
                </ul>
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-col items-start gap-6">
              <ul className="flex gap-2 text-sm">
                {project.technologies.map((technology) => (
                  <li
                    className="text-secondary-foreground/80 bg-accent dark:bg-muted rounded-md px-1 py-0.5 md:px-1.5 md:py-1"
                    key={technology}
                  >
                    {technology}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                {project.link.live && (
                  <Button className="text-background/90 h-8" asChild>
                    <Link target="_blank" href={project.link.live}>
                      <Globe />
                      <span>Live</span>
                    </Link>
                  </Button>
                )}
                <Button className="text-background/90 h-8" asChild>
                  <Link target="_blank" href={project.link.github}>
                    <Github />
                    <span>Source</span>
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </BlurFade>
    // <motion.div
    //   initial={{ opacity: 0, y: 100 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.5 }}
    //   className="flex flex-col gap-8"
    // >
    //   <h1 className="text-4xl font-bold">My projects</h1>

    //   <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    //     {projects.map((project) => (
    //       <Card key={project.name}>
    //         <div className="px-8">
    //           <div className="flex justify-center">
    //             {project.link.live ? (
    //               <Link target="_blank" href={project.link.live}>
    //                 <Image
    //                   src={project.image}
    //                   alt={project.name}
    //                   width={500}
    //                   height={500}
    //                   className="border-border cursor-pointer rounded-sm border object-cover transition-all duration-300 hover:scale-105"
    //                 />
    //               </Link>
    //             ) : (
    //               <Image
    //                 src={project.image}
    //                 alt={project.name}
    //                 width={500}
    //                 height={500}
    //                 className="border-border rounded-md border object-cover transition-all duration-300 hover:scale-105"
    //               />
    //             )}
    //           </div>
    //         </div>
    //         <CardHeader className="flex-1 gap-1">
    //           <CardTitle className="text-lg font-semibold">
    //             <p>{project.name}</p>
    //           </CardTitle>
    //           <CardDescription>
    //             <ul className="text-sm">
    //               {project.description.map((description) => (
    //                 <li key={description}>{description}</li>
    //               ))}
    //             </ul>
    //           </CardDescription>
    //         </CardHeader>
    //         <CardFooter className="flex flex-col items-start gap-6">
    //           <ul className="flex gap-2 text-sm">
    //             {project.technologies.map((technology) => (
    //               <li
    //                 className="text-secondary-foreground/80 bg-accent dark:bg-muted rounded-md px-1 py-0.5 md:px-1.5 md:py-1"
    //                 key={technology}
    //               >
    //                 {technology}
    //               </li>
    //             ))}
    //           </ul>

    //           <div className="flex gap-4">
    //             {project.link.live && (
    //               <Button className="text-background/90 h-8" asChild>
    //                 <Link target="_blank" href={project.link.live}>
    //                   <Globe />
    //                   <span>Live</span>
    //                 </Link>
    //               </Button>
    //             )}
    //             <Button className="text-background/90 h-8" asChild>
    //               <Link target="_blank" href={project.link.github}>
    //                 <Github />
    //                 <span>Source</span>
    //               </Link>
    //             </Button>
    //           </div>
    //         </CardFooter>
    //       </Card>
    //     ))}
    //   </div>
    // </motion.div>
  );
};
export default Projects;
