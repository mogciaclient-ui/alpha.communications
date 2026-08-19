"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "alpha-home-intro-seen";

export function HomeIntroLoader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) {
      const hideTimer = window.setTimeout(() => setVisible(false), 0);
      return () => window.clearTimeout(hideTimer);
    }

    document.body.classList.add("isIntroLoading");
    const duration = 2200;
    const startedAt = performance.now();
    let animationFrame = 0;
    let exitTimer = 0;

    const tick = (now: number) => {
      const next = Math.min(100, Math.round(((now - startedAt) / duration) * 100));
      setProgress(next);
      if (next < 100) {
        animationFrame = requestAnimationFrame(tick);
        return;
      }

      sessionStorage.setItem(STORAGE_KEY, "true");
      setExiting(true);
      document.body.classList.remove("isIntroLoading");
      exitTimer = window.setTimeout(() => setVisible(false), 750);
    };

    animationFrame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.clearTimeout(exitTimer);
      document.body.classList.remove("isIntroLoading");
    };
  }, []);

  if (!visible) return null;

  return <div className={`homeIntroLoader${exiting ? " isExiting" : ""}`} role="status" aria-label="ページを読み込んでいます">
    <div className="homeIntroProgress">
      <span className="homeIntroCount">{progress}</span>
      <div className="homeIntroTrack"><i style={{ width: `${progress}%` }} /></div>
    </div>
  </div>;
}
