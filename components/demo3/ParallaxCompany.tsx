"use client";

import { useEffect, useRef } from "react";

export function ParallaxCompany() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const company = sectionRef.current?.nextElementSibling as HTMLElement | null;
      const title = company?.querySelector<HTMLElement>(".marquee");
      if (!company || !title) return;
      const rect = company.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      title.style.transform = `translate3d(${-progress * 52}vw, 0, 0)`;
    };
    const requestUpdate = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => { window.removeEventListener("scroll", requestUpdate); window.removeEventListener("resize", requestUpdate); if (frame) cancelAnimationFrame(frame); };
  }, []);

  return <section className="parallaxCompany" ref={sectionRef} aria-label="アルファコミュニケーションズ会社案内イメージ"/>;
}
