import Image from "next/image";
import Link from "next/link";
import styles from "@/app/demo3/demo3.module.css";

const stats=[["2016","年","NTT西日本の情報機器特約店に認定"],["4,000","社","九州・山口での取引実績"],["6","拠点","福岡本社＋九州・山口の営業拠点"],["2005","年","福岡で創業。九州全域へ"]];
const strengths=[["01","DIRECT","NTT西日本との直接連携","情報機器特約店として、商品選定から回線・機器の手配までスムーズに進めます。","相談・手配を一本化"],["02","FIELD","自社工事部門が現場まで担当","販売だけで終わらず、現地調査・配線・設置・設定まで自社で対応します。","調査・施工・設定に対応"],["03","AFTERCARE","導入後も定期的に見直す","故障時の対応はもちろん、運用や通信環境の変化に合わせて継続して支えます。","保守・運用まで継続"]];
const demo4StrengthImages=["/demo4/strength-ntt-partnership-v2.png","/demo4/strength-field-work.png","/demo4/strength-aftercare.png"];
const services=[["PHONE","ビジネスフォン","/demo3/services/business-phone"],["INTERNET","光インターネット・光IP電話","/demo3/services/network"],["COPY","複合機・FAX","/demo3/services/multifunction-printer"],["LAN","LAN環境設営","/demo3/services/network"],["SECURITY","セキュリティ","/demo3/services/security"],["SUPPORT","保守・メンテナンス","/demo3/service/after-sales"]];
const flow=[["01","お問い合わせ","まず状況をお聞かせください。"],["02","現地調査","現在の環境と配線を確認します。"],["03","ご提案・お見積り","機器・工事・費用をご案内します。"],["04","工事・設定","業務を止めない日程で施工します。"],["05","運用・保守","導入後も継続して支えます。"]];
const Arrow=()=> <span aria-hidden="true">→</span>;
function Heading({en,title}:{en:string;title:React.ReactNode}){return <div className={styles.heading}><p>{en}</p><h2>{title}</h2></div>}
function Gateway({href,src,en,title}:{href:string;src:string;en:string;title:string}){return <Link href={href}><Image src={src} alt={title} fill sizes="50vw"/><span><small>{en}</small><strong>{title}</strong><Arrow/></span></Link>}
function ServiceIcon({type}:{type:string}){const paths:Record<string,React.ReactNode>={PHONE:<><path d="M7 4h3l1.5 4-2 1.5a14 14 0 0 0 5 5L16 12l4 2v3c0 1.7-1.3 3-3 3C10 19.2 4.8 14 4 7c0-1.7 1.3-3 3-3Z"/></>,INTERNET:<><circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4c2.3 2.2 3.3 4.8 3.3 8S14.3 17.8 12 20c-2.3-2.2-3.3-4.8-3.3-8S9.7 6.2 12 4Z"/></>,COPY:<><path d="M7 8V3h10v5M7 17H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M7 14h10v7H7z"/></>,LAN:<><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="19" r="2"/><path d="M7 6h10M6.5 7.5 11 17m6.5-9.5L13 17"/></>,SECURITY:<><path d="M12 3 5 6v5c0 4.5 2.8 8 7 10 4.2-2 7-5.5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-5"/></>,SUPPORT:<><path d="m14 6 4-3 3 3-3 4-4-4ZM14 6 5 15l-2 6 6-2 9-9"/><path d="m5 15 4 4"/></>};return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>}

export function Demo3HeroSection() {
  return (
<section className={styles.hero}><div className={styles.heroSlides} aria-hidden="true"><div className={styles.heroSlide}><Image src="/demo3/hero-consultation.png" alt="" fill priority sizes="100vw"/></div><div className={styles.heroSlide}><Image src="/demo3/hero-team.png" alt="" fill sizes="100vw"/></div><div className={styles.heroSlide}><Image src="/demo3/hero-office.jpeg" alt="" fill sizes="100vw"/></div></div><div className={styles.heroShade}/><div className={styles.heroCopy}><p>TOTAL COMMUNICATION SUPPORT</p><h1>オフィスの通信を<br/><em>止めない</em></h1><div className={styles.heroMeta}><strong>NTT西日本 情報機器特約店</strong><span>福岡・九州全域／山口</span></div><p className={styles.heroLead}>ビジネスフォン、光回線、複合機、LAN工事、セキュリティ。受付から工事・保守まで、ひとつの窓口で。</p><div className={styles.actions}><Link href="/demo3/contact">無料で相談する <Arrow/></Link><a href="#services">サービスを見る <Arrow/></a></div></div></section>
  );
}

export function Demo3TickerSection() {
  return (
<div className={styles.ticker} aria-hidden="true">{[0,1].map(group=><span key={group}>{["CONNECT","SUPPORT","SECURITY","COMMUNICATION"].map(word=><b key={word}>{word}<i>·</i></b>)}</span>)}</div>
  );
}

export function Demo3StatsSection() {
  return (
<section className={styles.stats}>{stats.map(([n,u,t])=><div key={n}><strong><b data-count={n.replace(",","")}>0</b><small>{u}</small></strong><p>{t}</p></div>)}</section>
  );
}

export function Demo3PartnerSection() {
  return (
<section className={styles.partner} id="about"><div className={styles.partnerCopy}><Heading en="DIRECT PARTNERSHIP" title={<>NTT西日本<br/>特約店として<br/><em>できること</em></>}/><p className={styles.lead}>NTT西日本と直接契約を結ぶ情報機器特約店です。受付から現地工事、局内設備の手配まで、一つの窓口で進めます。</p><div className={styles.partnerTags}><span>直接連携</span><span>窓口一本化</span><span>導入後も対応</span></div></div><div className={styles.partnerPlaceholder}><span>IMAGE</span><small>DIRECT PARTNERSHIP VISUAL<br/>Recommended size 1600 × 1100</small></div></section>
  );
}

export function Demo3StrengthSection({demo4=false}:{demo4?:boolean}={}) {
  return (
<section className={styles.strength}><Heading en="STRENGTH" title={<>提案から保守まで動ける<br/><em>3つの実行力</em></>}/><div className={styles.cards}>{strengths.map(([n,en,t,d,proof],index)=><article key={n}><small>{n}</small><span>{en}</span><div className={`${styles.strengthPlaceholder}${demo4&&demo4StrengthImages[index]?` ${styles.strengthImage}`:""}`}>{demo4&&demo4StrengthImages[index]?<Image src={demo4StrengthImages[index]} alt={["NTT西日本とアルファコミュニケーションズの直接連携","自社工事部門によるネットワーク機器の施工","導入後の定期サポートと改善提案"][index]} fill sizes="(max-width: 900px) 100vw, 30vw"/>:<><b>IMAGE</b><i>VISUAL PLACEHOLDER</i></>}</div><h3>{t}</h3><p>{d}</p><strong>{proof}</strong></article>)}</div></section>
  );
}

export function Demo3SolutionSection({demo4=false}:{demo4?:boolean}={}) {
  const solutionStories=[
    ["01","BUSINESS","電話や複合機を見直したい","毎日使う機器を、いまの働き方に合う環境へ整えます。","ビジネスインフラ","/demo4/top-01-business.png"],
    ["02","OFFICE","防犯やOA機器、導入後の保守も任せたい","オフィス全体の設備から継続サポートまで横断して支えます。","幅広いオフィス支援","/demo4/top-04-office-maintenance.png"],
    ["03","IT","ネット環境やセキュリティが気になる","通信の安定性と情報を守る仕組みをまとめて確認します。","ITインフラ","/demo4/top-02-it.png"],
    ["04",demo4?"AXCEL":"OASYS","何を選べばよいかまとめて相談したい","まだ整理できていない課題も、必要な支援から一緒に考えます。",demo4?"AXCEL":"OASYS","/demo4/top-03-axcel.png"]
  ];
  return (
<section className={`${styles.solution}${demo4?` ${styles.solutionDemo4}`:""}`} id={demo4?"services":undefined}><div className={styles.solutionIntro}><Heading en="SOLUTION" title={<>こんなお悩み<br/><em>ありませんか</em></>}/><p>電話・ネットワーク・機器・セキュリティ。別々に見える課題も、オフィス全体を見ればひとつにつながっています。</p>{demo4?<Link href="/service" className="more demo4UnifiedButton"><span className="moreLabel">サービス一覧を見る</span><span className="arrow" aria-hidden="true">→</span></Link>:<Link href="#services">サービス一覧を見る <Arrow/></Link>}</div><div className={styles.solutionStories}>{solutionStories.map(([n,en,title,text,destination,image])=><article key={String(n)}><div className={`${styles.solutionPlaceholder}${demo4&&image?` ${styles.solutionImage}`:""}${demo4&&String(en)==="AXCEL"?` ${styles.solutionImageAxcel}`:""}${demo4&&String(en)==="OFFICE"?` ${styles.solutionImageCover}`:""}`}>{demo4&&image?<Image src={String(image)} alt={`${String(title)}のイラスト`} fill sizes="(max-width:700px) 100vw, 34vw"/>:<><span>IMAGE</span><small>VISUAL PLACEHOLDER</small></>}</div><div className={styles.solutionStoryCopy}><small>{n} / {String(en)}</small><h3>{String(title)}</h3><p>{String(text)}</p><span className={styles.solutionDestination}><small>SUPPORT AREA</small><b>{String(destination)}</b></span><i className={styles.solutionArrow} aria-hidden="true">→</i></div></article>)}</div></section>
  );
}

export function Demo3ServicesSection() {
  return (
<section className={styles.service} id="services"><div className={styles.serviceHead}><Heading en="SERVICE" title={<>オフィスを支える<br/><em>6つの領域</em></>}/><p>ひとつだけでも、組み合わせても。<br/>いまの環境に必要なものからご案内します。</p></div><div className={styles.serviceGrid}>{services.map(([e,t,h],i)=><Link href={h} key={e}><span className={styles.serviceIcon}><ServiceIcon type={e}/></span><div><small>0{i+1} / {e}</small><h3>{t}</h3><p>詳しく見る</p></div><b>→</b></Link>)}</div></section>
  );
}

export function Demo3FlowSection() {
  return (
<section className={styles.flow} id="flow"><Heading en="FLOW" title="導入までの流れ"/><div className={styles.flowGrid}>{flow.map(([n,t,d])=><article key={n}><small>STEP {n}</small><i>{n}</i><h3>{t}</h3><p>{d}</p></article>)}</div></section>
  );
}

export function Demo3InterviewSection() {
  return (
<section className={styles.interview}><div><Image src="/demo3/hero-team.png" alt="お客様との対談イメージ" fill sizes="(max-width:800px) 100vw,52vw"/></div><div><Heading en="INTERVIEW" title="お客様との対談"/><blockquote>「相談から工事後まで、同じ窓口で話せる安心感があります。」</blockquote><p>お取引先の方々に、アルファコミュニケーションズへの印象を伺います。</p><Link href="/demo3/company">対談を読む <Arrow/></Link></div></section>
  );
}

export function Demo3GatewaySection() {
  return (
<section className={styles.gateway}><Gateway href="/demo3/company" src="/demo3/hero-office.jpeg" en="COMPANY" title="会社案内"/><Gateway href="/demo3/recruit" src="/demo3/hero-team.png" en="RECRUIT" title="採用情報"/></section>
  );
}

export function Demo3NewsSection() {
  return (
<section className={styles.news}><Heading en="NEWS" title="お知らせ"/><div>{[["2026.08.01","夏季休業のお知らせ"],["2025.12.15","年末年始休業のお知らせ"],["2025.08.01","夏季休業のお知らせ"]].map(([d,t])=><Link href="/demo3/news" key={d}><time>{d}</time><small>お知らせ</small><strong>{t}</strong><Arrow/></Link>)}</div></section>
  );
}
