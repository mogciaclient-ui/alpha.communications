import Image from "next/image";
import Link from "next/link";
import { FloatingMenu } from "@/components/demo2/FloatingMenu";
import { ScrollEffects } from "@/components/demo2/ScrollEffects";
import { SiteHeader } from "@/components/demo2/SiteHeader";
import { SiteFooter } from "@/components/demo2/SiteFooter";
import { OurServiceSection } from "@/components/demo2/OurServiceSection";

const Arrow=()=> <span aria-hidden="true">→</span>;
const moreSolutions=[
  {en:"ENVIRONMENT",title:"環境・省エネ",lead:"快適さを保ちながら、コストと環境負荷を見直します。",items:[["LED照明","消費電力を抑え、明るく快適な環境へ。"],["業務用エアコン","利用状況に合わせて空調環境を最適化。"]]},
  {en:"ALPHA ORIGINAL",title:"独自サービス",lead:"通信から経営支援まで、アルファ独自の選択肢をご用意しています。",items:[["アルファ光","安定した通信品質とコスト削減を両立。"],["アルファ電気","品質を保ちながら電気料金を見直します。"],["アルファWEB","提案・制作・公開後の管理まで対応。"],["アルファモバイル","利用状況に合う料金プランをご提案。"],["AXCEL","定期訪問で経営課題の改善を支援します。"]]},
];

export default function ServicePage(){return <main className="demo2ServiceLanding">
  <div className="demo2Home demo2ServiceHeaderScope">
    <SiteHeader className="demo2Header"/>
  </div>
  <section className="d2ServiceHero d2ServiceHeroOffice"><div className="d2ServiceHeroCopy revealUp" data-reveal><p>SERVICE / OFFICE SOLUTION</p><h1>オフィスの困りごとに<br/><em>答えをひとつずつ</em></h1><span>機器・IT・防犯・導入後のサポートまで。<br/>必要なサービスを、分かりやすく組み合わせます。</span><a href="#service-list">サービスから探す <b>→</b></a></div><div className="d2ServiceHeroVisual revealClipRight" data-reveal aria-hidden="true"><div className="d2ServiceHeroImage"><Image src="/demo2/alpha-demo2-service.png" alt="" fill priority sizes="(max-width: 800px) 100vw, 62vw"/></div></div></section>
  <OurServiceSection/>
  <section className="d2OasysLayers"><div className="d2OasysLayersIntro revealUp" data-reveal><p className="demo2Eyebrow">PICK UP SOLUTION</p><strong>OASYS</strong><h2>経営・オフィスの困りごとを<br/><em>専門チームが継続して支える</em></h2><p>機器の保守だけでなく、IT環境の把握、日々のトラブル対応、業務改善や人材育成まで。4つの支援を、お客様の状況に合わせて組み合わせます。</p><Link href="/demo2/service/oasys">OASYSについて <Arrow/></Link></div><div className="d2OasysLayerList revealUp" data-reveal>{[
    ["01","OASYS PREMIUM","定期訪問・伴走支援","コンシェルジュが定期的に訪問し、経営や業務の課題を継続して整理・改善します。"],
    ["02","OASYS KARTE","IT環境の診断・可視化","機器の状態を継続的に収集し、トラブルの兆候を早期に発見します。"],
    ["03","SUPPORT CENTER","電話・遠隔サポート","専用窓口がPCやネットワーク、ソフトの操作やトラブルに対応します。"],
    ["04","AI TRAINING","AI導入研修・活用支援","AIの基本から実務での使い方まで、導入と社内活用を支援します。"],
  ].map(([no,en,title,text])=><article key={no}><span>{no}</span><div><small>{en}</small><h3>{title}</h3><p>{text}</p></div><i aria-hidden="true">＋</i></article>)}</div><div className="d2OasysLayersWord" aria-hidden="true">OASYS</div></section>
  <section className="d2MoreSolutions"><header className="revealUp" data-reveal><p className="demo2Eyebrow">MORE SOLUTIONS</p><h2>オフィスの<br/><em>その先まで支える</em></h2><p>設備の省エネから通信、WEB、経営支援まで。<br/>仕事を取り巻く幅広い課題にお応えします。</p></header><div className="d2MoreSolutionGrid">{moreSolutions.map((group,index)=><article className={`d2MoreSolution d2MoreSolution${index+1} revealUp`} data-reveal key={group.en}><div className="d2MoreSolutionHead"><small>0{index+1} / {group.en}</small><h3>{group.title}</h3><p>{group.lead}</p></div><ul>{group.items.map(([title,text],itemIndex)=><li key={title}><Link href="/demo2/services/oa-equipment"><span><b>{title}</b><small>{text}</small></span><i aria-hidden="true">↗</i></Link><strong aria-hidden="true">0{itemIndex+1}</strong></li>)}</ul><span className="d2MoreSolutionWord" aria-hidden="true">{group.en}</span></article>)}</div></section>
  <section className="demo2Contact"><div className="demo2ContactDots" aria-hidden="true">{Array.from({length:12},(_,i)=><i key={i}/>)}</div><p className="demo2Eyebrow">LET&apos;S TALK</p><h2>何を選べばいいか<br/><em>分からなくても大丈夫です</em></h2><p>まずは、今のお困りごとをお聞かせください。</p><div><Link href="/demo2/contact">無料で相談する <Arrow/></Link><a href="tel:0120610113"><small>平日 9:00–18:00</small>0120-610-113</a></div></section>
  <SiteFooter pageTopHref="/demo2/service"/><FloatingMenu/><ScrollEffects/>
</main>}
