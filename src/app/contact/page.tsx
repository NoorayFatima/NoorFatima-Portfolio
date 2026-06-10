import Image from "next/image";
import { ContactForm } from "@/components/forms/ContactForm";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch for technical partnerships, internship opportunities, or freelance projects.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden bg-background text-on-surface">
      <Navbar variant="standard" />
      <main className="pb-section-desktop pt-32">
        <div className="mx-auto max-w-container-max px-gutter">
          <header className="mb-section-desktop grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="mb-4 block font-label-caps text-label-caps uppercase tracking-widest text-primary">
                Get In Touch
              </span>
              <h1 className="mb-6 font-display-xl text-display-xl-mobile text-on-surface md:text-display-xl">
                Let&apos;s build something precise.
              </h1>
              <p className="mb-8 max-w-reading-max font-body-lg text-body-lg text-text-secondary">
                Whether it is a technical partnership, an internship opportunity,
                or a freelance project, I am always open to discussing new
                challenges in engineering and design.
              </p>
              <div className="inline-flex items-center gap-3 rounded-full border border-border-strong bg-surface-container px-4 py-2">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-success" />
                </span>
                <span className="font-label-caps text-label-caps text-on-surface">
                  {siteConfig.availability}
                </span>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
            <aside className="space-y-12 lg:col-span-4">
              <section>
                <h3 className="mb-6 font-headline-h3 text-headline-h3 text-on-surface">
                  Direct Details
                </h3>
                <div className="space-y-6">
                  <a
                    className="group flex items-center gap-4 transition-all"
                    href={`mailto:${siteConfig.email}`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-surface transition-colors group-hover:border-primary">
                      <MaterialIcon name="mail" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-label-caps text-label-caps text-text-muted">
                        Email
                      </p>
                      <p className="font-body-md text-body-md text-on-surface">
                        {siteConfig.email}
                      </p>
                    </div>
                  </a>
                  <a className="group flex items-center gap-4 transition-all" href="#">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-surface transition-colors group-hover:border-primary">
                      <MaterialIcon name="link" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-label-caps text-label-caps text-text-muted">
                        LinkedIn
                      </p>
                      <p className="font-body-md text-body-md text-on-surface">
                        /in/noorfatima-dev
                      </p>
                    </div>
                  </a>
                  <a className="group flex items-center gap-4 transition-all" href="#">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-surface transition-colors group-hover:border-primary">
                      <MaterialIcon name="code" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-label-caps text-label-caps text-text-muted">
                        GitHub
                      </p>
                      <p className="font-body-md text-body-md text-on-surface">
                        github.com/noorfatima
                      </p>
                    </div>
                  </a>
                </div>
              </section>

              <div className="rounded-xl border border-border bg-surface p-8 shadow-sm">
                <h4 className="mb-4 font-headline-h3 text-headline-h3 text-on-surface">
                  Location
                </h4>
                <p className="mb-6 font-body-md text-body-md text-text-secondary">
                  Working remotely and collaborating globally from London, United
                  Kingdom.
                </p>
                <div className="relative h-48 overflow-hidden rounded-lg border border-border-strong">
                  <Image
                    alt="London skyline"
                    className="h-full w-full object-cover opacity-50 grayscale"
                    height={300}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8Zx1sgkEnjN2zJpR5pkE7jdbzH0u1E_KKQ4_mgZ2CkLiC8FINuxFjFRTtNwxwDOZ5xdYsqqV0MwzvEJ-rMiNj4DcFWzMCMUtGeNbsINn1C47fqs5Y9zccjkzZ8ONc82zYe68Ch1T68cIbdBvU885aPiSKB_k06YEJ9Epc3Ox5HHIt86OMPHwwBrI0ce3PQgZHtb71be4oKh9W2rtbrewGbO7rvz_e3IiWLrqB9ky0xalOAL3ISKdmLXdAGDCrIJ0Ys49Ycu365JAy"
                    width={500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-border bg-surface-dim/80 px-3 py-1 backdrop-blur">
                    <MaterialIcon
                      name="location_on"
                      className="text-[16px] text-primary"
                    />
                    <span className="text-[12px] font-semibold text-on-surface">
                      {siteConfig.location}
                    </span>
                  </div>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <div className="rounded-xl border border-border bg-surface p-8 shadow-sm md:p-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer variant="standard" />
    </div>
  );
}
