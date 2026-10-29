import Link from "next/link";

import { SocialIcon } from "./social-icon";
import { socialLinks } from "@/lib/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative">
      <span
        aria-hidden
        className="bg-border absolute top-0 right-[-100vw] left-[-100vw] h-px"
      />
      <div className="flex h-20 items-center justify-between px-6 md:px-10">
        <p className="text-muted-foreground font-mono text-xs">
          © {currentYear} akrawin.com
        </p>

        <ul className="text-muted-foreground flex items-center gap-4">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                target="_blank"
                aria-label={link.name}
                className="hover:text-foreground transition-colors"
              >
                <SocialIcon icon={link.icon} className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
