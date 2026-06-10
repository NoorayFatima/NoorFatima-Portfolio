import type { EducationItem, ExperienceItem } from "@/types";

export const experienceItems: ExperienceItem[] = [
  {
    id: "senior-swe",
    title: "Senior Software Engineer",
    organization: "Technovate Systems",
    subtitle: "Enterprise SaaS Infrastructure Team",
    period: "2021 — PRESENT",
    active: true,
    bullets: [
      "Architected and led the migration of a legacy monolithic architecture to a distributed microservices ecosystem, resulting in a 40% reduction in system latency.",
      "Mentored a team of 6 junior developers, implementing rigorous CI/CD pipelines and automated testing coverage that reduced bug reports by 25% within the first year.",
      "Optimized database indexing and query patterns for a high-traffic SQL environment, handling over 10,000 requests per second with 99.9% uptime.",
    ],
    stack: ["TypeScript", "Node.js", "AWS Lambda", "PostgreSQL"],
  },
  {
    id: "frontend-dev",
    title: "Frontend Developer",
    organization: "Vertex Digital",
    subtitle: "Client-side Product Development",
    period: "2019 — 2021",
    bullets: [
      "Developed and maintained a comprehensive design system using React and Tailwind CSS, standardizing the UI across 4 major product lines.",
      "Collaborated with UX researchers to implement accessibility features (WCAG 2.1), increasing user engagement from visually impaired demographics by 15%.",
      "Pioneered the use of server-side rendering (SSR) for SEO-sensitive landing pages, resulting in a 35% improvement in Lighthouse performance scores.",
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "Redux"],
  },
  {
    id: "intern",
    title: "Software Engineering Intern",
    organization: "DataCore Systems",
    subtitle: "R&D Department",
    period: "SUMMER 2018",
    bullets: [
      "Automated internal reporting tools using Python, saving the analytics team 10 hours of manual data entry per week.",
      "Assisted in the development of a real-time data visualization dashboard using D3.js for executive-level performance reviews.",
    ],
    stack: ["Python", "Docker", "D3.js"],
  },
];

export const educationItems: EducationItem[] = [
  {
    period: "2015 — 2019",
    degree: "B.S. in Computer Science",
    school: "Stanford University",
    details: [
      { icon: "school", text: "Focus on Distributed Systems" },
      { icon: "military_tech", text: "Magna Cum Laude (GPA 3.92)" },
    ],
  },
];

export const coreProficiencies = [
  { icon: "database", label: "Backend", value: "PostgreSQL, Redis" },
  { icon: "cloud", label: "Cloud", value: "AWS, Terraform" },
  { icon: "code", label: "Languages", value: "Go, Rust, TS" },
  { icon: "terminal", label: "DevOps", value: "K8s, GitHub Actions" },
];
