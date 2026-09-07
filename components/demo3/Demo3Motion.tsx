"use client";

import { useEffect } from "react";

export function Demo3Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const updateProgress = () => {
      const max = root.scrollHeight - innerHeight;
      root.style.setProperty("--d3-progress", String(max > 0 ? scrollY / max : 0));
    };

    const animateCounts = (section: Element) => {
      section.querySelectorAll<HTMLElement>("[data-count]").forEach((element) => {
        if (element.dataset.done === "true") return;
        element.dataset.done = "true";
        const target = Number(element.dataset.count || 0);
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / 1100, 1);
          element.textContent = Math.round(
            target * (1 - Math.pow(1 - progress, 3)),
          ).toLocaleString("ja-JP");
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    };

    updateProgress();
    addEventListener("scroll", updateProgress, { passive: true });

    let observer: IntersectionObserver | undefined;
    let secondFrame = 0;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        const sections = document.querySelectorAll("main section");

        // Reset state on every client-side visit so the entrance animation can replay.
        sections.forEach((section) => {
          section.setAttribute("data-d3-reveal", "");
          section.classList.remove("d3-visible");
          section.querySelectorAll<HTMLElement>("[data-count]").forEach((element) => {
            delete element.dataset.done;
            element.textContent = "0";
          });
        });

        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("d3-visible");
              animateCounts(entry.target);
              observer?.unobserve(entry.target);
            });
          },
          { threshold: 0.08, rootMargin: "0px 0px 8% 0px" },
        );

        sections.forEach((section) => observer?.observe(section));
      });
    });

    return () => {
      removeEventListener("scroll", updateProgress);
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
      observer?.disconnect();
    };
  }, []);

  return <div className="d3-progress" aria-hidden="true"><span /></div>;
}
