import { ChatToggle } from "./chat-widget";
import { ModeToggle } from "./mode-toggle";

import NavLink from "./nav-link";

const navLinks = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "projects",
    href: "/projects",
  },
  {
    name: "contact",
    href: "/contact",
  },
];

const Header = () => {
  return (
    <header className="bg-background/80 text-muted-foreground sticky top-0 z-50 h-16 backdrop-blur-md">
      {/* Full-bleed rule so the frame reads as a grid beyond the column. */}
      <span
        aria-hidden
        className="bg-border absolute right-[-100vw] bottom-0 left-[-100vw] h-px"
      />
      <nav className="flex h-full items-center justify-between px-6 md:px-10">
        <ul className="flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink href={link.href}>{link.name}</NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ChatToggle />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};
export default Header;
