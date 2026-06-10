import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { getFeaturedProjects } from "@/lib/content/projects";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <div className="theme-home custom-scrollbar overflow-x-hidden bg-background text-on-surface">
      <Navbar variant="home" />
      <ScrollReveal />
      <main className="pt-24">
        <section className="reveal active mx-auto max-w-[1120px] px-gutter py-section-padding">
          <div className="max-w-4xl">
            <h1 className="mb-stack-md font-display-lg text-display-lg-mobile text-on-surface md:text-display-lg">
              Building digital experiences with{" "}
              <span className="text-primary">precision</span> and purpose.
            </h1>
            <p className="mb-stack-lg max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              I&apos;m Noor Fatima, a full-stack developer and CS student focused
              on creating refined, high-performance applications that bridge the
              gap between complex logic and elegant design.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="flex items-center gap-2 rounded-lg bg-primary-container px-8 py-4 font-label-md text-label-md text-on-primary-container transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                View Projects
                <MaterialIcon name="arrow_forward" className="text-[20px]" />
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-outline-variant px-8 py-4 font-label-md text-label-md text-on-surface transition-all duration-200 hover:bg-surface-container"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>

        <section
          className="reveal mx-auto max-w-[1120px] px-gutter py-section-padding"
          id="projects"
        >
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="mb-2 font-headline-md text-headline-md text-on-surface">
                Featured Projects
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Selected works that showcase my technical depth.
              </p>
            </div>
            <div className="mx-8 hidden h-px flex-grow bg-outline-variant/30 md:block" />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-xl border border-[#262d3d] bg-[#151923] transition-all duration-200 hover:-translate-y-2 hover:border-[#3a4459]"
              >
                <div className="aspect-video overflow-hidden bg-surface-container">
                  <Image
                    alt={project.title}
                    className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                    height={400}
                    src={project.coverImage}
                    width={600}
                  />
                </div>
                <div className="p-8">
                  <h3 className="mb-3 font-headline-sm text-headline-sm text-on-surface">
                    {project.title}
                  </h3>
                  <p className="mb-6 font-body-md text-body-md text-on-surface-variant">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-outline-variant/30 bg-[#11141b] px-3 py-1 font-label-sm text-label-sm text-on-surface-variant"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section
          className="reveal mx-auto max-w-[1120px] px-gutter py-section-padding"
          id="skills"
        >
          <h2 className="mb-12 text-center font-headline-md text-headline-md text-on-surface md:text-left">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-xl border border-outline-variant/30 bg-[#151923] md:grid-cols-3">
            <div className="border-outline-variant/30 p-10 md:border-r">
              <div className="mb-8 flex items-center gap-3">
                <MaterialIcon name="terminal" className="text-primary" />
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Frontend
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  ["React / Next.js", "Expert"],
                  ["TypeScript", "Expert"],
                  ["Tailwind CSS", "Expert"],
                  ["Framer Motion", "Advanced"],
                ].map(([skill, level], i, arr) => (
                  <li
                    key={skill}
                    className={`flex items-center justify-between border-outline-variant/10 pb-2 ${
                      i < arr.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <span className="font-body-md text-on-surface-variant">
                      {skill}
                    </span>
                    <span
                      className={`text-[14px] font-semibold ${
                        level === "Advanced"
                          ? "text-on-surface-variant/50"
                          : "text-primary"
                      }`}
                    >
                      {level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-outline-variant/30 p-10 md:border-r">
              <div className="mb-8 flex items-center gap-3">
                <MaterialIcon name="database" className="text-primary" />
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Backend
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  ["Node.js / Express", "Expert"],
                  ["PostgreSQL", "Expert"],
                  ["Python / Django", "Advanced"],
                  ["Redis", "Intermediate"],
                ].map(([skill, level], i, arr) => (
                  <li
                    key={skill}
                    className={`flex items-center justify-between border-outline-variant/10 pb-2 ${
                      i < arr.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <span className="font-body-md text-on-surface-variant">
                      {skill}
                    </span>
                    <span
                      className={`text-[14px] font-semibold ${
                        level === "Intermediate"
                          ? "text-on-surface-variant/50"
                          : level === "Advanced"
                            ? "text-on-surface-variant/50"
                            : "text-primary"
                      }`}
                    >
                      {level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10">
              <div className="mb-8 flex items-center gap-3">
                <MaterialIcon name="settings_ethernet" className="text-primary" />
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Tools
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  ["Docker / K8s", "Advanced"],
                  ["AWS / Vercel", "Expert"],
                  ["Git / CI/CD", "Expert"],
                  ["Jest / Cypress", "Advanced"],
                ].map(([skill, level], i, arr) => (
                  <li
                    key={skill}
                    className={`flex items-center justify-between border-outline-variant/10 pb-2 ${
                      i < arr.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <span className="font-body-md text-on-surface-variant">
                      {skill}
                    </span>
                    <span
                      className={`text-[14px] font-semibold ${
                        level === "Advanced"
                          ? "text-on-surface-variant/50"
                          : "text-primary"
                      }`}
                    >
                      {level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className="reveal mx-auto max-w-[1120px] px-gutter py-section-padding"
          id="contact"
        >
          <div className="rounded-2xl border border-primary/20 bg-primary-container/10 p-12 text-center">
            <h2 className="mb-6 font-headline-md text-headline-md text-on-surface">
              Let&apos;s build something together
            </h2>
            <p className="mx-auto mb-10 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
              I&apos;m currently looking for new opportunities and collaborations.
              If you have a project in mind or just want to say hi, my inbox is
              always open.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="rounded-lg bg-primary px-10 py-4 font-label-md text-label-md text-on-primary transition-all duration-200 hover:brightness-110"
              >
                Start a Conversation
              </a>
              <a
                href="#"
                className="flex items-center gap-2 font-label-md text-label-md text-on-surface transition-colors hover:text-primary"
              >
                Download Portfolio
                <MaterialIcon name="download" className="text-[18px]" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="home" />
    </div>
  );
}
