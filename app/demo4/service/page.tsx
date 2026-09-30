import type { Metadata } from "next";
import Link from "next/link";
import { Demo3HomeEnding } from "@/components/demo3/Demo3HomeEnding";
import { Demo4PageHero } from "@/components/demo4/Demo4PageHero";
import { FloatingMenu } from "@/components/FloatingMenu";
import { OfficeAdvisor } from "@/components/OfficeAdvisor";
import { ScrollEffects } from "@/components/ScrollEffects";
import { SiteHeader } from "@/components/SiteHeader";
import styles from "./service.module.css";

export const metadata: Metadata = {
  title: "サービス案内｜アルファコミュニケーションズ株式会社",
  description: "オフィスインフラ、経営支援 AXCEL、AIプロダクトの3つのサービスで、仕事と経営のお悩みにお応えします。",
};

const categories = [
  { no: "01", title: "オフィスインフラ", description: "電話・複合機・ネットワーク・防犯", href: "#office-infrastructure" },
  { no: "02", title: "経営支援 AXCEL", description: "売上・新規事業・人材・社内規定", href: "#axcel" },
  { no: "03", title: "AIプロダクト", description: "事務作業を減らすAIツール", href: "#ai-products" },
];

const concerns = [
  { no: "01", tag: "オフィスインフラ", title: "古くなった電話・複合機を見直したい", service: "ビジネスインフラ", href: "/demo4/service/category/business_support", tone: "office" },
  { no: "02", tag: "オフィスインフラ", title: "通信が遅くて、仕事が止まる", service: "ITインフラ", href: "/demo4/service/category/it_support", tone: "office" },
  { no: "03", tag: "オフィスインフラ", title: "セキュリティ対策が十分か分からない", service: "ITインフラ", href: "/demo4/services/security", tone: "office" },
  { no: "04", tag: "AXCEL", title: "売上を伸ばしたい、新しい事業を始めたい", service: "経営支援 AXCEL", href: "/demo4/service/axcel", tone: "axcel" },
  { no: "05", tag: "AXCEL", title: "人が採れない、社内のルールが整っていない", service: "経営支援 AXCEL", href: "/demo4/service/axcel", tone: "axcel" },
  { no: "06", tag: "AIプロダクト", title: "手作業の事務を、もっと減らしたい", service: "AIプロダクト", href: "/demo4/service/ai-products", tone: "ai" },
];

const officeServices = [
  { no: "01", en: "BUSINESS", title: "ビジネスインフラ", lead: "仕事の土台を、もっと使いやすく", body: "ビジネスフォンや複合機など、毎日の仕事に欠かせない環境を整えます。", tags: ["ビジネスフォン", "複合機・コピー機"], href: "/demo4/service/category/business_support" },
  { no: "02", en: "IT", title: "ITインフラ", lead: "つながる環境を、安全で快適に", body: "ネットワークやセキュリティを整備し、安全で快適な業務を支えます。", tags: ["ネットワーク", "セキュリティ"], href: "/demo4/service/category/it_support" },
  { no: "03", en: "OFFICE", title: "幅広いオフィス支援", lead: "オフィス全体を、ひとつの窓口で", body: "防犯カメラ、OA機器、導入後の保守まで幅広く対応します。", tags: ["防犯カメラ", "OA機器", "保守"], href: "/demo4/service/category/top_support" },
];

const axcelFlow = [
  ["01", "定期訪問", "専門スタッフが定期的にうかがい、現状をお聞きします。"],
  ["02", "課題の整理", "売上・人材・制度など、優先して取り組む課題を決めます。"],
  ["03", "施策の実行", "計画づくりから実行まで、社内のみなさんと一緒に進めます。"],
  ["04", "振り返り", "成果を確認し、次の訪問でさらに磨き込みます。"],
];

const aiServices = [
  { no: "01", category: "導入支援", title: "AI導入・活用研修", body: "AIの基本から実務での使い方まで、社内で活用できる形に整えます。", forWhom: "AIを何から始めるべきか分からない", href: "/demo4/service/ai-products" },
  { no: "02", category: "業務改善", title: "事務作業の自動化", body: "繰り返し発生する入力や集計を見直し、日々の作業時間を減らします。", forWhom: "手入力や定型作業に時間がかかっている", href: "/demo4/service/ai-products" },
  { no: "03", category: "活用相談", title: "AI活用サポート", body: "業務内容をうかがい、現場に合うツールと使い方をご提案します。", forWhom: "自社に合うAIツールを選びたい", href: "/demo4/service/ai-products" },
];

