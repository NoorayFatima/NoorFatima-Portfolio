/* "use client";

import { useState } from "react";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

const filters = [
  "All",
  "Featured",
  "Frontend",
  "Full-Stack",
  "AI/ML",
  "Live Demo",
  "GitHub",
];

export function ProjectFilterBar() {
  const [active, setActive] = useState("All");

  return (
    <section className="mx-auto mb-12 max-w-container-max overflow-hidden px-gutter">
      <div className="fade-mask flex gap-chip-gap overflow-x-auto pb-4">
        {filters.map((filter) => {
          const isActive = active === filter;
          const isLiveDemo = filter === "Live Demo";
          const isGitHub = filter === "GitHub";

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`whitespace-nowrap rounded-full border px-6 py-2 font-label-caps text-label-caps transition-all ${
                isActive
                  ? "border-transparent bg-primary-container text-on-primary-container"
                  : "border-border bg-surface-container-low text-text-secondary hover:bg-surface-container-high"
              } ${isLiveDemo || isGitHub ? "flex items-center gap-2" : ""}`}
            >
              {isLiveDemo && (
                <MaterialIcon name="public" className="text-[14px]" />
              )}
              {isGitHub && (
                <MaterialIcon name="code" className="text-[14px]" />
              )}
              {filter}
            </button>
          );
        })}
      </div>
    </section>
  );
}*/

import Link from "next/link";

const filters = [
  { label: "All", value: "all" },
  { label: "Featured", value: "featured" },
  { label: "Frontend", value: "frontend" },
  { label: "Full-Stack", value: "full-stack" },
  { label: "AI/ML", value: "ai-ml" },
  { label: "Live Demo", value: "live-demo" },
];

type ProjectFilterBarProps = {
  activeFilter?: string;
};

export function ProjectFilterBar({
  activeFilter = "all",
}: ProjectFilterBarProps) {
  return (
    <section className="mx-auto mb-10 max-w-container-max px-gutter">
      <div className="flex flex-wrap justify-center gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
            <Link
              key={filter.value}
              href={
                filter.value === "all"
                  ? "/projects"
                  : `/projects?filter=${filter.value}`
              }
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                isActive
                  ? "border-primary bg-primary text-on-primary"
                  : "border-border bg-surface text-text-muted hover:border-border-strong hover:text-on-surface"
              }`}
            >
              {filter.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
}