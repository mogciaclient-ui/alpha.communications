import { FloatingMenu } from "@/components/demo2/FloatingMenu";
import { PageBreadcrumb } from "@/components/demo2/PageBreadcrumb";
import { ScrollEffects } from "@/components/demo2/ScrollEffects";
import { SiteHeader } from "@/components/demo2/SiteHeader";
import { ContactSection } from "@/components/demo2/ContactSection";
import { SiteFooter } from "@/components/demo2/SiteFooter";

type Product={title:string;text:string};
type Props={title:string;english:string;current:"business"|"it"|"wide";products:Product[]};
function Arrow(){return <span className="arrow" aria-hidden="true">→</span>}
function ProductImage({label}:{label:string}){return <div className="placeholder businessProductImage" role="img" aria-label={`${label}画像プレースホルダー`}><span className="placeholderMark">IMAGE</span><strong>{label} イメージ</strong><small>画像・イラストを配置</small></div>}

export function ServiceCategoryLayout({title,english,current,products}:Props){return <main className="businessSupportPage">
  <SiteHeader/>
  <section className="businessHero"><div className="businessHeroLoop" aria-hidden="true">SERVICE SERVICE SERVICE</div><div className="businessHeroInner"><p className="enTitle">{english}</p><h1>{title}</h1><PageBreadcrumb current={title} parents={[{label:"サービス案内",href:"/demo2/service"}]}/></div></section>
  <section className="businessCatalog"><aside className="businessCategoryNav"><div className="businessCategoryGhost">CATEGORY</div><h2><small>CATEGORY</small>サービスカテゴリー</h2><a href="/demo2/service">サービス一覧</a><a className={current==="business"?"isCurrent":""} href="/demo2/service/category/business_support">ビジネスインフラサポート</a><a className={current==="it"?"isCurrent":""} href="/demo2/service/category/it_support">ITインフラサポート</a><a className={current==="wide"?"isCurrent":""} href="/demo2/service/category/top_support">オフィスの幅広いサービス</a></aside><div className="businessProductGrid" id="products">{products.map(({title:itemTitle,text},index)=><a href="/demo2/contact" className="businessProduct revealUp" data-reveal key={itemTitle}><ProductImage label={itemTitle}/><div><span>{String(index+1).padStart(2,"0")}</span><h2>{itemTitle}</h2><p>{text}</p><i><Arrow/></i></div></a>)}</div></section>
  <ContactSection title={<>オフィス環境の見直しを<br/>お気軽にご相談ください</>} description="サービス選定から導入後の保守まで、まとめて対応します。"/>
  <SiteFooter/>
  <FloatingMenu/><ScrollEffects/>
</main>}
