import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FloatingMenu } from "@/components/FloatingMenu";
import { OfficeAdvisor } from "@/components/OfficeAdvisor";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteEnding } from "@/components/site/SiteEnding";
import styles from "./RecruitDetailPage.module.css";

const pages={
  "new-graduate":{no:"01",en:"NEW GRADUATE",title:"新卒の方へ",lead:"自分に誇りをもち、お客様のビジネスを加速させていく。",intro:"営業やコンサルティングの現場で活躍する3名の社員が、仕事の内容、やりがい、社風、そしてこれから仲間になる皆さんへの思いを語ります。",sections:[["社員の声","仕事のリアルと、アルファコミュニケーションズで働く魅力をご紹介します。"]]},
  "mid-career":{no:"02",en:"MID CAREER",title:"中途の方へ",lead:"自分に誇りをもち、お客様のビジネスを加速させていく。",intro:"異なる経験を持って入社し、営業やマネジメントの現場で活躍する3名の社員が、仕事の内容、やりがい、社風、そして転職を考える皆さんへの思いを語ります。",sections:[["社員の声","中途入社後の成長と、アルファコミュニケーションズで働く魅力をご紹介します。"]]},
  training:{no:"03",en:"TRAINING",title:"研修・教育体制",lead:"レベルに応じた、3つの教育制度。",intro:"未経験から早期に仕事へ取り組めるよう、基礎力・応用力・実践力を段階的に育てます。一歩ずつ経験を積み、自信と誇りを持ってお客様へ提案できる力を身につけます。",sections:[["基礎力育成","仕事の土台をつくる研修です。"],["応用力育成","提案力と商品知識を深めます。"],["実践力育成","先輩と現場に入り、商談力を磨きます。"]]},
  evaluation:{no:"04",en:"EVALUATION",title:"人事評価制度",lead:"成長を支え、日々の仕事を成果へ。",intro:"業績だけでなく、行動のプロセスや仕事への姿勢も明文化し、一人ひとりが次の課題と将来像を理解しながら成長できる評価制度を整えています。",sections:[["制度の考え方","成長と成果をつなぐ評価基準です。"],["評価基準の構成","結果と過程の両面を見ます。"],["目指すべき姿","目的意識を持つプロフェッショナル集団を目指します。"]]},
  day:{no:"05",en:"ONE DAY",title:"社員の一日",lead:"連携から始まり、次の準備で終わる一日。",intro:"朝礼で部署間の連携を確認し、午前はお客様へのご連絡、午後は訪問とご提案へ。アルファコミュニケーションズで働く営業社員の一日をご紹介します。",sections:[["朝礼","部署間の協力体制を確認します。"],["午前","お客様へ連絡し、訪問予定を整えます。"],["午後","お客様を訪問し、フォローと提案を行います。"]]},
  requirements:{no:"06",en:"REQUIREMENTS",title:"募集要項",lead:"営業と技術、二つの仕事から地域を支える。",intro:"現在募集している職種、応募資格、給与、勤務時間、勤務地、休日・休暇、待遇、応募方法をご案内します。",sections:[["募集職種","営業スタッフ／技術スタッフ"],["勤務地","福岡・山口・佐賀・長崎・熊本・鹿児島"],["応募方法","必要書類をご用意のうえ、ご応募ください。"]]},
} as const;

