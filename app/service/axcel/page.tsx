import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteEnding } from "@/components/site/SiteEnding";
import { FloatingMenu } from "@/components/FloatingMenu";
import { OfficeAdvisor } from "@/components/OfficeAdvisor";
import { ScrollEffects } from "@/components/ScrollEffects";
import styles from "./axcel.module.css";

export const metadata: Metadata = {
  title: { absolute: "経営支援 AXCEL｜アルファコミュニケーションズ株式会社" },
  description: "情報通信と情報活用を軸に、中小企業の経営課題へ継続して伴走するAXCELのサービスをご紹介します。",
};

const baseServices = [
  { no: "01", label: "REGULAR VISIT", title: "定期訪問・DXアドバイザー", text: "定期訪問を通じて、課題の可視化から改善提案、効果測定まで伴走します。有資格のDXアドバイザーが現状に合う解決策を提案し、経営課題の根本解決と着実なデジタル化を支えます。" },
  { no: "02", label: "REMOTE SUPPORT", title: "遠隔での即時ITサポート", text: "専門オペレーターが画面共有と通話を通じてリアルタイムにサポート。ツールの操作方法から日々のトラブルまで迅速に解消し、業務を止めないITサポート環境を整えます。" },
  { no: "03", label: "ICON KARTE", title: "アイコンカルテ", text: "PCやルーターなど、社内ネットワーク接続機器の状態と稼働状況を収集・分析。ネットワーク健康診断として可視化し、障害やリスクの早期発見と安定運用につなげます。" },
];

const solutions = [
  { no: "01", title: "財務支援", text: "情報分析プラットフォーム「きづなPARK」を活用して経営情報を数値化・財務分析。次の一手に向けた改善アドバイスまで伴走し、持続可能な財務基盤づくりを支援します。" },
  { no: "02", title: "セキュリティ対策", text: "ツールの導入から社内ルールの策定、社員への意識教育まで総合的にサポート。情報漏洩を防ぎ、顧客や取引先から信頼され続ける企業基盤を整えます。" },
  { no: "03", title: "業務改善", text: "業務プロセスの可視化とフロー整理を一貫して支援。現場のムダや属人化を解消し、社員が本来のコア業務に集中できる生産性の高い組織をつくります。" },
  { no: "04", title: "売上拡大", text: "デジタルを活用した戦略立案から施策実行まで伴走。最適なツールとアプローチを提案し、新規獲得やリピート向上につながる仕組みづくりを支援します。" },
  { no: "05", title: "ホームページ・SNS", text: "Webサイト・SNSの制作から運用、効果測定まで一貫して支援。アクセスやコンテンツを分析し、自社の魅力を正しく届ける情報発信を整えます。" },
];

const flow = ["初回ヒアリング", "現状の見える化", "改善のご提案", "定期訪問で振り返り"];

export default function AxcelPage() {
  return <main id="top" className={styles.page}>
    <SiteHeader demo4 />
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p>MANAGEMENT SUPPORT</p>
        <strong>AXCEL</strong>
        <h1>先進技術と専門知識を結集させ、<br/><em>お客様の利益に貢献する</em><br/>経営支援サービス</h1>
        <span>Alpha × Consultant Echo Loop</span>
      </div>
      <div className={styles.heroVisual} aria-hidden="true">
        <div className={styles.visualHeading}><small>AXCEL FRAMEWORK</small><strong>経営を前へ進める<br/>3つの支援領域</strong></div>
        <div className={styles.visualLayers}>
          <div><small>01</small><span>INFORMATION<br/>COMMUNICATION</span><b>情報通信</b></div>
          <div><small>02</small><span>INFORMATION<br/>UTILIZATION</span><b>情報活用</b></div>
          <div><small>03</small><span>MANAGEMENT<br/>SUPPORT</span><b>経営支援</b></div>
        </div>
        <p><span>CONNECT</span><i>→</i><span>ANALYZE</span><i>→</i><span>IMPROVE</span></p>
      </div>
      <a className={styles.scroll} href="#about">SCROLL <i>↓</i></a>
    </section>

    <section id="about" className={styles.about}>
      <div className={styles.sectionLabel}><small>01</small><span>ABOUT AXCEL</span></div>
      <div className={styles.aboutCopy}>
        <p>AXCELサービスとは</p>
        <h2>情報通信と情報活用で、<br/><em>経営に伴走する。</em></h2>
        <div><p>AXCELは「情報通信」と「情報活用」を軸に、中小企業の経営に伴走するコンサルティングサービスです。5つの注力分野を通じて「売上拡大」「業務効率化」「リスク回避」の3つの利益を創出します。</p><p>ITの専門家が、デジタルツールの導入・活用支援からトラブル解決までワンストップで対応。導入後の定期保守に加え、ウイルス感染やPC・周辺機器の不具合まで迅速にサポートし、安心・安全なIT環境を実現します。</p></div>
      </div>
      <div className={styles.benefits}><span>売上拡大</span><span>業務効率化</span><span>リスク回避</span></div>
    </section>

    <section className={styles.base}>
      <header><div className={styles.sectionLabel}><small>02</small><span>BASE SERVICE</span></div><div><p>基本サービス</p><h2>いつでも相談できる、<br/><em>継続支援の仕組み。</em></h2></div></header>
      <div className={styles.baseGrid}>{baseServices.map(item => <article key={item.no}><small>{item.no} / {item.label}</small><div aria-hidden="true"><span>{item.no}</span></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
    </section>

    <section className={styles.solutions}>
      <header><div className={styles.sectionLabel}><small>03</small><span>SOLUTIONS</span></div><div><p>AXCELのソリューション</p><h2>会社ごとに違う課題へ、<br/><em>必要な支援を組み合わせる。</em></h2></div></header>
      <div className={styles.solutionGrid}>{solutions.map(item => <article key={item.no}><small>{item.no}</small><h3>{item.title}</h3><p>{item.text}</p><i aria-hidden="true">↗</i></article>)}</div>
      <p className={styles.note}>※添付資料に掲載されている5項目を掲載しています。</p>
    </section>

    <section className={styles.flow}>
      <header><div className={styles.sectionLabel}><small>04</small><span>SUPPORT FLOW</span></div><div><p>サポートの流れ</p><h2>改善を一度で終わらせず、<br/><em>定期訪問でくり返す。</em></h2></div></header>
      <ol>{flow.map((item,index)=><li key={item}><small>STEP {String(index+1).padStart(2,"0")}</small><strong>{item}</strong>{index<flow.length-1&&<i aria-hidden="true">→</i>}</li>)}</ol>
      <div className={styles.loop}><span>HEARING</span><i>→</i><span>VISUALIZE</span><i>→</i><span>IMPROVE</span><i>→</i><span>REVIEW</span><b>↻</b></div>
      <Link href="/contact">AXCELについて相談する <span>→</span></Link>
    </section>

    <SiteEnding whiteContact />
    <OfficeAdvisor/><FloatingMenu demo4/><ScrollEffects/>
  </main>;
}
