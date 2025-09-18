import { ModeToggle } from "./mode-toggle";

import NavLink from "./nav-link";
import * as motion from "motion/react-client";
import { BlurFade } from "./ui/blur-fade";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  return (
    <BlurFade>
      <header className="bg-background/70 text-muted-foreground sticky top-0 z-50 h-24 backdrop-blur-sm">
        <nav className="container mx-auto flex h-full max-w-3xl items-center justify-between">
          <ul className="flex items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink href={link.href}>{link.name}</NavLink>
              </li>
            ))}
          </ul>

          <ModeToggle />
        </nav>
      </header>
    </BlurFade>
    // <motion.header
    //   className="bg-background/70 text-muted-foreground sticky top-0 z-50 h-24 backdrop-blur-sm"
    //   initial={{ opacity: 0, y: -100 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.5 }}
    // >
    //   <nav className="container mx-auto flex h-full max-w-3xl items-center justify-between">
    //     <ul className="flex items-center gap-4">
    //       {navLinks.map((link) => (
    //         <li key={link.name}>
    //           <NavLink href={link.href}>{link.name}</NavLink>
    //         </li>
    //       ))}
    //     </ul>

    //     <ModeToggle />
    //   </nav>
    // </motion.header>
  );
};
export default Header;
