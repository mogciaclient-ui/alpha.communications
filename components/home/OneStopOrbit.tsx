import type { CSSProperties, ReactNode } from "react";

type Item = { key: string; title: string; sub?: string };

const items: Item[] = [
  { key: "phone", title: "ビジネスフォン" },
  { key: "lan", title: "LAN環境設営", sub: "初期接続工事・配線・設定" },
  { key: "maint", title: "メンテナンス", sub: "アフターフォロー・保守" },
  { key: "security", title: "セキュリティ", sub: "UTM・防犯カメラ" },
  { key: "mfp", title: "複合機・FAX" },
  { key: "broad", title: "ブロードバンド", sub: "光インターネット・光IP電話" },
  { key: "ai", title: "AI活用", sub: "業務効率化・活用支援" },
];

const icons: Record<string, ReactNode> = {
  phone: <><rect x="9" y="9" width="30" height="30" rx="4"/><rect x="13" y="13" width="7" height="22" rx="2"/><rect x="24" y="13" width="11" height="6" rx="1"/><path d="M25 24h1M29 24h1M33 24h1M25 28h1M29 28h1M33 28h1M25 32h1M29 32h1M33 32h1"/></>,
  lan: <><rect x="6" y="10" width="12" height="9" rx="1"/><path d="M4 22h16"/><rect x="30" y="10" width="12" height="9" rx="1"/><path d="M28 22h16"/><rect x="18" y="26" width="12" height="9" rx="1"/><path d="M16 38h16M14 22l6 4M34 22l-6 4"/></>,
  maint: <><path d="M30 8a7 7 0 0 0-6 10L10 32a3 3 0 0 0 4 4l14-14a7 7 0 0 0 10-6l-4 4-4-1-1-4 4-4a7 7 0 0 0-3-1zM10 10l8 8M8 12l4-4M30 30l8 8"/></>,
  security: <><rect x="7" y="9" width="34" height="23" rx="2"/><path d="M19 39h10M24 32v7"/><rect x="19" y="19" width="10" height="8" rx="1"/><path d="M21 19v-3a3 3 0 0 1 6 0v3"/></>,
  mfp: <><path d="M14 14V7h16l4 4v3"/><rect x="9" y="14" width="30" height="13" rx="2"/><rect x="11" y="27" width="26" height="14" rx="1"/><path d="M15 32h18M15 36h18M30 19h4"/></>,
  broad: <><circle cx="24" cy="24" r="16"/><path d="M8 24h32M24 8c-5 5-5 27 0 32M24 8c5 5 5 27 0 32M11 16h26M11 32h26"/></>,
  ai: <><rect x="13" y="13" width="22" height="22" rx="3"/><path d="M18 8v5M24 8v5M30 8v5M18 35v5M24 35v5M30 35v5M8 18h5M8 24h5M8 30h5M35 18h5M35 24h5M35 30h5M19 29l3-10 3 10M20 26h4M29 19v10"/></>,
};

function Icon({ name }: { name: string }) {
  return <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name]}</svg>;
}

export function OneStopOrbit({ logoSrc }: { logoSrc: string }) {
  return <div className="acOrbit" aria-label="ワンストップで対応するサービス">
    <div className="acRing" aria-hidden="true"><i/><i/></div>
    <div className="acRotor">{items.map((item,index)=><div key={item.key} className="acItem" style={{"--a":`${(360/items.length)*index}deg`} as CSSProperties}><div className="acFix"><div className="acUp"><div className="acCard"><span className="acIco"><Icon name={item.key}/></span><b>{item.title}</b>{item.sub&&<small>{item.sub}</small>}</div></div></div></div>)}</div>
    <div className="acCore"><div className="acNtt"><img alt="" src="/demo4/ntt-west-logo.jpg"/><span>NTT西日本</span></div><div className="acBand">{"特約店契約".split("").map((char,index)=><span key={index}>{char}</span>)}</div><div className="acAlpha"><img alt="" src={logoSrc}/><span>ALPHA<br/>Communications</span></div></div>
  </div>;
}
