import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { educations, intro, socialLinks } from "@/data";
import { FileDown, Github, Linkedin, Mail, ArrowDownRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
        <div className="flex max-w-[400px] flex-1 flex-col gap-4 md:max-w-[420px]">
          <h1 className="text-4xl leading-tight font-bold">
            I&apos;m {intro.name}
          </h1>
          <p className="text-secondary-foreground/90 text-base">
            {intro.firstDescription}
          </p>
          <p className="text-secondary-foreground/90 text-base">
            Looking for a{" "}
            <span className="text-primary font-bold">Frontend</span> internship
            to learn, grow, and contribute.
          </p>
          <p className="text-primary relative flex items-center text-base font-semibold">
            <ArrowDownRight className="mx-2 animate-bounce" />
            {intro.thirdDescription}
          </p>

          <ul className="text-muted-foreground mt-4 flex items-center gap-6">
            <Button variant="outline" asChild className="h-10 w-[150px]">
              <Link target="_blank" href="/resume.pdf">
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
            src="/self-image.PNG"
            alt="profile"
            fill
            className="z-50 rounded-xl rounded-bl-4xl object-cover"
          />
        </div>
      </section>

      <section className="flex items-center justify-center">
        <Tabs
          defaultValue="education"
          className="flex w-full items-center justify-center"
        >
          <TabsList className="h-11 w-full p-1">
            <TabsTrigger value="education" className="cursor-pointer">
              Education
            </TabsTrigger>
            <TabsTrigger value="work" className="cursor-pointer">
              Work
            </TabsTrigger>
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
                      className="border-border rounded-full border object-cover"
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
                    {/* <CardContent>
                      <ul className="text-muted-foreground list-disc pl-4 text-sm">
                        {education.descriptions.map((description) => (
                          <li key={description}>{description}</li>
                        ))}
                      </ul>
                    </CardContent> */}
                  </Card>
                </Card>
              ))}
            </Card>
          </TabsContent>
          <TabsContent value="work" className="w-full">
            <Card className="items-center justify-center gap-4"></Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};
export default Home;
