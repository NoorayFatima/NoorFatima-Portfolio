import type { EducationItem, ExperienceItem } from "@/types";

export const experienceItems: ExperienceItem[] = [
  {
    id: "brookstone-admin",
    title: "Administrative Associate",
    organization: "BrookStone & Partners",
    subtitle: "Capital Raising Advisory · Part-time · Remote",
    period: "Dec 2025 — May 2026",
    active: false,
    bullets: [
      "Supported a capital raising advisory firm with London, Toronto, and New York offices connecting startups with institutional investors across the UK, US, and MENA markets.",
      "Handled investor documentation and form preparation, CRM management, research and prospect identification, and social media coordination.",
      "Collaborated across teams to support client fundraising efforts and maintained operational workflows and process documentation.",
    ],
    stack: ["CRM Management", "Process Documentation", "Research", "Social Media"],
  },
  {
    id: "optibyte-web-dev",
    title: "Web Developer",
    organization: "Optibyte Solutions",
    subtitle: "Freelance · Remote · Multan",
    period: "Nov 2024 — Jun 2025",
    active: false,
    bullets: [
      "Developed and maintained client websites using Laravel, PHP, MySQL, HTML, CSS, Bootstrap, and JavaScript.",
      "Built core features including CRUD modules, user authentication, role management, and file and image uploads.",
      "Improved UI responsiveness and overall code quality through debugging, refactoring, and optimization.",
      "Collaborated with designers and developers to turn requirements into clean, functional web interfaces using Git and GitHub for version control.",
    ],
    stack: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap", "REST APIs", "Git"],
  },
];

export const educationItems: EducationItem[] = [
  {
    period: "2022 — 2026",
    degree: "Bachelor of Science in Computer Science",
    school: "The Women University Multan",
    details: [
      { icon: "school", text: "Computer Science" },
      { icon: "military_tech", text: "CGPA: 3.97 / 4.0" },
      { icon: "location_on", text: "Multan, Pakistan" },
    ],
  },
];

export const coreProficiencies = [
  { icon: "code", label: "Frontend", value: "React, HTML, CSS, Bootstrap,Tailwind, JS" },
  { icon: "storage", label: "Backend", value: "Node.js, Express, PHP, Laravel" },
  { icon: "database", label: "Databases", value: "MySQL, MongoDB" },
  { icon: "terminal", label: "Languages", value: "Python, TypeScript, JavaScript" },
];