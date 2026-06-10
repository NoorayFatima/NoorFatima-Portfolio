import type { NavItem } from "@/types";

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export const standardNavigation: NavItem[] = mainNavigation.filter(
  (item) => item.href !== "/",
);
