export interface NavItem {
  label: string;
  href: string;
  active: boolean;
}

export const NAV_LINKS: NavItem[] = [
  { label: "Courses", href: "#", active: true },
  { label: "Teachers", href: "#", active: false },
  { label: "Categories", href: "#", active: false },
];
