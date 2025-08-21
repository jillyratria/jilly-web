import type { Menu, Social } from "@/lib/types";

export const MENUITEMS: Menu[] = [
  { id: "about", label: "ABOUT", active: true, href: "#about" },
  { id: "project", label: "PROJECTS", href: "#project" },
  { id: "skills", label: "skills", href: "#skills" },
  { id: "experience", label: "EXPERIENCES", href: "#experience" },
  { id: "services", label: "SERVICES", href: "#services" },
  { id: "contact", label: "CONTACT", href: "#contact" },
];

export const SOCIALS: Social[] = [
  {
    label: "GH",
    desc: "Github",
    href: "https://github.com/jillyratria",
  },
  {
    label: "TW",
    desc: "Twitter/X",
    href: "https://x.com/jillyratria",
  },
  {
    label: "IG",
    href: "https://instagram.com/jillyratria",
    desc: "Instagram",
  },
  {
    label: "IN",
    desc: "LinkedIn",
    href: "https://id.linkedin.com/in/jillyratria",
  },
  {
    label: "JR",
    desc: "Blog",
    href: "/blog",
  },
];
