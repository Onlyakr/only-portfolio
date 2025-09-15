import * as motion from "motion/react-client";

import Link from "next/link";

import { Linkedin, Github, Mail } from "lucide-react";
import { socialLinks } from "@/data";
import { BlurFade } from "./ui/blur-fade";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <BlurFade>
      <footer className="mt-16 h-32">
        <div className="container mx-auto flex h-full max-w-3xl items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Akrawin Portfolio
          </p>

          <ul className="text-muted-foreground flex items-center gap-4">
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
      </footer>
    </BlurFade>
    // <motion.footer
    //   initial={{ opacity: 0, y: 100 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.5 }}
    //   className="mt-16 h-32"
    // >
    //   <div className="container mx-auto flex h-full max-w-3xl items-center justify-between">
    //     <p className="text-muted-foreground text-sm">
    //       © {currentYear} Akrawin Portfolio
    //     </p>

    //     <ul className="text-muted-foreground flex items-center gap-4">
    //       {socialLinks.map((link) => (
    //         <li key={link.name}>
    //           <Link href={link.href} target="_blank">
    //             {link.icon === "Github" ? (
    //               <Github />
    //             ) : link.icon === "Linkedin" ? (
    //               <Linkedin />
    //             ) : link.icon === "Mail" ? (
    //               <Mail />
    //             ) : (
    //               link.icon
    //             )}
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </motion.footer>
  );
};
export default Footer;
