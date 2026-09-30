import Image from "next/image";
import { FloatingMenu } from "@/components/FloatingMenu";
import { OfficeAdvisor } from "@/components/OfficeAdvisor";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteEnding } from "@/components/site/SiteEnding";
import { Demo4PageHero } from "./Demo4PageHero";
import styles from "./OfficeSecurityPage.module.css";

const risks=[
  ["不正アクセス","外部からの侵入による情報漏えいや、システムへの不正アクセスが発生するリスクがあります。"],
  ["ウイルス・マルウェア","メールやWebサイト経由で侵入し、業務停止や情報漏えいを引き起こします。"],
  ["情報漏えい","内部・外部を問わず、大切なデータが流出するリスクがあります。"],
  ["ランサムウェア","重要なデータを暗号化し、業務継続を妨げる重大な脅威です。"],
];

const networkItems=[
  ["UTM","ネットワークの入口で不正アクセスやウイルスを検知・防御します。"],
  ["セキュリティスイッチ","社内ネットワークを安全に制御し、不正な通信を遮断します。"],
  ["IPS","不審な通信や攻撃の兆候を検知し、侵入を未然に防ぎます。"],
  ["アクセスポイント","安全なWi-Fi環境を提供し、社内通信を安定させます。"],
  ["サーバー・NAS","大切なデータを安全に保管・共有します。"],
  ["UPS","停電時にもシステムを安全に停止し、データ消失を防ぎます。"],
  ["AIカメラ","映像監視に加え、不審者検知や防犯対策にも活用できます。"],
];

const defenseRoles=[
  ["ルーター","インターネットと社内ネットワークをつなぐ通信の入口です。"],
  ["UTM","ウイルス・不正アクセス・危険なWeb通信をまとめて監視します。"],
  ["IPS","攻撃につながる異常な通信をリアルタイムで検知・遮断します。"],
  ["セキュリティスイッチ","不正端末や感染端末を検知し、内部での拡散を防ぎます。"],
  ["Wi-Fi","認証された端末だけが接続できる安全な無線環境を提供します。"],
  ["資産管理・NAS","PCを保護し、接続機器と重要データを一元的に管理します。"],
];

const products=[
  ["UTM（統合脅威管理）","ネットワークの入口で不正アクセスやウイルスをブロックします。"],
  ["IPS（侵入防止システム）","異常な通信をリアルタイムで検知し、攻撃を未然に防ぎます。"],
  ["セキュリティスイッチ","ネットワーク内で不正な接続や通信を制御します。"],
  ["エンドポイントセキュリティ","PCをマルウェアや不正アクセスから保護します。"],
  ["Wi-Fi・アクセスポイント","認証管理により、許可された端末のみ接続できます。"],
  ["資産管理","接続機器を一元管理し、不正端末の利用を防止します。"],
];

const faqs=[
  ["現在のネットワーク環境でも導入できますか？","はい。現在ご利用中の環境を活かしながら、最適な構成をご提案します。"],
  ["小規模オフィスでも導入できますか？","1〜数十名規模のオフィスまで、企業規模に合わせた構成をご提案しています。"],
  ["導入までどのくらいかかりますか？","現地調査後、機器構成によって異なりますが、一般的には数日〜数週間程度です。"],
];

function SectionHeading({eyebrow,title,text}:{eyebrow:string;title:string;text?:string}){
  return <header className={styles.sectionHeading}><p>{eyebrow}</p><h2>{title}</h2>{text&&<span>{text}</span>}</header>;
}

export function OfficeSecurityPage(){
  return <main className={styles.page} id="top">
    <SiteHeader demo4/>
    <Demo4PageHero
      title="オフィスセキュリティ対策"
      description={<p>情報と空間を、まとめて守る。</p>}
      breadcrumbLabel="オフィスセキュリティ対策"
      tagline={["OFFICE SECURITY", "SECURE OFFICE"]}
    />

    <section className={styles.risks}>
      <SectionHeading eyebrow="SECURITY RISKS" title="オフィスを取り巻くセキュリティリスク" text="情報漏えいやウイルス感染だけでなく、不正アクセスやランサムウェアなど、企業を狙う脅威は日々変化しています。"/>
      <div className={styles.riskGrid}>{risks.map(([title,text],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className={styles.network}>
      <SectionHeading eyebrow="NETWORK STRUCTURE" title="オフィス全体を守るネットワーク構成" text="複数の機器を適切に組み合わせ、安全で快適なネットワーク環境をつくります。"/>
      <div className={styles.networkGrid}>
        <div className={styles.networkImage}>
          <Image src="/alphaservice1.png" alt="複合機、サーバー、PC、防犯カメラなどを接続したオフィスネットワーク構成" width={1672} height={941} sizes="(max-width: 900px) 100vw, 62vw"/>
          <div className={styles.networkLabels} aria-hidden="true">
            {networkItems.map(([title],index)=><span className={title==="IPS"?styles.ipsLabel:undefined} key={title}><b>{String(index+1).padStart(2,"0")}</b>{title}</span>)}
          </div>
        </div>
        <div><h3 className={styles.roleTitle}>各機器の役割</h3><div className={styles.roleList}>{networkItems.map(([title,text],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>
      </div>
    </section>

    <section className={styles.defense}>
      <SectionHeading eyebrow="MULTI-LAYERED DEFENSE" title="多層防御で、オフィス全体を守る" text="ネットワークの入口から社内ネットワーク、Wi-Fi、PCまで、それぞれのポイントで防御します。"/>
      <div className={styles.defenseBody}>
        <div className={styles.defenseImage}><Image src="/alphaservice2.png" alt="UTM、IPS、セキュリティスイッチなどによる多層防御" width={1024} height={1536} sizes="(max-width: 900px) 90vw, 38vw"/></div>
        <div><h3 className={styles.roleTitle}>各セキュリティ機器の役割</h3><div className={styles.defenseRoles}>{defenseRoles.map(([title,text],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>
      </div>
    </section>

    <section className={styles.products}>
      <SectionHeading eyebrow="SECURITY LAYERS" title="オフィスを守る6つの対策" text="ネットワークの入口から利用端末まで、それぞれのポイントで防御します。"/>
      <div className={styles.productGrid}>{products.map(([title,text],index)=><article key={title}><div className={styles.productPlaceholder}><span>IMAGE</span></div><small>{String(index+1).padStart(2,"0")}</small><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className={styles.faq}>
      <SectionHeading eyebrow="FAQ" title="よくある質問"/>
      <div>{faqs.map(([question,answer],index)=><details key={question}><summary><span>Q{String(index+1).padStart(2,"0")}</span>{question}</summary><p>{answer}</p></details>)}</div>
    </section>

    <SiteEnding whiteContact/>
    <OfficeAdvisor/><FloatingMenu demo4/>
  </main>;
}
