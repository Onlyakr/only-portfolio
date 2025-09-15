import * as motion from "motion/react-client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { educations, intro, skills, socialLinks } from "@/data";
import { FileDown, Github, Linkedin, Mail, ArrowDownRight } from "lucide-react";
import { TypingAnimation } from "@/components/ui/typing-animation";

import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const Home = () => {
  return (
    <BlurFade className="flex flex-col gap-16">
      <section className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
        <div className="flex max-w-[500px] flex-1 flex-col gap-4">
          <TypingAnimation
            children={`I'm ${intro.name} 👋` as string}
            startOnView={true}
            delay={500}
            className="text-4xl leading-tight font-bold lg:h-[45px]"
          />
          <p className="text-secondary-foreground/90 text-base">
            {intro.firstDescription}
          </p>
          <p className="text-secondary-foreground/90 text-base">
            Looking for a{" "}
            <span className="text-primary font-bold">Frontend</span> internship
            to learn, grow, and contribute.
          </p>
          <p className="text-primary relative flex items-center text-base font-semibold">
            <ArrowDownRight className="animate-bounce" />
            {intro.thirdDescription}
          </p>

          <ul className="text-muted-foreground mt-4 flex items-center gap-6">
            {/* <Button
              variant="outline"
              asChild
              className="h-10 w-[150px] transition-all duration-300 hover:scale-105"
            >
              <Link target="_blank" href="/resume.pdf">
                <FileDown />
                <span className="font-semibold">Resume</span>
              </Link>
            </Button> */}
            <InteractiveHoverButton className="h-10 text-sm">
              <Link target="_blank" href="/resume.pdf">
                <span className="font-semibold">Resume</span>
              </Link>
            </InteractiveHoverButton>
            {socialLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} target="_blank">
                  {link.icon === "Github" ? (
                    <Github />
                  ) : link.icon === "Linkedin" ? (
                    <Linkedin />
                  ) : link.icon === "Mail" ? (
                    <Mail />
                  ) : (
                    link.icon
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-ful relative h-48 w-48 -rotate-90 drop-shadow-lg md:h-64 md:w-64">
          <Image
            src="/self-image.PNG"
            alt="profile"
            fill
            className="z-50 rounded-xl rounded-bl-4xl object-cover"
          />
        </div>
      </section>

      <section className="flex items-center justify-center">
        <Tabs
          defaultValue="skills"
          className="flex w-full items-center justify-center"
        >
          <TabsList className="h-11 w-full p-1">
            <TabsTrigger value="skills" className="cursor-pointer">
              Skills
            </TabsTrigger>
            <TabsTrigger value="education" className="cursor-pointer">
              Education
            </TabsTrigger>
          </TabsList>
          <TabsContent value="skills" className="w-full">
            <Card className="grid grid-cols-2 place-items-center gap-6 px-12 md:grid-cols-4 md:px-6">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.65 }}
                  className={`animate-fade-in flex h-full flex-col items-center justify-end gap-3 ${skill.name === "Tailwind CSS" ? "gap-4" : ""}`}
                >
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={50}
                    height={50}
                    className={`rounded-sm ${skill.name === "Next.js" || skill.name === "Shadcn UI" ? "dark:invert" : ""}`}
                  />
                  <p className="font-medium">{skill.name}</p>
                </motion.div>
              ))}
            </Card>
          </TabsContent>

          <TabsContent value="education" className="w-full">
            <Card className="items-start gap-4 px-10 md:px-20">
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.65 }}
                className="mb-4 ml-4 divide-y divide-dashed border-l"
              >
                {educations.map((education) => (
                  <li className="relative ml-10 py-4" key={education.name}>
                    <div className="absolute top-2 -left-17 flex items-center justify-center rounded-full bg-white">
                      <Avatar className="m-auto size-14 border">
                        <AvatarImage
                          src={education.image}
                          alt={education.name}
                          className="object-contain"
                        />
                        <AvatarFallback>{education.name}</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex flex-1 flex-col justify-start gap-1">
                      {education.year && (
                        <time className="text-muted-foreground text-xs">
                          {education.year}
                        </time>
                      )}
                      {education.institution && (
                        <span className="leading-normal font-medium">
                          {education.institution.map((institution) => (
                            <p key={institution}>{institution}</p>
                          ))}
                        </span>
                      )}
                      <h2 className="prose dark:prose-invert text-muted-foreground text-sm leading-normal">
                        {education.name} ({education.descriptions[0]})
                      </h2>
                    </div>
                  </li>
                  // <motion.div
                  //   key={education.name}
                  //   initial={{ opacity: 0 }}
                  //   animate={{ opacity: 1 }}
                  //   transition={{ duration: 0.5 }}
                  //   className="text-card-foreground bg-card flex flex-col items-center gap-2 rounded-xl border border-none px-4 py-2 shadow-none sm:ml-10 sm:flex-row"
                  // >
                  //   <div className="relative h-20 w-20">
                  //     <Image
                  //       src={education.image}
                  //       alt={education.name}
                  //       fill
                  //       className="border-border rounded-full border object-cover"
                  //     />
                  //   </div>
                  //   <Card className="w-full flex-1 gap-2 border-none shadow-none">
                  //     <CardHeader>
                  //       <CardDescription>
                  //         <p>{education.year}</p>
                  //       </CardDescription>
                  //       <CardTitle className="leading-normal font-medium">
                  //         {education.institution.map((institution) => (
                  //           <p key={institution}>{institution}</p>
                  //         ))}
                  //       </CardTitle>
                  //       <CardDescription>
                  //         <p>
                  //           {education.name} ({education.descriptions[0]})
                  //         </p>
                  //       </CardDescription>
                  //     </CardHeader>
                  //   </Card>
                  // </motion.div>
                ))}
              </motion.ul>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </BlurFade>
    // <motion.div
    //   initial={{ opacity: 0, y: 100 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.5 }}
    //   className="flex flex-col gap-16"
    // >
    //   <section className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
    //     <div className="flex max-w-[500px] flex-1 flex-col gap-4">
    //       <TypingAnimation
    //         children={`I'm ${intro.name} 👋` as string}
    //         startOnView={true}
    //         delay={500}
    //         className="text-4xl leading-tight font-bold lg:h-[45px]"
    //       />
    //       <p className="text-secondary-foreground/90 text-base">
    //         {intro.firstDescription}
    //       </p>
    //       <p className="text-secondary-foreground/90 text-base">
    //         Looking for a{" "}
    //         <span className="text-primary font-bold">Frontend</span> internship
    //         to learn, grow, and contribute.
    //       </p>
    //       <p className="text-primary relative flex items-center text-base font-semibold">
    //         <ArrowDownRight className="animate-bounce" />
    //         {intro.thirdDescription}
    //       </p>

    //       <ul className="text-muted-foreground mt-4 flex items-center gap-6">
    //         <Button
    //           variant="outline"
    //           asChild
    //           className="h-10 w-[150px] transition-all duration-300 hover:scale-105"
    //         >
    //           <Link target="_blank" href="/resume.pdf">
    //             <FileDown />
    //             <span className="font-semibold">Resume</span>
    //           </Link>
    //         </Button>
    //         {socialLinks.map((link) => (
    //           <li key={link.name}>
    //             <Link href={link.href} target="_blank">
    //               {link.icon === "Github" ? (
    //                 <Github />
    //               ) : link.icon === "Linkedin" ? (
    //                 <Linkedin />
    //               ) : link.icon === "Mail" ? (
    //                 <Mail />
    //               ) : (
    //                 link.icon
    //               )}
    //             </Link>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>

    //     <div className="rounded-ful relative h-48 w-48 -rotate-90 drop-shadow-lg md:h-64 md:w-64">
    //       <Image
    //         src="/self-image.PNG"
    //         alt="profile"
    //         fill
    //         className="z-50 rounded-xl rounded-bl-4xl object-cover"
    //       />
    //     </div>
    //   </section>

    //   <section className="flex items-center justify-center">
    //     <Tabs
    //       defaultValue="skills"
    //       className="flex w-full items-center justify-center"
    //     >
    //       <TabsList className="h-11 w-full p-1">
    //         <TabsTrigger value="skills" className="cursor-pointer">
    //           Skills
    //         </TabsTrigger>
    //         <TabsTrigger value="education" className="cursor-pointer">
    //           Education
    //         </TabsTrigger>
    //       </TabsList>
    //       <TabsContent value="skills" className="w-full">
    //         <Card className="grid grid-cols-2 place-items-center gap-6 px-12 md:grid-cols-4 md:px-6">
    //           {skills.map((skill) => (
    //             <motion.div
    //               initial={{ opacity: 0 }}
    //               animate={{ opacity: 1 }}
    //               transition={{ duration: 0.5 }}
    //               key={skill.name}
    //               className={`animate-fade-in flex h-full flex-col items-center justify-end gap-3 ${skill.name === "Tailwind CSS" ? "gap-4" : ""}`}
    //             >
    //               <Image
    //                 src={skill.src}
    //                 alt={skill.name}
    //                 width={50}
    //                 height={50}
    //                 className={`rounded-sm ${skill.name === "Next.js" || skill.name === "Shadcn UI" ? "dark:invert" : ""}`}
    //               />
    //               <p className="font-medium">{skill.name}</p>
    //             </motion.div>
    //           ))}
    //         </Card>
    //       </TabsContent>

    //       <TabsContent value="education" className="w-full">
    //         <Card className="gap-4 sm:gap-4">
    //           {educations.map((education) => (
    //             <motion.div
    //               initial={{ opacity: 0 }}
    //               animate={{ opacity: 1 }}
    //               transition={{ duration: 0.5 }}
    //               key={education.name}
    //               className="text-card-foreground bg-card flex flex-col items-center gap-2 rounded-xl border border-none px-4 py-2 shadow-none sm:ml-10 sm:flex-row"
    //             >
    //               <div className="relative h-20 w-20">
    //                 <Image
    //                   src={education.image}
    //                   alt={education.name}
    //                   fill
    //                   className="border-border rounded-full border object-cover"
    //                 />
    //               </div>
    //               <Card className="w-full flex-1 gap-2 border-none shadow-none">
    //                 <CardHeader>
    //                   <CardDescription>
    //                     <p>{education.year}</p>
    //                   </CardDescription>
    //                   <CardTitle className="leading-normal font-medium">
    //                     {education.institution.map((institution) => (
    //                       <p key={institution}>{institution}</p>
    //                     ))}
    //                   </CardTitle>
    //                   <CardDescription>
    //                     <p>
    //                       {education.name} ({education.descriptions[0]})
    //                     </p>
    //                   </CardDescription>
    //                 </CardHeader>
    //               </Card>
    //             </motion.div>
    //           ))}
    //         </Card>
    //       </TabsContent>
    //     </Tabs>
    //   </section>
    // </motion.div>
  );
};
export default Home;
