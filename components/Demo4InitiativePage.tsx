import { Demo3HomeEnding } from "@/components/demo3/Demo3HomeEnding";
import { FloatingMenu } from "@/components/FloatingMenu";
import { OfficeAdvisor } from "@/components/OfficeAdvisor";
import { SiteHeader } from "@/components/SiteHeader";

type Props={eyebrow?:string;title?:string;description?:string;visualLabel?:string};

export function Demo4InitiativePage({eyebrow="OUR ATTEMPT",title="社会へのとりくみ",description="地域と未来のために、私たちができることを一つずつ積み重ねています。",visualLabel="INITIATIVE ILLUSTRATION"}:Props={}) {
  return <main className="demo4InitiativePage" id="top">
    <SiteHeader demo4/>
    <section className="demo4InitiativeHero">
      <div><p>{eyebrow}</p><h1>{title}</h1><span>{description}</span></div>
      <div className="demo4InitiativeVisual" role="img" aria-label={`${title}のイラスト配置エリア`}><small>ILLUSTRATION</small><strong>{visualLabel}</strong><span>イラストを配置</span></div>
    </section>
    <Demo3HomeEnding whiteContact/>
    <OfficeAdvisor/>
    <FloatingMenu demo4/>
  </main>;
}
