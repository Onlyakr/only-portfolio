import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { educations, skills, intro, socialLinks } from "@/data";
import { FileDown, Github, Linkedin, Mail } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
        <div className="flex max-w-[400px] flex-1 flex-col gap-4 md:max-w-[420px]">
          <h1 className="text-4xl leading-tight font-bold">I'm {intro.name}</h1>
          <p className="text-secondary-foreground/90 text-base">
            {intro.firstDescription}
          </p>
          <p className="text-secondary-foreground/90 text-lg">
            {intro.secondDescription}
          </p>

          <ul className="text-muted-foreground mt-4 flex items-center gap-6">
            <Button variant="outline" asChild className="h-10 w-[150px]">
              <Link href="/resume.pdf">
                <FileDown />
                <span className="font-semibold">Resume</span>
              </Link>
            </Button>
            {socialLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>
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
            src="/self-image.png"
            alt="profile"
            fill
            className="rounded-xl rounded-bl-4xl object-cover"
          />
        </div>
      </section>

      <section className="flex items-center justify-center">
        <Tabs
          defaultValue="education"
          className="flex w-full items-center justify-center"
        >
          <TabsList className="h-11 w-full p-1">
            <TabsTrigger value="education" className="border-none">
              Education
            </TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          <TabsContent value="education" className="w-full">
            <Card className="gap-4">
              {educations.map((education) => (
                <Card
                  key={education.name}
                  className="ml-10 flex-row items-center gap-2 border-none px-4 py-2 shadow-none"
                >
                  <div className="relative h-20 w-20">
                    <Image
                      src={education.image}
                      alt={education.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Card className="flex-1 gap-2 border-none shadow-none">
                    <CardHeader>
                      <CardDescription>{education.year}</CardDescription>
                      <CardTitle className="leading-tight">
                        {education.institution}
                      </CardTitle>
                      <CardDescription>{education.name}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-muted-foreground list-disc pl-4 text-sm">
                        {education.descriptions.map((description) => (
                          <li key={description}>{description}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Card>
              ))}
            </Card>
          </TabsContent>
          <TabsContent value="skills" className="w-full">
            <Card className="items-center justify-center gap-4">
              {skills.map((item) => (
                <ul key={item.name} className="flex items-center gap-2">
                  <li className="relative h-10 w-10">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </li>
                  <li>{item.name}</li>
                </ul>
              ))}
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};
export default Home;
