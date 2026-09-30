import Link from "next/link";
import { FloatingMenu } from "@/components/FloatingMenu";
import { OfficeAdvisor } from "@/components/OfficeAdvisor";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteEnding } from "@/components/site/SiteEnding";

const recruitItems=[
  {no:"01",slug:"new-graduate",title:"新卒の方へ",text:"充実した研修とサポート体制で、社会人としての第一歩を応援します。",image:"新卒採用イメージ"},
  {no:"02",slug:"mid-career",title:"中途の方へ",text:"これまでの経験を活かし、さらなるステージでご活躍いただけます。",image:"中途採用イメージ"},
  {no:"03",slug:"training",title:"研修・教育体制",text:"一人ひとりの成長を支える、多彩な研修プログラムをご用意しています。",image:"研修・教育体制イメージ"},
  {no:"04",slug:"evaluation",title:"人事評価制度",text:"頑張りや成果を正当に評価し、成長やキャリアにつなげていきます。",image:"人事評価制度イメージ"},
  {no:"05",slug:"day",title:"社員の一日",text:"先輩社員の1日のスケジュールや、仕事の流れをご紹介します。",image:"社員の一日イメージ"},
  {no:"06",slug:"requirements",title:"募集要項",text:"募集職種や応募条件、選考フローなどの詳細はこちらをご確認ください。",image:"募集要項イメージ"},
];

function Arrow(){return <span aria-hidden="true">→</span>}

function RecruitPlaceholder({label,className=""}:{label:string;className?:string}){
  return <div className={`recruitEditorialImage ${className}`} role="img" aria-label={`${label}の画像プレースホルダー`}>
    <span>IMAGE</span><strong>{label}</strong><small>画像を配置</small>
  </div>;
}

export function RecruitPage(){return <main className="recruitEditorialPage" id="top">
  <SiteHeader demo4/>

  <section className="recruitEditorialHero">
    <div className="recruitEditorialHeroCopy">
      <p>ALPHA COMMUNICATIONS RECRUIT</p>
      <h1>一人ひとりの挑戦が<br/><span>未来をつくる</span></h1>
      <div/>
      <small>私たちは、変化を楽しみ、成長し続ける仲間を求めています。<br/>あなたの可能性を、ここで広げてみませんか？</small>
    </div>
    <RecruitPlaceholder label="採用メインビジュアル" className="recruitEditorialHeroImage"/>
  </section>

  <section className="recruitEditorialMenu" aria-label="採用情報">
    {recruitItems.map((item,index)=><article className={`recruitEditorialRow ${index%2?"isReverse":""}`} key={item.no}>
      <RecruitPlaceholder label={item.image}/>
      <div className="recruitEditorialRowCopy">
        <span>{item.no}</span><h2>{item.title}</h2><i/><p>{item.text}</p>
        <Link href={`/recruit/${item.slug}`}>詳しく見る <Arrow/></Link>
      </div>
    </article>)}
  </section>

  <section className="recruitEditorialEntry" id="entry" style={{background:"linear-gradient(110deg,#1786dd,#0759b5)"}}>
    <p>JOIN OUR TEAM</p><h2>私たちと一緒に、未来に挑戦しませんか？</h2>
    <Link href="/contact">採用について問い合わせる <Arrow/></Link>
  </section>

  <SiteEnding whiteContact/>
  <OfficeAdvisor/><FloatingMenu demo4/>
</main>}
