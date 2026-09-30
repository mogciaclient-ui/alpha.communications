import Image from "next/image";
import Link from "next/link";
import { SiteEnding } from "@/components/site/SiteEnding";
import { FloatingMenu } from "@/components/FloatingMenu";
import { HomeBrandMarquee, HomeHeroSection } from "@/components/home/HomeSections";
import { OfficeAdvisor } from "@/components/OfficeAdvisor";
import { ScrollEffects } from "@/components/ScrollEffects";
import { SiteHeader } from "@/components/SiteHeader";
import styles from "./home.module.css";

const news = [["2026.08.01","夏季休業のお知らせ"],["2025.12.15","年末年始休業のお知らせ"],["2025.08.01","夏季休業のお知らせ"]];
const services = [
  ["01","OFFICE INFRASTRUCTURE","オフィスインフラ","電話・複合機・ネットワーク・防犯まで、仕事に必要な環境を整えます。","office-alpha.png","/service#office-infrastructure"],
  ["02","MANAGEMENT SUPPORT","経営支援 AXCEL","売上・人材・制度など、経営に関する課題を専門スタッフが支えます。","axcel-alpha.png","/service/axcel"],
  ["03","AI PRODUCTS","AIプロダクト","業務に合うAI活用と自動化で、毎日の繰り返し作業を軽くします。","ai-product-alpha.png","/service/ai-products"],
];
const strengths = [
  ["01","DIRECT","NTT西日本との直接連携","情報機器特約店として、商品選定から回線・機器の手配までスムーズに進めます。","strength-direct.png"],
  ["02","FIELD","自社工事部門が現場まで担当","販売だけで終わらず、現地調査・配線・設置・設定まで自社で対応します。","strength-field.png"],
  ["03","AFTERCARE","導入後も定期的に見直す","故障時の対応はもちろん、運用や通信環境の変化に合わせて継続して支えます。","strength-aftercare.png"],
];
const faq = ["対応可能な地域はどこですか？","どのサービスを選べばよいか分かりません。","導入後の保守や相談にも対応していますか？","小さな相談でも問い合わせできますか？"];

