import { FloatingMenu } from "@/components/FloatingMenu";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { ScrollEffects } from "@/components/ScrollEffects";
import { SiteHeader } from "@/components/SiteHeader";
import { ContactSection } from "@/components/ContactSection";
function Arrow(){return <span className="arrow" aria-hidden="true">→</span>}
function Pic({label}:{label:string}){return <div className="placeholder oasysPagePic" role="img" aria-label={`${label}画像プレースホルダー`}><span className="placeholderMark">IMAGE</span><strong>{label}</strong><small>画像・イラストを配置</small></div>}
export default function OasysPage(){return <main className="oasysPage">
  <SiteHeader/>
  <section className="oasysPageHero"><div><p className="enTitle">OASYS SOLUTION</p><h1>オフィスの安心を<br/>ひとつに</h1><p>通信・セキュリティ・保守をまとめて支える<br/>法人向けオフィスソリューション</p><PageBreadcrumb current="OASYS" parents={[{label:"サービス案内",href:"/service"}]}/></div><Pic label="OASYS メインイメージ"/></section>
  <section className="oasysAbout"><div className="revealUp" data-reveal><p className="enTitle">ABOUT OASYS</p><h2>OASYSとは？</h2><p>複雑になりがちなオフィスの通信環境やセキュリティ、機器の保守をひとつの窓口にまとめるサービスです。現在の課題を丁寧に整理し、企業規模や働き方に合った環境をご提案します。</p></div><Pic label="OASYS サービス構成図"/></section>
  <section className="oasysBenefits"><p className="enTitle">BENEFITS</p><h2>導入メリット</h2><div>{[["01","窓口を一本化"],["02","コストを最適化"],["03","トラブルへ迅速対応"]].map(([no,title])=><article className="revealUp" data-reveal key={no}><span>{no}</span><Pic label={`${title} イメージ`}/><h3>{title}</h3><p>導入前のご相談から設置、運用後のサポートまで一貫して対応します。</p></article>)}</div></section>
  <section className="oasysRecommend"><div><p className="enTitle">RECOMMENDED</p><h2>こんなお客様に<br/>おすすめです</h2></div><ul><li>通信機器や契約先が増えて管理が複雑</li><li>ネットワークやセキュリティに不安がある</li><li>オフィス全体のコストを見直したい</li><li>トラブル時にすぐ相談できる会社がほしい</li></ul></section>
  <section className="oasysPrice"><p className="enTitle">PRICE</p><h2>料金について</h2><div><strong>お客様ごとに最適なお見積りをご提案します</strong><p>ご利用人数、拠点数、現在の設備や必要なサポート内容を確認したうえでご案内します。</p><a href="/contact">無料で相談する <Arrow/></a></div></section>
  <section className="oasysFlow"><p className="enTitle">FLOW</p><h2>導入の流れ</h2><ol>{["お問い合わせ","ヒアリング・現地調査","ご提案・お見積り","導入・設定","運用・保守"].map((x,i)=><li key={x}><span>{String(i+1).padStart(2,"0")}</span><strong>{x}</strong></li>)}</ol></section>
  <section className="oasysFaq"><p className="enTitle">FAQ</p><h2>よくある質問</h2>{["相談だけでも可能ですか？","現在使用中の機器を活かせますか？","導入後の保守にも対応していますか？"].map((q,i)=><details key={q}><summary><span>Q{String(i+1).padStart(2,"0")}</span>{q}</summary><p>はい。現在の環境とご要望を確認し、必要な範囲からご提案します。</p></details>)}</section>
  <ContactSection title={<>OASYSについて<br/>お気軽にご相談ください</>} description="オフィスのお困りごとをまとめてお伺いします。"/>
  <FloatingMenu/><ScrollEffects/>
</main>}
