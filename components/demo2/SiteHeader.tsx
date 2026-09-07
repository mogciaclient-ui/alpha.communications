"use client";

/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, type MouseEvent } from "react";

export function SiteHeader({className=""}:{className?:string}){
  const router=useRouter();
  const [activeCta,setActiveCta]=useState<"contact"|"phone"|null>(null);
  const animateCta=(kind:"contact"|"phone",href:string)=>(event:MouseEvent<HTMLAnchorElement>)=>{
    if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
    event.preventDefault();
    if(activeCta)return;
    setActiveCta(kind);
    window.setTimeout(()=>{if(kind==="contact")router.push(href);else window.location.href=href},430);
  };
  return <header className={`header demo2SiteHeader ${className}`.trim()}>
    <a href="/demo2" className="brand" aria-label="アルファコミュニケーションズ ホーム"><Image className="headerLogoImage demo2HeaderLogo" src="/demo2/alpha-logo-transparent.png" alt="" width={1397} height={1126}/><strong>アルファコミュニケーションズ株式会社</strong></a>
    <nav aria-label="メインナビゲーション" className="mainNav"><div className="navDropdown"><a href="/demo2/service">サービス <span>⌄</span></a><div className="serviceMenu"><p>SERVICES</p><a href="/demo2/services/business-phone">ビジネスフォン <span className="arrow">→</span></a><a href="/demo2/services/multifunction-printer">複合機・コピー機 <span className="arrow">→</span></a><a href="/demo2/service/oasys">OASYS <span className="arrow">→</span></a><a href="/demo2/services/network">ネットワーク構築 <span className="arrow">→</span></a><a href="/demo2/services/security-camera">防犯カメラ <span className="arrow">→</span></a><a href="/demo2/services/security">セキュリティ <span className="arrow">→</span></a><a href="/demo2/services/oa-equipment">その他OA機器 <span className="arrow">→</span></a></div></div><a href="/demo2/ntt-partner">NTT特約店について</a><a href="/demo2/office-security">オフィスセキュリティ対策</a><a href="/demo2/company">会社概要</a><a href="/demo2/recruit">採用情報</a></nav>
    <div className="headerButtons"><a href="/demo2/contact" className={activeCta==="contact"?"isCtaAnimating":""} onClick={animateCta("contact","/demo2/contact")}><span>ご相談・お問い合わせ</span></a><a href="tel:0120610113" className={activeCta==="phone"?"isCtaAnimating":""} onClick={animateCta("phone","tel:0120610113")}><span>0120-610-113</span></a></div>
  </header>
}
