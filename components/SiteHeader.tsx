/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";

export function SiteHeader({className="",demo4=false}:{className?:string;demo4?:boolean}){
  const path=(href:string)=>demo4?`${href}`:href;
  return <header className={`header ${className}`.trim()}>
    <a href={demo4?"/":"/"} className="brand" aria-label="アルファコミュニケーションズ ホーム"><Image className="headerLogoImage" src="/demo3/alpha-logo-transparent.png" alt="" width={1397} height={1126}/><strong className="brandCopy"><span>アルファコミュニケーションズ株式会社</span><span lang="en">Alpha Communications</span></strong></a>
    <nav aria-label="メインナビゲーション" className="mainNav"><div className="navDropdown"><a href={path("/service")}>サービス <span>⌄</span></a><div className="serviceMenu"><p>SERVICES</p><a href={path("/service/category/business_support")}>ビジネスインフラ <span className="arrow">→</span></a><a href={path("/service/category/it_support")}>ITインフラ <span className="arrow">→</span></a><a href={path("/service/category/top_support")}>幅広いオフィス支援 <span className="arrow">→</span></a><a href={path("/service/axcel")}>経営支援 AXCEL <span className="arrow">→</span></a><a href={path("/service/ai-products")}>AIプロダクト <span className="arrow">→</span></a><a href={path("/office-security")}>オフィスセキュリティ対策 <span className="arrow">→</span></a></div></div>{demo4?<><a href="/social-initiatives">社会へのとりくみ</a><a href="/regional-initiatives">地域へのとりくみ</a><a href="/ntt-partner">NTT特約店</a></>:<><a href="/ntt-partner">NTT特約店について</a><a href="/office-security">オフィスセキュリティ対策</a></>}<a href={path("/company")}>会社概要</a><a href={path("/recruit")}>採用情報</a></nav>
    <div className="headerButtons"><a href={path("/contact")}>ご相談・お問い合わせ</a><a href="tel:0120610113">0120-610-113</a></div>
  </header>
}
