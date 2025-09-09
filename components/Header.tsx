import { ModeToggle } from "./ModeToggle";
import NavLink from "./NavLink";

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
  );
};
export default Header;
