import Link from "next/link";
import { SiteEnding, SiteFooter } from "@/components/site/SiteEnding";
import { FloatingMenu } from "@/components/FloatingMenu";
import { OfficeAdvisor } from "@/components/OfficeAdvisor";
import { SiteHeader } from "@/components/SiteHeader";
import { Demo4PageHero } from "./Demo4PageHero";
import styles from "./Demo4ContentPage.module.css";
import extra from "./Demo4ContentPageExtra.module.css";
import { Demo4Blocks, type Demo4Block } from "./Demo4Blocks";
import { DEMO4_SERVICE_FLOW, Demo4ServiceDetails, type Demo4RelatedLink, type Demo4ServiceItem } from "./Demo4ServiceDetails";

export type Demo4PageContent={eyebrow:string;title:string;lead:string;description:string;visual:string;breadcrumbLabel?:string;tagline?:string|string[];hideIntro?:boolean;heroOnly?:boolean;points?:Array<{label:string;title:string;text:string}>;cta?:{label:string;href:string};services?:Demo4ServiceItem[];related?:Demo4RelatedLink;blocks?:Demo4Block[]};
const news=[["2026.08.01","お知らせ","夏季休業のお知らせ"],["2025.12.15","お知らせ","年末年始休業のお知らせ"],["2025.08.01","お知らせ","夏季休業のお知らせ"],["2025.04.01","会社情報","Webサイトをリニューアルしました"]];
const offices=["福岡本社","北九州営業所","佐賀営業所","長崎営業所","熊本営業所","鹿児島営業所"];

function SpecialContent({content}:{content:Demo4PageContent}){
  if(content.eyebrow==="NEWS"&&content.title!=="お知らせ")return <article className={extra.newsArticle}><header><time>{content.visual}</time><small>お知らせ</small></header><h2>{content.lead}</h2><p>{content.description}</p><section><h3>休業期間について</h3><p>期間中にいただいたお問い合わせは、営業再開後に順次対応いたします。内容により回答までお時間をいただく場合があります。</p></section><section><h3>お問い合わせへの対応</h3><p>休業期間前後はお問い合わせが集中することがあります。あらかじめ余裕をもってご連絡ください。</p></section><p>今後ともアルファコミュニケーションズをよろしくお願い申し上げます。</p><Link href="/news">お知らせ一覧に戻る</Link></article>;
  if(content.title==="お知らせ")return <section className={styles.newsList}><header><p>INFORMATION</p><h2>最新のお知らせ</h2></header><div>{news.map(([date,tag,title],i)=><Link href={["/news/summer-holiday-2026","/news/year-end-holiday-2025","/news/summer-holiday-2025","/news/website-renewal-2025"][i]} key={date}><time>{date}</time><small>{tag}</small><strong>{title}</strong><span>→</span></Link>)}</div></section>;
  if(content.title==="よくある質問")return <section className={styles.faqList}><header><p>QUESTIONS & ANSWERS</p><h2>よくいただくご質問</h2></header><div>{["対応可能な地域はどこですか？","どのサービスを選べばよいか分かりません。","導入後の保守にも対応していますか？","小規模な相談でも問い合わせできますか？","複数拠点をまとめて相談できますか？"].map((q,i)=><details key={q}><summary><b>Q</b>{q}<span>＋</span></summary><p><b>A</b>{["福岡を中心に、九州全域と山口の各拠点から対応しています。","担当者がお困りごとを伺い、必要なサービスを整理してご案内します。","設定・運用・故障対応まで、導入後も同じ窓口で支援します。","内容がまとまっていない段階でも、お気軽にご相談ください。","拠点ごとの状況を確認し、全体を見ながらご提案します。"][i]}</p></details>)}</div></section>;
  if(content.title==="お問い合わせ")return <section className={styles.contact}><div><p>PHONE</p><h2>お電話でのご相談</h2><a href="tel:0120610113">0120-610-113</a><small>受付時間 平日 9:00–18:00</small></div><form><p>CONTACT FORM</p><h2>お問い合わせフォーム</h2><label>お名前<input name="name" required/></label><label>会社名<input name="company"/></label><label>メールアドレス<input name="email" type="email" required/></label><label>ご相談内容<textarea name="message" rows={6} required/></label><label className={styles.consent}><input type="checkbox" required/>プライバシーポリシーに同意する</label><button type="submit">入力内容を送信する</button></form></section>;
  if(content.title==="プライバシーポリシー")return <section className={styles.policy}>{["個人情報の取得","個人情報の利用目的","第三者への提供","安全管理措置","開示・訂正・利用停止","お問い合わせ窓口"].map((title,i)=><article key={title}><span>0{i+1}</span><div><h2>{title}</h2><p>当社は、業務上必要な範囲で個人情報を適正に取り扱い、関連法令および社内規程に基づいて安全に管理します。</p></div></article>)}</section>;
  if(content.title==="営業所案内")return <section className={styles.officeList}><header><p>LOCAL NETWORK</p><h2>6つの拠点から<br/>地域を支えます</h2></header><div>{offices.map((office,i)=><article key={office}><small>OFFICE 0{i+1}</small><h3>{office}</h3><p>地域のお客様からのご相談、導入、保守に迅速に対応します。</p><span>福岡県福岡市博多区金の隈1-28-50</span></article>)}</div></section>;
  if(content.title==="採用情報")return <section className={styles.recruit}><header><p>WORK WITH US</p><h2>地域の仕事を支える<br/>仲間を募集しています</h2></header><div>{[["01","営業職","お客様の課題を聞き、最適な環境を提案します。"],["02","技術職","調査・施工・設定・保守まで現場を支えます。"],["03","サポート職","社内外の連携を整え、継続支援を担います。"]].map(([no,title,text])=><article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p><Link href="/contact">募集について問い合わせる</Link></article>)}</div></section>;
  return null;
}

