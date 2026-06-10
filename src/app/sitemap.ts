import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/lib/content/projects";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/projects",
    "/experience",
    "/certifications",
    "/contact",
  ];

  const projectRoutes = getAllProjectSlugs().map(
    (slug) => `/projects/${slug}`,
  );

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