const newGraduateVoices=[
  {department:"IT事業部 課長",joined:"2011年入社",name:"K・M",catchphrase:"営業をおもしろいと思える会社",answers:[
    ["現在の仕事", "法人のお客様へ電話機を中心としたOA機器をご提案しています。午前はアポイントの獲得、午後は訪問と商談が中心です。長期にわたりお客様の課題解決に関われる仕事です。"],
    ["仕事のやりがい", "経営者の方々と直接お話しし、通信の専門家として提案できることに魅力を感じています。商談を通じて、仕事や人生について学べる機会も多くあります。"],
    ["社風", "若く勢いがあり、入社後は上司が継続して支えてくれます。困ったときには同行営業などのフォローがあり、悩みを一人で抱え込まずに成長できます。"],
    ["新卒の方へ", "成果を正当に評価してもらえる環境です。簡単な仕事ではありませんが、営業のおもしろさを学び、自分の可能性を広げたい方に向いています。"],
  ]},
  {department:"IT事業部 主任",joined:"2020年入社",name:"K・S",catchphrase:"メリハリのある会社で、一年目から活躍しよう",answers:[
    ["現在の仕事", "午前は新規のお客様へ電話でご案内し、午後は上司と訪問して商談を行います。帰社後は事務処理や商品学習、商談のロールプレイングにも取り組みます。"],
    ["仕事のやりがい", "努力が数字や評価として見え、お客様からの「ありがとう」を直接いただける仕事です。自分で商談を進め、受注できたときには大きな達成感があります。"],
    ["社風", "仕事には真剣に向き合いながら、困っている人には自然に声をかける雰囲気があります。仕事とプライベートの切り替えがはっきりした、メリハリのある職場です。"],
    ["新卒の方へ", "最初は分からないことがあって当然です。優しい先輩が支えてくれるので、諦めずに取り組む気持ちがあれば、一年目から成長し活躍できます。"],
  ]},
  {department:"AXCEL事業部 係長",joined:"2013年入社",name:"N・U",catchphrase:"やったもん勝ち！",answers:[
    ["現在の仕事", "法人のお客様へ経営コンサルティングを行っています。売上拡大・業務効率改善・リスク回避を軸に、定期訪問を通して経営上の課題解決を支援します。"],
    ["仕事のやりがい", "お客様と一緒に経営課題を解決できたときに、最も達成感を感じます。変化する通信や社会について学んだ知識が、お客様の役に立つ喜びがあります。"],
    ["社風", "若い社員が多く、それぞれが目的意識を持って仕事に取り組んでいます。信頼と連帯を大切にし、感謝を言葉で伝え合う文化があります。"],
    ["新卒の方へ", "自分の意思で積極的に挑戦でき、成果は公平な評価や待遇につながります。現状に満足せず、向上心を持って前へ進みたい方を待っています。"],
  ]},
] as const;

const midCareerVoices=[
  {department:"IT事業部 次長",joined:"2008年入社",name:"S・M",catchphrase:"営業に向いていない人はいない！",answers:[
    ["現在の仕事", "課の目標管理とメンバーの目標達成支援を担っています。部署間を調整して業務を円滑に進めるほか、若手社員や次世代リーダーの育成にも力を入れています。"],
    ["仕事のやりがい", "営業担当として成果を追う立場から、組織全体を支える管理職へ役割が広がりました。メンバーが力を合わせ、同じ目標へ進むチームづくりにやりがいを感じます。"],
    ["社風", "育成環境が整い、社員同士の距離が近い職場です。若い社員が多く、仕事と私生活の切り替えを大切にしながら、感謝・素直・誠実・創造・克己の姿勢を共有しています。"],
    ["中途の方へ", "営業経験の有無より、挑戦したいという意思が大切です。人見知りだった自身も営業の楽しさを知りました。お客様に貢献しながら自己成長を目指せる仕事です。"],
  ]},
  {department:"IT事業部 係長",joined:"2018年入社",name:"T・M",catchphrase:"自己の成長",answers:[
    ["現在の仕事", "NTT西日本の情報機器特約店として、電話機・複合機・ネットワーク機器・セキュリティ機器などを法人のお客様へ提案しています。回線導入の支援にも対応します。"],
    ["仕事のやりがい", "商品の価値を理解し、お客様のニーズに合わせて分かりやすく伝える営業力が身につきます。日々の仕事を通じて、自分の提案力が成長している実感があります。"],
    ["社風", "新卒・中途や年齢に関係なく、一人ひとりを大切にする会社です。分からないことは周囲が丁寧に教え、感謝を忘れずに仕事へ向き合う活気があります。"],
    ["中途の方へ", "営業で培う相手を理解する力、問題解決力、コミュニケーション力は、時代が変わっても通用します。人と向き合う仕事を深く追求できる環境です。"],
  ]},
  {department:"IT事業部",joined:"2020年入社",name:"N・A",catchphrase:"コミュニケーションを第一に！",answers:[
    ["現在の仕事", "法人のお客様へ通信機器や回線サービスを提案し、販売から工事、保守まで支援しています。訪問・商談・契約後のアフターサポートを通じて、長い信頼関係を築きます。"],
    ["仕事のやりがい", "通信環境の改善や業務効率化をご提案し、信頼のうえでご契約いただけることが喜びです。継続したサポートで感謝の言葉をいただき、長くお付き合いできる点にも魅力があります。"],
    ["社風", "結果だけでなく、そこへ至るプロセスも大切に評価する会社です。互いに競いながらも、育成や成長のためにチームで助け合い、上司と部下がよく対話しています。"],
    ["中途の方へ", "IT・IoT化が進む通信業界で、専門知識を身につけながら企業の発展に貢献できます。人とのつながりとコミュニケーションを大切にできる方を歓迎します。"],
  ]},
] as const;

