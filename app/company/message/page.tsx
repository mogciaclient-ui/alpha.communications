import { FloatingMenu } from "@/components/FloatingMenu";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { ScrollEffects } from "@/components/ScrollEffects";
import { SiteHeader } from "@/components/SiteHeader";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function CompanyMessagePage(){return <main className="companyMessagePage">
  <SiteHeader/>

  <section className="companyMessageHero">
    <div className="companyMessageLoop" aria-hidden="true">
      <div><span>COMPANY</span><span>COMPANY</span><span>COMPANY</span><span>COMPANY</span></div>
      <div><span>COMPANY</span><span>COMPANY</span><span>COMPANY</span><span>COMPANY</span></div>
    </div>
    <div className="companyMessageHeroInner">
      <h1><i/>代表挨拶</h1>
      <PageBreadcrumb current="代表挨拶" parents={[{label:"会社案内",href:"/company"}]}/>
    </div>
  </section>

  <article className="companyMessageBody">
    <div className="companyMessageText revealUp" data-reveal>
      <p>アルファコミュニケーションズ株式会社はNTT西日本の情報機器特約店として、販売・設置工事・アフターフォローをワンストップで行い、企業に必要不可欠な通信環境を通じて豊かな社会の実現に貢献することを追求しています。</p>
      <p>日進月歩で日々飛躍的に進化を続けている通信業界において、私たちは通信のプロフェッショナルとして、オフィスの業務効率の向上と通信リスクの軽減、コスト削減につながる商品とサービスの提供を行っています。</p>
      <p>弊社が提供する情報通信機器と、人とは全く対極にあるように見えますが、実はとても密接に関係しています。単純に商品やサービスを提供することだけでは、NTT西日本の情報機器特約店としての責務を全うしているとは言えません。</p>
      <p>人が行うビジネスを円滑に進めるツールが情報通信機器です。電話やインターネット、FAXなどに代表される情報通信機器はビジネスのインフラです。お客様のビジネスを根幹から理解し、通信におけるニーズを的確にとらえることができなければ最適な通信ソリューションは提供することが出来ません。</p>
      <p>私たちはNTT西日本の情報機器特約店として、一歩踏み込んだコミュニケーションを通してプラスアルファの本質的な課題を発見し、通信機器を通してその課題を解決することでお客様のビジネスの発展をサポートしています。</p>
      <div className="companyMessageSignature"><span>アルファコミュニケーションズ株式会社</span><small>Alpha Communications Corporation</small><strong>長尾 政徳</strong></div>
    </div>
  </article>

  <ContactSection title={<>オフィスのお困りごとを<br/>お気軽にご相談ください</>} description="通信環境やOA機器について、小さなお悩みからでも丁寧にお伺いします。"/>
  <SiteFooter pageTopHref="/company/message"/>
  <FloatingMenu/><ScrollEffects/>
</main>}
