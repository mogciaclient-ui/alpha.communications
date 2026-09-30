import { Demo4ContentPage, type Demo4PageContent } from "@/components/demo4/Demo4ContentPage";
import { DEMO4_BLOCKS } from "@/components/demo4/demo4PageBlocks";
import type { Demo4Block } from "@/components/demo4/Demo4Blocks";

const BLOCK_KEYS:Record<string,string>={"社会へのとりくみ":"social-initiatives","地域へのとりくみ":"regional-initiatives","SDGsへの取り組み":"sdgs","DXへの取り組み":"dx"};

type Props={eyebrow?:string;title?:string;description?:string;visualLabel?:string};

const socialBlocks:Demo4Block[]=[
  {type:"text",tone:"sky",eyebrow:"ABOUT SDGs",title:"SDGsとは",paragraphs:["SDGs（持続可能な開発目標）は、2030年までに持続可能な世界を実現するための国際目標です。17のゴールと169のターゲットから構成され、誰一人取り残さない未来を目指しています。"]},
  {type:"cards",eyebrow:"SDGs ACTION",title:"持続可能な社会のための4つの取り組み",items:[
    {label:"DX SUPPORT",title:"中小企業のDX化を支援",text:"DXマーク認証やDXアドバイザーの知見を活かし、地域の中小企業がデジタル化へ踏み出すための支援を行います。"},
    {label:"CHILDREN",title:"子ども食堂の運営を支援",text:"貧困家庭や孤食の子どもたちへ食事を提供する、子ども食堂の運営を支援しています。"},
    {label:"WORK STYLE",title:"働き方改革を推進",text:"働き方改革宣言のもと、社員が力を発揮できる活力ある職場づくりに取り組んでいます。"},
    {label:"EDUCATION",title:"CIESFの活動を応援",text:"教育を通じた国際支援に取り組む「国境なき教師団」CIESF（シーセフ）の活動を応援しています。"},
  ]},
  {type:"text",tone:"blue",eyebrow:"ABOUT DX",title:"DXとは",paragraphs:["DXとは、データやデジタル技術を活用して、製品・サービスだけでなく、業務、組織、プロセス、企業文化まで変革し、変化する環境の中で新しい価値と競争力を生み出すことです。"]},
  {type:"cards",eyebrow:"DX POLICY",title:"お客様とともに進めるDX",lead:"商品を導入するだけで終わらせず、課題解決と継続的な成長につながるDXを支援します。",items:[
    {label:"01",title:"必要な商品・サービスを提供",text:"業務改善と経営改善を継続するために、DX化に必要な商品やサービスを提供します。"},
    {label:"02",title:"信頼される関係を築く",text:"お客様が抱える問題に向き合い、解決を重ねながら長く信頼される関係を目指します。"},
    {label:"03",title:"DX人材を育成する",text:"DXの本質を理解し、知識と経験をもってお客様を支援できる人材を育成します。"},
    {label:"04",title:"情報を届け、ともに成長する",text:"新しい情報を継続して提供し、お客様とともに変化し、成長できる企業を目指します。"},
  ]},
  {type:"mediaCards",tone:"sky",eyebrow:"CERTIFICATION & PLATFORM",title:"DX推進を支える認証・資格・基盤",lead:"制度・人材・データ活用の3つの側面から、お客様のDX推進を支えます。",items:[
    {title:"DXマーク認証",image:"DX MARK",text:"当社自身が認証を取得するとともに、認証支援事業者としてお客様のDXマーク取得も支援します。"},
    {title:"DXアドバイザー",image:"DX ADVISOR",text:"何を、どこから、どう進めるかという課題に寄り添い、DX推進の土台づくりを支援します。"},
    {title:"きづなPARK",image:"KIZUNA PARK",text:"経営情報を収集・蓄積・分析し、DX推進度の可視化、課題抽出、解決までをサポートします。"},
  ]},
];

export function Demo4InitiativePage({eyebrow="OUR ATTEMPT",title="社会へのとりくみ",description="地域と未来のために、私たちができることを一つずつ積み重ねています。",visualLabel="SOCIAL INITIATIVE"}:Props={}){
  const isDx=title.includes("DX");
  const isRegional=title.includes("地域");
  const isSocial=title==="社会へのとりくみ";
  const heroOnly=title==="地域へのとりくみ";
  const points:Demo4PageContent["points"]=isDx?[
    {label:"WORKFLOW",title:"業務を見える化する",text:"日々の作業を整理し、デジタル化する範囲と優先順位を明確にします。"},
    {label:"IMPLEMENT",title:"現場で使える形にする",text:"導入だけで終わらせず、実際の運用に定着するまで支援します。"},
    {label:"IMPROVE",title:"継続して改善する",text:"利用状況を確認し、変化に合わせてより良い運用へ見直します。"},
  ]:isRegional?[
    {label:"LOCAL",title:"地域のそばで支える",text:"各拠点から、お客様の困りごとに迅速に対応します。"},
    {label:"CONNECT",title:"人と企業をつなぐ",text:"地域のつながりを大切にし、仕事を通じた価値を届けます。"},
    {label:"FUTURE",title:"次の世代へつなぐ",text:"地域の未来につながる活動を、身近なところから続けます。"},
  ]:[
    {label:"ENVIRONMENT",title:"環境負荷を減らす",text:"省エネルギーやペーパーレス化につながる働き方を提案します。"},
    {label:"COMMUNITY",title:"地域社会に貢献する",text:"地域に根ざす企業として、身近な社会活動を継続します。"},
    {label:"PEOPLE",title:"働きやすさを支える",text:"誰もが安心して働ける環境と仕組みづくりを大切にします。"},
  ];
  return <Demo4ContentPage content={{eyebrow,title,lead:isSocial?"持続可能な社会と、地域企業の変革を支える。":description,description:isSocial?"SDGsへの貢献と中小企業のDX支援を、社会への取り組みを形づくる二つの柱としてご紹介します。":"事業活動と日々の行動を通じて、地域の企業、働く人、そして未来に役立つ取り組みを着実に進めています。",visual:visualLabel,heroOnly,points,blocks:isSocial?socialBlocks:DEMO4_BLOCKS[BLOCK_KEYS[title]],cta:{label:"取り組みについて相談する",href:"/contact"}}}/>;
}
