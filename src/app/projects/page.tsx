import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ProjectFilterBar } from "@/components/project/ProjectFilterBar";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { getAllProjects } from "@/lib/content/projects";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Projects Archive",
  description:
    "A curated archive of digital products, technical experiments, and engineering deep-dives.",
  path: "/projects",
});

type ProjectsPageProps = {
  searchParams?: Promise<{
    filter?: string;
  }>;
};

function filterProjects(projects: ReturnType<typeof getAllProjects>, filter: string) {
  switch (filter) {
    case "featured":
      return projects.filter((project) => project.featured);

    case "frontend":
      return projects.filter((project) => project.category === "frontend");

    case "full-stack":
      return projects.filter((project) => project.category === "fullstack");

    case "ai-ml":
      return projects.filter((project) => project.category === "ai");

    case "public":
      return projects.filter(
        (project) =>
          Boolean(project.liveUrl) || Boolean(project.githubUrl) || project.status === "live"
      );

    case "live-demo":
      return projects.filter((project) => Boolean(project.liveUrl));

    case "code":
      return projects.filter(
        (project) => Boolean(project.githubUrl) || project.status === "github"
      );

    case "github":
      return projects.filter((project) => Boolean(project.githubUrl));

    case "all":
    default:
      return projects;
  }
}

