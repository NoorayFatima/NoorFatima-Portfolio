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

export default function ProjectsPage() {
  const projects = getAllProjects();
  const flagship = projects.find((p) => p.slug === "project-2") ?? projects[0];
  const gridProjects = projects.filter((p) => p.slug !== flagship.slug);

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

        <ProjectFilterBar />

        <section className="mx-auto max-w-container-max px-gutter">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <article className="project-card group overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-all duration-300 hover:border-border-strong md:col-span-12">
              <div className="flex flex-col lg:flex-row">
                <div className="relative aspect-video overflow-hidden lg:w-7/12">
                  <Image
                    alt={flagship.title}
                    className="project-image h-full w-full object-cover transition-transform duration-500 ease-out"
                    height={500}
                    src={flagship.coverImage}
                    width={800}
                  />
                  <div className="absolute left-4 top-4 flex gap-2">
                    <span className="rounded-full bg-primary px-3 py-1 font-label-caps text-label-caps text-on-primary">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-between p-card-padding lg:w-5/12">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="font-label-caps text-label-caps text-primary">
                        {flagship.year}
                      </span>
                      <div className="h-1 w-1 rounded-full bg-outline-variant" />
                      <div className="flex items-center gap-1 font-label-caps text-label-caps text-success">
                        <span className="h-2 w-2 rounded-full bg-success" />
                        Live Demo
                      </div>
                    </div>
                    <h2 className="mb-3 font-headline-h2 text-headline-h2 text-on-surface transition-colors group-hover:text-primary">
                      {flagship.title}
                    </h2>
                    <p className="mb-6 font-body-md text-body-md text-text-secondary">
                      {flagship.summary}
                    </p>
                    <div className="mb-8 flex flex-wrap gap-2">
                      {flagship.stack.map((tech) => (
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
                    href={`/projects/${flagship.slug}`}
                    className="flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3"
                  >
                    View Case Study <MaterialIcon name="arrow_forward" />
                  </Link>
                </div>
              </div>
            </article>

            {gridProjects.slice(0, 2).map((project, index) => (
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
                  />
                  <div className="absolute left-4 top-4">
                    <span
                      className={`rounded-full border px-3 py-1 font-label-caps text-label-caps ${
                        index === 1
                          ? "border-warning/40 bg-warning/20 text-warning"
                          : "border-border-strong bg-surface-container-highest text-text-secondary"
                      }`}
                    >
                      {index === 1 ? "Local Build" : "GitHub"}
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
                  <div className="flex items-center justify-between">
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
            ))}

            {[
              {
                icon: "dataset",
                year: "2022",
                title: "Schema Optimizer",
                description:
                  "A CLI tool that analyzes PostgreSQL schemas and suggests index improvements.",
                tag: "PYTHON",
              },
              {
                icon: "monitoring",
                year: "2022",
                title: "Metric Flow",
                description:
                  "Custom monitoring dashboard for Kubernetes clusters with predictive alerting.",
                tag: "GOLANG",
              },
              {
                icon: "view_in_ar",
                year: "2021",
                title: "Spatial Renderer",
                description:
                  "Experimental WebGL engine for rendering large-scale 3D terrain in the browser.",
                tag: "THREE.JS",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="project-card group overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-all duration-300 hover:border-border-strong md:col-span-4"
              >
                <div className="p-card-padding">
                  <div className="mb-4 flex items-start justify-between">
                    <MaterialIcon
                      name={item.icon}
                      className="text-[32px] text-primary"
                    />
                    <span className="font-label-caps text-label-caps text-primary">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="mb-2 font-headline-h3 text-headline-h3 text-on-surface transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mb-6 font-body-sm text-body-sm text-text-secondary">
                    {item.description}
                  </p>
                  <div className="mb-4 flex gap-2">
                    <span className="rounded border border-border px-2 py-0.5 text-[10px] font-bold text-text-muted">
                      {item.tag}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="font-body-sm text-body-sm font-semibold text-primary hover:underline"
                  >
                    View Source
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer variant="standard" />
    </div>
  );
}
