import Link from "next/link";
import { Demo3HomeEnding } from "@/components/demo3/Demo3HomeEnding";
import { FloatingMenu } from "@/components/FloatingMenu";
import { OfficeAdvisor } from "@/components/OfficeAdvisor";
import { SiteHeader } from "@/components/SiteHeader";
import styles from "./Demo4ContentPage.module.css";

export type Demo4PageContent = {
  eyebrow: string;
  title: string;
  lead: string;
  description: string;
  visual: string;
  points: Array<{ label: string; title: string; text: string }>;
  cta?: { label: string; href: string };
};

export function Demo4ContentPage({content}:{content:Demo4PageContent}) {
  return <main className={styles.page} id="top">
    <SiteHeader demo4 />
    <section className={styles.hero}>
      <div className={styles.heroCopy}><p>{content.eyebrow}</p><h1>{content.title}</h1><span>{content.lead}</span></div>
      <div className={styles.heroVisual} role="img" aria-label={`${content.title}のイラスト配置エリア`}><small>ILLUSTRATION</small><strong>{content.visual}</strong><span>イラスト配置エリア</span></div>
    </section>
    <section className={styles.intro}>
      <div><p>ABOUT</p><h2>{content.lead}</h2></div>
      <p>{content.description}</p>
    </section>
    <section className={styles.points}>
      {content.points.map((point,index)=><article key={point.label}><span>0{index+1}</span><small>{point.label}</small><h2>{point.title}</h2><p>{point.text}</p><div role="img" aria-label={`${point.title}のイラスト配置エリア`}>ILLUSTRATION</div></article>)}
    </section>
    {content.cta?<section className={styles.cta}><p>NEXT STEP</p><h2>詳しい内容やご相談は<br/>こちらから</h2><Link href={content.cta.href}>{content.cta.label}<span aria-hidden="true">→</span></Link></section>:null}
    <Demo3HomeEnding whiteContact />
    <OfficeAdvisor />
    <FloatingMenu demo4 />
  </main>;
}
