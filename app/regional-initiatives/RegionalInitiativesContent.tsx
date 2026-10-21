import Link from "next/link";
import { FloatingMenu } from "@/components/FloatingMenu";
import { OfficeAdvisor } from "@/components/OfficeAdvisor";
import { SiteEnding } from "@/components/site/SiteEnding";
import { SiteHeader } from "@/components/SiteHeader";
import { Demo4PageHero } from "@/components/demo4/Demo4PageHero";
import styles from "./regional.module.css";

const partners = [
  {
    number: "01",
    category: "FOOTBALL / YOUTH",
    name: "リベルタサッカースクール 福岡",
    href: "https://liberta.sport-school.com/school-area/%E7%A6%8F%E5%B2%A1%E7%9C%8C",
    description: "福岡県内の各地域で活動するサッカースクールです。サッカーの技術だけでなく、挨拶や礼儀、仲間を思いやる心を育むことを大切にしています。",
    support: "スポーツを通じて子どもたちが成長できる、地域に根ざした活動を応援しています。",
  },
  {
    number: "02",
    category: "BASKETBALL / PROFESSIONAL",
    name: "ライジングゼファーフクオカ",
    href: "https://r-zephyr.com/",
    description: "福岡をホームタウンに活動するプロバスケットボールクラブです。試合を通じた感動の提供に加え、地域活動や青少年の育成にも取り組んでいます。",
    support: "地域の子どもたちにスポーツを身近に感じてもらう取り組みとして、バスケットボールを寄贈しました。",
    donation: true,
  },
  {
    number: "03",
    category: "BASEBALL / UNIVERSITY",
    name: "西南学院大学 硬式野球部",
    href: "https://seinan-baseball.com/",
    description: "九州六大学野球連盟に所属し、福岡を拠点に活動する大学硬式野球部です。競技力の向上とともに、学生一人ひとりの成長を目指して活動しています。",
    support: "地域の学生スポーツと、目標に向かって挑戦を続ける選手たちを応援しています。",
  },
] as const;

function PhotoPlaceholder({ label }: { label: string }) {
  return <div className={styles.visual} role="img" aria-label={`${label}の画像掲載予定枠`}>
    <span>ここに画像</span>
  </div>;
}

export function RegionalInitiativesContent() {
  return <main className={styles.page} id="top">
    <SiteHeader demo4 />
    <Demo4PageHero
      title="地域へのとりくみ"
      description={<p>スポーツを通じて、地域の未来と次の世代を応援する。</p>}
      tagline={["REGIONAL INITIATIVES", "WITH OUR COMMUNITY"]}
    />

    <section className={styles.intro}>
      <p>COMMUNITY PARTNERSHIP</p>
      <div>
        <h2>地域とともに、<br />挑戦する人を支える。</h2>
        <p>福岡を拠点に活動するスポーツチームや学生の皆さまとつながり、地域に元気と未来を届ける活動を応援しています。</p>
      </div>
    </section>

    <section className={styles.partners} aria-label="応援している団体">
      {partners.map((partner) => <article className={styles.partner} key={partner.name}>
        <PhotoPlaceholder label={partner.name} />
        <div className={styles.copy}>
          <div className={styles.meta}><span>{partner.number}</span><small>{partner.category}</small></div>
          <h2>{partner.name}</h2>
          <p>{partner.description}</p>
          <div className={styles.support}><small>ALPHA&apos;S ACTION</small><strong>{partner.support}</strong></div>
          <Link href={partner.href} target="_blank" rel="noopener noreferrer">公式サイトを見る <span aria-hidden="true">↗</span></Link>
        </div>
        {"donation" in partner && partner.donation && <div className={styles.donation}>
          <header><p>DONATION REPORT</p><h3>ボール寄贈の様子</h3><span>写真が届き次第、活動の様子をご紹介します。</span></header>
          <div className={styles.photoSlots}>
            <div><span>ここに画像</span><strong>寄贈したボール</strong></div>
            <div><span>ここに画像</span><strong>寄贈式</strong></div>
          </div>
        </div>}
      </article>)}
    </section>

    <SiteEnding whiteContact />
    <OfficeAdvisor />
    <FloatingMenu demo4 />
  </main>;
}