export default function Demo4Home() {
  return <main className={styles.page}>
    <SiteHeader demo4/><HomeHeroSection heroMotion="wave"/><HomeBrandMarquee/>
    <section className={styles.news}><header><p>NEWS</p><h2>お知らせ</h2><Link href="/news">一覧を見る <span>→</span></Link></header><div>{news.map(([date,title])=><Link href="/news" key={date}><time>{date}</time><small>お知らせ</small><strong>{title}</strong><span>→</span></Link>)}</div></section>
    <section id="one-stop" className={styles.oneStop}><div className={styles.orbit} aria-hidden="true"><i/><i/><b>ALPHA<small>ONE STOP</small></b><span className={styles.o1}><svg viewBox="0 0 32 32"><rect x="10" y="10" width="12" height="12" rx="2"/><path d="M13 2v5m6-5v5m-6 18v5m6-5v5M2 13h5m-5 6h5m18-6h5m-5 6h5M14 14h4v4h-4z"/></svg><small>AI</small></span><span className={styles.o2}><svg viewBox="0 0 32 32"><path d="M8 4l6 7-4 4c2 4 4 6 8 8l4-4 7 6-3 4C14 30 2 18 3 7z"/></svg><small>電話機</small></span><span className={styles.o3}><svg viewBox="0 0 32 32"><circle cx="16" cy="5" r="3"/><circle cx="6" cy="25" r="3"/><circle cx="26" cy="25" r="3"/><path d="M14 8L8 22m10-14l6 14M9 25h14"/></svg><small>ネットワーク</small></span><span className={styles.o4}><svg viewBox="0 0 32 32"><path d="M6 18v-4a10 10 0 0120 0v4M6 17H3v8h6v-8H6zm20 0h3v8h-6v-8h3zm0 8c0 3-2 5-6 5"/></svg><small>保守・サポート</small></span><span className={styles.o5}><svg viewBox="0 0 32 32"><path d="M16 3l11 4v8c0 7-4 12-11 15C9 27 5 22 5 15V7z"/><path d="M11 16l3 3 7-7"/></svg><small>セキュリティ</small></span></div><div className={styles.oneStopCopy}><p>ONE-STOP SUPPORT</p><h2>バラバラな悩みを<br/><em>ひとつの窓口で</em></h2><span>機器を売って終わりではありません。働く環境全体を見て、必要なものを組み合わせ、導入後まで伴走します。</span><ul><li>ヒアリング・現状確認</li><li>複数サービスを組み合わせたご提案</li><li>設置・設定・運用支援</li><li>導入後の保守・ご相談</li></ul></div></section>
    <section className={styles.about}><div className={`${styles.aboutImage} ${styles.placeholder}`}><span>ABOUT ALPHA / VISUAL</span><small>about-alpha.png</small></div><div className={styles.aboutCopy}><p>ABOUT ALPHA</p><h2>人と向き合い<br/><em>地域の仕事を 支える</em></h2><span>地域に根ざし、お客様の仕事を知る。相談から保守まで、人と人とのつながりを大切に支え続けます。</span><dl><div><dt>2005</dt><dd>創業</dd></div><div><dt>6</dt><dd>営業拠点</dd></div><div><dt>4,000</dt><dd>取引実績</dd></div></dl><Link href="/company">アルファについて <b>→</b></Link></div></section>
    <section id="services" className={styles.services}><header><div><p>OUR SERVICE</p><h2>3つのサービスで<br/><em>会社を支えます</em></h2></div><Link href="/service">サービス一覧 <span>→</span></Link></header><div className={styles.serviceGrid}>{services.map(([no,en,title,text,image,href],index)=><Link href={href} className={`${styles.serviceCard} ${index===1?styles.axcelCard:""}`} key={no}><div className={styles.placeholder}><span>{image}</span></div><article><small>{no} / {en}</small>{index===1&&<b>AXCEL</b>}<h3>{index===1?<>専門知識を結集し、<br/>経営効率化を促進</>:title}</h3><p>{text}</p><ul>{index===0?<><li>ビジネスインフラ</li><li>ITインフラ</li><li>幅広いオフィス支援</li></>:index===1?<><li>売上拡大</li><li>新規事業</li><li>人材確保</li><li>社内規定</li></>:<><li>製品名 A</li><li>製品名 B</li><li>ほか全5製品</li></>}</ul><i>→</i></article></Link>)}</div></section>
    <section id="strength" className={styles.strength}><header><p>STRENGTH</p><h2>提案から保守まで動ける<br/><em>3つの実行力</em></h2><span>機器を売って終わりではありません。ひとつの窓口で、最初から最後まで。</span></header><div>{strengths.map(([no,en,title,text,image])=><article key={no}><strong>{no}</strong><small>{en}</small><h3>{title}</h3><p>{text}</p><div className={styles.placeholder}><span>{image}</span></div></article>)}</div></section>
    <section className={styles.area}><div><p>SERVICE AREA</p><h2>福岡・九州・山口を<br/><em>地元のチームで</em></h2><span>各地域の拠点から、お客さまのオフィスをスピーディーにサポートします。</span><ul>{["福岡","佐賀","長崎","熊本","鹿児島","山口"].map(v=><li key={v}>{v}</li>)}</ul><dl><div><dt>6</dt><dd>営業拠点</dd></div><div><dt>8</dt><dd>対応エリア</dd></div></dl></div><div className={styles.map}><Image src="/alpha-back1.png" alt="九州・山口の対応エリア" fill sizes="(max-width:700px) 100vw, 48vw"/></div></section>
    <section className={styles.initiatives}><header><p>ABOUT ALPHA</p><h2>アルファの<br/><em>働き方と取り組み</em></h2></header><div><Link href="/sdgs"><div className={styles.placeholder}><span>sdgs-image.png</span></div><span><small>ATTEMPT:01</small><strong>SDGsへの取り組み</strong><i>→</i></span></Link><Link href="/dx"><div className={styles.placeholder}><span>dx-image.png</span></div><span><small>ATTEMPT:02</small><strong>DXへの取り組み</strong><i>→</i></span></Link><Link href="/recruit"><div className={styles.placeholder}><span>recruit-image.png</span></div><span><small>RECRUIT</small><strong>人と仕事を知る</strong><i>→</i></span></Link></div></section>
    <section className={styles.faq}><header><p>FAQ</p><h2>よくある<br/><em>ご質問</em></h2></header><div>{faq.map((q,i)=><details key={q}><summary><b>Q</b>{q}<i>＋</i></summary><p><b>A</b>{["福岡を中心に、九州全域と山口の各拠点から対応しています。","お困りごとを伺い、必要なサービスを整理してご案内します。","設定・運用・保守まで同じ窓口で継続して支援します。","まとまっていない段階でもお気軽にご相談ください。"][i]}</p></details>)}</div></section>
    <SiteEnding whiteContact/><OfficeAdvisor/><FloatingMenu demo4/><ScrollEffects/>
  </main>;
}
