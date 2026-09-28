import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Demo3HomeEnding } from "@/components/demo3/Demo3HomeEnding";
import { FloatingMenu } from "@/components/FloatingMenu";
import { OfficeAdvisor } from "@/components/OfficeAdvisor";
import { SiteHeader } from "@/components/SiteHeader";
import styles from "./service.module.css";

export const metadata: Metadata = {
  title: "サービス案内｜アルファコミュニケーションズ株式会社",
  description: "通信機器、ITインフラ、セキュリティ、導入後のサポートまで、オフィス全体をひとつの窓口で支援します。",
};

const concerns = [
  ["01", "電話・複合機", "古くなった機器を見直したい"],
  ["02", "ネットワーク", "通信が遅く、仕事が止まる"],
  ["03", "セキュリティ", "対策が十分なのか分からない"],
  ["04", "選定・運用", "何から始めるべきか相談したい"],
];

const services = [
  { no: "01", en: "BUSINESS INFRASTRUCTURE", title: "仕事の土台を、もっと使いやすく", body: "ビジネスフォンや複合機など、毎日の業務に欠かせない機器を働き方に合わせて整えます。", links: ["ビジネスフォン", "複合機・コピー機", "AXCEL"], href: "/demo4/service/category/business_support" },
  { no: "02", en: "IT INFRASTRUCTURE", title: "つながる環境を、安全で快適に", body: "ネットワーク構築から情報セキュリティまで、見えにくいITの課題を整理します。", links: ["ネットワーク構築", "セキュリティ", "オフィスIT支援"], href: "/demo4/service/category/it_support" },
  { no: "03", en: "OFFICE SUPPORT", title: "オフィス全体を、ひとつの窓口で", body: "防犯設備やOA機器、導入後の保守まで、必要な支援を横断して組み合わせます。", links: ["防犯カメラ", "その他OA機器", "導入・保守"], href: "/demo4/service/category/top_support" },
];

export default function Demo4ServicePage() {
  return <main className={`${styles.page} demo2ServiceLanding`} id="top">
    <SiteHeader demo4 />

    <section className="d2ServiceHero d2ServiceHeroOffice">
      <div className="d2ServiceHeroCopy">
        <p>SERVICE / OFFICE SOLUTION</p>
        <h1>オフィスの困りごとに<br/><em>答えをひとつずつ</em></h1>
        <span>機器・IT・防犯・導入後のサポートまで。<br/>必要なサービスを、分かりやすく組み合わせます。</span>
        <a href="#service-list">サービスから探す <b aria-hidden="true">→</b></a>
      </div>
      <div className="d2ServiceHeroVisual" aria-hidden="true">
        <div className="d2ServiceHeroImage"><Image src="/demo2/alpha-demo2-service.png" alt="" fill priority sizes="(max-width: 800px) 100vw, 62vw"/></div>
      </div>
    </section>

    <section className={styles.concerns}>
      <header><p>START WITH YOUR CONCERN</p><h2>気になることから<br/><strong>探せます</strong></h2><span>まだ課題がまとまっていなくても大丈夫です。</span></header>
      <div className={styles.concernGrid}>{concerns.map(([no, label, text]) => <a href="#service-list" key={no}><small>{no} / {label}</small><strong>{text}</strong><i aria-hidden="true">↓</i></a>)}</div>
    </section>

    <section className={styles.serviceSection} id="service-list">
      <header><p>OUR SERVICE</p><h2>働く環境を支える<br/><strong>3つの領域</strong></h2><span>領域をまたぐお悩みも、まとめてご相談いただけます。</span></header>
      <div className={styles.serviceList}>{services.map((service) => <Link href={service.href} className={styles.serviceItem} key={service.no}>
        <div className={styles.serviceNo}><strong>{service.no}</strong><small>{service.en}</small></div>
        <div className={styles.serviceIllustration} role="img" aria-label={`${service.title}のイラスト配置エリア`}><span>ILLUSTRATION</span></div>
        <div className={styles.serviceCopy}><h3>{service.title}</h3><p>{service.body}</p><ul>{service.links.map((link) => <li key={link}>{link}</li>)}</ul></div>
        <i className={styles.serviceArrow} aria-hidden="true">↗</i>
      </Link>)}</div>
    </section>

    <section className={styles.pickup}>
      <div><p>PICK UP SERVICE</p><small>04 / SPECIAL SOLUTION</small><h2>複雑な課題をまとめる<br/><strong>AXCEL</strong></h2><span>複数のサービスを組み合わせ、オフィス環境全体を最適化します。</span><Link href="/service/axcel">AXCELについて <i aria-hidden="true">→</i></Link></div>
      <div className={styles.pickupVisual} role="img" aria-label="AXCELのサービス全体を表すイラスト配置エリア"><span>WIDE ILLUSTRATION</span><strong>AXCEL</strong></div>
    </section>

    <section className={styles.supportLinks}>
      <Link href="/demo4/company/features"><small>WHY ALPHA</small><h2>地域に寄り添う<br/>アルファの特徴</h2><span>詳しく見る　→</span></Link>
      <Link href="/demo4/service/after-sales"><small>AFTER SUPPORT</small><h2>導入した後も<br/>ずっと安心</h2><span>詳しく見る　→</span></Link>
    </section>

    <Demo3HomeEnding whiteContact />
    <OfficeAdvisor />
    <FloatingMenu demo4 />
  </main>;
}
