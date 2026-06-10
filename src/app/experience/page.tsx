import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import {
  coreProficiencies,
  educationItems,
  experienceItems,
} from "@/data/experience";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Experience",
  description:
    "A record of engineering leadership and technical execution across enterprise environments.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <div className="bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <Navbar variant="standard" />
      <ScrollReveal />
      <main className="pb-section-desktop pt-32">
        <div className="mx-auto max-w-container-max px-gutter">
          <header className="mb-section-desktop max-w-reading-max">
            <span className="mb-4 block font-label-caps text-label-caps text-primary">
              CAREER PROGRESSION
            </span>
            <h1 className="mb-6 font-headline-h1 text-headline-h1">
              Building digital infrastructure with{" "}
              <span className="text-primary">precision</span>.
            </h1>
            <p className="font-body-lg text-body-lg text-text-secondary">
              A record of engineering leadership and technical execution. Focused
              on creating scalable, high-performance systems for modern enterprise
              environments.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="relative lg:col-span-8">
              <div className="timeline-gradient absolute bottom-0 left-[11px] top-0 w-px bg-border border-border-strong" />
              <div className="space-y-16">
                {experienceItems.map((item) => (
                  <div key={item.id} className="reveal-on-scroll relative pl-12">
                    <div
                      className={`absolute left-0 top-2 z-10 h-6 w-6 rounded-full border-2 bg-background ${
                        item.active ? "border-primary" : "border-border"
                      }`}
                    >
                      {item.active && (
                        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
                      )}
                    </div>
                    <div className="mb-4 flex flex-col md:flex-row md:items-baseline md:justify-between">
                      <h3 className="font-headline-h3 text-headline-h3">
                        {item.title}
                      </h3>
                      <span className="mt-2 font-label-caps text-label-caps text-text-muted md:mt-0">
                        {item.period}
                      </span>
                    </div>
                    <div className="mb-6">
                      <span className="font-body-md text-body-md font-medium text-primary">
                        {item.organization}
                      </span>
                      <p className="mt-1 font-body-sm text-body-sm italic text-text-muted">
                        {item.subtitle}
                      </p>
                    </div>
                    <ul className="mb-8 space-y-4">
                      {item.bullets.map((bullet) => (
                        <li key={bullet.slice(0, 40)} className="flex gap-4">
                          <MaterialIcon
                            name="arrow_forward"
                            className="mt-1 text-sm text-primary"
                          />
                          <p className="font-body-md text-body-md text-text-secondary">
                            {bullet}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-chip-gap">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-border bg-surface-container-low px-3 py-1 font-label-caps text-xs uppercase text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12 lg:col-span-4">
              <section className="reveal-on-scroll">
                <h4 className="mb-8 font-label-caps text-label-caps uppercase tracking-widest text-text-muted">
                  Academic Foundation
                </h4>
                <div className="space-y-8">
                  {educationItems.map((edu) => (
                    <div
                      key={edu.degree}
                      className="rounded-xl border border-border bg-surface p-6"
                    >
                      <span className="mb-2 block font-label-caps text-label-caps text-primary">
                        {edu.period}
                      </span>
                      <h5 className="mb-1 font-headline-h3 text-lg text-headline-h3">
                        {edu.degree}
                      </h5>
                      <p className="mb-4 font-body-sm text-body-sm text-text-secondary">
                        {edu.school}
                      </p>
                      <div className="space-y-3">
                        {edu.details.map((detail) => (
                          <div
                            key={detail.text}
                            className="flex items-center gap-3 text-body-sm text-text-muted"
                          >
                            <MaterialIcon
                              name={detail.icon}
                              className="text-base"
                            />
                            <span>{detail.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="reveal-on-scroll">
                <h4 className="mb-8 font-label-caps text-label-caps uppercase tracking-widest text-text-muted">
                  Core Proficiencies
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {coreProficiencies.map((skill) => (
                    <div
                      key={skill.label}
                      className="group rounded-lg border border-border bg-surface p-4 transition-colors hover:border-primary"
                    >
                      <MaterialIcon
                        name={skill.icon}
                        className="mb-2 block text-primary"
                      />
                      <p className="font-label-caps text-label-caps text-[10px] uppercase text-text-muted">
                        {skill.label}
                      </p>
                      <p className="font-body-sm text-body-sm font-semibold">
                        {skill.value}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="reveal-on-scroll overflow-hidden rounded-xl border border-border">
                <Image
                  alt="Technical Environment"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-110"
                  height={800}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf8ZegitgUB-M7Sb2gggmh8fyTkYA4BqClUz_HtK0KOJbJ0EOPDDpDAS8RbKAN7G2MEfBp-CtYwe2aAyOyOPnxmW3ONErUZfvSqps7wGdNlrCWTlfsU_1_EtcvIEuOrXQpxgzkmooTuV08TfGZyNDoP0wyb9eKEL28VJIM2xoPCx5oMC2mBjp9YhM2OVxGPEHgsMGpDEhP90bH-kzr5b-zQK6JrYCrLQ1gdhwzMbhBPIQOvsfYlsOc2IcfG6NiIvH-CUO-GHE5fF1y"
                  width={640}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer variant="standard" />
    </div>
  );
}
