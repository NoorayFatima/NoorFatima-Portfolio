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
    "Learn about Noor Fatima — a product-minded software engineer focused on scalable architecture and human-centered design.",
  path: "/about",
});

const interests = [
  {
    icon: "camera",
    title: "Street Photography",
    description:
      "Capturing the geometry and candid moments of urban landscapes.",
  },
  {
    icon: "menu_book",
    title: "Modern Philosophy",
    description:
      "Exploring systems of thought that inform ethics in technology.",
  },
  {
    icon: "hiking",
    title: "Alpine Hiking",
    description: "Finding mental clarity through long-distance mountain trails.",
  },
  {
    icon: "terminal",
    title: "Open Source",
    description: "Contributing to the tools that build the modern web.",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden bg-background text-on-surface">
      <Navbar variant="standard" />
      <ScrollReveal />
      <main className="pt-32">
        <section className="mx-auto mb-section-desktop max-w-container-max px-gutter">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
            <div className="scroll-reveal md:col-span-7">
              <span className="mb-4 block font-label-caps text-label-caps uppercase tracking-widest text-primary">
                About Me
              </span>
              <h1 className="mb-8 max-w-2xl font-headline-h1 text-headline-h1 md:font-display-lg md:text-display-lg">
                Crafting Digital Solutions with Calm Precision.
              </h1>
              <div className="max-w-xl space-y-6 font-body-lg text-body-lg text-text-secondary">
                <p>
                  I am a product-minded software engineer based in London,
                  specializing in the intersection of scalable architecture and
                  human-centered design. My journey began with a fascination for
                  how code can bridge the gap between complex problems and
                  elegant solutions.
                </p>
                <p>
                  With over six years of experience in the industry, I&apos;ve
                  moved from building simple interfaces to architecting robust web
                  applications for global enterprises. I believe that true
                  technical excellence isn&apos;t just about performance—it&apos;s
                  about building systems that are as maintainable as they are
                  performant.
                </p>
              </div>
            </div>
            <div className="scroll-reveal md:col-span-5">
              <div className="group relative">
                <div className="absolute -inset-4 rounded-xl bg-primary-container/10 blur-2xl transition-all duration-500 group-hover:bg-primary-container/20" />
                <Image
                  alt="Noor Fatima"
                  className="relative aspect-[4/5] w-full rounded-xl border border-border object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  height={800}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6P-Q0Yg7zHB9K8XncfL5GfqP8bE31O-viBGwvwTK3xg97I2DLqEbJHTigF52vzSVZTpwS6lxs5mlmb51SVQnB_xALvLgN_0_NwcUOYXOfq5s4COvgzDFvkYE_gqpN3mhTNeD2WJVNOCa7k4ffdTA3QJly4BzaTC_uIsJk0A1LXSkYZTQ1yLN5qWjQlS0PP8J0Lt4ZnG6P22o-VUCGS53on62yJSBGkkpGgwn1UklMjfV1J_XANqsLTGu6G-R-hbyraXZDuhRfEARn"
                  width={640}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-section-desktop">
          <div className="mx-auto max-w-container-max px-gutter">
            <div className="scroll-reveal mb-16 text-center">
              <h2 className="mb-4 font-headline-h2 text-headline-h2">
                Technical Focus
              </h2>
              <p className="mx-auto max-w-2xl text-text-secondary">
                I specialize in building performance-critical web applications
                that prioritize the user experience without compromising on
                technical integrity.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="scroll-reveal rounded-xl border border-border bg-surface p-card-padding md:col-span-2">
                <MaterialIcon
                  name="architecture"
                  className="mb-4 text-primary"
                  filled
                />
                <h3 className="mb-4 font-headline-h3 text-headline-h3">
                  Scalable Architecture
                </h3>
                <p className="mb-6 max-w-lg text-text-secondary">
                  Expertise in Next.js, React, and TypeScript. I build modular
                  component systems and state management layers that allow teams
                  to move fast without breaking things.
                </p>
                <div className="flex flex-wrap gap-chip-gap">
                  {["React 18", "Next.js 14", "TypeScript", "GraphQL"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded border border-border bg-surface-container-high px-3 py-1 font-label-caps text-label-caps text-on-surface"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
              <div className="scroll-reveal flex flex-col justify-end rounded-xl bg-primary-container p-card-padding text-on-primary-container">
                <MaterialIcon name="speed" className="mb-4 text-4xl" filled />
                <h3 className="mb-2 font-headline-h3 text-headline-h3">
                  Web Performance
                </h3>
                <p className="font-body-sm text-on-primary-container/80">
                  Optimizing Core Web Vitals to sub-second levels for global
                  accessibility.
                </p>
              </div>
              <div className="scroll-reveal rounded-xl border border-border bg-surface p-card-padding">
                <MaterialIcon name="palette" className="mb-4 text-primary" />
                <h3 className="mb-4 font-headline-h3 text-headline-h3">
                  Design Systems
                </h3>
                <p className="text-text-secondary">
                  Bridging the gap between Figma and Code with robust Tailwind
                  and CSS-in-JS tokens.
                </p>
              </div>
              <div className="scroll-reveal flex flex-col items-center gap-8 rounded-xl border border-border bg-surface p-card-padding md:col-span-2 md:flex-row">
                <div className="flex-1">
                  <h3 className="mb-4 font-headline-h3 text-headline-h3">
                    Product Engineering
                  </h3>
                  <p className="text-text-secondary">
                    I approach code from a business perspective, ensuring that
                    every feature serves a specific user need and drives
                    measurable impact.
                  </p>
                </div>
                <div className="flex h-32 w-full items-center justify-center overflow-hidden rounded-lg bg-surface-container-highest md:w-48">
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                    <div className="flex h-full items-center justify-center gap-2">
                      <div className="h-12 w-2 rounded-full bg-primary/40" />
                      <div className="h-20 w-2 rounded-full bg-primary" />
                      <div className="h-16 w-2 rounded-full bg-primary/60" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-container-max px-gutter py-section-desktop">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div className="scroll-reveal">
              <h2 className="mb-12 font-headline-h2 text-headline-h2">
                Working Style
              </h2>
              <div className="space-y-10">
                {[
                  {
                    num: "01",
                    title: "High Agency",
                    text: "I don't just wait for tickets. I identify bottlenecks, propose architectural improvements, and take full ownership of the end-to-end delivery.",
                  },
                  {
                    num: "02",
                    title: "Radical Clarity",
                    text: "Effective engineering is 50% communication. I prioritize clear documentation, expressive PR descriptions, and concise slack updates.",
                  },
                  {
                    num: "03",
                    title: "Continuous Learning",
                    text: "The landscape changes weekly. I dedicate 5 hours a week to researching new patterns and tools to keep our stack modern and efficient.",
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary">
                      <span className="font-bold text-primary">{item.num}</span>
                    </div>
                    <div>
                      <h4 className="mb-2 font-headline-h3 text-headline-h3">
                        {item.title}
                      </h4>
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
              />
              <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-lg border border-border bg-surface p-6 shadow-xl md:block">
                <p className="font-body-sm text-body-sm italic text-text-secondary">
                  &quot;Precision is the only substitute for luck in
                  high-performance software.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-surface-container-low py-section-desktop">
          <div className="mx-auto max-w-container-max px-gutter">
            <div className="scroll-reveal mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="mb-2 block font-label-caps text-label-caps uppercase tracking-widest text-text-muted">
                  Beyond the Screen
                </span>
                <h2 className="font-headline-h2 text-headline-h2">
                  Personal Interests
                </h2>
              </div>
              <p className="max-w-sm text-text-secondary">
                When I&apos;m not pushing pixels or refactoring modules,
                you&apos;ll find me exploring these pursuits.
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
                  <h5 className="mb-2 font-headline-h3 text-[18px]">
                    {item.title}
                  </h5>
                  <p className="text-body-sm text-text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="scroll-reveal mx-auto max-w-reading-max px-gutter py-section-desktop text-center">
          <h2 className="mb-6 font-headline-h1 text-headline-h1">
            Let&apos;s build something remarkable together.
          </h2>
          <p className="mb-10 font-body-lg text-text-secondary">
            I&apos;m currently open to new collaborations and high-impact
            engineering roles.
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
              View Projects
            </Link>
          </div>
        </section>
      </main>
      <Footer variant="standard" />
    </div>
  );
}
