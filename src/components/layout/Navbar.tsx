"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNavigation, standardNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { MobileNav } from "@/components/layout/MobileNav";

type NavbarVariant = "home" | "standard" | "certifications" | "project-detail";

type NavbarProps = {
  variant?: NavbarVariant;
};

export function Navbar({ variant = "standard" }: NavbarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems =
    variant === "home" ? mainNavigation : standardNavigation;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  if (variant === "home") {
    return (
      <>
        <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1120px] items-center justify-between px-gutter py-stack-md">
            <Link
              href="/"
              className="font-headline-sm text-headline-sm font-semibold text-on-surface"
            >
              {siteConfig.name}
            </Link>
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-body-md text-body-md transition-all duration-200 ${
                    isActive(item.href)
                      ? "font-semibold text-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={siteConfig.resumeUrl}
                className="rounded-lg bg-primary-container px-6 py-2 font-label-md text-label-md text-on-primary-container transition-all duration-200 hover:brightness-110"
              >
                Resume
              </a>
            </div>
            <button
              type="button"
              className="text-on-surface md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <MaterialIcon name="menu" />
            </button>
          </div>
        </nav>
        <MobileNav
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          items={navItems}
        />
      </>
    );
  }

  if (variant === "certifications") {
    return (
      <>
        <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex h-20 max-w-[1120px] items-center justify-between px-gutter">
            <Link
              href="/"
              className="font-headline-sm text-headline-sm text-on-background"
            >
              {siteConfig.name}
            </Link>
            <div className="hidden items-center space-x-stack-lg md:flex">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-label-md text-label-md transition-colors duration-200 ${
                    isActive(item.href)
                      ? "font-semibold text-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.resumeUrl}
                className="hidden rounded-lg bg-primary-container px-6 py-2.5 font-label-md text-label-md text-on-primary-container transition-custom hover:opacity-90 active:scale-95 md:inline-block"
              >
                Download Resume
              </a>
              <button
                type="button"
                className="text-on-background md:hidden"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <MaterialIcon name="menu" />
              </button>
            </div>
          </div>
        </nav>
        <MobileNav
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          items={mainNavigation}
        />
      </>
    );
  }

  if (variant === "project-detail") {
    return (
      <>
        <nav className="fixed top-0 z-50 w-full border-b border-outline-variant bg-background">
          <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6">
            <Link
              href="/"
              className="font-headline-sm text-headline-sm font-bold text-on-background"
            >
              {siteConfig.name}
            </Link>
            <div className="hidden items-center gap-8 md:flex">
              {standardNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-body-md text-body-md transition-all duration-200 ${
                    isActive(item.href)
                      ? "border-b-2 border-primary pb-1 font-bold text-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-4 rounded bg-primary-container px-6 py-2 font-label-md text-label-md text-on-primary-container transition-all hover:opacity-90"
              >
                Hire Me
              </Link>
            </div>
            <button
              type="button"
              className="text-on-background md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <MaterialIcon name="menu" />
            </button>
          </div>
        </nav>
        <MobileNav
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          items={[...standardNavigation, { label: "Hire Me", href: "/contact" }]}
        />
      </>
    );
  }

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-border border-border-strong bg-background">
        <div className="mx-auto flex h-16 max-w-container-max items-center justify-between px-gutter">
          <Link
            href="/"
            className="font-headline-h3 text-headline-h3 tracking-tighter text-on-surface"
          >
            {siteConfig.name}
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {standardNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-body-md text-body-md transition-colors ${
                  isActive(item.href)
                    ? "border-b-2 border-primary pb-1 font-semibold text-primary"
                    : "text-text-secondary hover:text-on-surface"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.resumeUrl}
              className="rounded-lg bg-primary-container px-6 py-2 font-semibold text-on-primary-container transition-transform hover:scale-95"
            >
              Resume
            </a>
          </div>
          <button
            type="button"
            className="text-on-surface md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <MaterialIcon name="menu" />
          </button>
        </div>
      </nav>
      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={standardNavigation}
      />
    </>
  );
}
