"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/types";
import { siteConfig } from "@/data/site";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
};

export function MobileNav({ open, onClose, items }: MobileNavProps) {
  const pathname = usePathname();

  if (!open) return null;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className="fixed inset-0 z-[60] md:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close menu overlay"
      />
      <div className="absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col border-l border-border bg-surface-container-lowest p-gutter shadow-xl">
        <div className="mb-8 flex items-center justify-between">
          <span className="font-headline-h3 text-headline-h3 text-on-surface">
            {siteConfig.name}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="text-on-surface"
            aria-label="Close menu"
          >
            <MaterialIcon name="close" />
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`font-body-md text-body-md py-2 transition-colors ${
                isActive(item.href)
                  ? "font-semibold text-primary"
                  : "text-text-secondary hover:text-on-surface"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={siteConfig.resumeUrl}
          className="mt-8 rounded-lg bg-primary-container px-6 py-3 text-center font-semibold text-on-primary-container"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
