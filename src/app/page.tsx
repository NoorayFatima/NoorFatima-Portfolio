import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { getAllProjects } from "@/lib/content/projects";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
});

const services = [
  {
    icon: "web",
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications built with Laravel, PHP, and MySQL on the backend and React or JavaScript on the frontend. From data models to polished, working interfaces.",
    tags: ["Laravel", "PHP", "MySQL", "React", "Node.js"],
  },
  {
    icon: "devices",
    title: "Responsive Frontend Development",
    description:
      "Clean, responsive, and cross-browser-compatible UIs using HTML, CSS, Bootstrap, Tailwind, and React. Built to look sharp and perform well on every screen.",
    tags: ["HTML5", "CSS3", "Bootstrap", "Tailwind", "React"],
  },
  {
    icon: "storage",
    title: "CRUD & CMS Platforms",
    description:
      "Feature-complete applications with user authentication, role management, admin dashboards, file uploads, and full CRUD functionality for real business workflows.",
    tags: ["Laravel", "PHP", "MySQL", "REST APIs", "Git"],
  },
  {
    icon: "auto_awesome",
    title: "AI-Integrated Applications",
    description:
      "Web products that incorporate AI APIs and prompt-driven features. Bridging modern AI capabilities with practical full-stack application development.",
    tags: ["Python", "AI APIs", "React", "Node.js", "REST APIs"],
  },
];

// Exactly which 3 projects appear on the homepage — change these slugs to swap them out
const HOMEPAGE_FEATURED_SLUGS = [
  "smilecare-dental-clinic",
  "sohan-agri",
  "folio",
];