const trainingStages=[
  {no:"01",title:"基礎力育成",period:"入社3ヶ月以内",lead:"社会人とアルファの一員として、仕事の土台をつくる。",programs:[
    ["基礎マナー研修","名刺交換、電話対応、接客対応などを基礎から学び、自信を持って仕事へ取り組める状態を目指します。"],
    ["新入社員研修","約3ヶ月の専用カリキュラムで、目標設定から具体的な仕事の進め方まで、実務に直結する12のテーマを集中して学びます。"],
    ["DiSCコミュニケーション研修","行動特性の考え方を通じて相手への理解を深め、社内外の人間関係を円滑にするコミュニケーションを身につけます。"],
    ["経営理念研修","会社が大切にする価値観を学び、アルファコミュニケーションズの一員として判断し、質の高いサービスを届ける姿勢を養います。"],
  ]},
  {no:"02",title:"応用力育成",period:"入社4ヶ月以降",lead:"提案の精度を高め、お客様に合う答えを届ける。",programs:[
    ["営業ロールプレイング","電話対応や提案を先輩社員と繰り返し練習し、お客様の前でも落ち着いて対応できる営業力を磨きます。"],
    ["メーカー研修","メーカー担当者による定期的な勉強会で、幅広い商品への理解を深め、お客様に最適な提案ができる知識を身につけます。"],
  ]},
  {no:"03",title:"実践力育成",period:"実務ステップ",lead:"先輩のフォローを受けながら、現場で使える力へ。",programs:[
    ["OJT研修","先輩社員の商談へ同行し、提案の流れを現場で学びます。見学から始め、少しずつ担当範囲を広げながら実践力を身につけます。"],
  ]},
] as const;

const evaluationPrinciples=[
  ["01","次の課題を明確にする","評価基準を理解し、次のステップで取り組む課題と、自分が目指す将来像を明確にします。"],
  ["02","変化に合わせて進化する","社会情勢や業務の変化に合わせ、評価基準そのものも継続的に見直し、更新します。"],
  ["03","段階的に成長する","グレードごとに求める水準を整理し、一段ずつ業務レベルを高められる設計にしています。"],
] as const;

const evaluationCriteria=[
  ["担当業務","組織と業務分掌に基づき、現在の職種で担う役割と必要な仕事を確認します。"],
  ["改善課題","現在の業務でまだ実現できていないことや、改善・改革すべき課題を整理します。"],
  ["職位の役割","部下の育成や業務統括など、職位と権限に応じて期待される水準を示します。"],
  ["経営目標との接続","会社の戦略や計画を個人の行動へ落とし込み、将来へ向けた新しい取り組みにつなげます。"],
] as const;

const daySchedule=[
  {label:"MORNING MEETING",time:"朝礼",title:"一日がスタート！",text:"今日の業務内容に加え、お客様への対応状況と社内の協力体制を確認します。営業・工事・カスタマーサポートが連携し、満足いただけるサービスを届けるための大切な時間です。"},
  {label:"MORNING",time:"午前",title:"お客様へのご連絡とアポイント調整",text:"法人のお客様を中心にお電話し、訪問やフォローの日程を調整します。午前中に予定を整えることで、その後の提案活動をスムーズに進めます。"},
  {label:"BREAK",time:"休憩",title:"昼休みでしっかりリフレッシュ",text:"午後の営業活動に備えて、昼食と休憩の時間をきちんと確保します。オンとオフを切り替えることも、メリハリのある職場づくりの一部です。"},
  {label:"AFTERNOON",time:"午後",title:"お客様を訪問し、フォローとご提案",text:"アポイントをいただいたお客様を訪問し、現在の利用状況を直接伺います。課題に合わせて、通信環境やコスト削減につながる提案を行います。"},
  {label:"CLOSING MEETING",time:"終礼",title:"一日の共有と、明日の営業準備",text:"受注した商品の手配や進捗の共有を行い、翌日の営業活動を準備します。次の日をスムーズに始められる状態へ整えます。"},
  {label:"LEAVE",time:"退社",title:"今日もお疲れさまでした！",text:"一日の業務を終えて退社します。仕事とプライベートを切り替え、どちらも充実させている社員が多いことも特徴です。"},
] as const;

