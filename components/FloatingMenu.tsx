"use client";

/* eslint-disable @next/next/no-html-link-for-pages */

import { useEffect, useState } from "react";

const company = [["会社案内","/company"],["代表挨拶","/company/message"],["会社概要","/company"],["営業所案内","/company/offices"],["アルファの特徴","/company/features"],["アフターサービス","/service/after-sales"]];
const business = [["ビジネスインフラサポート","/service/category/business_support"],["ビジネスフォン","/services/business-phone"],["複合機・コピー機","/services/multifunction-printer"],["OASYS","/service/oasys"]];
const itSupport = [["ITインフラサポート","/service/category/it_support"],["ネットワーク構築","/services/network"],["セキュリティ","/services/security"],["オフィスセキュリティ対策","/office-security"],["オフィスIT支援","/service/category/it_support"]];
const wideServices = [["オフィスの幅広いサービス","/service/category/top_support"],["防犯カメラ","/services/security-camera"],["その他OA機器","/services/oa-equipment"],["導入・保守サポート","/service/after-sales"]];

function LinkList({ items, close, lead = false }: { items: string[][]; close: () => void; lead?: boolean }) {
  return <>{items.map(([label, href], index) => <a className={lead && index === 0 ? "groupLead" : ""} href={href} onClick={close} key={label}>{lead && index > 0 ? "— " : ""}{label}</a>)}</>;
}

export function FloatingMenu() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const handler=()=>{const show=window.scrollY>120;setVisible(show);if(!show)setOpen(false)};handler();window.addEventListener("scroll",handler,{passive:true});return()=>window.removeEventListener("scroll",handler)},[]);
  useEffect(() => { document.body.style.overflow=open?"hidden":"";return()=>{document.body.style.overflow=""}},[open]);
  const close=()=>setOpen(false);

  return <div className={`floatingMenu ${visible?"isShown":""} ${open?"isOpen":""}`}>
    <button className="menuToggle" type="button" onClick={()=>setOpen(!open)} aria-label={open?"メニューを閉じる":"メニューを開く"} aria-expanded={open}><span/><span/></button>
    <div className="megaMenu" aria-hidden={!open} role="dialog" aria-label="サイトメニュー">
      <svg className="megaOrbitAnimation" viewBox="0 0 1200 680" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><g transform="rotate(-12 600 340)"><ellipse cx="600" cy="340" rx="500" ry="245"/><ellipse cx="600" cy="340" rx="350" ry="165"/><ellipse cx="600" cy="340" rx="205" ry="92"/></g><g transform="rotate(-12 600 340)"><circle r="13"><animateMotion dur="24s" repeatCount="indefinite" path="M1100 340 A500 245 0 1 1 100 340 A500 245 0 1 1 1100 340"/></circle></g><g transform="rotate(-12 600 340)"><circle r="7"><animateMotion dur="16s" begin="-7s" repeatCount="indefinite" path="M950 340 A350 165 0 1 1 250 340 A350 165 0 1 1 950 340"/></circle></g></svg>
      <div className="megaHeader"><a href="/" className="megaBrand" onClick={close}><span>LOGO</span><strong>アルファ<br/>コミュニケーションズ株式会社</strong></a></div>
      <div className="referenceMegaContent">
        <div className="referenceLeft">
          <section className="referenceGroup"><h2>COMPANY</h2><LinkList items={company} close={close} lead/></section>
        </div>
        <div className="referenceCenter">
          <section className="referenceGroup serviceMegaGroup"><h2>SERVICE</h2><a className="serviceTopLink" href="/service" onClick={close}>サービス案内</a><div className="referenceServiceColumns"><div><LinkList items={business} close={close} lead/></div><div><LinkList items={itSupport} close={close} lead/></div><div><LinkList items={wideServices} close={close} lead/></div></div></section>
          <div className="referenceBottomGroups"><section><h2>NEWS</h2><a href="/news" onClick={close}>お知らせ</a></section><section><h2>RECRUIT</h2><a href="/recruit" onClick={close}>採用情報</a></section><section><h2>FAQ</h2><a href="/faq" onClick={close}>よくある質問</a></section><section><h2>POLICY</h2><a href="/privacy" onClick={close}>プライバシーポリシー</a></section></div>
        </div>
        <aside className="referenceContact">
          <div className="megaPhone"><small>総合受付窓口</small><strong>000-000-000</strong><span>営業時間<br/>9:00 ～ 18:00<br/>（土日祝・夏季休暇・年末年始を除く）</span></div>
          <div className="referenceButtons"><a href="/contact">ご相談・お問い合わせ</a></div>
        </aside>
      </div>
      <div className="megaFootText" aria-hidden="true">ALPHA COMMUNICATIONS</div>
    </div>
  </div>;
}