function getProjectBadge(project: ReturnType<typeof getAllProjects>[number]) {
  if (project.status === "live" && project.liveUrl) {
    return "Live Demo";
  }

  if (project.githubUrl) {
    return "GitHub";
  }

  if (project.status === "case-study") {
    return "Case Study";
  }

  return "Project";
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const resolvedSearchParams = await searchParams;
  const activeFilter = resolvedSearchParams?.filter ?? "all";

  const allProjects = getAllProjects();
  const filteredProjects = filterProjects(allProjects, activeFilter);

  return (
    <div className="bg-background text-on-background selection:bg-primary selection:text-on-primary">
      <Navbar variant="standard" />

      <main className="pb-section-desktop pt-24">
        <header className="mx-auto mb-16 max-w-container-max px-gutter">
          <div className="max-w-reading-max">
            <h1 className="mb-4 font-headline-h1 text-headline-h1 text-on-surface">
              Selected Works
            </h1>
            <p className="font-body-lg text-body-lg text-text-muted">
              A curated archive of digital products, technical experiments, and
              engineering deep-dives. From high-performance frontend interfaces
              to scalable AI-driven backends.
            </p>
          </div>
        </header>

        <ProjectFilterBar activeFilter={activeFilter} />

        <section className="mx-auto max-w-container-max px-gutter">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            {filteredProjects.map((project, index) => {
              const badge = getProjectBadge(project);
              const isPrimary = index === 0 && activeFilter === "all";

              if (isPrimary) {
                return (
                  <article
                    key={project.slug}
                    className="project-card group overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-all duration-300 hover:border-border-strong md:col-span-12"
                  >
                    <div className="flex flex-col lg:flex-row">
                      <div className="relative aspect-video overflow-hidden lg:w-7/12">
                        <Image
                          alt={project.title}
                          className="project-image h-full w-full object-cover transition-transform duration-500 ease-out"
                          height={500}
                          src={project.coverImage}
                          width={800}
                          priority
                        />
                        <div className="absolute left-4 top-4 flex gap-2">
                          {project.featured && (
                            <span className="rounded-full bg-primary px-3 py-1 font-label-caps text-label-caps text-on-primary">
                              Featured
                            </span>
                          )}
                          <span className="rounded-full border border-border-strong bg-surface-container-highest px-3 py-1 font-label-caps text-label-caps text-text-secondary">
                            {badge}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between p-card-padding lg:w-5/12">
                        <div>
                          <div className="mb-4 flex items-center gap-3">
                            <span className="font-label-caps text-label-caps text-primary">
                              {project.year}
                            </span>
                            <div className="h-1 w-1 rounded-full bg-outline-variant" />
                            <div className="font-label-caps text-label-caps text-text-muted">
                              {project.category === "fullstack"
                                ? "Full-Stack"
                                : project.category === "frontend"
                                  ? "Frontend"
                                  : "AI/ML"}
                            </div>
                          </div>

                          <h2 className="mb-3 font-headline-h2 text-headline-h2 text-on-surface transition-colors group-hover:text-primary">
                            {project.title}
                          </h2>

                          <p className="mb-6 font-body-md text-body-md text-text-secondary">
                            {project.summary}
                          </p>

                          <div className="mb-8 flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                              <span
                                key={tech}
                                className="rounded bg-surface-container-high px-3 py-1 font-label-caps text-label-caps text-text-muted"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <Link
                          href={`/projects/${project.slug}`}
                          className="flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3"
                        >
                          View Case Study <MaterialIcon name="arrow_forward" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              }

              return (
                <article
                  key={project.slug}
                  className="project-card group flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-all duration-300 hover:border-border-strong md:col-span-6"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      alt={project.title}
                      className="project-image h-full w-full object-cover transition-transform duration-500 ease-out"
                      height={400}
                      src={project.coverImage}
                      width={600}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute left-4 top-4 flex gap-2">
                      {project.featured && (
                        <span className="rounded-full bg-primary px-3 py-1 font-label-caps text-label-caps text-on-primary">
                          Featured
                        </span>
                      )}
                      <span className="rounded-full border border-border-strong bg-surface-container-highest px-3 py-1 font-label-caps text-label-caps text-text-secondary">
                        {badge}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-grow flex-col justify-between p-card-padding">
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <span className="font-label-caps text-label-caps text-primary">
                          {project.year}
                        </span>
                      </div>

                      <h3 className="mb-2 font-headline-h3 text-headline-h3 text-on-surface transition-colors group-hover:text-primary">
                        {project.title}
                      </h3>

                      <p className="mb-6 font-body-sm text-body-sm text-text-secondary">
                        {project.summary}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <div className="flex gap-2">
                        {project.stack.slice(0, 2).map((tech) => (
                          <span
                            key={tech}
                            className="rounded bg-surface-container-high px-2 py-0.5 text-[10px] uppercase tracking-wider text-text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/projects/${project.slug}`}
                        className="font-body-sm text-body-sm font-semibold text-primary hover:underline"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}

            <Link
              href="/projects/archive"
              className="project-card group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-all duration-300 hover:border-border-strong md:col-span-12"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="flex aspect-video items-center justify-center border-b border-border bg-surface-container-high lg:w-7/12 lg:border-b-0 lg:border-r">
                  <div className="flex flex-col items-center text-center">
                    <MaterialIcon
                      name="folder_open"
                      className="mb-4 text-[56px] text-primary"
                    />
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-label-caps text-label-caps text-primary">
                      Archive
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-card-padding lg:w-5/12">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="font-label-caps text-label-caps text-primary">
                        More Work
                      </span>
                      <div className="h-1 w-1 rounded-full bg-outline-variant" />
                      <div className="font-label-caps text-label-caps text-text-muted">
                        Additional Projects
                      </div>
                    </div>

                    <h2 className="mb-3 font-headline-h2 text-headline-h2 text-on-surface transition-colors group-hover:text-primary">
                      Project Archive
                    </h2>

                    <p className="mb-6 font-body-md text-body-md text-text-secondary">
                      A collection of smaller builds, academic projects,
                      experiments, and additional work that complements the main
                      case studies.
                    </p>

                    <div className="mb-8 flex flex-wrap gap-2">
                      {["Archive", "Experiments", "LinkedIn", "GitHub"].map(
                        (tag) => (
                          <span
                            key={tag}
                            className="rounded bg-surface-container-high px-3 py-1 font-label-caps text-label-caps text-text-muted"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-semibold text-primary transition-all group-hover:gap-3">
                    View Archive <MaterialIcon name="arrow_forward" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>

      <Footer variant="standard" />
    </div>
  );
}