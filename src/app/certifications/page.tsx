import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { certifications } from "@/data/certifications";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Certifications",
  description:
    "Certifications and learning milestones that reflect technical growth and ongoing development direction.",
  path: "/certifications",
});

export default function CertificationsPage() {
  return (
    <div className="theme-certifications bg-background font-body-md text-on-background selection:bg-primary/30">
      <Navbar variant="certifications" />
      <main className="pb-section-padding pt-32">
        <div className="mx-auto max-w-[1120px] px-gutter">
          <header className="mb-16 max-w-2xl">
            <h1 className="mb-stack-md font-display-lg text-display-lg-mobile md:text-display-lg">
              Certifications
            </h1>
            <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
              Certifications and learning milestones that reflect my technical
              growth and ongoing development direction.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="card-hover transition-custom flex h-full flex-col rounded-[14px] border border-outline-variant/30 bg-surface-container-low p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container-highest">
                  <MaterialIcon
                    name={cert.icon}
                    className="text-3xl text-primary"
                  />
                </div>
                <h3 className="mb-2 font-headline-sm text-headline-sm text-on-surface">
                  {cert.title}
                </h3>
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-label-md text-label-md text-primary">
                    {cert.issuer}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant/60">
                    {cert.issueDate}
                  </span>
                </div>
                <p className="mb-8 flex-grow font-body-md text-body-md text-on-surface-variant">
                  {cert.description}
                </p>
                <a
                  href={cert.credentialUrl ?? "#"}
                  className="group inline-flex items-center font-label-md text-label-md text-primary transition-colors hover:text-primary/80"
                >
                  View Credential
                  <MaterialIcon
                    name="open_in_new"
                    className="ml-2 text-sm transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer variant="certifications" />
    </div>
  );
}
