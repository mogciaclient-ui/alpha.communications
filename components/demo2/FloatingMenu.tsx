"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const business = [["ビジネスインフラサポート","/demo2/service/category/business_support"],["ビジネスフォン","/demo2/services/business-phone"],["複合機・コピー機","/demo2/services/multifunction-printer"],["OASYS","/demo2/service/oasys"]];
const itSupport = [["ITインフラサポート","/demo2/service/category/it_support"],["ネットワーク構築","/demo2/services/network"],["セキュリティ","/demo2/services/security"],["オフィスセキュリティ対策","/demo2/office-security"],["オフィスIT支援","/demo2/service/category/it_support"]];
const wideServices = [["オフィスの幅広いサービス","/demo2/service/category/top_support"],["防犯カメラ","/demo2/services/security-camera"],["その他OA機器","/demo2/services/oa-equipment"],["導入・保守サポート","/demo2/service/after-sales"]];
const primary = [["COMPANY","会社案内","/demo2/company"],["SERVICE","サービス案内","/demo2/service"],["NEWS","お知らせ","/demo2/news"],["RECRUIT","採用情報","/demo2/recruit"],["FAQ","よくある質問","/demo2/faq"],["POLICY","プライバシーポリシー","/demo2/privacy"]];
const servicePanels = [
  { number:"01", en:"BUSINESS INFRASTRUCTURE", ja:"ビジネスインフラ", image:"/demo2/menu-demo2-01.png", items:business },
  { number:"02", en:"IT INFRASTRUCTURE", ja:"ITインフラ", image:"/demo2/menu-demo2-02.png", items:itSupport },
  { number:"03", en:"OFFICE SUPPORT", ja:"オフィスサポート", image:"/demo2/menu-demo2-03.png", items:wideServices },
];

export function FloatingMenu() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const handler=()=>{const show=window.scrollY>120;setVisible(show);if(!show)setOpen(false)};handler();window.addEventListener("scroll",handler,{passive:true});return()=>window.removeEventListener("scroll",handler)},[]);
  useEffect(() => { document.body.style.overflow=open?"hidden":"";return()=>{document.body.style.overflow=""}},[open]);
  const close=()=>setOpen(false);

  return <div className={`floatingMenu demo2FloatingMenu ${visible?"isShown":""} ${open?"isOpen":""}`}>
    <button className="menuToggle" type="button" onClick={()=>setOpen(!open)} aria-label={open?"メニューを閉じる":"メニューを開く"} aria-expanded={open}><span/><span/></button>
    <div className="megaMenu" aria-hidden={!open} role="dialog" aria-label="サイトメニュー">
      <div className="d2VisualMenu">
        <aside className="d2VisualMenuSide">
          <a href="/demo2" className="d2VisualMenuBrand" onClick={close}><Image src="/demo2/alpha-logo-transparent.png" alt="アルファコミュニケーションズ" width={1397} height={1126}/><span><strong>アルファコミュニケーションズ株式会社</strong><small>ALPHA COMMUNICATIONS</small></span></a>
          <nav aria-label="サイトメニュー">{primary.map(([en,ja,href],index)=><a className={en==="SERVICE"?"isCurrent":""} href={href} onClick={close} key={en}><b>{String(index+1).padStart(2,"0")}</b><span><strong>{en}</strong><small>{ja}</small></span><i>—</i></a>)}</nav>
          <div className="d2VisualMenuContact"><small>総合受付窓口</small><a href="tel:0120610113">☎&nbsp; 0120-610-113</a><p>営業時間 9:00〜18:00<br/>（土日祝・夏季休暇・年末年始を除く）</p><a href="/demo2/contact" onClick={close}>ご相談・お問い合わせ <span>→</span></a></div>
        </aside>
        <section className="d2VisualMenuIntro"><p>SERVICE</p><h2>サービス案内</h2><span>オフィスの「つながる・はたらく・守る」を支えます</span><small>BETTER WORKPLACES<br/>WITH TECHNOLOGY</small></section>
        <div className="d2VisualMenuPanels">{servicePanels.map((panel)=><section className="d2VisualMenuPanel" key={panel.number}><Image src={panel.image} alt="" fill sizes="33vw"/><div/><span>{panel.number}</span><p>{panel.en}</p><h3>{panel.ja}</h3><nav>{panel.items.slice(1).map(([label,href])=><a href={href} onClick={close} key={label}>{label}</a>)}</nav><a className="d2VisualMenuArrow" href={panel.items[0][1]} onClick={close} aria-label={`${panel.ja}を見る`}>→</a></section>)}</div>
      </div>
    </div>
  </div>;
}
