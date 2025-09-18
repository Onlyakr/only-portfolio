"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      className={cn(
        "hover:text-secondary-foreground transition-all duration-300",
        isActive && "text-secondary-foreground",
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
export default NavLink;
