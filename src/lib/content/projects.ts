import {
  getAllProjectSlugs,
  getProjectBySlug,
  projects,
} from "@/data/projects";
import type { Project } from "@/types";

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getRelatedProjects(slugs: string[] = []): Project[] {
  return slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => Boolean(p));
}

export { getAllProjectSlugs, getProjectBySlug };
