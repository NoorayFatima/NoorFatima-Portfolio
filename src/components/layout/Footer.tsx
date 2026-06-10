import { socialLinks } from "@/data/socials";
import { siteConfig } from "@/data/site";

type FooterVariant = "home" | "standard" | "project-detail" | "certifications";

type FooterProps = {
  variant?: FooterVariant;
};

export function Footer({ variant = "standard" }: FooterProps) {
  if (variant === "home") {
    return (
      <footer className="mt-24 border-t border-outline-variant/30 bg-surface">
        <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between px-gutter py-stack-lg md:flex-row">
          <div className="mb-8 md:mb-0">
            <span className="mb-2 block font-headline-sm text-headline-sm text-on-surface">
              {siteConfig.name}
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant/60">
              {siteConfig.copyright}
            </p>
          </div>
          <div className="flex gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                className="font-body-md text-body-md text-on-surface-variant transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    );
  }

  if (variant === "project-detail") {
    return (
      <footer className="mt-section-padding border-t border-outline-variant bg-background">
        <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between px-6 py-stack-lg md:flex-row">
          <div className="mb-4 md:mb-0">
            <span className="font-headline-sm text-headline-sm font-bold text-on-background">
              {siteConfig.name}
            </span>
            <p className="mt-2 text-sm text-on-surface-variant">
              © 2024 {siteConfig.name}. All rights reserved.
            </p>
          </div>
          <div className="flex gap-8">
            {socialLinks.slice(0, 3).map((link) => (
              <a
                key={link.platform}
                href={link.url}
                className="font-body-md text-body-md text-on-surface-variant transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    );
  }

  if (variant === "certifications") {
    return (
      <footer className="border-t border-outline-variant/30 bg-background">
        <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between px-gutter py-section-padding md:flex-row">
          <div className="mb-8 md:mb-0">
            <span className="font-label-md text-label-md text-on-background">
              {siteConfig.name}
            </span>
            <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
              © 2024 {siteConfig.name}. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-8">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                className="font-body-md text-body-md text-on-surface-variant opacity-80 transition-colors hover:text-primary hover:opacity-100"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full border-t border-border border-border-strong bg-surface-container-lowest py-section-desktop">
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-8 px-gutter md:flex-row">
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-2 font-headline-h3 text-headline-h3 text-on-surface">
            {siteConfig.name}
          </div>
          <div className="font-body-sm text-body-sm text-text-muted">
            {siteConfig.copyright}
          </div>
        </div>
        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              className="font-body-sm text-body-sm text-text-muted opacity-80 transition-colors hover:text-on-surface hover:text-primary hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
