import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { projectArchive } from "@/data/projectArchive";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Project Archive",
  description:
    "A collection of additional projects, experiments, and smaller builds that complement the featured case studies.",
  path: "/projects/archive",
});

export default function ProjectArchivePage() {
  return (
    <div className="theme-project-detail bg-background font-body-md text-body-md text-on-background">
      <Navbar variant="project-detail" />

      <main className="pb-section-padding pt-24">
        <section className="mx-auto mb-16 max-w-[1120px] px-6">
          <p className="mb-3 font-label-md uppercase tracking-[0.2em] text-primary">
            Archive
          </p>
          <h1 className="mb-4 font-display-lg text-display-lg-mobile text-on-background md:text-display-lg">
            Project Archive
          </h1>
          <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            A curated collection of additional builds, experiments, academic work,
            and smaller projects that complement the main case studies.
          </p>
        </section>

        <section className="mx-auto mb-24 max-w-[1120px] px-6">
          <div className="space-y-10">
            {projectArchive.map((project) => (
              <article
                key={project.slug}
                className="overflow-hidden rounded-2xl border border-outline-variant bg-surface-container"
              >
                <div className="grid gap-0 md:grid-cols-[320px_1fr]">
                  <div className="relative min-h-[240px] bg-surface-container-high">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <h2 className="font-headline-md text-headline-md text-on-background">
                        {project.title}
                      </h2>
                      <span className="rounded-full border border-primary/30 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
                        {project.year}
                      </span>
                    </div>

                    <p className="mb-6 max-w-2xl text-on-surface-variant">
                      {project.description}
                    </p>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-outline-variant bg-surface-container-high px-3 py-1 text-[12px] font-medium text-on-surface"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-lg border border-outline-variant px-4 py-2 text-sm text-on-surface transition-all hover:bg-surface-container-high"
                        >
                          <MaterialIcon name="code" className="text-[18px]" />
                          GitHub
                        </a>
                      )}

                      {project.linkedInUrl && (
                        <a
                          href={project.linkedInUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-lg border border-outline-variant px-4 py-2 text-sm text-on-surface transition-all hover:bg-surface-container-high"
                        >
                          <MaterialIcon name="work" className="text-[18px]" />
                          LinkedIn Post
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-lg bg-primary-container px-4 py-2 text-sm text-on-primary-container transition-all hover:opacity-90"
                        >
                          <MaterialIcon
                            name="open_in_new"
                            className="text-[18px]"
                          />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-12 max-w-[1120px] px-6">
          <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-8">
            <h2 className="mb-3 font-headline-sm text-headline-sm text-on-background">
              Explore featured case studies
            </h2>
            <p className="mb-6 max-w-2xl text-on-surface-variant">
              Looking for the most in-depth project breakdowns? Head back to the
              main projects page to view detailed case studies for selected work.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-container px-6 py-3 font-label-md text-label-md text-on-primary-container transition-all hover:opacity-90"
            >
              <MaterialIcon name="arrow_back" className="text-[20px]" />
              Back to Projects
            </Link>
          </div>
        </section>
      </main>

      <Footer variant="project-detail" />
    </div>
  );
}