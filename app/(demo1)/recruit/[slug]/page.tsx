import Link from "next/link";
import { notFound } from "next/navigation";
import { Demo3HomeEnding } from "@/components/demo3/Demo3HomeEnding";
import { FloatingMenu } from "@/components/FloatingMenu";
import { ScrollEffects } from "@/components/ScrollEffects";
import { SiteHeader } from "@/components/SiteHeader";

const pages={
  "new-graduate":{no:"01",en:"NEW GRADUATE",title:"新卒の方へ",lead:"社会人としての第一歩を、アルファで。",intro:"初めて社会へ踏み出す皆さんが安心して成長できるよう、研修と実践の両面から丁寧にサポートします。",sections:[["アルファで働く魅力","地域のお客様と長く関わり、仕事を通して自分自身も成長できる環境です。"],["新卒社員へのサポート","基本的なビジネスマナーから商品知識、営業同行まで段階的に学べます。"],["先輩社員からのメッセージ","失敗を恐れず挑戦できるよう、上司や先輩が近い距離で支えます。"]]},
  "mid-career":{no:"02",en:"MID CAREER",title:"中途の方へ",lead:"経験を活かし、次のステージへ。",intro:"これまで培ってきた経験やスキルを活かしながら、新たな分野へ挑戦できる環境を用意しています。",sections:[["求める人物像","お客様の立場で考え、仲間と協力しながら前向きに行動できる方を歓迎します。"],["経験を活かせる環境","営業、通信、IT、保守など、さまざまな経験を仕事へつなげられます。"],["入社後のフォロー","経験者にも商品研修や同行期間を設け、安心して業務を始められるよう支援します。"]]},
  training:{no:"03",en:"TRAINING",title:"研修・教育体制",lead:"学び続ける人を、支え続ける。",intro:"未経験からでも通信のプロフェッショナルを目指せる、段階的な研修・教育体制を整えています。",sections:[["基礎研修","ビジネスマナーや会社・事業について、仕事の基本から学びます。"],["商品・サービス研修","通信機器、OA機器、ネットワーク、セキュリティの知識を身につけます。"],["同行・実践研修","先輩社員との同行を通じて、提案や対応の流れを実践的に学びます。"]]},
  evaluation:{no:"04",en:"EVALUATION",title:"人事評価制度",lead:"挑戦と成果を、次の成長へ。",intro:"年齢や社歴だけではなく、一人ひとりの取り組む姿勢と成果を正当に評価します。",sections:[["明確な評価基準","役割や目標を明確にし、納得感のある評価を目指します。"],["定期的なフィードバック","上司との対話を通して成果と課題を確認し、次の目標を設定します。"],["キャリアアップ","実績と成長に応じて、新しい役割や責任へ挑戦できる機会を用意します。"]]},
  day:{no:"05",en:"ONE DAY",title:"社員の一日",lead:"お客様と仲間に向き合う、一日。",intro:"アルファコミュニケーションズで働く社員の、基本的な一日の流れをご紹介します。",sections:[["09:00　出社・朝礼","当日の予定とチームの情報を共有し、一日の業務を開始します。"],["10:00　お客様対応","訪問、商談、機器の設定やサポートなど、職種ごとの業務に取り組みます。"],["17:00　帰社・振り返り","進捗の共有や翌日の準備を行い、一日の仕事を振り返ります。"]]},
  requirements:{no:"06",en:"REQUIREMENTS",title:"募集要項",lead:"あなたの挑戦を、お待ちしています。",intro:"現在の募集職種や勤務条件、選考の流れをご案内します。詳細はお問い合わせください。",sections:[["募集職種","コンサルティング営業職／カスタマーサービス職／オフィスワーク職"],["勤務地","福岡・佐賀・長崎・熊本・鹿児島・山口の各拠点"],["選考フロー","応募・書類確認 → 面接 → 内定　※職種により内容が異なる場合があります。"]]},
} as const;

export function generateStaticParams(){return Object.keys(pages).map(slug=>({slug}))}

export default async function RecruitDetailPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const page=pages[slug as keyof typeof pages]; if(!page)notFound();
  return <main className="recruitDetailPage" id="top">
    <SiteHeader demo4/>
    <section className="recruitDetailHero"><div><p>{page.no} / {page.en}</p><h1>{page.title}</h1><strong>{page.lead}</strong><div className="recruitDetailBreadcrumb"><Link href="/">HOME</Link><span>→</span><Link href="/recruit">採用情報</Link><span>→</span><b>{page.title}</b></div></div><div className="recruitEditorialImage"><span>IMAGE</span><strong>{page.title} メインイメージ</strong><small>画像・イラストを配置</small></div></section>
    <section className="recruitDetailIntro"><p>{page.en}</p><h2>{page.lead}</h2><span>{page.intro}</span></section>
    <section className="recruitDetailSections">{page.sections.map(([title,text],index)=><article className={`revealUp ${index%2?"isReverse":""}`} data-reveal key={title}><div className="recruitEditorialImage"><span>IMAGE</span><strong>{title} イメージ</strong><small>画像・イラストを配置</small></div><div><span>0{index+1}</span><h2>{title}</h2><p>{text}</p></div></article>)}</section>
    <section className="recruitDetailBack"><p>RECRUIT INFORMATION</p><h2>その他の採用情報を見る</h2><Link href="/recruit">採用トップへ戻る <span>→</span></Link></section>
    <Demo3HomeEnding whiteContact/><FloatingMenu demo4/><ScrollEffects/>
  </main>
}
