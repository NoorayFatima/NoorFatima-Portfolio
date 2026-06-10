"use client";

import { useEffect } from "react";

type ScrollRevealProps = {
  selector?: string;
  activeClass?: string;
};

export function ScrollReveal({
  selector = ".reveal, .scroll-reveal, .reveal-on-scroll",
  activeClass = "active",
}: ScrollRevealProps) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(activeClass);
            if (entry.target.classList.contains("scroll-reveal")) {
              entry.target.classList.add("visible");
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    elements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      document.querySelectorAll(".scroll-reveal").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, [selector, activeClass]);

  return null;
}