export function Demo4ContentPage({content}:{content:Demo4PageContent}){
  const points=content.points??[];
  const special=!content.blocks&&["お知らせ","よくある質問","お問い合わせ","プライバシーポリシー","営業所案内","採用情報"].includes(content.title)||content.eyebrow==="NEWS";
  const isContact=content.title==="お問い合わせ";
  return <main className={styles.page} id="top">
    <SiteHeader demo4/>
    <Demo4PageHero title={content.title} description={<p>{content.lead}</p>} breadcrumbLabel={content.breadcrumbLabel} tagline={content.tagline??[content.eyebrow,content.visual]}/>
    {!content.heroOnly&&<>{!content.hideIntro&&<section className={styles.intro}><div><p>{content.eyebrow}</p><h2>{content.lead}</h2></div><p>{content.description}</p></section>}
    {content.blocks?<Demo4Blocks blocks={content.blocks}/>:special?<SpecialContent content={content}/>:<>
      {content.services?<Demo4ServiceDetails items={content.services} related={content.related}/>:<section className={styles.points}>{points.map((point,index)=><article key={point.label}><div className={styles.pointTop}><span>0{index+1}</span><small>{point.label}</small></div><div className={styles.pointMark} aria-hidden="true"><i/><i/><b>{index+1}</b></div><h2>{point.title}</h2><p>{point.text}</p></article>)}</section>}
      <section className={styles.detail}>
        <header><p>OUR APPROACH</p><h2>相談から導入後まで<br/><em>同じ窓口で支えます</em></h2></header>
        <ol>{(content.services?DEMO4_SERVICE_FLOW:points).map((point,index)=><li key={point.label}>
          <div className={styles.stepVisual} aria-label={`${point.title}の写真プレースホルダー`}><strong>{String(index+1).padStart(2,"0")}</strong><span>PHOTO</span></div>
          <div className={styles.stepCopy}><small>STEP {String(index+1).padStart(2,"0")}</small><h3>{point.title}</h3><p>{point.text}</p></div>
        </li>)}</ol>
      </section>
      <section className={styles.scope}><p>SERVICE VALUE</p>{[["01","現状を整理する","見えにくい課題も、担当者が一緒に整理します。"],["02","必要なものだけ選ぶ","商品ありきではなく、運用に合う形を考えます。"],["03","長く使えるよう支える","導入後の変化や困りごとにも継続して対応します。"]].map(([no,title,text])=><div key={no}><strong>{no}</strong><h2>{title}</h2><span>{text}</span></div>)}</section>
    </>}</>}
    {isContact?<SiteFooter demo4/>:<SiteEnding whiteContact/>}
    <OfficeAdvisor/><FloatingMenu demo4/>
  </main>;
}