const requirementDetails=[
  ["応募資格","18歳～35歳位まで（要普通自動車免許）"],
  ["給与","月給228,000円（大卒の場合）＋諸手当＋実績給\n※20時間分の定額残業手当を含み、超過分は別途支給します。"],
  ["勤務時間","8:30～18:30（休憩2時間）"],
  ["勤務地","本社（福岡市）／山口営業所（下関市）／佐賀営業所（佐賀市）／長崎営業所（長崎市）／熊本営業所（熊本市）／鹿児島営業所（鹿児島市）"],
  ["休日","土曜・日曜・祝日（完全週休二日制）"],
  ["休暇","年末年始・夏季・GW・慶弔・有給"],
  ["待遇","各種社会保険完備・随時昇給・賞与年2回・社員旅行"],
  ["諸手当","役職・住宅・家族・資格・通勤・誕生日"],
] as const;

type Props={params:Promise<{slug:string}>};

export function generateStaticParams(){return Object.keys(pages).map((slug)=>({slug}));}

export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {slug}=await params;
  const page=pages[slug as keyof typeof pages];
  return page?{title:`${page.title}｜採用情報`,description:page.intro}:{};
}

function Placeholder({label}:{label:string}){
  return <div className="recruitEditorialImage" role="img" aria-label={`${label}の画像プレースホルダー`}><span>IMAGE</span><strong>{label}</strong><small>画像を配置</small></div>;
}

