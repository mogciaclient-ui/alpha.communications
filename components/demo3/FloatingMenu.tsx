"use client";

/* eslint-disable @next/next/no-html-link-for-pages */

import { useEffect, useState } from "react";
import Image from "next/image";

const company = [["会社案内","/demo3/company"],["代表挨拶","/demo3/company/message"],["会社概要","/demo3/company"],["営業所案内","/demo3/company/offices"],["アルファの特徴","/demo3/company/features"],["アフターサービス","/demo3/service/after-sales"]];
const business = [["ビジネスインフラサポート","/demo3/service/category/business_support"],["ビジネスフォン","/demo3/services/business-phone"],["複合機・コピー機","/demo3/services/multifunction-printer"],["OASYS","/demo3/service/oasys"]];
const itSupport = [["ITインフラサポート","/demo3/service/category/it_support"],["ネットワーク構築","/demo3/services/network"],["セキュリティ","/demo3/services/security"],["オフィスセキュリティ対策","/demo3/office-security"],["オフィスIT支援","/demo3/service/category/it_support"]];
const wideServices = [["オフィスの幅広いサービス","/demo3/service/category/top_support"],["防犯カメラ","/demo3/services/security-camera"],["その他OA機器","/demo3/services/oa-equipment"],["導入・保守サポート","/demo3/service/after-sales"]];

function LinkList({ items, close, lead = false }: { items: string[][]; close: () => void; lead?: boolean }) {
  return <>{items.map(([label, href], index) => <a className={lead && index === 0 ? "groupLead" : ""} href={href} onClick={close} key={label}>{lead && index > 0 ? "— " : ""}{label}</a>)}</>;
}

export function FloatingMenu() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const handler=()=>{const show=window.scrollY>120;setVisible(show);if(!show)setOpen(false)};handler();window.addEventListener("scroll",handler,{passive:true});return()=>window.removeEventListener("scroll",handler)},[]);
  useEffect(() => { document.body.style.overflow=open?"hidden":"";return()=>{document.body.style.overflow=""}},[open]);
  const close=()=>setOpen(false);

  return <div className={`floatingMenu demo3FloatingMenu ${visible?"isShown":""} ${open?"isOpen":""}`}>
    <button className="menuToggle" type="button" onClick={()=>setOpen(!open)} aria-label={open?"メニューを閉じる":"メニューを開く"} aria-expanded={open}><span/><span/></button>
    <div className="megaMenu" aria-hidden={!open} role="dialog" aria-label="サイトメニュー">
      <div className="megaHeader"><a href="/demo3" className="megaBrand" onClick={close}><Image className="demo3MegaLogo" src="/alpha-logo.jpeg" alt="" width={121} height={121}/><strong>アルファ<br/>コミュニケーションズ株式会社</strong></a><p>OFFICE COMMUNICATION PARTNER</p></div>
      <div className="referenceMegaContent">
        <div className="referenceLeft">
          <section className="referenceGroup"><h2>COMPANY</h2><LinkList items={company} close={close} lead/></section>
        </div>
        <div className="referenceCenter">
          <section className="referenceGroup serviceMegaGroup"><h2>SERVICE</h2><a className="serviceTopLink" href="/demo3/service" onClick={close}>サービス案内</a><div className="referenceServiceColumns"><div><LinkList items={business} close={close} lead/></div><div><LinkList items={itSupport} close={close} lead/></div><div><LinkList items={wideServices} close={close} lead/></div></div></section>
          <div className="referenceBottomGroups"><section><h2>NEWS</h2><a href="/demo3/news" onClick={close}>お知らせ</a></section><section><h2>RECRUIT</h2><a href="/demo3/recruit" onClick={close}>採用情報</a></section><section><h2>FAQ</h2><a href="/demo3/faq" onClick={close}>よくある質問</a></section><section><h2>POLICY</h2><a href="/demo3/privacy" onClick={close}>プライバシーポリシー</a></section></div>
        </div>
        <aside className="referenceContact">
          <div className="megaPhone"><small>総合受付窓口</small><strong>0120-610-113</strong><span>営業時間<br/>9:00 ～ 18:00<br/>（土日祝・夏季休暇・年末年始を除く）</span></div>
          <div className="referenceButtons"><a href="/demo3/contact">ご相談・お問い合わせ</a></div>
        </aside>
      </div>
    </div>
  </div>;
}
