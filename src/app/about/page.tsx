import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Noor Fatima is a CS graduate and full-stack developer building modern web applications and AI-integrated products with React, Laravel, MERN, PHP, MySQL, and Python.",
  path: "/about",
});

const interests = [
  {
    icon: "auto_awesome",
    title: "AI & Intelligent Systems",
    description:
      "Exploring how AI is changing the way we build, design, and interact with software and building with it, not just reading about it.",
  },
  {
    icon: "code",
    title: "Building Real Products",
    description:
      "Turning structured ideas into working applications that solve defined problems not just demos or tutorials.",
  },
  {
    icon: "design_services",
    title: "UI & Interface Design",
    description:
      "Designing interfaces that feel intentional, clean, and genuinely useful to the person on the other side of the screen.",
  },
  {
    icon: "hub",
    title: "Modern Web Ecosystem",
    description:
      "Staying current with how the frontend, backend, and AI layers of the web are evolving and finding practical ways to apply what I learn.",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden bg-background text-on-surface">
      <Navbar variant="standard" />
      <ScrollReveal />
      <main className="pt-32">

        {/* ── HERO ── */}
        <section className="mx-auto mb-section-desktop max-w-container-max px-gutter">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 block font-label-caps text-label-caps uppercase tracking-widest text-primary">
              About Me
            </span>
            <h1 className="mb-6 font-headline-h1 text-headline-h1 text-on-surface md:font-display-lg md:text-display-lg">
              Full-Stack Developer.{" "}
              <span className="text-primary">AI-Aware.</span>{" "}
              Always Building.
            </h1>
            <p className="mx-auto mb-5 max-w-2xl font-body-lg text-body-lg text-text-secondary">
              I am Noor Fatima, a Computer Science graduate and full-stack web
              developer focused on building modern, well-structured web
              applications that work well for the people using them. My core
              work spans Node.js, Express, and Laravel on the backend, React
              and JavaScript on the frontend, and MySQL and MongoDB for data.
            </p>
            <p className="mx-auto mb-8 max-w-2xl font-body-lg text-body-lg text-text-secondary">
              I am not building the same web apps that were being built five
              years ago. I actively work with AI tools, have completed multiple
              Google AI certifications, and am building toward a career where
              web development and intelligent systems genuinely overlap. The way
              software gets built is changing fast and I am changing with it.
            </p>
            <div className="mb-10 flex flex-wrap justify-center gap-3">
              {["React", "Laravel", "Node.js", "MySQL", "Python", "AI APIs"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-surface-container-high px-4 py-1.5 font-label-sm text-label-sm text-on-surface-variant"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary-container/20 px-5 py-3">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                <span className="font-label-md text-label-md text-primary">
                  Open to high-impact roles &amp; freelance work
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── QUICK FACTS STRIP ── */}
        <section className="border-y border-border bg-surface-container-low py-10">
          <div className="mx-auto max-w-container-max px-gutter">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { icon: "school", label: "Education", value: "BS Computer Science" },
                { icon: "location_on", label: "Based In", value: "Multan, Pakistan" },
                { icon: "work", label: "Experienced In", value: "Building Web Applications" },
                { icon: "auto_awesome", label: "Current Edge", value: "AI-Integrated Dev" },
              ].map((fact) => (
                <div key={fact.label} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <MaterialIcon name={fact.icon} className="text-[18px] text-primary" />
                    <span className="font-label-caps text-label-caps uppercase tracking-widest text-text-muted">
                      {fact.label}
                    </span>
                  </div>
                  <span className="font-headline-h4 text-headline-h4 text-on-surface">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE DEVELOPER I AM ── */}
        <section className="mx-auto max-w-container-max px-gutter py-section-desktop">
          <div className="scroll-reveal mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-3 block font-label-caps text-label-caps uppercase tracking-widest text-primary">
              My Positioning
            </span>
            <h2 className="mb-6 font-headline-h2 text-headline-h2">
              Not just a web developer. A modern one.
            </h2>
            <p className="font-body-lg text-body-lg text-text-secondary">
              There is a version of a web developer who builds the same CRUD
              apps with the same stack indefinitely. That is not the developer
              I am becoming. I stay close to how the field is moving. AI-assisted
              development, smarter tooling, prompt engineering, and building
              applications that incorporate intelligent features rather than
              just ignoring them.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="scroll-reveal rounded-xl border border-border bg-surface p-card-padding">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-container">
                <MaterialIcon name="layers" className="text-on-primary-container text-[24px]" filled />
              </div>
              <h3 className="mb-3 font-headline-h3 text-headline-h3">
                Full-Stack Core
              </h3>
              <p className="mb-5 text-text-secondary">
                React, JavaScript, Bootstrap, Node.js, Express, MongoDB,
                Laravel, PHP, and MySQL. I have worked across the full
                application stack in real projects and real client work.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Laravel", "React", "MySQL", "Node.js", "MongoDB"].map((t) => (
                  <span key={t} className="rounded border border-border bg-surface-container-high px-3 py-1 font-label-caps text-label-caps text-on-surface">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="scroll-reveal rounded-xl bg-primary-container p-card-padding text-on-primary-container">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-on-primary-container/10">
                <MaterialIcon name="auto_awesome" className="text-[24px]" filled />
              </div>
              <h3 className="mb-3 font-headline-h3 text-headline-h3">
                AI Layer
              </h3>
              <p className="mb-5 font-body-md text-on-primary-container/80">
                Completed Google&apos;s full AI Essentials program, built
                AI-related academic projects, and actively working on
                integrating AI APIs and prompt-driven features into web
                applications.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Google AI", "Prompt Engineering", "Python", "AI APIs"].map((t) => (
                  <span key={t} className="rounded border border-on-primary-container/20 bg-on-primary-container/10 px-3 py-1 font-label-caps text-label-caps text-on-primary-container">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="scroll-reveal rounded-xl border border-border bg-surface p-card-padding">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-container">
                <MaterialIcon name="trending_up" className="text-on-primary-container text-[24px]" />
              </div>
              <h3 className="mb-3 font-headline-h3 text-headline-h3">
                Growth Direction
              </h3>
              <p className="mb-5 text-text-secondary">
                Moving toward roles where strong web fundamentals meet AI
                integration, building products that are not just functional but
                adaptive, intelligent, and built for how software works now.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "AI Integration", "APIs"].map((t) => (
                  <span key={t} className="rounded border border-border bg-surface-container-high px-3 py-1 font-label-caps text-label-caps text-on-surface">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WORKING STYLE ── */}
        <section className="bg-surface-container-low py-section-desktop">
          <div className="mx-auto max-w-container-max px-gutter">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
              <div className="scroll-reveal">
                <span className="mb-3 block font-label-caps text-label-caps uppercase tracking-widest text-primary">
                  Process
                </span>
                <h2 className="mb-12 font-headline-h2 text-headline-h2">
                  How I Work
                </h2>
                <div className="space-y-10">
                  {[
                    {
                      num: "01",
                      title: "Structure Before Speed",
                      text: "I plan before I build. Understanding the problem, mapping the data model, and thinking through the user flow before writing code leads to fewer rewrites and cleaner outcomes.",
                    },
                    {
                      num: "02",
                      title: "Real Requirements, Not Assumptions",
                      text: "At Optibyte I collaborated directly with designers and developers to turn client requirements into working interfaces. Clear communication reduces wasted effort on both sides.",
                    },
                    {
                      num: "03",
                      title: "Adaptive by Default",
                      text: "The tools I used two years ago are not the best tools available today. I stay current, adopt better approaches when I find them, and actively bring modern practices into the work I do.",
                    },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary">
                        <span className="font-bold text-primary">{item.num}</span>
                      </div>
                      <div>
                        <h4 className="mb-2 font-headline-h3 text-headline-h3">{item.title}</h4>
                        <p className="text-text-secondary">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="scroll-reveal relative">
                <Image
                  alt="Noor's workspace"
                  className="aspect-[4/3] w-full rounded-xl border border-border object-cover"
                  height={600}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS5dW6iDeSE2lvU5s86qwqKTIVLX1Vi3lkor0WlCw9MkUuDZC5hZ4R3SCQzshZkIANy8a95FTbmyDuBGOYsaNPGRB8jxVVEVVG0WEYHSur_XuNvfEsf1W-O48pSb6k5yv9Gknnokhg9zt6mgpy3P6S4UI-OwdvnGq-ecovn6V7ht1Rx36sDm5hrRQn4y8Fqp0s2lFyz3zrXLtjA4nNbKeW7x2dLabqBI6CdMrs9d3S9pQNT9sMdE0wlmzYE96JGQzyW2Y-YtKw3Tv9"
                  width={800}
                  unoptimized
                />
                <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-lg border border-border bg-surface p-6 shadow-xl md:block">
                  <p className="font-body-sm italic text-text-secondary">
                    &quot;I write code that future-me will actually thank
                    present-me for.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── INTERESTS ── */}
        <section className="border-y border-border bg-surface-container-low py-section-desktop">
          <div className="mx-auto max-w-container-max px-gutter">
            <div className="scroll-reveal mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="mb-2 block font-label-caps text-label-caps uppercase tracking-widest text-text-muted">
                  Beyond the Screen
                </span>
                <h2 className="font-headline-h2 text-headline-h2">
                  What Keeps Me Curious
                </h2>
              </div>
              <p className="max-w-sm text-text-secondary">
                The things I explore, follow, and build toward outside of
                client and project work.
              </p>
            </div>
            <div className="scroll-reveal grid grid-cols-1 gap-4 md:grid-cols-4">
              {interests.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-lg border border-border bg-surface p-6 transition-colors hover:border-primary"
                >
                  <MaterialIcon
                    name={item.icon}
                    className="mb-4 text-text-muted transition-colors group-hover:text-primary"
                  />
                  <h5 className="mb-2 font-headline-h3 text-[18px]">{item.title}</h5>
                  <p className="text-body-sm text-text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="scroll-reveal mx-auto max-w-reading-max px-gutter py-section-desktop text-center">
          <h2 className="mb-6 font-headline-h1 text-headline-h1">
            Looking for a developer who brings{" "}
            <span className="text-primary">full-stack depth</span> and a
            modern edge?
          </h2>
          <p className="mb-10 font-body-lg text-text-secondary">
            I am open to high-impact roles in web development and related
            fields, and available for freelance engagements where strong
            execution and modern thinking matter.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <Link
              href="/contact"
              className="w-full rounded-xl bg-primary px-8 py-3 font-bold text-on-primary transition-colors hover:bg-accent-hover md:w-auto"
            >
              Get In Touch
            </Link>
            <Link
              href="/projects"
              className="w-full rounded-xl border border-border px-8 py-3 font-bold text-on-surface transition-colors hover:bg-surface-container md:w-auto"
            >
              View My Projects
            </Link>
          </div>
        </section>

      </main>
      <Footer variant="standard" />
    </div>
  );
}