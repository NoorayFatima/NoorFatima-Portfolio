export type ArchiveProject = {
  slug: string;
  title: string;
  description: string;
  year: string;
  stack: string[];
  coverImage: string;
  githubUrl?: string;
  linkedInUrl?: string;
  liveUrl?: string;
};

export const projectArchive: ArchiveProject[] = [
  {
    slug: "daily-journal",
    title: "Daily Journal",
    description:
      "A journal-style Laravel web application focused on creating and managing daily written content through a clean publishing workflow.",
    year: "2025",
    stack: ["Laravel", "PHP", "Blade", "MySQL", "Bootstrap"],
    coverImage: "/images/projects/archive/daily-journal.jpg",
    githubUrl: "https://github.com/NoorayFatima/Daily-Journal",
    linkedInUrl:
      "https://www.linkedin.com/posts/noorfatima35_laravel-webdevelopment-projectshowcase-activity-7347927369233383424-fwuK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAcIkIBinzZTL_0Twtpnpr8UN-Q4caoiXI",
  },
  {
    slug: "ai-headline-autocomplete",
    title: "High-Performance AI Autocompletion",
    description:
      "A search suggestion system for Indian news headlines built with a Python Flask backend and a professional frontend, optimized for near-instant prefix-based autocomplete with fuzzy fallback for typo tolerance.",
    year: "2026",
    stack: ["Python", "Flask", "NLP", "Machine Learning", "JavaScript"],
    coverImage: "/images/projects/archive/ai-headline-autocomplete.jpg",
    linkedInUrl:
      "https://www.linkedin.com/posts/noorfatima35_nlp-machinelearning-datascience-activity-7405531959030173696-Ivug?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAcIkIBinzZTL_0Twtpnpr8UN-Q4caoiXI",
  },
  {
    slug: "food-order-system",
    title: "Food Order System",
    description:
      "A dynamic food ordering web application built with PHP and MySQL, allowing users to browse food items, place orders, and enabling admins to manage the ordering workflow.",
    year: "2025",
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    coverImage: "/images/projects/archive/food-order-system.jpg",
    githubUrl: "https://github.com/NoorayFatima/Food-Order-System",
    linkedInUrl:
      "https://www.linkedin.com/posts/noorfatima35_webdevelopment-php-mysql-activity-7334454839306813440-q2U9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAcIkIBinzZTL_0Twtpnpr8UN-Q4caoiXI",
  },
  {
    slug: "delizioso",
    title: "Delizioso",
    description:
      "A restaurant-themed frontend web project focused on polished visual presentation, responsive layout, and a clean user-facing browsing experience.",
    year: "2025",
    stack: ["HTML", "CSS", "JavaScript"],
    coverImage: "/images/projects/archive/delizioso.jpg",
    githubUrl: "https://github.com/NoorayFatima/Delizioso",
    linkedInUrl:
      "https://www.linkedin.com/posts/noorfatima35_webdevelopment-frontenddeveloper-html-activity-7322469616776065024-PKz6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAcIkIBinzZTL_0Twtpnpr8UN-Q4caoiXI",
    liveUrl: "https://deliziosorestaurant.netlify.app/",
  },
  {
    slug: "currency-converter",
    title: "Currency Converter",
    description:
      "A React-based currency conversion project built to provide a simple and interactive interface for converting values across currencies.",
    year: "2025",
    stack: ["React", "JavaScript", "CSS", "API Integration"],
    coverImage: "/images/projects/archive/currency-converter.jpg",
    githubUrl: "https://github.com/NoorayFatima/Currency-Converter",
    linkedInUrl:
      "https://www.linkedin.com/posts/noorfatima35_reactjs-webdevelopment-frontenddevelopment-activity-7354359781635039232-gKMJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAcIkIBinzZTL_0Twtpnpr8UN-Q4caoiXI",
  },
  {
    slug: "grade-tracker",
    title: "Grade Tracker",
    description:
      "A browser-based grade tracking application that helps users organize academic performance through a simple, practical interface.",
    year: "2025",
    stack: ["JavaScript", "HTML", "CSS"],
    coverImage: "/images/projects/archive/grade-tracker.jpg",
    githubUrl: "https://github.com/NoorayFatima/Grade-Tracker",
    linkedInUrl:
      "https://www.linkedin.com/posts/noorfatima35_javascript-vanillajs-webdev-activity-7451168637928751105-yfe7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAcIkIBinzZTL_0Twtpnpr8UN-Q4caoiXI",
    liveUrl: "https://noorayfatima.github.io/Grade-Tracker/",
  },
  {
    slug: "crypto-watch",
    title: "Crypto Watch",
    description:
      "A cryptocurrency tracking project built in vanilla JavaScript for monitoring market data through a lightweight and interactive interface.",
    year: "2025",
    stack: ["JavaScript", "HTML", "CSS", "API Integration"],
    coverImage: "/images/projects/archive/crypto-watch.jpg",
    githubUrl: "https://github.com/NoorayFatima/Crypto-watch",
    linkedInUrl:
      "https://www.linkedin.com/posts/noorfatima35_javascript-vanillajs-webdev-activity-7451168637928751105-yfe7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAcIkIBinzZTL_0Twtpnpr8UN-Q4caoiXI",
  },
  {
    slug: "cinevault",
    title: "CineVault",
    description:
      "A movie-focused JavaScript project designed around browsing and exploring entertainment content through a clean frontend experience.",
    year: "2025",
    stack: ["JavaScript", "HTML", "CSS", "API Integration"],
    coverImage: "/images/projects/archive/cinevault.jpg",
    githubUrl: "https://github.com/NoorayFatima/CineVault",
    linkedInUrl:
      "https://www.linkedin.com/posts/noorfatima35_javascript-vanillajs-webdev-activity-7451168637928751105-yfe7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAcIkIBinzZTL_0Twtpnpr8UN-Q4caoiXI",
  },
  {
    slug: "previous-portfolio",
    title: "Previous Portfolio Website",
    description:
      "My earlier portfolio website, built to present my projects and growing frontend development skills before the current portfolio redesign.",
    year: "2024",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
    coverImage: "/images/projects/archive/previous-portfolio.jpg",
    linkedInUrl:
      "https://www.linkedin.com/posts/noorfatima35_webdevelopment-portfolio-codingjourney-ugcPost-7302790639979487233-vsTm/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAcIkIBinzZTL_0Twtpnpr8UN-Q4caoiXI",
    liveUrl: "https://noorfatima.infinityfreeapp.com/",
  },
];