// Content mirrors the resume. Update both together.
export const intro = {
  name: "Akrawin Datchanee",
  about: "21yo, 4th-year Computer Engineering student at KMITL.",
  seeking: "Looking for a full-stack or software developer role",
};

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/akrawin-datchanee-8b6022384/",
  },
  {
    name: "GitHub",
    icon: "github",
    href: "https://github.com/Onlyakr",
  },
] as const;

export const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "SCG Thung Song",
    logo: "/scg-logo.svg",
    location: "Nakhon Si Thammarat, Thailand",
    period: "May 2025 - Present",
    highlights: [
      "Gathered requirements and designed user flows for a plant digitalization system",
      "Migrated a legacy Express system to NestJS and Next.js",
      "Built an AI assistant with an LLM router and code-driven workflows",
      "Implemented JWT authentication, role-based access control, and multi-tenant data isolation",
      "Built validated data imports and analytics dashboards",
    ],
  },
];

export const educations = [
  {
    image: "/kmitl-image.png",
    name: "Bachelor of Engineering in Computer Engineering",
    institution: "King Mongkut's Institute of Technology Ladkrabang",
    location: "Chumphon, Thailand",
    year: "2023 - Expected 2027",
    gpa: "3.83",
  },
  {
    image: "/kmutnb-image.png",
    name: "Pre-Engineering in Electrical Engineering",
    institution: "King Mongkut's University of Technology North Bangkok",
    location: "Bangkok, Thailand",
    year: "Graduated 2023",
    gpa: "3.10",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["Next.js", "React", "NestJS", "Express", "FastAPI"],
  },
  {
    category: "Libraries",
    items: [
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "LangChain",
    ],
  },
  {
    category: "Databases & ORM",
    items: ["PostgreSQL", "SQL Server", "Prisma", "Drizzle"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "Docker", "Postman", "Claude Code"],
  },
];

export const projects = [
  {
    name: "POS System",
    role: "Frontend",
    period: "Aug 2025 - Sep 2025",
    description:
      "A point-of-sale web app with barcode checkout, receipt printing, and a sales dashboard.",
    image: "/pos-image.png",
    technologies: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS"],
    link: {
      github: "https://github.com/Onlyakr/pos-app-frontend",
    },
  },
  {
    name: "TasteTrail",
    role: "Frontend",
    period: "Jul 2025 - Oct 2025",
    description:
      "A restaurant review platform with reviews, restaurant management, and maps.",
    image: "/tastetrail-image.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: {
      github: "https://github.com/KMITL-PCC/TasteTrail",
    },
  },
];
