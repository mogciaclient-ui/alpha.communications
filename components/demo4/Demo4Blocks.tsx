import Image from "next/image";
import Link from "next/link";
import styles from "./Demo4Blocks.module.css";

type Item={label?:string;title:string;text?:string};
type Head={eyebrow:string;title:string};

/** 設計マップの「パーツ」。ページのデータで type を選んで並べる */
export type Demo4Block=Head&(
  |{type:"text";paragraphs:string[];sign?:string}
  |{type:"table";rows:Array<[string,string]>;note?:string}
  |{type:"timeline";items:Array<[string,string]>}
  |{type:"list";items:string[]}
  |{type:"cards";items:Item[];lead?:string}
  |{type:"steps";items:Item[];lead?:string}
  |{type:"person";people:Array<{role:string;name:string;catch?:string;photo?:string;body?:string[];qa?:Array<[string,string]>}>}
  |{type:"dialog";meta?:string;lines:Array<[string,string]>}
  |{type:"faq";items:Array<[string,string]>}
  |{type:"links";items:Array<{title:string;text:string;href:string}>}
  |{type:"offices";items:Array<{name:string;zip:string;address:string;building?:string;tel:string;fax:string}>}
  |{type:"policy";items:Array<[string,string]>}
  |{type:"pending";text:string}
);

function Header({eyebrow,title}:Head){
  return <header className={styles.head}><p>{eyebrow}</p><h2>{title}</h2></header>;
}

function Block({block}:{block:Demo4Block}){
  switch(block.type){
    case "text":return <div className={styles.text}>{block.paragraphs.map((p)=><p key={p}>{p}</p>)}{block.sign&&<p className={styles.sign}>{block.sign}</p>}</div>;
    case "table":return <><dl className={styles.table}>{block.rows.map(([th,td])=><div key={th}><dt>{th}</dt><dd>{td}</dd></div>)}</dl>{block.note&&<p className={styles.note}>{block.note}</p>}</>;
    case "timeline":return <ol className={styles.timeline}>{block.items.map(([date,text])=><li key={date+text}><time>{date}</time><p>{text}</p></li>)}</ol>;
    case "list":return <ul className={styles.list}>{block.items.map((item)=><li key={item}>{item}</li>)}</ul>;
    case "cards":return <>{block.lead&&<p className={styles.lead}>{block.lead}</p>}<div className={styles.cards} data-count={block.items.length}>{block.items.map((item,i)=><article key={item.title}><div><span>{String(i+1).padStart(2,"0")}</span>{item.label&&<small>{item.label}</small>}</div><h3>{item.title}</h3>{item.text&&<p>{item.text}</p>}</article>)}</div></>;
    case "steps":return <>{block.lead&&<p className={styles.lead}>{block.lead}</p>}<ol className={styles.steps}>{block.items.map((item,i)=><li key={item.title}><span>{item.label??`STEP ${String(i+1).padStart(2,"0")}`}</span><div><h3>{item.title}</h3>{item.text&&<p>{item.text}</p>}</div></li>)}</ol></>;
    case "person":return <div className={styles.people}>{block.people.map((person)=><article key={person.name+person.role} className={styles.person}>
      <div className={styles.photo}>{person.photo?<Image src={person.photo} alt={person.name} width={600} height={800}/>:<span aria-hidden="true">PHOTO</span>}</div>
      <div className={styles.personBody}>
        <small>{person.role}</small><h3>{person.name}</h3>{person.catch&&<p className={styles.catch}>{person.catch}</p>}
        {person.body?.map((p)=><p key={p}>{p}</p>)}
        {person.qa&&<div className={styles.qa}>{person.qa.map(([q,a])=><details key={q}><summary>{q}<span aria-hidden="true">＋</span></summary><p>{a}</p></details>)}</div>}
      </div></article>)}</div>;
    case "dialog":return <div className={styles.dialog}>{block.meta&&<p className={styles.meta}>{block.meta}</p>}{block.lines.map(([who,text],i)=><div key={i}><b>{who}</b><p>{text}</p></div>)}</div>;
    case "faq":return <div className={styles.faq}>{block.items.map(([q,a])=><details key={q}><summary><b>Q</b>{q}<span aria-hidden="true">＋</span></summary><p><b>A</b>{a}</p></details>)}</div>;
    case "links":return <div className={styles.links}>{block.items.map((item)=><Link key={item.href} href={item.href}><strong>{item.title}</strong><p>{item.text}</p><span aria-hidden="true">→</span></Link>)}</div>;
    case "offices":return <div className={styles.offices}>{block.items.map((o,i)=><article key={o.name}><small>OFFICE {String(i+1).padStart(2,"0")}</small><h3>{o.name}</h3><p>〒{o.zip}<br/>{o.address}{o.building&&<><br/>{o.building}</>}</p><dl><div><dt>TEL</dt><dd>{o.tel}</dd></div><div><dt>FAX</dt><dd>{o.fax}</dd></div></dl></article>)}</div>;
    case "policy":return <div className={styles.policy}>{block.items.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>;
    case "pending":return <div className={styles.pending}><strong>準備中</strong><p>{block.text}</p></div>;
  }
}

export function Demo4Blocks({blocks}:{blocks:Demo4Block[]}){
  return <div className={styles.blocks}>{blocks.map((block,i)=><section key={block.title+i} className={styles.block} data-type={block.type}>
    <Header eyebrow={block.eyebrow} title={block.title}/>
    <Block block={block}/>
  </section>)}</div>;
}
