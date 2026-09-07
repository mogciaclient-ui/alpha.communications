import Link from "next/link";
import { ContactSection } from "@/components/demo2/ContactSection";
import { FloatingMenu } from "@/components/demo2/FloatingMenu";
import { PageBreadcrumb } from "@/components/demo2/PageBreadcrumb";
import { ScrollEffects } from "@/components/demo2/ScrollEffects";
import { SiteFooter } from "@/components/demo2/SiteFooter";
import { SiteHeader } from "@/components/demo2/SiteHeader";

export type ContentSection = { eyebrow?: string; title: string; text: string; items?: readonly string[] };

type ContentPageProps = {
  eyebrow: string;
  title: string;
  lead: string;
  current?: string;
  parents?: Array<{ label: string; href: string }>;
  sections: ContentSection[];
  pageHref: string;
  children?: React.ReactNode;
};

export function ContentPage({eyebrow,title,lead,current=title,parents=[],sections,pageHref,children}:ContentPageProps){return <main className="contentPage" id="top">
  <SiteHeader/>
  <section className="contentHero">
    <div className="contentHeroWord" aria-hidden="true">{eyebrow} {eyebrow}</div>
    <div className="contentHeroInner"><p>{eyebrow}</p><h1>{title}</h1><p className="contentLead">{lead}</p><PageBreadcrumb current={current} parents={parents}/></div>
  </section>
  <section className="contentBody">
    <div className="contentSectionGrid">
      {sections.map((section,index)=><article className="contentCard revealUp" data-reveal key={section.title}>
        <span>{String(index+1).padStart(2,"0")}</span><div>{section.eyebrow&&<small>{section.eyebrow}</small>}<h2>{section.title}</h2><p>{section.text}</p>{section.items&&<ul>{section.items.map(item=><li key={item}>{item}</li>)}</ul>}</div>
      </article>)}
    </div>
    {children}
  </section>
  <ContactSection title={<>オフィスのお困りごとを<br/>お気軽にご相談ください</>} description="機器の選定から導入後のサポートまで、担当者が丁寧にお伺いします。"/>
  <SiteFooter pageTopHref={pageHref}/><FloatingMenu/><ScrollEffects/>
 </main>}

export function LinkCards({links}:{links:Array<{href:string;label:string;description:string}>}){return <div className="contentLinkCards">{links.map(link=><Link href={link.href} key={link.href}><div><strong>{link.label}</strong><p>{link.description}</p></div><span>→</span></Link>)}</div>}
