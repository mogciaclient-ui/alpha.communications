import { Demo4ContentPage, type Demo4PageContent } from "@/components/demo4/Demo4ContentPage";
import { DEMO4_BLOCKS } from "@/components/demo4/demo4PageBlocks";

const BLOCK_KEYS:Record<string,string>={"社会へのとりくみ":"social-initiatives","地域へのとりくみ":"regional-initiatives","SDGsへの取り組み":"sdgs","DXへの取り組み":"dx"};

type Props={eyebrow?:string;title?:string;description?:string;visualLabel?:string};

export function Demo4InitiativePage({eyebrow="OUR ATTEMPT",title="社会へのとりくみ",description="地域と未来のために、私たちができることを一つずつ積み重ねています。",visualLabel="SOCIAL INITIATIVE"}:Props={}){
  const isDx=title.includes("DX");
  const isRegional=title.includes("地域");
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
  return <Demo4ContentPage content={{eyebrow,title,lead:description,description:"事業活動と日々の行動を通じて、地域の企業、働く人、そして未来に役立つ取り組みを着実に進めています。",visual:visualLabel,points,blocks:DEMO4_BLOCKS[BLOCK_KEYS[title]],cta:{label:"取り組みについて相談する",href:"/contact"}}}/>;
}
