import Image from "next/image";
import Link from "next/link";
import { ContactSection } from "@/components/demo3/ContactSection";
import { FloatingMenu } from "@/components/demo3/FloatingMenu";
import { ScrollEffects } from "@/components/demo3/ScrollEffects";
import { SiteFooter } from "@/components/demo3/SiteFooter";
import { SiteHeader } from "@/components/demo3/SiteHeader";

const needs = [
  ["01", "電話・複合機", "古くなった機器を見直したい"],
  ["02", "ネットワーク", "通信が遅く仕事が止まる"],
  ["03", "セキュリティ", "対策が十分なのか分からない"],
  ["04", "選定・運用", "何を選べばよいか相談したい"],
];

const services = [
  {
    no: "01",
    en: "BUSINESS INFRASTRUCTURE",
    title: "仕事の土台を\nもっと使いやすく",
    body: "電話や複合機など毎日の業務に欠かせない環境を働き方に合わせて整えます",
    href: "/demo3/service/category/business_support",
    links: ["ビジネスフォン", "複合機・コピー機", "OASYS"],
  },
  {
    no: "02",
    en: "IT INFRASTRUCTURE",
    title: "つながる環境を\n安全で快適に",
    body: "ネットワーク構築から情報セキュリティまで見えにくいITの課題を整理します",
    href: "/demo3/service/category/it_support",
    links: ["ネットワーク構築", "セキュリティ", "オフィスIT支援"],
  },
  {
    no: "03",
    en: "OFFICE SUPPORT",
    title: "オフィス全体を\nひとつの窓口で",
    body: "防犯設備やOA機器 導入後の保守まで必要な支援を横断して組み合わせます",
    href: "/demo3/service/category/top_support",
    links: ["防犯カメラ", "その他OA機器", "導入・保守"],
  },
];

export default function ServicePage() {
  return (
    <main className="d3ServicePage">
      <SiteHeader className="demo3UnifiedHeader" />

      <section className="d3ServiceHero">
        <div className="d3ServiceHeroCopy revealUp" data-reveal>
          <p className="d3ServiceEyebrow">SERVICE / OFFICE SOLUTION</p>
          <h1>オフィスの困りごとに<br /><strong>答えをひとつずつ</strong></h1>
          <p className="d3ServiceLead">機器・IT・防犯・導入後のサポートまで<br />必要なサービスを分かりやすく組み合わせます</p>
          <a className="d3ServiceButton" href="#service-list">サービスから探す <span>→</span></a>
        </div>
        <div className="d3ServiceHeroVisual revealClipRight" data-reveal>
          <Image src="/demo3/demo3-service-bg.png" alt="さまざまなオフィスの課題を検討する人物のイラスト" fill priority sizes="(max-width: 800px) 120vw, 62vw" />
        </div>
      </section>

      <section className="d3ServiceNeeds">
        <header className="revealUp" data-reveal>
          <p>START WITH YOUR CONCERN</p>
          <h2>気になることから<br /><strong>サービスを探せます</strong></h2>
          <span>いま感じている困りごとを選ぶだけで<br />必要なサポートへご案内します</span>
        </header>
        <div className="d3ServiceNeedsGrid">
          {needs.map(([no, title, body]) => (
            <a className="revealUp" data-reveal key={no} href="#service-list">
              <span>{no}</span>
              <div><small>{title}</small><h3>{body}</h3></div>
              <i aria-hidden="true">→</i>
            </a>
          ))}
        </div>
      </section>

      <section className="d3ServiceRoute" id="service-list">
        <div className="d3ServiceRouteHead revealUp" data-reveal>
          <p>OUR SERVICE</p>
          <h2>働く環境を支える<br /><strong>3つのサービス</strong></h2>
          <span>相談内容に合わせて3つの領域を横断してご提案します</span>
        </div>
        <div className="d3ServiceRouteList">
          {services.map((service) => (
            <Link href={service.href} className="d3ServiceRouteItem revealUp" data-reveal key={service.no}>
              <div className="d3ServiceRouteNo"><span>{service.no}</span><small>{service.en}</small></div>
              <div className="d3ServiceRouteCopy">
                <h3>{service.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                <p>{service.body}</p>
              </div>
              <ul>{service.links.map((link) => <li key={link}>{link}</li>)}</ul>
              <i aria-hidden="true">↗</i>
            </Link>
          ))}
        </div>
      </section>

      <section className="d3ServiceLinks">
        <Link href="/demo3/company/features" className="revealUp" data-reveal><small>WHY ALPHA</small><h2>地域に寄り添う<br />アルファの特徴</h2><span>詳しく見る　→</span></Link>
        <Link href="/demo3/service/after-sales" className="revealUp" data-reveal><small>AFTER SUPPORT</small><h2>導入した後も<br />ずっと安心</h2><span>詳しく見る　→</span></Link>
      </section>

      <ContactSection homeStyle title="まずは話すことから" description="まとまっていないお悩みも 一緒に整理します" />
      <SiteFooter pageTopHref="/demo3/service" />
      <FloatingMenu />
      <ScrollEffects />
    </main>
  );
}