export default async function RecruitDetailPage({params}:Props){
  const {slug}=await params;
  const page=pages[slug as keyof typeof pages];
  if(!page)notFound();
  const interviewVoices=slug==="new-graduate"?newGraduateVoices:slug==="mid-career"?midCareerVoices:null;

  return <main className="recruitDetailPage" id="top">
    <SiteHeader demo4/>
    <section className="recruitDetailHero">
      <div><p>{page.no} / {page.en}</p><h1>{page.title}</h1><strong>{page.lead}</strong><nav className="recruitDetailBreadcrumb" aria-label="パンくずリスト"><Link href="/">HOME</Link><span>→</span><Link href="/recruit">採用情報</Link><span>→</span><b>{page.title}</b></nav></div>
      <Placeholder label={`${page.title} メインイメージ`}/>
    </section>
    <section className="recruitDetailIntro"><p>{page.en}</p><h2>{page.lead}</h2><span>{page.intro}</span></section>
    {interviewVoices?<section className={styles.voices} aria-label={`${page.title}：社員の声`}>
      <header><p>MEMBER INTERVIEW</p><h2>{page.title}：社員の声</h2></header>
      {interviewVoices.map((voice,index)=><article className={styles.voice} key={voice.name}>
        <Placeholder label={`${voice.name}さんの社員写真`}/>
        <div className={styles.voiceBody}>
          <div className={styles.profile}><span>0{index+1}</span><p>{voice.department}<small>{voice.joined}</small></p><strong>{voice.name}</strong></div>
          <h2>“{voice.catchphrase}”</h2>
          <div className={styles.answers}>{voice.answers.map(([question,answer])=><section key={question}><h3>{question}</h3><p>{answer}</p></section>)}</div>
        </div>
      </article>)}
    </section>:slug==="training"?<section className={styles.programs} aria-label="3つの教育制度">
      {trainingStages.map((stage)=><article className={styles.program} key={stage.no}>
        <Placeholder label={`${stage.title}の研修イメージ`}/>
        <div className={styles.programBody}><div className={styles.programHeading}><span>{stage.no}</span><p>{stage.period}</p></div><h2>{stage.title}</h2><strong>{stage.lead}</strong>
          <div className={styles.programList}>{stage.programs.map(([title,text])=><section key={title}><h3>{title}</h3><p>{text}</p></section>)}</div>
        </div>
      </article>)}
    </section>:slug==="evaluation"?<section className={styles.evaluation} aria-label="人事評価制度の仕組み">
      <section className={styles.evalPrinciples}><header><p>EVALUATION POLICY</p><h2>人事評価制度とは</h2></header><div>{evaluationPrinciples.map(([no,title,text])=><article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className={styles.evalComposition}><header><p>STRUCTURE</p><h2>評価基準の構成</h2></header><div><article><small>RESULT</small><h3>結果</h3><strong>業績目標・成果目標</strong><p>達成した数字や成果を確認します。</p></article><article><small>PROCESS</small><h3>過程</h3><strong>能力目標・情意目標</strong><p>成果へ至る能力、行動、姿勢を確認します。</p></article></div></section>
      <section className={styles.evalCriteria}><header><p>CRITERIA</p><h2>4つの評価基準</h2></header><div>{evaluationCriteria.map(([title,text],index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className={styles.evalVision}><p>OUR GOAL</p><h2>一人ひとりが目的意識を持ち、<br/>成長し続けるプロフェッショナル集団へ。</h2><div><span>目標・役割・課題を明確にする</span><span>自分の実力以上へ挑戦し続ける</span><span>経営目標を達成する</span><span>会社と社員の夢を実現する</span></div></section>
    </section>:slug==="day"?<section className={styles.dayTimeline} aria-label="社員の一日の流れ">
      <header><p>ONE DAY SCHEDULE</p><h2>社員の一日を知る</h2></header>
      <div>{daySchedule.map((step,index)=><article className={styles.dayStep} key={step.label}>
        <div className={styles.dayMarker}><span>{String(index+1).padStart(2,"0")}</span><strong>{step.time}</strong><small>{step.label}</small></div>
        <Placeholder label={`${step.time}の仕事風景`}/>
        <div className={styles.dayCopy}><h3>{step.title}</h3><p>{step.text}</p></div>
      </article>)}</div>
    </section>:slug==="requirements"?<section className={styles.requirements} aria-label="募集要項">
      <header><p>OPEN POSITIONS</p><h2>募集職種</h2></header>
      <div className={styles.positionGrid}>
        <article><span>01</span><small>SALES STAFF</small><h3>営業スタッフ</h3><p>NTT西日本の情報機器特約店として、一般企業のお客様へNTT西日本の情報機器や各種サービスをご提案します。</p></article>
        <article><span>02</span><small>TECHNICAL STAFF</small><h3>技術スタッフ</h3><p>お客様先でNTT西日本の情報機器の設置工事を行い、導入後の保守・メンテナンスまで担当します。</p></article>
      </div>
      <section className={styles.requirementTable}><header><p>WORKING CONDITIONS</p><h2>募集条件</h2></header><dl>{requirementDetails.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>
      <section className={styles.application}><div><p>APPLICATION</p><h2>応募方法</h2><span>履歴書（写真貼付）と職務経歴書をご持参またはご郵送ください。確認後、電話にて面接日時をご連絡します。</span><address>〒812-0863 福岡県福岡市博多区金の隈1-28-50<br/>TEL：092-514-1788　FAX：092-514-1789<br/>アルファコミュニケーションズ株式会社　担当：山之城</address></div><Link href="/contact">応募・採用について問い合わせる <b>→</b></Link></section>
    </section>:<section className="recruitDetailSections">{page.sections.map(([title,text],index)=><article className={index%2?"isReverse":""} key={title}><Placeholder label={`${title} イメージ`}/><div><span>0{index+1}</span><h2>{title}</h2><p>{text}</p></div></article>)}</section>}
    <section className="recruitDetailBack"><p>RECRUIT INFORMATION</p><h2>その他の採用情報を見る</h2><Link href="/recruit">採用トップへ戻る <span>→</span></Link></section>
    <SiteEnding whiteContact/>
    <OfficeAdvisor/><FloatingMenu demo4/>
  </main>;
}
