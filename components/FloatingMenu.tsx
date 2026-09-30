"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const company = [["会社案内","/company"],["代表挨拶","/company/message"],["会社概要","/company"],["営業所案内","/company/offices"],["アルファの特徴","/company/features"],["NTT特約店について","/ntt-partner"],["アフターサービス","/service/category/top_support#after-sales"]];
const business = [["ビジネスインフラ","/service/category/business_support"],["ITインフラ","/service/category/it_support"]];
const itSupport = [["幅広いオフィス支援","/service/category/top_support"],["オフィスセキュリティ対策","/office-security"]];
const wideServices = [["経営支援 AXCEL","/service/axcel"],["AIプロダクト","/service/ai-products"]];
const companyCards = [
  ["01","会社案内","会社概要・事業内容","/company"],
  ["02","代表挨拶","お客様と地域への想い","/company/message"],
  ["03","営業所案内","福岡・九州・山口の6拠点","/company/offices"],
  ["04","アルファの特徴","選ばれる理由と対応力","/company/features"],
  ["05","NTT特約店について","NTT西日本とのパートナーシップ","/ntt-partner"],
];
const serviceCards = [
  ["01","ビジネスインフラ","電話・複合機・光回線","/service/category/business_support"],
  ["02","ITインフラ","ネットワーク・UTM・データ保護","/service/category/it_support"],
  ["03","幅広いオフィス支援","設備・保守・アフターサポート","/service/category/top_support"],
  ["04","経営支援 AXCEL","売上・人材・社内制度のご相談","/service/axcel"],
  ["05","AIプロダクト","業務効率化・AI活用","/service/ai-products"],
  ["06","オフィスセキュリティ","防犯カメラ・入退室管理","/office-security"],
];

function LinkList({ items, close, lead = false }: { items: string[][]; close: () => void; lead?: boolean }) {
  return <>{items.map(([label, href], index) => <a className={lead && index === 0 ? "groupLead" : ""} href={href} onClick={close} key={label}>{lead && index > 0 ? "— " : ""}{label}</a>)}</>;
}

export function FloatingMenu({demo4=false}:{demo4?:boolean}={}) {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const handler=()=>{const show=window.innerWidth<=1050||window.scrollY>120;setVisible(show);if(!show)setOpen(false)};handler();window.addEventListener("scroll",handler,{passive:true});window.addEventListener("resize",handler);return()=>{window.removeEventListener("scroll",handler);window.removeEventListener("resize",handler)}},[]);
  useEffect(() => { document.body.style.overflow=open?"hidden":"";return()=>{document.body.style.overflow=""}},[open]);
  const close=()=>setOpen(false);

  const demoPath=(href:string)=>demo4?`${href}`:href;
  const companyItems=demo4?company.map(([label,href])=>[label,demoPath(href)]):company;
  const businessItems=demo4?business.map(([label,href])=>[label,demoPath(href)]):business;
  const itSupportItems=demo4?itSupport.map(([label,href])=>[label,demoPath(href)]):itSupport;
  const wideServiceItems=demo4?wideServices.map(([label,href])=>[label,demoPath(href)]):wideServices;

  return <div className={`floatingMenu${demo4?" demo4FloatingMenu":""} ${visible?"isShown":""} ${open?"isOpen":""}`}>
    <button className="menuToggle" type="button" onClick={()=>setOpen(!open)} aria-label={open?"メニューを閉じる":"メニューを開く"} aria-expanded={open}><span/><span/></button>
    <div className="megaMenu" aria-hidden={!open} role="dialog" aria-label="サイトメニュー">
      <svg className="megaOrbitAnimation" viewBox="0 0 1200 680" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><g transform="rotate(-12 600 340)"><ellipse cx="600" cy="340" rx="500" ry="245"/><ellipse cx="600" cy="340" rx="350" ry="165"/><ellipse cx="600" cy="340" rx="205" ry="92"/></g><g transform="rotate(-12 600 340)"><circle r="13"><animateMotion dur="24s" repeatCount="indefinite" path="M1100 340 A500 245 0 1 1 100 340 A500 245 0 1 1 1100 340"/></circle></g><g transform="rotate(-12 600 340)"><circle r="7"><animateMotion dur="16s" begin="-7s" repeatCount="indefinite" path="M950 340 A350 165 0 1 1 250 340 A350 165 0 1 1 950 340"/></circle></g></svg>
      <div className="megaHeader"><a href={demo4?"/":"/"} className="megaBrand" onClick={close}>{demo4?<Image className="demo4MegaLogo" src="/alpha-logo.jpeg" alt="" width={121} height={121}/>:<span>LOGO</span>}<strong>アルファ<br/>コミュニケーションズ株式会社</strong></a></div>
      <div className="referenceMegaContent">
        <div className="referenceLeft">
          <section className="referenceGroup"><h2>COMPANY</h2>{demo4?<div className="demo4CompanyMenuCards">{companyCards.map(([no,title,text,href])=><a href={href} onClick={close} key={href}><small>{no}</small><span><strong>{title}</strong><em>{text}</em></span><b aria-hidden="true">→</b></a>)}</div>:<LinkList items={companyItems} close={close} lead/>}</section>
        </div>
        <div className="referenceCenter">
          <section className="referenceGroup serviceMegaGroup"><h2>SERVICE</h2><a className="serviceTopLink" href={demoPath("/service")} onClick={close}>サービス案内</a>{demo4?<div className="demo4ServiceMenuCards">{serviceCards.map(([no,title,text,href])=><a href={href} onClick={close} key={href}><small>{no}</small><strong>{title}</strong><p>{text}</p><span aria-hidden="true">→</span></a>)}</div>:<div className="referenceServiceColumns"><div><LinkList items={businessItems} close={close} lead/></div><div><LinkList items={itSupportItems} close={close} lead/></div><div><LinkList items={wideServiceItems} close={close} lead/></div></div>}</section>
          <div className="referenceBottomGroups"><section><h2>NEWS</h2><a href={demoPath("/news")} onClick={close}>お知らせ</a></section><section><h2>RECRUIT</h2><a href={demoPath("/recruit")} onClick={close}>採用情報</a></section><section><h2>FAQ</h2><a href={demoPath("/faq")} onClick={close}>よくある質問</a></section><section><h2>POLICY</h2><a href={demoPath("/privacy")} onClick={close}>プライバシーポリシー</a></section></div>
        </div>
        <aside className="referenceContact">
          <div className="megaPhone"><small>総合受付窓口</small><strong>0120-610-113</strong><span>営業時間<br/>9:00 ～ 18:00<br/>（土日祝・夏季休暇・年末年始を除く）</span></div>
          <div className="referenceButtons"><a href={demoPath("/contact")}>ご相談・お問い合わせ</a></div>
        </aside>
      </div>
      <div className="megaFootText" aria-hidden="true">ALPHA COMMUNICATIONS</div>
    </div>
  </div>;
}
