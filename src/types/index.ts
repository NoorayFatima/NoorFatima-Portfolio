export type ProjectStatus = "live" | "github" | "case-study";

export type ProjectCategory =
  | "frontend"
  | "fullstack"
  | "ai"
  | "academic"
  | "freelance-style";

export type Project = {
  slug: string;
  videoUrl?: string;
  externalUrl?: string;
  architectureImage?: string;
  title: string;
  tagline: string;
  summary: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  year: string;
  role: string;
  team: string;
  stack: string[];
  coverImage: string;
  gallery: { src: string; alt: string; caption: string }[];
  githubUrl?: string;
  liveUrl?: string;
  overview: string[];
  problem: string;
  solution: string;
  features: { icon: string; title: string; description: string }[];
  architectureNotes: { title: string; description: string }[];
  challenges: { title: string; problem: string; solution: string }[];
  outcomes: string[];
  personalGrowth: string;
  deploymentNote?: string;
  relatedProjectSlugs?: string[];
  seoTitle?: string;
  seoDescription?: string;
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  description: string;
  icon: string;
  credentialUrl?: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  platform: string;
  url: string;
  label: string;
};

export type ExperienceItem = {
  id: string;
  title: string;
  organization: string;
  subtitle: string;
  period: string;
  bullets: string[];
  stack: string[];
  active?: boolean;
};

export type EducationItem = {
  period: string;
  degree: string;
  school: string;
  details: { icon: string; text: string }[];
};