export default function HomePage() {
  const allProjects = getAllProjects();
  const featuredProjects = HOMEPAGE_FEATURED_SLUGS.map((slug) =>
    allProjects.find((p) => p.slug === slug)
  ).filter(Boolean) as typeof allProjects;

  return (
    <div className="theme-home custom-scrollbar overflow-x-hidden bg-background text-on-surface">
      <Navbar variant="home" />
      <ScrollReveal />
      <main className="pt-16">

        {/* ── HERO ── */}
        {/* ── HERO ── */}
        <section className="reveal active mx-auto max-w-[1120px] px-gutter pb-16 pt-12">
          <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-12 md:gap-12 lg:gap-16">
            {/* Left: Text */}
            <div className="md:col-span-7 lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary-container/20 px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                <span className="font-label-sm text-label-sm text-primary">
                  Open to high-impact roles &amp; freelance work
                </span>
              </div>

              <h1 className="mb-6 max-w-[13ch] font-display-md text-[clamp(2.2rem,3.8vw,4.1rem)] font-bold leading-[1.15] tracking-[-0.05em] text-on-surface md:max-w-[14ch] lg:max-w-[15ch]">
                <span className="block whitespace-nowrap">Full-Stack Developer</span>
                <span className="block whitespace-nowrap">building practical,</span>
                <span className="block whitespace-nowrap">user-focused</span>
                <span className="block whitespace-nowrap">web applications.</span>
              </h1>

              <p className="mb-8 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
                I am Noor Fatima, a CS graduate who works across the full stack. I build
                with the MERN stack, PHP, Laravel, MySQL, and Python. I also integrate AI
                where it genuinely improves what a product does, not just for the sake of it.
              </p>

              <div className="mb-10 flex flex-wrap gap-3">
                {["React", "Laravel", "Node.js", "MySQL", "Python", "AI APIs"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-outline-variant/30 bg-[#11141b] px-4 py-1.5 font-label-sm text-label-sm text-on-surface-variant"
                  >
                    {tech}
                  </span>
                ))}
              </div>

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

            {/* Right: Profile Photo */}
            <div className="md:col-span-5 lg:col-span-5">
              <div className="mx-auto flex w-full max-w-[460px] flex-col">
                <div className="mb-4 flex items-center justify-end">
                  <div className="flex items-center gap-2 rounded-full border border-[#262d3d] bg-[#151923] px-3 py-2 shadow-lg">
                    <a
                      href="https://github.com/NoorayFatima"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub profile"
                      className="rounded-full px-4 py-2 font-label-sm text-label-sm text-on-surface transition-all duration-200 hover:bg-primary-container/20 hover:text-primary"
                    >
                      GitHub
                    </a>
                    <span className="h-4 w-px bg-[#2b3446]" />
                    <a
                      href="https://www.linkedin.com/in/noorfatima35/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn profile"
                      className="rounded-full px-4 py-2 font-label-sm text-label-sm text-on-surface transition-all duration-200 hover:bg-primary-container/20 hover:text-primary"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute -inset-4 rounded-2xl bg-primary-container/10 blur-2xl transition-all duration-500 group-hover:bg-primary-container/20" />
                  <Image
                    alt="Noor Fatima"
                    className="relative aspect-[4/5] w-full rounded-2xl border border-[#262d3d] object-cover grayscale transition-all duration-700 hover:grayscale-0"
                    height={800}
                    src="/images/profile.png"
                    width={640}
                    priority
                  />
                  <div className="absolute -bottom-4 -right-4 rounded-xl border border-[#262d3d] bg-[#151923] px-5 py-3 shadow-xl">
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      CS Graduate
                    </p>
                    <p className="text-[15px] font-semibold text-on-surface">
                      Full-Stack Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURED PROJECTS ── */}
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

        {/* ── TECHNICAL EXPERTISE ── */}
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
                {["React / Next.js", "HTML5 / CSS3", "JavaScript / TypeScript", "Bootstrap / Tailwind"].map(
                  (skill, i, arr) => (
                    <li
                      key={skill}
                      className={`border-outline-variant/10 pb-3 ${i < arr.length - 1 ? "border-b" : ""
                        }`}
                    >
                      <span className="font-body-md text-on-surface-variant">
                        {skill}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="border-outline-variant/30 p-10 md:border-r">
              <div className="mb-8 flex items-center gap-3">
                <MaterialIcon name="database" className="text-primary" />
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Backend & Databases
                </h3>
              </div>
              <ul className="space-y-4">
                {["Node.js / Express", "MySQL", "MongoDB", "Laravel / PHP"].map(
                  (skill, i, arr) => (
                    <li
                      key={skill}
                      className={`border-outline-variant/10 pb-3 ${i < arr.length - 1 ? "border-b" : ""
                        }`}
                    >
                      <span className="font-body-md text-on-surface-variant">
                        {skill}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="p-10">
              <div className="mb-8 flex items-center gap-3">
                <MaterialIcon name="auto_awesome" className="text-primary" />
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Tools & AI
                </h3>
              </div>
              <ul className="space-y-4">
                {["Git / GitHub", "Python", "REST APIs", "AI Tools & Prompting"].map(
                  (skill, i, arr) => (
                    <li
                      key={skill}
                      className={`border-outline-variant/10 pb-3 ${i < arr.length - 1 ? "border-b" : ""
                        }`}
                    >
                      <span className="font-body-md text-on-surface-variant">
                        {skill}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>

          </div>
        </section>

        {/* ── SERVICES ── */}
        <section
          className="reveal mx-auto max-w-[1120px] px-gutter py-section-padding"
          id="services"
        >
          <div className="mb-12 text-center">
            <span className="mb-2 block font-label-caps text-label-caps uppercase tracking-widest text-primary">
              What I Offer
            </span>
            <h2 className="mb-3 font-headline-md text-headline-md text-on-surface">
              Services
            </h2>
            <p className="mx-auto max-w-xl font-body-md text-body-md text-on-surface-variant">
              Available for high-impact development roles and selected freelance
              engagements. Here is where I can contribute most.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-[#262d3d] bg-[#151923] p-8 transition-all duration-200 hover:border-primary/50"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-container/30 text-primary">
                    <MaterialIcon name={service.icon} className="text-[24px]" />
                  </div>
                  <h3 className="mt-2 font-headline-sm text-headline-sm text-on-surface">
                    {service.title}
                  </h3>
                </div>
                <p className="mb-6 font-body-md text-body-md text-on-surface-variant">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-outline-variant/30 bg-[#11141b] px-3 py-1 font-label-sm text-label-sm text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="reveal mx-auto max-w-[1120px] px-gutter py-section-padding"
          id="contact"
        >
          <div className="rounded-2xl border border-primary/20 bg-primary-container/10 p-12 text-center">
            <h2 className="mb-6 font-headline-md text-headline-md text-on-surface">
              Let&apos;s build something together
            </h2>
            <p className="mx-auto mb-10 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
              I am open to high-impact roles in web development and available
              for freelance work. If you have a project in mind or want to
              connect, my inbox is always open.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="rounded-lg bg-primary px-10 py-4 font-label-md text-label-md text-on-primary transition-all duration-200 hover:brightness-110"
              >
                Start a Conversation
              </a>
              <a
                href={siteConfig.resumeUrl}
                className="flex items-center gap-2 font-label-md text-label-md text-on-surface transition-colors hover:text-primary"
              >
                View Resume
                <MaterialIcon name="open_in_new" className="text-[18px]" />
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer variant="home" />
    </div>
  );
}