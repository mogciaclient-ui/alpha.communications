import type { ReactNode } from "react";

function Arrow(){return <span className="arrow" aria-hidden="true">→</span>}

type Props={title:ReactNode;description:ReactNode;id?:string;animated?:boolean;homeStyle?:boolean};

function TalkIcon({type}:{type:"phone"|"mail"}){return <svg viewBox="0 0 24 24" aria-hidden="true">{type==="phone"?<path d="M6.6 3.8h3.1l1.6 4.1-2.2 1.7a14.5 14.5 0 0 0 5.3 5.3l1.7-2.2 4.1 1.6v3.1a2.8 2.8 0 0 1-3 2.8A14.7 14.7 0 0 1 3.8 6.8a2.8 2.8 0 0 1 2.8-3Z"/>:<><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m4 7 8 6 8-6"/></>}</svg>}

export function ContactSection({title,description,id,animated=false,homeStyle=false}:Props){
if(homeStyle)return <section className="contactSection demo3TalkContact" id={id}><div className="demo3TalkIntro"><p>LET&apos;S TALK</p><h2>まずは<br/><em>ご相談ください</em></h2><span>{description}</span></div><div className="demo3TalkOptions"><a href="tel:0120610113"><span>01</span><i><TalkIcon type="phone"/></i><div><small>PHONE</small><strong>0120-610-113</strong><em>平日 9:00 - 18:00</em></div><u>→</u></a><a href="/demo3/contact"><span>02</span><i><TalkIcon type="mail"/></i><div><small>CONTACT</small><strong>相談内容を送る</strong><em>24時間受付中</em></div><u>→</u></a></div></section>;
return <section className="contactSection" id={id}>
  {animated&&<svg className="contactOrbits" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><g transform="rotate(-7 600 250)"><ellipse cx="600" cy="250" rx="540" ry="205"/><ellipse cx="600" cy="250" rx="390" ry="142"/><ellipse cx="600" cy="250" rx="240" ry="80"/></g><g transform="rotate(-7 600 250)"><circle r="12"><animateMotion dur="25s" repeatCount="indefinite" path="M1140 250 A540 205 0 1 1 60 250 A540 205 0 1 1 1140 250"/></circle></g><g transform="rotate(-7 600 250)"><circle r="7"><animateMotion dur="18s" begin="-7s" repeatCount="indefinite" path="M990 250 A390 142 0 1 1 210 250 A390 142 0 1 1 990 250"/></circle></g><g transform="rotate(-7 600 250)"><circle r="5"><animateMotion dur="12s" begin="-4s" repeatCount="indefinite" path="M840 250 A240 80 0 1 1 360 250 A240 80 0 1 1 840 250"/></circle></g></svg>}
  <p className="enTitle">CONTACT</p><h2>{title}</h2><p>{description}</p><div><a href="/demo3/contact">ご相談・お問い合わせ <Arrow/></a><a href="tel:0120610113"><small>平日 9:00–18:00</small>0120-610-113</a></div>
</section>}
