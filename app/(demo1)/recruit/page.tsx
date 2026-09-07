import Link from "next/link";
import Image from "next/image";
import { ScrollEffects } from "@/components/ScrollEffects";

function Arrow(){return <span aria-hidden="true">→</span>}
function RecruitImage({label,className="",src}:{label:string;className?:string;src?:string}){return <div className={`recruitEditorialImage ${className}${src?" hasImage":""}`} role="img" aria-label={label}>{src?<Image src={src} alt={label} fill sizes="(max-width: 650px) 100vw, 50vw"/>:<><span>IMAGE</span><strong>{label}</strong><small>画像・イラストを配置</small></>}</div>}

const recruitItems=[
  {no:"01",title:"新卒の方へ",text:"充実した研修とサポート体制で、社会人としての第一歩を応援します。",image:"新卒採用イメージ",imageSrc:"/alpha-recruit/2.png",href:"/recruit/new-graduate"},
  {no:"02",title:"中途の方へ",text:"これまでの経験を活かし、さらなるステージでご活躍いただけます。",image:"中途採用イメージ",imageSrc:"/alpha-recruit/3.png",href:"/recruit/mid-career"},
  {no:"03",title:"研修・教育体制",text:"一人ひとりの成長を支える、多彩な研修プログラムをご用意しています。",image:"研修・教育体制イメージ",imageSrc:"/alpha-recruit/6.png",href:"/recruit/training"},
  {no:"04",title:"人事評価制度",text:"頑張りや成果を正当に評価し、成長やキャリアにつなげていきます。",image:"人事評価制度イメージ",imageSrc:"/alpha-recruit/5.png",href:"/recruit/evaluation"},
  {no:"05",title:"社員の一日",text:"先輩社員の1日のスケジュールや、仕事の流れをご紹介します。",image:"社員の一日イメージ",imageSrc:"/alpha-recruit/4.png",href:"/recruit/day"},
  {no:"06",title:"募集要項",text:"募集職種や応募条件、選考フローなどの詳細はこちらをご確認ください。",image:"募集要項イメージ",imageSrc:"/alpha-recruit/7.png",href:"/recruit/requirements"},
];

export default function RecruitPage(){return <main className="recruitEditorialPage" id="top">
  <header className="recruitEditorialHeader">
    <Link href="/" className="recruitEditorialBrand"><span>LOGO</span><strong>アルファコミュニケーションズ</strong><small>RECRUIT SITE</small></Link>
    <Link href="/recruit/requirements" className="recruitEditorialHeaderEntry">ENTRY <Arrow/></Link>
  </header>

  <section className="recruitEditorialHero">
    <div className="recruitEditorialHeroCopy revealUp" data-reveal><p>ALPHA COMMUNICATIONS RECRUIT</p><h1>一人ひとりの挑戦が<br/><span>未来をつくる</span></h1><div/><small>私たちは、変化を楽しみ、成長し続ける仲間を求めています。<br/>あなたの可能性を、ここで広げてみませんか？</small></div>
    <RecruitImage label="採用メインビジュアル" className="recruitEditorialHeroImage" src="/alpha-recruit/1.png"/>
  </section>

  <section className="recruitEditorialMenu" id="recruit-menu">
    {recruitItems.map((item,index)=><article className={`recruitEditorialRow ${index%2 ? "isReverse" : ""}`} key={item.no}>
      <RecruitImage label={item.image} src={item.imageSrc}/>
      <div className="recruitEditorialRowCopy revealUp" data-reveal><span>{item.no}</span><h2>{item.title}</h2><i/><p>{item.text}</p><a href={item.href}>詳しく見る <Arrow/></a></div>
    </article>)}
  </section>

  <section className="recruitEditorialEntry" id="entry"><p>JOIN OUR TEAM</p><h2>私たちと一緒に、未来に挑戦しませんか？</h2><Link href="/recruit/requirements">エントリーはこちら <Arrow/></Link></section>
  <footer className="recruitEditorialFooter"><Link href="/">アルファコミュニケーションズ株式会社</Link><span>© ALPHA COMMUNICATIONS CO., LTD.</span><a href="#top">PAGE TOP ↑</a></footer>
  <ScrollEffects/>
</main>}
