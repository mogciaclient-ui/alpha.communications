import type { ReactNode } from "react";
import { Demo4WaveMotion } from "@/components/Demo4WaveMotion";

function Arrow(){return <span className="arrow" aria-hidden="true">→</span>}

type Props={title:ReactNode;description:ReactNode;id?:string;animated?:boolean;wave?:boolean};

export function ContactSection({title,description,id,animated=false,wave=false}:Props){return <section className={`contactSection${wave?" demo4Contact":""}`} id={id}>
  {wave&&<Demo4WaveMotion/>}
  {animated&&<svg className="contactOrbits" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><g transform="rotate(-7 600 250)"><ellipse cx="600" cy="250" rx="540" ry="205"/><ellipse cx="600" cy="250" rx="390" ry="142"/><ellipse cx="600" cy="250" rx="240" ry="80"/></g><g transform="rotate(-7 600 250)"><circle r="12"><animateMotion dur="25s" repeatCount="indefinite" path="M1140 250 A540 205 0 1 1 60 250 A540 205 0 1 1 1140 250"/></circle></g><g transform="rotate(-7 600 250)"><circle r="7"><animateMotion dur="18s" begin="-7s" repeatCount="indefinite" path="M990 250 A390 142 0 1 1 210 250 A390 142 0 1 1 990 250"/></circle></g><g transform="rotate(-7 600 250)"><circle r="5"><animateMotion dur="12s" begin="-4s" repeatCount="indefinite" path="M840 250 A240 80 0 1 1 360 250 A240 80 0 1 1 840 250"/></circle></g></svg>}
  <p className="enTitle">CONTACT</p><h2>{title}</h2><p>{description}</p><div><a href="/contact">ご相談・お問い合わせ <Arrow/></a><a href="tel:0120610113"><small>平日 9:00–18:00</small>0120-610-113</a></div>
</section>}
