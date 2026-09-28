import { FloatingMenu } from "@/components/FloatingMenu";
import { ScrollEffects } from "@/components/ScrollEffects";
import { SiteHeader } from "@/components/SiteHeader";
import { Demo3HomeEnding } from "@/components/demo3/Demo3HomeEnding";

function Visual({ label }: { label: string }) {
  return <div className="oasysSupportVisual" role="img" aria-label={`${label}の画像プレースホルダー`}><span>IMAGE</span><strong>{label}</strong><small>イラスト・図版を配置</small></div>;
}

const challenges = [
  ["01", "売上拡大", "現状の課題を整理し、利益につながる改善や新しい取り組みを一緒に考えます。"],
  ["02", "新規事業", "構想段階のアイデアから実行に向けた準備まで、必要な情報と進め方を整理します。"],
  ["03", "人材確保", "採用や人材定着に関する悩みを伺い、会社に合った対策を検討します。"],
  ["04", "社内規定の策定", "働き方や会社の状況に合わせ、社内制度・規定づくりを支援します。"],
];

export default function AxcelPage() {
  return <main className="oasysSupportPage">
    <SiteHeader demo4/>
    <section className="oasysSupportHero">
      <div className="oasysSupportHeroCopy"><p>MANAGEMENT SUPPORT</p><h1><span className="oasysSupportHeroLine">経営支援サービス</span><br/><span>AXCEL</span></h1><strong>先進技術と専門知識で、お客様の利益に貢献します</strong></div>
      <div className="oasysSupportHeroWord" data-scroll-flow aria-hidden="true">AXCEL</div>
    </section>
    <section className="oasysSupportAbout" id="about">
      <div className="oasysSupportHeading revealUp" data-reveal><p>ABOUT AXCEL</p><h2>経営効率化を促進する<br/><span>伴走型の経営支援</span></h2></div>
      <div className="oasysSupportAboutGrid"><Visual label="AXCEL 経営支援イメージ"/><div><p>限られた時間の中で高い生産性を生み出すには、企業が本来のコア業務に集中できる環境づくりが大切です。AXCELでは、専門知識を持つスタッフが定期的に訪問し、経営課題を伺いながら改善に向けた支援を行います。</p><dl><div><dt>定期訪問</dt><dd>専門スタッフが継続的に状況を確認</dd></div><div><dt>課題整理</dt><dd>経営に関する悩みを分かりやすく整理</dd></div><div><dt>伴走支援</dt><dd>課題に応じた解決策を一緒に検討</dd></div></dl></div></div>
    </section>
    <section className="oasysSupportProblems">
      <div className="oasysSupportHeading"><p>MANAGEMENT CHALLENGES</p><h2>ビジネスのさまざまな課題を<br/>AXCELにご相談ください</h2></div>
      <div className="oasysSupportProblemGrid">{challenges.slice(0, 3).map(([no, title]) => <article key={no}><span>{no}</span><p>{title}</p></article>)}</div>
      <Visual label="経営課題を整理する相談イメージ"/>
      <strong className="oasysSupportSolution">専門スタッフが、解決への道筋を一緒に考えます。</strong>
    </section>
    <section className="oasysSupportServices" id="support">
      <div className="oasysSupportHeading"><p>SUPPORT AREAS</p><h2>AXCELが支援する経営課題</h2></div>
      <div className="oasysSupportServiceList">{challenges.map(([no, title, text], index) => <article className={index % 2 ? "isReverse" : ""} key={no}><Visual label={`${title} 支援イメージ`}/><div><span>{no} / MANAGEMENT SUPPORT</span><p>経営課題に合わせた簡易相談サービス</p><h3>{title}</h3><p>{text}</p><ul><li>現状確認</li><li>課題整理</li><li>改善提案</li><li>継続フォロー</li></ul></div></article>)}</div>
    </section>
    <section className="oasysSupportFlow" id="flow">
      <div className="oasysSupportHeading"><p>SUPPORT FLOW</p><h2>ご相談から支援まで</h2></div>
      <ol>{[
        ["01", "お問い合わせ", "まずは現在のお悩みをお聞かせください。"],
        ["02", "ヒアリング", "専門スタッフが経営状況や課題を確認します。"],
        ["03", "課題整理・ご提案", "優先順位を整理し、必要な支援をご提案します。"],
        ["04", "定期訪問・伴走支援", "継続的に訪問し、改善の実行を支えます。"],
      ].map(([no, title, text]) => <li key={no}><span>STEP {no}</span><h3>{title}</h3><p>{text}</p><Visual label={`${title} イラスト`}/></li>)}</ol>
    </section>
    <Demo3HomeEnding whiteContact/>
    <FloatingMenu demo4/><ScrollEffects/>
  </main>;
}
