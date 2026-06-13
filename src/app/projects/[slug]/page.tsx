import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  getRelatedProjects,
} from "@/lib/content/projects";
import { createPageMetadata } from "@/lib/seo/metadata";
import type { Metadata } from "next";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createPageMetadata({
      title: "Project Not Found",
      description: "The requested project could not be found.",
      path: `/projects/${slug}`,
    });
  }

  return createPageMetadata({
    title: project.seoTitle ?? project.title,
    description: project.seoDescription ?? project.tagline,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project.relatedProjectSlugs);

  return (
    <div className="theme-project-detail bg-background font-body-md text-body-md text-on-background">
      <Navbar variant="project-detail" />
      <main className="pb-section-padding pt-24">
        <section className="mx-auto mb-16 max-w-[1120px] px-6">
          <h1 className="mb-4 font-display-lg text-display-lg-mobile text-on-background md:text-display-lg">
            {project.title}
          </h1>
          <p className="mb-8 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            {project.tagline}
          </p>

          <div className="mb-8 flex flex-wrap gap-x-8 gap-y-4 border-y border-outline-variant py-6 text-on-surface-variant">
            <div>
              <span className="font-bold text-primary">Year:</span> {project.year}
            </div>

            <div>
              <span className="font-bold text-primary">Status:</span>{" "}
              {project.status === "live"
                ? "Live"
                : project.status === "github"
                  ? "Source Available on GitHub"
                  : project.status}
            </div>

            <div>
              <span className="font-bold text-primary">Stack:</span>{" "}
              {project.stack.join(", ")}
            </div>
          </div>

          <div className="mb-12 flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-primary-container px-8 py-3 font-label-md text-label-md text-on-primary-container transition-all hover:bg-opacity-90"
              >
                <MaterialIcon name="open_in_new" className="text-[20px]" />
                View Live Demo
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-outline-variant px-8 py-3 font-label-md text-label-md text-on-surface transition-all hover:bg-surface-container"
              >
                <MaterialIcon name="code" className="text-[20px]" />
                Source Code
              </a>
            )}

            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-outline-variant px-8 py-3 font-label-md text-label-md text-on-surface transition-all hover:bg-surface-container"
              >
                <MaterialIcon name="open_in_new" className="text-[20px]" />
                View Project Post
              </a>
            )}
          </div>

          <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-low">
            {project.videoUrl ? (
              <video
                controls
                playsInline
                preload="metadata"
                poster={project.coverImage}
                className="h-full w-full object-cover"
              >
                <source src={project.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                alt="Project Cover"
                className="h-full w-full object-cover"
                height={630}
                src={project.coverImage}
                width={1120}
              />
            )}
          </div>
        </section>

        <section className="mx-auto mb-24 grid max-w-[1120px] gap-12 px-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="mb-6 font-headline-md text-headline-md text-on-background">
              Overview
            </h2>
            <div className="space-y-4 font-body-md text-body-md text-on-surface-variant">
              {project.overview.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="rounded-xl border border-outline-variant bg-surface-container p-stack-lg">
              <h3 className="mb-6 font-headline-sm text-headline-sm">
                Project Details
              </h3>

              <div className="space-y-6">
                <div>
                  <span className="mb-2 block font-label-sm text-label-sm uppercase text-primary">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-outline-variant bg-surface-container-high px-3 py-1 text-[12px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="mb-1 block font-label-sm text-label-sm uppercase text-primary">
                      Role
                    </span>
                    <span className="font-body-md text-on-background">
                      {project.role}
                    </span>
                  </div>

                  <div>
                    <span className="mb-1 block font-label-sm text-label-sm uppercase text-primary">
                      Year
                    </span>
                    <span className="font-body-md text-on-background">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 border-t border-outline-variant pt-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-on-surface transition-colors hover:text-primary"
                    >
                      <span className="font-label-md">GitHub Repository</span>
                      <MaterialIcon name="north_east" className="text-[18px]" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-on-surface transition-colors hover:text-primary"
                    >
                      <span className="font-label-md">Live Platform</span>
                      <MaterialIcon name="north_east" className="text-[18px]" />
                    </a>
                  )}

                  {project.externalUrl && (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-on-surface transition-colors hover:text-primary"
                    >
                      <span className="font-label-md">Project Post</span>
                      <MaterialIcon name="north_east" className="text-[18px]" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mb-24 grid max-w-[1120px] gap-gutter px-6 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-xl border border-outline-variant bg-surface-container-low p-stack-lg">
            <div className="absolute right-0 top-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
              <MaterialIcon name="warning" className="text-[120px]" />
            </div>
            <h3 className="mb-4 font-headline-sm text-headline-sm text-on-background">
              The Problem
            </h3>
            <p className="leading-relaxed text-on-surface-variant">
              {project.problem}
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-xl border border-outline-variant bg-surface-container-low p-stack-lg">
            <div className="absolute right-0 top-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
              <MaterialIcon name="bolt" className="text-[120px]" />
            </div>
            <h3 className="mb-4 font-headline-sm text-headline-sm text-on-background">
              The Solution
            </h3>
            <p className="leading-relaxed text-on-surface-variant">
              {project.solution}
            </p>
          </div>
        </section>

        {project.features.length > 0 && (
          <section className="mx-auto mb-24 max-w-[1120px] px-6">
            <h2 className="mb-12 font-headline-md text-headline-md text-on-background">
              Key Features
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature) => (
                <div
                  key={feature.title}
                  className="border-l-2 border-primary bg-surface-container-lowest p-6"
                >
                  <MaterialIcon
                    name={feature.icon}
                    className="mb-4 text-[32px] text-primary"
                  />
                  <h4 className="mb-2 font-headline-sm text-[20px]">
                    {feature.title}
                  </h4>
                  <p className="font-body-md text-sm text-on-surface-variant">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.gallery.length > 0 && (
          <section className="mx-auto mb-24 max-w-[1120px] px-6">
            <h2 className="mb-12 font-headline-md text-headline-md text-on-background">
              Screenshots
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((shot, index) => (
                <div
                  key={shot.caption}
                  className={`space-y-6 ${index === 1 ? "lg:pt-12" : ""}`}
                >
                  <figure className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-high">
                    <Image
                      alt={shot.alt}
                      className="w-full cursor-zoom-in transition-all duration-500"
                      height={400}
                      src={shot.src}
                      width={600}
                    />
                    <figcaption className="border-t border-outline-variant p-4 text-center font-label-sm text-on-surface-variant">
                      {shot.caption}
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mx-auto mb-24 max-w-[1120px] px-6">
          <h2 className="mb-8 font-headline-md text-headline-md text-on-background">
            Technical Architecture
          </h2>
          <div className="grid items-start gap-12 md:grid-cols-2">
            {project.architectureImage && (
              <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container">
                <Image
                  alt={`${project.title} architecture diagram`}
                  className="h-full w-full object-cover"
                  height={800}
                  src={project.architectureImage}
                  width={1200}
                />
              </div>
            )}

            <div className="space-y-6">
              {project.architectureNotes.map((note) => (
                <div key={note.title} className="border-l-2 border-primary pl-6">
                  <h4 className="mb-2 font-headline-sm text-[18px]">
                    {note.title}
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    {note.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {project.challenges.length > 0 && (
          <section className="mx-auto mb-24 max-w-[1120px] px-6">
            <h2 className="mb-12 font-headline-md text-headline-md text-on-background">
              Engineering Challenges
            </h2>
            <div className="space-y-8">
              {project.challenges.map((challenge) => (
                <div
                  key={challenge.title}
                  className="rounded-xl border border-outline-variant bg-surface-container-low p-8"
                >
                  <h3 className="mb-4 font-headline-sm text-headline-sm text-primary">
                    {challenge.title}
                  </h3>
                  <p className="mb-6 text-on-surface">{challenge.problem}</p>
                  <div className="rounded-lg border border-outline-variant bg-surface p-6">
                    <span className="mb-2 block font-label-sm text-label-sm uppercase text-primary">
                      How it was solved
                    </span>
                    <p className="text-sm italic text-on-surface-variant">
                      {challenge.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mx-auto mb-24 max-w-[1120px] px-6">
          <h2 className="mb-8 font-headline-md text-headline-md text-on-background">
            Outcomes &amp; Learnings
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h4 className="mb-4 font-headline-sm text-on-background">
                The Impact
              </h4>
              <ul className="space-y-4 text-on-surface-variant">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <MaterialIcon
                      name="check_circle"
                      className="mt-1 text-primary"
                    />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-headline-sm text-on-background">
                Personal Growth
              </h4>
              <p className="leading-relaxed text-on-surface-variant">
                {project.personalGrowth}
              </p>
            </div>
          </div>
        </section>

        {project.deploymentNote && (
          <section className="mx-auto mb-24 max-w-[1120px] px-6">
            <div className="flex items-center gap-4 rounded-xl border border-primary/20 bg-primary-container/10 p-6">
              <MaterialIcon name="info" className="text-[32px] text-primary" />
              <p className="font-body-md text-on-primary-container">
                {project.deploymentNote}
              </p>
            </div>
          </section>
        )}

        {relatedProjects.length > 0 && (
          <section className="mx-auto mb-12 max-w-[1120px] px-6">
            <h2 className="mb-12 font-headline-md text-headline-md text-on-background">
              More Projects
            </h2>
            <div className="grid gap-gutter md:grid-cols-2">
              {relatedProjects.map((related) => (
                <Link
                  key={related.slug}
                  href={`/projects/${related.slug}`}
                  className="project-card-hover flex flex-col overflow-hidden rounded-xl border border-outline-variant bg-surface-container"
                >
                  <div className="h-48 overflow-hidden bg-surface-container-high">
                    <Image
                      alt={related.title}
                      className="h-full w-full object-cover opacity-60 transition-all duration-500 hover:opacity-100"
                      height={300}
                      src={related.coverImage}
                      width={500}
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-2 font-headline-sm text-on-background">
                      {related.title}
                    </h4>
                    <p className="mb-4 text-sm text-on-surface-variant">
                      {related.summary}
                    </p>
                    <div className="flex gap-2">
                      <span className="rounded border border-primary/30 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                        {related.category}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer variant="project-detail" />
    </div>
  );
}