import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { LogoHero } from "@/components/mein2/LogoHero";
import { VARIANTS, VARIANT_ORDER } from "@/components/mein2/variants";
import styles from "./mein2.module.css";

export const metadata: Metadata = {
  title: "ファーストビュー案（ロゴアニメーション）",
  robots: { index: false, follow: false },
};

export default function Mein2() {
  return (
    <main className={styles.page}>
      <SiteHeader demo4 className="homeHeader" />
      <header className={styles.intro}>
        <p>FIRST VIEW PROPOSALS</p>
        <h1>ファーストビュー案</h1>
        <span>ロゴを使ったファーストビューの案を上から順に並べています。各案は画面に入ったときに最初から再生されます。</span>
        <nav aria-label="案の一覧">
          {VARIANT_ORDER.map((v, i) => (
            <a key={v} href={`#plan-${v}`}>
              案{i + 1}　{VARIANTS[v].label}
            </a>
          ))}
        </nav>
      </header>
      {VARIANT_ORDER.map((v, i) => (
        <section key={v} id={`plan-${v}`} className={styles.item}>
          <div className={styles.label}>
            <b>案{i + 1}</b>
            <strong>{VARIANTS[v].label}</strong>
            <span>{VARIANTS[v].note}</span>
          </div>
          <LogoHero variant={v} />
        </section>
      ))}
    </main>
  );
}
