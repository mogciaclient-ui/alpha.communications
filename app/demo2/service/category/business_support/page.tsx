import { FloatingMenu } from "@/components/demo2/FloatingMenu";
import { PageBreadcrumb } from "@/components/demo2/PageBreadcrumb";
import { ScrollEffects } from "@/components/demo2/ScrollEffects";
import { SiteHeader } from "@/components/demo2/SiteHeader";
import { ContactSection } from "@/components/demo2/ContactSection";
import { SiteFooter } from "@/components/demo2/SiteFooter";

function Arrow(){return <span className="arrow" aria-hidden="true">→</span>}
function ProductImage({label}:{label:string}){return <div className="placeholder businessProductImage" role="img" aria-label={`${label}画像プレースホルダー`}><span className="placeholderMark">IMAGE</span><strong>{label} イメージ</strong><small>画像・イラストを配置</small></div>}

const products=[
  ["ビジネスフォン","働き方やオフィス規模に合わせ、多彩な機能を備えた電話環境をご提案します。","/demo2/services/business-phone"],
  ["複合機・コピー機","コピー・FAX・プリンター・スキャナーを一台に集約し、文書業務を効率化します。","/demo2/services/multifunction-printer"],
  ["防犯カメラ","オフィスや店舗への侵入・盗難リスクを抑え、大切な財産と働く人を守ります。","/demo2/services/security-camera"],
  ["セキュリティ機器","情報漏えいやサイバー攻撃に備え、安全な業務環境づくりを支援します。","/demo2/services/security"],
  ["LED照明","省エネルギーで長寿命なLED照明により、電気料金と環境負荷の削減を支援します。","/demo2/services/oa-equipment"],
  ["空調設備","事務所や店舗の広さ・用途に合わせ、快適で効率的な空調環境をご提案します。","/demo2/services/oa-equipment"],
  ["その他OA機器","シュレッダーや周辺機器など、日々の業務に必要なオフィス機器を取り揃えます。","/demo2/services/oa-equipment"],
  ["電源・バックアップ","停電や電源トラブルに備え、事業継続を支えるバックアップ環境を整えます。","/demo2/services/oa-equipment"],
];

export default function BusinessSupportPage(){return <main className="businessSupportPage">
  <SiteHeader/>
  <section className="businessHero">
    <div className="businessHeroLoop" aria-hidden="true">SERVICE SERVICE SERVICE</div>
    <div className="businessHeroInner"><p className="enTitle">BUSINESS INFRA SUPPORT</p><h1>ビジネスインフラサポート</h1><PageBreadcrumb current="ビジネスインフラサポート" parents={[{label:"サービス案内",href:"/demo2/service"}]}/></div>
  </section>
  <section className="businessCatalog">
    <aside className="businessCategoryNav"><div className="businessCategoryGhost">CATEGORY</div><h2><small>CATEGORY</small>サービスカテゴリー</h2><a href="/demo2/service">サービス一覧</a><a className="isCurrent" href="/demo2/service/category/business_support">ビジネスインフラサポート</a><a href="/demo2/service/category/it_support">ITインフラサポート</a><a href="/demo2/service/category/top_support">オフィスの幅広いサービス</a></aside>
    <div className="businessProductGrid" id="products">{products.map(([title,text,href],index)=><a href={href} className="businessProduct revealUp" data-reveal key={title}><ProductImage label={title}/><div><span>{String(index+1).padStart(2,"0")}</span><h2>{title}</h2><p>{text}</p><i><Arrow/></i></div></a>)}</div>
  </section>
  <ContactSection title={<>オフィス環境の見直しを<br/>お気軽にご相談ください</>} description="機器選定から設置、導入後の保守までワンストップで対応します。"/>
  <SiteFooter/>
  <FloatingMenu/><ScrollEffects/>
</main>}