export default function Demo4ServicePage() {
  return (
    <main className={styles.page} id="top">
      <SiteHeader demo4 />
      <Demo4PageHero
        title="サービス"
        description={<>オフィスの環境から、経営の悩みまで。<br/>3つのサービスで、ひとつの窓口としてお応えします。</>}
        tagline={["BUSINESS", "SUPPORT", "FOR A", "BETTER TOMORROW"]}
      />

      <nav className={styles.categoryNav} aria-label="サービスカテゴリー">
        {categories.map((category) => (
          <Link href={category.href} key={category.no}>
            <span>{category.no}</span>
            <div><strong>{category.title}</strong><small>{category.description}</small></div>
            <i aria-hidden="true">↓</i>
          </Link>
        ))}
      </nav>

      <section className={styles.concerns}>
        <div className={`${styles.concernHead} revealUp`} data-reveal>
          <div><p>FIND BY CONCERN</p><h2>気になることから<br/><strong>探せます</strong></h2></div>
          <p>当てはまるものを選ぶと、該当するサービスへご案内します。</p>
        </div>
        <div className={styles.concernGrid}>
          {concerns.map((concern) => (
            <Link href={concern.href} className={`${styles.concernCard} revealUp`} data-reveal key={concern.no}>
              <small>CASE {concern.no}</small>
              <span className={styles[concern.tone]}>{concern.tag}</span>
              <h3>{concern.title}</h3>
              <p>{concern.service}</p>
              <i aria-hidden="true">→</i>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.officeSection} id="office-infrastructure">
        <span className={styles.sectionWord} aria-hidden="true">INFRASTRUCTURE</span>
        <header className={`${styles.serviceHeading} revealUp`} data-reveal>
          <strong>01</strong>
          <div><p>OFFICE INFRASTRUCTURE</p><h2>働く環境を整える<br/><em>オフィスインフラ</em></h2></div>
          <p>機器の選定・導入から、導入後の保守まで。毎日の仕事の土台を整えます。</p>
        </header>
        <div className={styles.officeGrid}>
          {officeServices.map((service) => <Link href={service.href} className={`${styles.officeCard} revealUp`} data-reveal key={service.no}>
            <div className={styles.officeImage} aria-hidden="true"><span>IMAGE</span></div>
            <div className={styles.officeCardBody}><small>{service.no} / {service.en}</small><h3>{service.title}</h3><strong>{service.lead}</strong><p>{service.body}</p><ul>{service.tags.map(tag => <li key={tag}>{tag}</li>)}</ul><i aria-hidden="true">→</i></div>
          </Link>)}
        </div>
      </section>

      <section className={styles.axcelSection} id="axcel">
        <span className={styles.axcelWord} aria-hidden="true">ECHO LOOP</span>
        <div className={styles.axcelMain}>
          <div className={`${styles.axcelCopy} revealUp`} data-reveal><div className={styles.axcelMeta}><span>SERVICE 02</span><span>MANAGEMENT SUPPORT</span></div><strong className={styles.axcelLogo}>AXCEL</strong><p className={styles.axcelFormula}>Alpha × Consultant Echo Loop</p><h2>専門知識を結集し<br/><em>経営効率化を促進</em></h2><p>専門知識を持つスタッフが定期的に訪問し、売上拡大や新規事業、人材確保、社内規定の策定など、経営に関するさまざまな課題をサポートします。</p><ul><li>売上拡大</li><li>新規事業</li><li>人材確保</li><li>社内規定の策定</li></ul><Link href="/demo4/service/axcel">AXCELについて <i aria-hidden="true">→</i></Link></div>
          <div className={`${styles.axcelImage} revealUp`} data-reveal aria-hidden="true"><span>IMAGE</span></div>
        </div>
        <div className={styles.supportFlow}><p>SUPPORT FLOW <span>↻ LOOP</span></p><div>{axcelFlow.map(([no,title,text]) => <article className="revealUp" data-reveal key={no}><small>STEP {no}</small><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className={styles.aiSection} id="ai-products">
        <span className={styles.aiWord} aria-hidden="true">AI PRODUCTS</span>
        <header className={`${styles.serviceHeading} revealUp`} data-reveal>
          <strong>03</strong>
          <div><p>AI PRODUCTS</p><h2>仕事を軽くする<br/><em>AIプロダクト</em></h2></div>
          <p>毎日の事務作業をAIに任せて、人にしかできない仕事に時間を使えるようにします。</p>
        </header>
        <div className={styles.aiGrid}>
          {aiServices.map((service) => <Link href={service.href} className={`${styles.aiCard} revealUp`} data-reveal key={service.no}>
            <div className={styles.aiImage} aria-hidden="true"><span>IMAGE</span></div>
            <div className={styles.aiCardBody}><div><small>AI {service.no}</small><span>{service.category}</span></div><h3>{service.title}</h3><p>{service.body}</p><strong><b>こんな方に</b> {service.forWhom}</strong><em>詳しく見る</em><i aria-hidden="true">→</i></div>
          </Link>)}
          <Link href="/demo4/contact" className={`${styles.consultCard} revealUp`} data-reveal><small>CONSULT</small><h3>どれが合うか<br/>分からない方へ</h3><p>業務内容をうかがって、<br/>合うツールをご提案します。</p><i aria-hidden="true">→</i></Link>
        </div>
      </section>

      <Demo3HomeEnding whiteContact />
      <OfficeAdvisor />
      <FloatingMenu demo4 />
      <ScrollEffects />
    </main>
  );
}
