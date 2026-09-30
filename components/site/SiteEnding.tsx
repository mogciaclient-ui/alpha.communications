import Image from "next/image";
import Link from "next/link";
import styles from "./SiteEnding.module.css";

function ContactIcon({type}:{type:"phone"|"mail"}) {
  return <svg viewBox="0 0 24 24" aria-hidden="true">{type==="phone"
    ? <path d="M6.6 3.8h3.1l1.6 4.1-2.2 1.7a14.5 14.5 0 0 0 5.3 5.3l1.7-2.2 4.1 1.6v3.1a2.8 2.8 0 0 1-3 2.8A14.7 14.7 0 0 1 3.8 6.8a2.8 2.8 0 0 1 2.8-3Z"/>
    : <><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m4 7 8 6 8-6"/></>
  }</svg>;
}

export function SiteContact({compact=false}:{compact?:boolean}={}) {
  return <section className={`${styles.contact} ${styles.contactCtaLayout}${compact?` ${styles.contactCompact}`:""}`}>
    <div className={styles.contactCtaIntro}><p>LET&apos;S TALK</p><h2>まずは<br/><em>ご相談ください</em></h2><span>まとまっていないお悩みも 一緒に整理します</span></div>
    <div className={styles.contactCtaOptions}><a href="tel:0120610113"><span>01</span><i><ContactIcon type="phone"/></i><div><small>PHONE</small><strong>0120-610-113</strong><em>平日 9:00 - 18:00</em></div><u>→</u></a><Link href="/contact"><span>02</span><i><ContactIcon type="mail"/></i><div><small>CONTACT</small><strong>相談内容を送る</strong><em>24時間受付中</em></div><u>→</u></Link></div>
  </section>;
}

export function SiteFooter({demo4=false}:{demo4?:boolean}={}) {
  const path=(href:string)=>href||"/";
  return <footer className={styles.footer}>
    <div className={styles.footerTop}><div className={styles.footerIdentity}><Link href={path("")} className={styles.logo}><Image className={styles.logoImage} src="/demo3/alpha-logo-transparent.png" alt="" width={121} height={121}/><span>アルファコミュニケーションズ株式会社<small>ALPHA COMMUNICATIONS</small></span></Link><p>オフィスの通信を、止めない。<br/>福岡・九州全域と山口を支える<br/>トータルコミュニケーションパートナー。</p><a href="tel:0120610113"><small>総合受付</small>0120-610-113</a></div><nav className={styles.footerNav}><section><small>SERVICE</small><Link href={path("/service")}>サービス案内</Link>{demo4?<><Link href={path("/service/category/business_support")}>ビジネスインフラ</Link><Link href={path("/service/category/it_support")}>ITインフラ</Link><Link href={path("/service/category/top_support")}>幅広いオフィス支援</Link><Link href={path("/service/axcel")}>経営支援 AXCEL</Link><Link href={path("/service/ai-products")}>AIプロダクト</Link><Link href={path("/office-security")}>オフィスセキュリティ対策</Link></>:<><Link href={path("/service/category/business_support#business-phone")}>ビジネスフォン</Link><Link href={path("/service/category/business_support#multifunction-printer")}>複合機・コピー機</Link><Link href={path("/service/category/it_support#network")}>ネットワーク構築</Link><Link href={path("/service/category/it_support#network-security")}>セキュリティ</Link></>}</section><section><small>COMPANY</small><Link href={path("/company")}>会社案内</Link><Link href={path("/company/message")}>代表挨拶</Link><Link href={path("/company/offices")}>営業所案内</Link><Link href={path("/company/features")}>アルファの特徴</Link><Link href={path("/ntt-partner")}>NTT特約店について</Link></section><section><small>INFORMATION</small><Link href={path("/news")}>お知らせ</Link><Link href={path("/recruit")}>採用情報</Link><Link href={path("/faq")}>よくある質問</Link><Link href={path("/contact")}>お問い合わせ</Link><Link href={path("/privacy")}>プライバシーポリシー</Link></section></nav></div>
    <div className={styles.footerBottom}><span>〒812-0863 福岡県福岡市博多区金の隈1-28-50</span><small>© ALPHA COMMUNICATIONS CO., LTD.</small><a href="#top">PAGE TOP ↑</a></div>
  </footer>;
}

export function SiteEnding({whiteContact=false}:{whiteContact?:boolean}={}) {
  return <div className={`${styles.page}${whiteContact?` ${styles.whiteContactEnding}`:""}`}><SiteContact compact/><SiteFooter demo4={whiteContact}/></div>;
}
