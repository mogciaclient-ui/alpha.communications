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
    <section id="one-stop" className={styles.oneStop}>
      <div className={styles.oneStopOrbit} aria-hidden="true">
        <i/><i/>
        <b className={styles.partnerHub}>
          <span className={styles.partnerName}><Image className={styles.alphaPartnerLogo} src="/demo3/alpha-logo-transparent.png" alt="" width={1397} height={1126}/><small>ONE-STOP SUPPORT</small></span>
        </b>
        <div className={styles.orbitItems}>
          <span className={`${styles.orbitItem} ${styles.o1}`}><span className={styles.orbitCard}><svg viewBox="0 0 32 32"><path d="M7 5h18v22H7zM11 9h10v5H11zm0 10h2m3 0h2m3 0h2m-12 4h2m3 0h2m3 0h2"/></svg><small>ビジネスフォン</small></span></span>
          <span className={`${styles.orbitItem} ${styles.o2}`}><span className={styles.orbitCard}><svg viewBox="0 0 32 32"><rect x="3" y="6" width="10" height="8" rx="1"/><rect x="19" y="6" width="10" height="8" rx="1"/><rect x="11" y="19" width="10" height="8" rx="1"/><path d="M8 14v2h16v-2m-8 2v3"/></svg><small>LAN環境設営</small></span></span>
          <span className={`${styles.orbitItem} ${styles.o3}`}><span className={styles.orbitCard}><svg viewBox="0 0 32 32"><path d="M25 10V5l-3 3a10 10 0 00-15 4M7 22v5l3-3a10 10 0 0015-4"/><path d="M11 16l3 3 7-7"/></svg><small>メンテナンス</small></span></span>
          <span className={`${styles.orbitItem} ${styles.o4}`}><span className={styles.orbitCard}><svg viewBox="0 0 32 32"><path d="M16 3l11 4v8c0 7-4 12-11 15C9 27 5 22 5 15V7z"/><path d="M11 16l3 3 7-7"/></svg><small>セキュリティ</small></span></span>
          <span className={`${styles.orbitItem} ${styles.o5}`}><span className={styles.orbitCard}><svg viewBox="0 0 32 32"><path d="M8 4h16v7H8zM5 11h22v13H5zM9 19h14v9H9zM22 15h2"/></svg><small>複合機・FAX</small></span></span>
          <span className={`${styles.orbitItem} ${styles.o6}`}><span className={styles.orbitCard}><svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12"/><path d="M4 16h24M16 4a19 19 0 010 24m0-24a19 19 0 000 24"/></svg><small>光回線</small></span></span>
          <span className={`${styles.orbitItem} ${styles.o7}`}><span className={styles.orbitCard}><svg viewBox="0 0 32 32"><path d="M16 4v4m-2-4h4M8 10h16a3 3 0 013 3v10a3 3 0 01-3 3H8a3 3 0 01-3-3V13a3 3 0 013-3z"/><circle cx="12" cy="17" r="1"/><circle cx="20" cy="17" r="1"/><path d="M12 22h8M5 16H2m28 0h-3"/></svg><small>AI活用</small></span></span>
        </div>
      </div>
      <div className={styles.oneStopCopy}><p>ONE-STOP SUPPORT</p><h2>バラバラな悩みを<br/><em>ひとつの窓口で</em></h2><span>機器を売って終わりではありません。働く環境全体を見て、必要なものを組み合わせ、導入後まで伴走します。</span><ul><li>ヒアリング・現状確認</li><li>複数サービスを組み合わせたご提案</li><li>設置・設定・運用支援</li><li>AI活用を含む業務改善のご提案</li><li>導入後の保守・ご相談</li></ul></div>
    </section>
    <section className={styles.about}><div className={`${styles.aboutImage} ${styles.aboutMap}`}><Image src="/alpha-back1.png" alt="福岡・九州・山口の対応エリア地図" fill sizes="(max-width:800px) 100vw, 55vw"/></div><div className={styles.aboutCopy}><p>ABOUT ALPHA</p><h2>人と向き合い<br/><em>地域の仕事を 支える</em></h2><span>地域に根ざし、お客様の仕事を知る。相談から保守まで、人と人とのつながりを大切に支え続けます。</span><dl><div><dt>2005</dt><dd>創業</dd></div><div><dt>6</dt><dd>営業拠点</dd></div><div><dt>4,000</dt><dd>取引実績</dd></div></dl><Link href="/company">アルファについて <b>→</b></Link></div></section>
    <section id="services" className={styles.services}><header><div><p>OUR SERVICE</p><h2>3つのサービスで<br/><em>会社を支えます</em></h2></div><Link href="/service">サービス一覧 <span>→</span></Link></header><div className={styles.serviceGrid}>{services.map(([no,en,title,text,image,href],index)=><Link href={href} className={`${styles.serviceCard} ${index===1?styles.axcelCard:""}`} key={no}><div className={styles.placeholder}><span>{image}</span></div><article><small>{no} / {en}</small>{index===1&&<b>AXCEL</b>}<h3>{index===1?<>専門知識を結集し、<br/>経営効率化を促進</>:title}</h3><p>{text}</p><ul>{index===0?<><li>幅広いオフィス支援</li><li>オフィス機器</li><li>オフィスセキュリティ</li></>:index===1?<><li>売上拡大</li><li>新規事業</li><li>人材確保</li><li>社内規定</li></>:<><li>製品名 A</li><li>製品名 B</li><li>ほか全5製品</li></>}</ul><i>→</i></article></Link>)}</div></section>
    <section id="strength" className={styles.strength}><header><p>STRENGTH</p><h2>提案から保守まで動ける<br/><em>3つの実行力</em></h2><span>機器を売って終わりではありません。ひとつの窓口で、最初から最後まで。</span></header><div>{strengths.map(([no,en,title,text,image])=><article key={no}><strong>{no}</strong><small>{en}</small><h3>{title}</h3><p>{text}</p><div className={styles.placeholder}><span>{image}</span></div></article>)}</div></section>
    <section className={styles.initiatives}><div><Link href="/social-initiatives"><div className={styles.placeholder}><Image src="/demo4/top-sdgs.jpg" alt="SDGsへの取り組み" fill sizes="(max-width:800px) 38vw, 21vw"/></div><span><small>ATTEMPT:01</small><strong>SDGsへの取り組み</strong><i>→</i></span></Link><Link href="/social-initiatives"><div className={styles.placeholder}><Image src="/demo4/top-dx.jpg" alt="DXへの取り組み" fill sizes="(max-width:800px) 38vw, 21vw"/></div><span><small>ATTEMPT:02</small><strong>DXへの取り組み</strong><i>→</i></span></Link><Link href="/recruit"><div className={styles.placeholder} aria-hidden="true"/><span><small>RECRUIT</small><strong>求人募集</strong><i>→</i></span></Link><Link href="/company"><div className={styles.placeholder} aria-hidden="true"/><span><small>COMPANY</small><strong>会社概要</strong><i>→</i></span></Link></div></section>
    <section className={styles.news}><header><p>NEWS</p><h2>お知らせ</h2><Link href="/news">一覧を見る <span>→</span></Link></header><div>{news.map(([date,title])=><Link href="/news" key={date}><time>{date}</time><small>お知らせ</small><strong>{title}</strong><span>→</span></Link>)}</div></section>
    <section className={styles.faq}><header><p>FAQ</p><h2>よくある<br/><em>ご質問</em></h2></header><div>{faq.map((q,i)=><details key={q}><summary><b>Q</b>{q}<i>＋</i></summary><p><b>A</b>{["福岡を中心に、九州全域と山口の各拠点から対応しています。","お困りごとを伺い、必要なサービスを整理してご案内します。","設定・運用・保守まで同じ窓口で継続して支援します。","まとまっていない段階でもお気軽にご相談ください。"][i]}</p></details>)}</div></section>
    <SiteEnding whiteContact/><OfficeAdvisor/><FloatingMenu demo4/><ScrollEffects/>
  </main>;
}
