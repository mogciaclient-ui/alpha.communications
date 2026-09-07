"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const flowingTargets = document.querySelectorAll<HTMLElement>("[data-scroll-flow]");
    targets.forEach((target) => target.classList.add("revealReady"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const repeats = Boolean(entry.target.closest(".securityLanding"));
          if (entry.isIntersecting) {
            entry.target.classList.add("isVisible");
            if (!repeats) observer.unobserve(entry.target);
          } else if (repeats) {
            entry.target.classList.remove("isVisible");
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px 8% 0px" },
    );

    targets.forEach((target) => observer.observe(target));

    let frame = 0;
    const updateFlow = () => {
      flowingTargets.forEach((target) => {
        const section = target.parentElement;
        if (!section) return;
        const progress = Math.max(0, Math.min(1.4, -section.getBoundingClientRect().top / section.offsetHeight));
        target.style.setProperty("--scroll-flow-x", `${progress * -260}px`);
      });
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateFlow);
    };
    updateFlow();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
