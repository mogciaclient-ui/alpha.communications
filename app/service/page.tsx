import Image from "next/image";
import { FloatingMenu } from "@/components/FloatingMenu";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { ScrollEffects } from "@/components/ScrollEffects";
import { SiteHeader } from "@/components/SiteHeader";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";

function Arrow() { return <span className="arrow" aria-hidden="true">→</span>; }

export default function ServicePage() {
  return <main className="servicePage">
    <SiteHeader className="servicePageHeader"/>

    <section className="serviceHero">
      <svg className="serviceHeroOrbit" viewBox="0 0 650 420" aria-hidden="true"><g transform="rotate(-12 325 210)"><ellipse cx="325" cy="210" rx="285" ry="128"/><ellipse cx="325" cy="210" rx="215" ry="92"/><circle cx="102" cy="292" r="16"/><circle cx="523" cy="123" r="9"/></g></svg>
      <div className="serviceHeroCopy"><p>サービス案内</p><h1>SERVICE</h1><PageBreadcrumb current="サービス案内"/></div>
      <div className="serviceHeroImage serviceHeroVideo revealClipRight" data-reveal>
        <video autoPlay muted loop playsInline preload="metadata" aria-label="サービス紹介イメージ動画">
          <source src="/istockphoto-1332608038-640_adpp_is.mp4" type="video/mp4"/>
        </video>
      </div>
    </section>

    <section className="serviceIntro revealUp" data-reveal>
      <div className="serviceIntroSide" aria-hidden="true">SERVICE</div>
      <h2 className="serviceConcernTitle">こんな<span>お悩み</span>ありませんか？</h2>
      <div className="serviceIntroImage">
        <Image src="/alpha-onayami.png" alt="オフィス環境のお悩みイメージ" fill sizes="(max-width: 650px) calc(100vw - 44px), 900px"/>
        <span className="concernBubble concernBubbleOne">電話設備が古くて<br/>使いづらい</span>
        <span className="concernBubble concernBubbleTwo">コピー機のコストを<br/>見直したい</span>
        <span className="concernBubble concernBubbleThree">ネットが遅くて<br/>業務が止まってしまう</span>
        <span className="concernBubble concernBubbleFour">セキュリティ対策が<br/>十分なのか不安</span>
      </div>
    </section>

    <section className="serviceSolutionHeading revealUp" data-reveal>
      <p className="enTitle">OUR SERVICES</p>
      <h2>オフィス環境の<span>悩みを解決</span>いたします！</h2>
      <p>機器の導入から通信環境の整備、導入後のサポートまで、オフィス全体をまとめてお任せください。</p>
    </section>

    <section className="serviceOrbitServices">
      <svg className="serviceOrbitLines" viewBox="0 0 1440 1350" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><circle cx="720" cy="650" r="560"/><circle cx="720" cy="650" r="390"/><circle cx="720" cy="650" r="220"/><g><circle cx="1240" cy="442" r="10"><animateTransform attributeName="transform" type="rotate" from="0 720 650" to="360 720 650" dur="30s" repeatCount="indefinite"/></circle><circle cx="444" cy="926" r="8"><animateTransform attributeName="transform" type="rotate" from="0 720 650" to="360 720 650" dur="22s" repeatCount="indefinite"/></circle></g></svg>
      <div className="serviceOrbitGrid">
        <a href="/service/oasys" className="serviceOrbitItem revealUp" data-reveal><span className="serviceOrbitIcon serviceOrbitIconImage"><Image src="/alpha-icon/oasis.png" alt="OASYSソリューション" fill sizes="(max-width: 650px) calc(100vw - 44px), 460px"/></span><div><h3>OASYSソリューション</h3><i><Arrow/></i></div><p>オフィスのお困りごとをまとめてお伺いし、必要なサービスを組み合わせてご提案します。</p></a>
        <a href="/service/category/business_support" className="serviceOrbitItem revealUp" data-reveal><span className="serviceOrbitIcon serviceOrbitIconImage"><Image src="/alpha-icon/istockphoto-1294367975-1024x1024.jpg" alt="ビジネスインフラサポート" fill sizes="(max-width: 650px) calc(100vw - 44px), 460px"/></span><div><h3>ビジネスインフラサポート</h3><i><Arrow/></i></div><p>ビジネスフォンや複合機など、業務に欠かせない機器と環境を最適に整えます。</p></a>
        <a href="/service/category/it_support" className="serviceOrbitItem revealUp" data-reveal><span className="serviceOrbitIcon serviceOrbitIconImage"><Image src="/alpha-icon/istockphoto-1372098117-1024x1024.jpg" alt="ITインフラサポート" fill sizes="(max-width: 650px) calc(100vw - 44px), 460px"/></span><div><h3>ITインフラサポート</h3><i><Arrow/></i></div><p>社内ネットワークやセキュリティを整備し、安全で快適なIT環境を支えます。</p></a>
        <a href="/service/category/top_support" className="serviceOrbitItem revealUp" data-reveal><span className="serviceOrbitIcon serviceOrbitIconImage"><Image src="/alpha-icon/istockphoto-2276148022-1024x1024.jpg" alt="アルファの幅広いサポート" fill sizes="(max-width: 650px) calc(100vw - 44px), 460px"/></span><div><h3>アルファの幅広いサポート</h3><i><Arrow/></i></div><p>防犯カメラやOA機器、導入後の保守まで、オフィスの幅広いニーズに対応します。</p></a>
      </div>
    </section>

    <section className="serviceFeatures" id="service-features">
      <div className="serviceFeatureLoop" aria-hidden="true">OUR SERVICE FEATURES OUR SERVICE FEATURES</div>
      <div className="serviceFeatureLead revealUp" data-reveal>
        <p className="enTitle">OUR SERVICE FEATURES</p>
        <h2>サービスの特徴</h2>
        <p>私たちは、お客様がオフィス環境構築に必要とするあらゆる機器・サービスを取り扱い、<br/>多様化するニーズに積極的に対応する企業をめざしています。</p>
      </div>
      <div className="featureCards">
        <a href="/company/features" className="featureCard revealClipLeft" data-reveal><div className="featureCardImage"><Image src="/alpha-icon/3.png" alt="アルファの特徴" fill sizes="(max-width: 650px) calc(100vw - 44px), 560px"/></div><div><p>QUALITY</p><h3>アルファの特徴</h3><p className="featureCardDescription">通信環境からOA機器まで、企業ごとの課題を丁寧に伺い、最適な組み合わせをご提案します。</p><span className="featureCardAction"><b>詳しく見る</b><Arrow/></span></div></a>
        <a href="/service/after-sales" id="after-service" className="featureCard featureCardReverse revealClipRight" data-reveal><div className="featureCardImage"><Image src="/alpha-icon/4.png" alt="アフターサービス" fill sizes="(max-width: 650px) calc(100vw - 44px), 560px"/></div><div><p>AFTER-SALES SERVICE</p><h3>アフターサービス</h3><p className="featureCardDescription">導入後の設定やトラブル対応、保守まで、地域密着の体制で継続的にサポートします。</p><span className="featureCardAction"><b>詳しく見る</b><Arrow/></span></div></a>
      </div>
    </section>

    <ContactSection animated title={<>オフィスのお困りごとを<br/>お気軽にご相談ください</>} description="サービス選びに迷っている段階でも、専門スタッフが丁寧にお伺いします。"/>
    <SiteFooter pageTopHref="/service"/>
    <FloatingMenu/><ScrollEffects/>
  </main>;
}
