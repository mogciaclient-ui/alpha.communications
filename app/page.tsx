import Image from "next/image";
import Link from "next/link";
import { SiteEnding } from "@/components/site/SiteEnding";
import { FloatingMenu } from "@/components/FloatingMenu";
import { HomeBrandMarquee, HomeHeroSection } from "@/components/home/HomeSections";
import { AreaMap } from "@/components/home/AreaMap";
import { OneStopOrbit } from "@/components/home/OneStopOrbit";
import { OfficeAdvisor } from "@/components/OfficeAdvisor";
import { ScrollEffects } from "@/components/ScrollEffects";
import { SiteHeader } from "@/components/SiteHeader";
import styles from "./home.module.css";

const news = [["2026.08.01","夏季休業のお知らせ"],["2025.12.15","年末年始休業のお知らせ"],["2025.08.01","夏季休業のお知らせ"]];
const services = [
  ["01","OFFICE INFRASTRUCTURE","オフィスインフラ","電話・複合機・ネットワーク・防犯まで、仕事に必要な環境を整えます。","/demo4/top-office-infrastructure.png","/service#office-infrastructure"],
  ["02","MANAGEMENT SUPPORT","経営支援 AXCEL","売上・人材・制度など、経営に関する課題を専門スタッフが支えます。","/demo4/top-axcel.png","/service/axcel"],
  ["03","AI PRODUCTS","AIプロダクト","業務に合うAI活用と自動化で、毎日の繰り返し作業を軽くします。","/demo4/top-ai-products.jpg","/service/ai-products"],
];
const strengths = [
  ["01","DIRECT","NTT西日本との直接連携","情報機器特約店として、商品選定から回線・機器の手配までスムーズに進めます。","/demo4/strength-direct.jpg","握手をする手のイラスト"],
  ["02","FIELD","自社工事部門が現場まで担当","販売だけで終わらず、現地調査・配線・設置・設定まで自社で対応します。","/demo4/strength-field.jpg","現場を担当するスタッフのイラスト"],
  ["03","AFTERCARE","導入後も定期的に見直す","故障時の対応はもちろん、運用や通信環境の変化に合わせて継続して支えます。","/demo4/strength-aftercare.jpg","導入後の状況を確認するスタッフのイラスト"],
];
export default function Demo4Home() {
  return <main className={styles.page}>
    <SiteHeader demo4 className="homeHeader"/><HomeHeroSection heroMotion="wave"/><HomeBrandMarquee/>
    <section id="one-stop" className={styles.oneStop}>
      <OneStopOrbit logoSrc="/demo3/alpha-logo-transparent.png"/>
      <div className={styles.oneStopCopy}><p>ONE-STOP SUPPORT</p><h2>バラバラな悩みを<br/><em>ひとつの窓口で</em></h2><span>機器を売って終わりではありません。働く環境全体を見て、必要なものを組み合わせ、導入後まで伴走します。</span><ul><li>ヒアリング・現状確認</li><li>複数サービスを組み合わせたご提案</li><li>設置・設定・運用支援</li><li>AI活用を含む業務改善のご提案</li><li>導入後の保守・ご相談</li></ul></div>
    </section>
    <section className={styles.about}><AreaMap className={`${styles.aboutImage} ${styles.aboutMap}`} mapSrc="/alpha-back1.png"/><div className={styles.aboutCopy}><p>ABOUT ALPHA</p><h2>人と向き合い<br/><em>地域の仕事を 支える</em></h2><span>地域に根ざし、お客様の仕事を知る。相談から保守まで、人と人とのつながりを大切に支え続けます。</span><dl><div><dt>2005</dt><dd>創業</dd></div><div><dt>6</dt><dd>営業拠点</dd></div><div><dt>4,000</dt><dd>取引実績</dd></div></dl><Link href="/company">アルファについて <b>→</b></Link></div></section>
    <section id="services" className={styles.services}><header><div><p>OUR SERVICE</p><h2>3つのサービスで<br/><em>会社を支えます</em></h2></div><Link href="/service">サービス一覧 <span>→</span></Link></header><div className={styles.serviceGrid}>{services.map(([no,en,title,text,image,href],index)=><Link href={href} className={`${styles.serviceCard} ${index===1?styles.axcelCard:""}`} key={no}><div className={`${styles.placeholder} ${styles.serviceImage}`}><Image src={image} alt={["オフィスで打ち合わせをするスタッフ","経営相談を行うスタッフ","AIを活用して働くオフィスのイラスト"][index]} fill sizes="(max-width: 800px) 100vw, 50vw"/></div><article><small>{no} / {en}</small>{index===1&&<b>AXCEL</b>}<h3>{index===1?<>専門知識を結集し、<br/>経営効率化を促進</>:title}</h3><p>{text}</p><ul>{index===0?<><li>幅広いオフィス支援</li><li>オフィス機器</li><li>オフィスセキュリティ</li></>:index===1?<><li>売上拡大</li><li>新規事業</li><li>人材確保</li><li>社内規定</li></>:<><li>製品名 A</li><li>製品名 B</li><li>ほか全5製品</li></>}</ul><i>→</i></article></Link>)}</div></section>
    <section id="strength" className={styles.strength}><header><p>STRENGTH</p><h2>提案から保守まで動ける<br/><em>3つの実行力</em></h2><span>機器を売って終わりではありません。ひとつの窓口で、最初から最後まで。</span></header><div>{strengths.map(([no,en,title,text,image,alt])=><article key={no}><div className={styles.strengthImage}><Image src={image} alt={alt} fill sizes="(max-width: 800px) 100vw, 33vw"/></div><strong>{no}</strong><small>{en}</small><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className={styles.initiatives}><div><Link href="/social-initiatives"><div className={styles.placeholder}><Image src="/demo4/top-sdgs.jpg" alt="SDGsへの取り組み" fill sizes="(max-width:800px) 38vw, 21vw"/></div><span><small>ATTEMPT:01</small><strong>SDGsへの取り組み</strong><i>→</i></span></Link><Link href="/social-initiatives"><div className={styles.placeholder}><Image src="/demo4/top-dx.jpg" alt="DXへの取り組み" fill sizes="(max-width:800px) 38vw, 21vw"/></div><span><small>ATTEMPT:02</small><strong>DXへの取り組み</strong><i>→</i></span></Link><Link href="/recruit"><div className={styles.placeholder}><Image src="/demo4/top-recruit-illustration.jpg" alt="採用情報のイラスト" fill sizes="(max-width:800px) 38vw, 21vw"/></div><span><small>RECRUIT</small><strong>求人募集</strong><i>→</i></span></Link><Link href="/company"><div className={styles.placeholder}><Image src="/demo4/top-company-illustration.jpg" alt="会社を表すビルのイラスト" fill sizes="(max-width:800px) 38vw, 21vw"/></div><span><small>COMPANY</small><strong>会社概要</strong><i>→</i></span></Link></div></section>
    <section className={styles.news}><header><p>NEWS</p><h2>お知らせ</h2><Link href="/news">一覧を見る <span>→</span></Link></header><div>{news.map(([date,title])=><Link href="/news" key={date}><time>{date}</time><small>お知らせ</small><strong>{title}</strong><span>→</span></Link>)}</div></section>
    <SiteEnding whiteContact/><OfficeAdvisor/><FloatingMenu demo4/><ScrollEffects/>
  </main>;
}
