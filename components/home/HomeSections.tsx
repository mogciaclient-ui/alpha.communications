/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import Link from "next/link";
import { Demo4WaveMotion } from "@/components/Demo4WaveMotion";
import { ParallaxCompany } from "@/components/ParallaxCompany";

function Placeholder({ label, ratio = "landscape" }: { label: string; ratio?: "landscape" | "portrait" | "wide" }) {
  return <div className={`placeholder ${ratio}`} role="img" aria-label={`${label}の画像プレースホルダー`}><span className="placeholderMark">IMAGE</span><strong>{label}</strong><small>画像・イラストを配置</small></div>;
}
function Arrow() { return <span className="arrow" aria-hidden="true">→</span>; }

export function HomeHeroSection({heroMotion}:{heroMotion:"orbit"|"wave"}) {
  return (
  <section className={`hero${heroMotion === "wave" ? " demo4Hero" : ""}`} id="top">
    {heroMotion === "wave" ? <Demo4WaveMotion /> : <svg className="orbitAnimation" viewBox="0 0 1200 680" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <g className="orbitLines" transform="rotate(-12 600 340)">
        <ellipse cx="600" cy="340" rx="515" ry="250"/>
        <ellipse cx="600" cy="340" rx="385" ry="185"/>
        <ellipse cx="600" cy="340" rx="245" ry="116"/>
      </g>
      <g className="orbitDot orbitDotOuter" transform="rotate(-12 600 340)"><circle r="17"><animateMotion dur="22s" repeatCount="indefinite" path="M1115 340 A515 250 0 1 1 85 340 A515 250 0 1 1 1115 340"/></circle></g>
      <g className="orbitDot orbitDotMiddle" transform="rotate(-12 600 340)"><circle r="9"><animateMotion dur="17s" begin="-8s" repeatCount="indefinite" path="M985 340 A385 185 0 1 1 215 340 A385 185 0 1 1 985 340"/></circle></g>
      <g className="orbitDot orbitDotInner" transform="rotate(-12 600 340)"><circle r="7"><animateMotion dur="12s" begin="-4s" repeatCount="indefinite" path="M845 340 A245 116 0 1 1 355 340 A245 116 0 1 1 845 340"/></circle></g>
      <g className="orbitDot orbitDotReverse" transform="rotate(-12 600 340)"><circle r="5"><animateMotion dur="27s" begin="-16s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear" path="M985 340 A385 185 0 1 1 215 340 A385 185 0 1 1 985 340"/></circle></g>
    </svg>}
    <div className="heroInner">
      <p className="heroEnglish"><em>A</em>lpha <em>C</em>ommunications</p>
      <h1>九州の企業を支える<br/><span>オフィスの総合パートナー</span></h1>
      <p>NTT西日本 情報機器特約店　アルファコミュニケーションズ</p>
    </div>
    <div className="scroll">SCROLL <span/></div>
  </section>
  );
}

export function HomeBrandMarquee() {
  return (
  <div className="brandMarquee" aria-hidden="true">
    <div><span>Alpha Communications</span><span>Alpha Communications</span><span>Alpha Communications</span></div>
    <div><span>Alpha Communications</span><span>Alpha Communications</span><span>Alpha Communications</span></div>
  </div>
  );
}

export function HomeAboutSection() {
  return (
  <section className="intro storyPanel storyAbout" id="about">
    <div className="introSideLabel" aria-hidden="true">ABOUT US — ALPHA COMMUNICATIONS</div>
    <div className="aboutVideo aboutVideoPrimary aboutMainVisual">
      <Image src="/alpha-aboutus1.png" alt="電球を囲んでアイデアを出し合うオフィスワーカー" fill sizes="(max-width: 650px) 78vw, (max-width: 950px) 47vw, 44vw"/>
      <svg className="aboutBulbGlow" viewBox="0 0 200 280" aria-hidden="true">
        <defs>
          <radialGradient id="aboutBulbLight" cx="50%" cy="42%" r="62%">
            <stop offset="0" stopColor="#fff" stopOpacity=".92"/>
            <stop offset=".48" stopColor="#b9dcff" stopOpacity=".7"/>
            <stop offset="1" stopColor="#5da7f2" stopOpacity=".18"/>
          </radialGradient>
        </defs>
        <path d="M100 5C49 5 18 43 18 96c0 42 19 66 34 91 10 17 13 35 13 55v18h70v-18c0-20 3-38 13-55 15-25 34-49 34-91 0-53-31-91-82-91Z" fill="url(#aboutBulbLight)"/>
      </svg>
    </div>
    <div className="aboutVideo aboutVideoSecondary aboutCityVisual"><Image src="/alpha-aboutus2.png" alt="オフィス街と道路を俯瞰したイラスト" fill sizes="(max-width: 650px) 88vw, (max-width: 950px) 47vw, 60vw"/></div>
    <div className="introCopy">
      <p className="enTitle">ABOUT US</p>
      <h2>お客様の課題を<span className="textBlue">解決</span>する<br/><span className="aboutHeadingSecond">トータルオフィスプランナー</span></h2>
      <p>アルファコミュニケーションズは、福岡を中心に九州・山口の企業を支えるオフィスの総合パートナーです。ビジネスフォン、複合機、ネットワーク、セキュリティなど、オフィスに必要な環境をワンストップでご提案します。</p>
      <p>導入して終わりではなく、その先の保守まで。地域に根ざした身近な存在として、お客さまの事業に長く寄り添います。</p>
      <a className="more" href="/company"><span className="moreLabel">私たちについて</span> <Arrow/></a>
    </div>
  </section>
  );
}

export function Demo4AboutSection() {
  return (
  <section className="demo4About" id="about">
    <div className="demo4AboutCopy revealUp" data-reveal>
      <p className="enTitle">ABOUT US</p>
      <h2>オフィスの未来を、<br/><span>一緒に描く。</span></h2>
      <p>アルファコミュニケーションズは、福岡を中心に九州・山口の企業を支えるオフィスの総合パートナーです。</p>
      <p>機器やネットワークを整えるだけでなく、働く人と向き合い、その会社らしい環境づくりを導入後まで支えます。</p>
      <dl>
        <div><dt>AREA</dt><dd>九州・山口</dd></div>
        <div><dt>SUPPORT</dt><dd>相談から保守まで</dd></div>
      </dl>
      <a className="more" href="/company"><span className="moreLabel">私たちについて</span> <Arrow/></a>
    </div>
    <div className="demo4AboutVisual revealUp" data-reveal aria-label="ABOUT US イラスト配置エリア">
      <div className="demo4AboutIllustration demo4AboutIllustrationMain" role="img" aria-label="働く人とオフィスをつなぐメインイラストのプレースホルダー">
        <small>ABOUT ALPHA / OFFICE CUTAWAY ILLUSTRATION</small>
        <div className="demo4AboutBuilding">
          <article><span>03F</span><div><small>ILLUSTRATION</small><strong>働く人と業務</strong></div><p>人と仕事に向き合い、<br/>より良い働き方を考える。</p></article>
          <article><span>02F</span><div><small>ILLUSTRATION</small><strong>通信・IT環境</strong></div><p>電話・ネットワーク・セキュリティを<br/>ひとつにつなぐ。</p></article>
          <article><span>01F</span><div><small>ILLUSTRATION</small><strong>相談・継続サポート</strong></div><p>地域のすぐそばで、<br/>導入後まで支え続ける。</p></article>
        </div>
      </div>
      <div className="demo4AboutVisualCaption"><span>01</span><p>地域に根ざし、<br/>働く環境を支える。</p><small>FUKUOKA / KYUSHU / YAMAGUCHI</small></div>
    </div>
  </section>
  );
}

export function HomePartnerSection() {
  return (
  <section className="ntt storyPanel storyPartner" id="partner">
    <div className="nttCopy"><p className="enTitle">AUTHORIZED PARTNER</p><h2>NTT西日本<br/><span>情報機器特約店</span></h2><p>ブロードバンドサービスから情報機器まで、<br/>NTT西日本ブランドの幅広いラインナップで、<br/>ビジネスの通信環境をトータルにサポートいたします。</p></div>
    <div className="nttImage"><div className="stripe stripeB"/><div className="nttPhoto"><Placeholder label="NTT西日本 特約店イメージ" ratio="wide"/></div></div>
  </section>
  );
}

export function HomeServicesSection() {
  return (
  <section className="serviceSection" id="services">
    <div className="sectionLead revealUp" data-reveal><div><p className="enTitle">SERVICES</p><h2>オフィスに必要なものを<br/>ひとつの窓口で</h2></div><p>機器ひとつの見直しから、オフィス全体の環境改善まで。<br/>現在の課題と将来の働き方に合わせてご提案します。</p></div>
    <div className="serviceMainVisual revealUp" data-reveal>
      <Image src="/alphaservice3-transparent.png" alt="アルファコミュニケーションズのサービス紹介" fill sizes="(max-width: 650px) calc(100vw - 44px), 86vw"/>
      <div className="serviceImageLabels">
        <a href="/service/category/business_support#multifunction-printer" className="serviceImageLabel labelPrinter">複合機</a>
        <a href="/service/category/it_support#network" className="serviceImageLabel labelServer">サーバー</a>
        <a href="/service/category/it_support#network-security" className="serviceImageLabel labelSwitch">セキュリティスイッチ</a>
        <a href="/service/category/it_support#network-security" className="serviceImageLabel labelUtm">UTM</a>
        <a href="/service/category/business_support#business-phone" className="serviceImageLabel labelBusinessPhone">ビジネスフォン</a>
        <a href="/service/category/it_support#network" className="serviceImageLabel labelAccessPoint">アクセスポイント</a>
        <a href="/service/category/business_support#oa-equipment" className="serviceImageLabel labelUps">UPS</a>
        <a href="/office-security#security-camera" className="serviceImageLabel labelCameraLeft">AIカメラ</a>
        <a href="/office-security#security-camera" className="serviceImageLabel labelCameraBottom">AIカメラ</a>
        <a href="/service/category/it_support#network" className="serviceImageLabel labelInternet">インターネット</a>
        <a href="/service/category/it_support#network-security" className="serviceImageNote noteThreat">不正アクセス・<br/>ウイルスなどの<br/>脅威をブロック</a>
        <a href="/service/category/it_support#network-security" className="serviceImageNote noteLeak">外部への<br/>不正な通信・<br/>情報漏えいを防止</a>
        <a href="/service/category/it_support#network" className="serviceImageNote noteWifi">社内無線LANで<br/>安全・快適な<br/>ネットワーク環境を提供</a>
        <a href="/service/category/it_support#network-security" className="serviceImageNote noteDevice">使用不許可の<br/>デバイスや不正アプリを<br/>ブロック</a>
        <span className="deviceBlockX deviceBlockXPhone" aria-hidden="true">×</span>
        <span className="deviceBlockX deviceBlockXTablet" aria-hidden="true">×</span>
      </div>
    </div>
    <div className="serviceGatewayGrid revealUp" data-reveal>
      <article className="serviceGateway serviceGatewayOasys">
        <a className="serviceGatewayMain" href="/service/axcel">
          <span className="serviceGatewayIcon serviceGatewayIconImage serviceGatewayIconCompact serviceGatewayIconOasys serviceGatewayIconBorderless"><Image src="/alpha-icon/8.png" alt="AXCELソリューション" fill sizes="(max-width: 650px) calc(100vw - 44px), 240px"/></span>
          <span className="serviceGatewayTitle"><strong>AXCELソリューション</strong><i><Arrow/></i></span>
        </a>
      </article>
      <article className="serviceGateway">
        <a className="serviceGatewayMain" href="/service/category/business_support">
          <span className="serviceGatewayIcon serviceGatewayIconImage serviceGatewayIconCompact serviceGatewayIconBorderless"><Image src="/alpha-icon/5.png?v=transparent" alt="ビジネスインフラサポート" fill unoptimized sizes="(max-width: 650px) calc(100vw - 44px), 240px"/></span>
          <span className="serviceGatewayTitle"><strong>ビジネスインフラサポート</strong><i><Arrow/></i></span>
        </a>
      </article>
      <article className="serviceGateway">
        <a className="serviceGatewayMain" href="/service/category/it_support">
          <span className="serviceGatewayIcon serviceGatewayIconImage serviceGatewayIconCompact serviceGatewayIconBorderless"><Image src="/alpha-icon/6.png?v=transparent" alt="ITインフラサポート" fill unoptimized sizes="(max-width: 650px) calc(100vw - 44px), 240px"/></span>
          <span className="serviceGatewayTitle"><strong>ITインフラサポート</strong><i><Arrow/></i></span>
        </a>
      </article>
      <article className="serviceGateway">
        <a className="serviceGatewayMain" href="/service/category/top_support">
          <span className="serviceGatewayIcon serviceGatewayIconImage serviceGatewayIconBorderless"><Image src="/alpha-icon/7.png?v=transparent" alt="アルファの幅広いサポート" fill unoptimized sizes="(max-width: 650px) calc(100vw - 44px), 240px"/></span>
          <span className="serviceGatewayTitle"><strong>アルファの幅広いサポート</strong><i><Arrow/></i></span>
        </a>
      </article>
    </div>
    <a href="/service" className="more center"><span className="moreLabel">サービス一覧を見る</span> <Arrow/></a>
  </section>
  );
}

export function HomeOasysSection({isDemo4}:{isDemo4:boolean}) {
  if(isDemo4) return (
  <section className="demo4Axcel">
    <div className="demo4AxcelCopy revealUp" data-reveal>
      <div className="demo4AxcelHeading"><p className="enTitle">PICK UP SERVICE</p><span>04 / SPECIAL SOLUTION</span></div>
      <strong className="demo4AxcelLogo">AXCEL</strong>
      <div className="demo4AxcelFormula" aria-label="Alpha × Consultant Echo Loop"><span><b>A</b>lpha</span><i>×</i><span><b>C</b>onsultant</span><span><b>E</b>cho</span><span><b>L</b>oop</span></div>
      <h2><span>専門知識を結集し</span><br/><em>経営効率化を促進</em></h2>
      <p>専門知識を持つスタッフが定期的に訪問し、売上拡大や新規事業、人材確保、社内規定の策定など、経営に関するさまざまな課題をサポートします。</p>
      <div className="demo4AxcelAreas" aria-label="AXCELのサポート領域"><span>売上拡大</span><span>新規事業</span><span>人材確保</span><span>社内規定の策定</span></div>
      <a href="/service/axcel" className="more demo4UnifiedButton"><span className="moreLabel">AXCELについて</span> <Arrow/></a>
    </div>
    <div className="demo4AxcelVisual revealUp" data-reveal>
      <div className="demo4AxcelIllustration demo4AxcelIllustrationImage">
        <Image src="/demo4/pick-up-service.png" alt="AXCELを支えるスタッフ" fill sizes="(max-width: 1000px) 100vw, 55vw"/>
      </div>
    </div>
  </section>
  );
  return (
  <section className="oasys">
    <div className="oasysImage revealClipLeft" data-reveal><div className="oasysMainImage"><Image src="/alpha-2.png" alt="AXCEL メインイメージ" width={1080} height={1920} sizes="(max-width: 950px) 80vw, 390px"/></div></div>
    <div className="oasysCopy revealUp" data-reveal><p className="enTitle">PICK UP SERVICE</p><strong className="oasysLogo">AXCEL</strong><h2>経営の課題を<br/>前進する力に</h2><p>専門スタッフが定期的に訪問し、売上拡大や新規事業、人材確保などの経営課題を一緒に整理します。</p><a href="/service/axcel" className="more"><span className="moreLabel">AXCELについて</span> <Arrow/></a></div>
  </section>
  );
}

export function HomeAreaSection() {
  return (
  <section className="areaSection" id="strength">
    <div className="areaMarquee" aria-hidden="true">
      <div><span>FUKUOKA</span><span>SAGA</span><span>NAGASAKI</span><span>KUMAMOTO</span><span>KAGOSHIMA</span><span>YAMAGUCHI</span></div>
      <div><span>FUKUOKA</span><span>SAGA</span><span>NAGASAKI</span><span>KUMAMOTO</span><span>KAGOSHIMA</span><span>YAMAGUCHI</span></div>
    </div>
    <div className="areaCopy revealUp" data-reveal><p className="enTitle">SERVICE AREA</p><h2>九州・山口をつなぐ<br/>地域密着のネットワーク</h2><p>福岡・佐賀・長崎・熊本・鹿児島・山口の6拠点から、<br/>お客さまのオフィスをスピーディーにサポートします。</p></div>
    <div className="areaImage revealClipRight" data-reveal><div className="areaMapPhoto"><Image src="/alpha-back1.png" alt="九州・山口 対応エリアマップ" fill sizes="(max-width: 950px) 90vw, 50vw"/><svg className="mapLeaderLines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M66 15 L78 10 L87 10"/><path d="M44 23 L44 10 L50 10"/><path d="M35 34 L23 25 L13 25"/><path d="M29 36 L19 43 L9 43"/><path d="M46 52 L59 52 L68 52"/><path d="M42 77 L29 84 L17 84"/><ellipse cx="66" cy="15" rx=".45" ry=".8"/><ellipse cx="44" cy="23" rx=".45" ry=".8"/><ellipse cx="35" cy="34" rx=".45" ry=".8"/><ellipse cx="29" cy="36" rx=".45" ry=".8"/><ellipse cx="46" cy="52" rx=".45" ry=".8"/><ellipse cx="42" cy="77" rx=".45" ry=".8"/></svg><div className="areaMapPoints" aria-label="対応拠点"><span className="mapPoint mapYamaguchi">山口<small>YAMAGUCHI</small></span><span className="mapPoint mapFukuoka">福岡<small>FUKUOKA</small></span><span className="mapPoint mapSaga">佐賀<small>SAGA</small></span><span className="mapPoint mapNagasaki">長崎<small>NAGASAKI</small></span><span className="mapPoint mapKumamoto">熊本<small>KUMAMOTO</small></span><span className="mapPoint mapKagoshima">鹿児島<small>KAGOSHIMA</small></span></div></div></div>
  </section>
  );
}

export function HomeParallaxCompanySection(){return <ParallaxCompany/>}
export function HomeCompanySection() {
  return (
  <section className="companySection" id="company">
    <div className="marquee" aria-hidden="true">COMPANY COMPANY COMPANY</div>
    <div className="sectionLead revealUp" data-reveal><div><p className="enTitle">COMPANY</p><h2>会社案内</h2></div></div>
    <div className="companyGrid companyGridSix">
      {[
        ["01", "代表挨拶", "代表挨拶イメージ", "/company/message", "/alpha-mein/1.png?v=20260820"],
        ["02", "会社概要", "会社概要イメージ", "/company", "/alpha-mein/2.png?v=20260820"],
        ["03", "営業所案内", "営業所案内イメージ", "/company/offices", "/alpha-mein/3.png?v=20260820"],
        ["04", "事業内容", "事業内容イメージ", "/company/business", ""],
        ["05", "会社沿革", "会社沿革イメージ", "/company/history", ""],
        ["06", "組織体制", "組織体制イメージ", "/company/organization", ""],
      ].map(([no, title, image, href, imageSrc]) => <a href={href} className="companyCard revealUp" data-reveal key={no}>
        <span className="companyCardNo">{no}</span>
        <div className={`companyCardImage${imageSrc ? " companyCardImageActual" : ""}`}>{imageSrc ? <Image src={imageSrc} alt={image} fill unoptimized sizes="(max-width: 650px) 0px, (max-width: 950px) 38vw, 260px"/> : <Placeholder label={image}/>}</div>
        <span className="companyCardLabel">{title} <Arrow/></span>
      </a>)}
    </div>
  </section>
  );
}

export function HomeRecruitSection({isDemo4=false}:{isDemo4?:boolean}={}) {
  if(isDemo4) return (
  <section className="demo4Recruit" id="recruit">
    <div className="demo4RecruitCopy revealUp" data-reveal>
      <p className="enTitle">RECRUIT</p>
      <h2><span className="demo4RecruitLine">成長し続ける環境で</span><br/><span className="demo4RecruitLine demo4RecruitAccent">ともに未来を創ろう</span></h2>
      <p>地域のお客さまに寄り添い、働く環境をより良くしていく仕事です。アルファコミュニケーションズで、一緒に新しい価値を届けませんか。</p>
      <Link href="/recruit" className="more demo4UnifiedButton"><span className="moreLabel">採用情報を見る</span><span className="arrow" aria-hidden="true">→</span></Link>
    </div>
    <div className="demo4RecruitVisual demo4RecruitImage revealUp" data-reveal><Image src="/demo4/top-recruit-v2.png" alt="先輩社員と若手社員が一緒に歩く採用イメージ" fill sizes="(max-width: 950px) 100vw, 55vw"/></div>
  </section>
  );
  return (
  <section className="recruitSection" id="recruit">
    <div className="recruitWord" aria-hidden="true"><span>RECRUIT RECRUIT</span><span>RECRUIT RECRUIT</span></div>
    <div className="recruitCopy revealUp" data-reveal>
      <h2>成長し続ける環境で<br/>ともに<span>未来を創ろう</span></h2>
      <p>地域のお客さまに寄り添い、働く環境をより良くしていく仕事です。<br/>アルファコミュニケーションズで、一緒に新しい価値を届けませんか。</p>
      <div className="recruitSite">
        <strong>採用特設サイト</strong>
        <Link href="/recruit" className="recruitSiteBanner">
          <Image src="/recruit.png" alt="" width={480} height={480}/>
          <span><b>RECRUIT SITE</b><small><span>あなたと共に</span><em>トップ</em><span>を目指す</span></small></span>
        </Link>
      </div>
    </div>
    <div className="recruitIllustration revealClipRight" data-reveal>
      <Image src="/istockphoto-2218722054-1024x1024.jpg" alt="採用イメージ" width={1024} height={1024}/>
    </div>
  </section>
  );
}

export function HomeSdgsSection() {
  return (
  <section className="demo4Sdgs" id="sdgs">
    <div className="demo4SdgsGrid">
      <a href="/sdgs" className="demo4SdgsCard revealUp" data-reveal><div><small>ATTEMPT:01</small><h3>SDGsへの取り組み</h3><span className="demo4SdgsArrow" aria-hidden="true">→</span></div><div className="demo4SdgsPlaceholder"><Image src="/demo4/top-sdgs.jpg" alt="SUSTAINABLE DEVELOPMENT GOALS" width={349} height={222}/></div></a>
      <a href="/dx" className="demo4SdgsCard revealUp" data-reveal><div><small>ATTEMPT:02</small><h3>DXへの取り組み</h3><span className="demo4SdgsArrow" aria-hidden="true">→</span></div><div className="demo4SdgsPlaceholder"><Image src="/demo4/top-dx.jpg" alt="DX Digital Transformation" width={291} height={201}/></div></a>
    </div>
  </section>
  );
}

const demo4TopServices = [
  { no: "01", en: "OFFICE INFRASTRUCTURE", title: "オフィスインフラ", text: "電話・複合機・ネットワーク・防犯まで、毎日の仕事に必要な環境を整えます。", href: "/service#office-infrastructure", image: "/demo4/top-01-business.png" },
  { no: "02", en: "MANAGEMENT SUPPORT", title: "経営支援 AXCEL", text: "専門知識を結集し、売上・人材・制度など経営に関する課題を継続して支えます。", href: "/service/axcel", image: "/demo4/top-03-axcel.png" },
  { no: "03", en: "AI PRODUCTS", title: "AIプロダクト", text: "業務に合うAI活用と自動化を提案し、日々の繰り返し作業を軽くします。", href: "/service/ai-products", image: "/demo4/top-02-it.png" },
];

export function Demo4TopServicesSection() {
  return (
    <section className="demo4TopServices" id="services">
      <header className="revealUp" data-reveal>
        <div><p className="enTitle">OUR SERVICE</p><h2>3つのサービスで<br/><span>会社を支えます</span></h2></div>
        <Link href="/service" className="more demo4UnifiedButton"><span className="moreLabel">サービス一覧</span><Arrow/></Link>
      </header>
      <div className="demo4TopServiceGrid">
        {demo4TopServices.map((service) => (
          <Link href={service.href} className="demo4TopServiceCard revealUp" data-reveal key={service.no}>
            <div className="demo4TopServiceImage"><Image src={service.image} alt="" fill sizes="(max-width: 800px) 100vw, 50vw"/></div>
            <div className="demo4TopServiceCopy"><small>{service.no} / {service.en}</small><h3>{service.title}</h3><p>{service.text}</p><i aria-hidden="true">→</i></div>
          </Link>
        ))}
      </div>
    </section>
  );
}

const demo4Faq = [
  ["対応可能な地域はどこですか？", "福岡を中心に、九州全域と山口の各拠点から対応しています。"],
  ["どのサービスを選べばよいか分かりません。", "現在のお困りごとを伺い、必要なサービスをこちらで整理してご案内します。"],
  ["導入後の保守や相談にも対応していますか？", "導入後の設定・運用・保守まで、同じ窓口で継続してサポートします。"],
  ["小さな相談でも問い合わせできますか？", "機器1台の見直しや通信環境の確認など、まとまっていない段階でもご相談いただけます。"],
];

export function Demo4FaqSection() {
  return (
    <section className="demo4TopFaq" id="faq">
      <header><p className="enTitle">FAQ</p><h2>よくある<br/><span>ご質問</span></h2></header>
      <div className="demo4TopFaqList">
        {demo4Faq.map(([question, answer], index) => <details key={question}><summary><span>Q</span><strong>{question}</strong><i aria-hidden="true">＋</i></summary><p><span>A</span>{answer}</p></details>)}
      </div>
    </section>
  );
}

export function HomeNewsSection({demo4=false}:{demo4?:boolean}={}) {
  const base=demo4?"/":"";
  return (
  <section className="newsSection" id="news">
    <div className="revealUp" data-reveal><p className="enTitle">NEWS</p><h2>お知らせ</h2><a href={`${base}/news`} className="more"><span className="moreLabel">一覧を見る</span> <Arrow/></a></div>
    <div className="newsList revealUp" data-reveal><a href={`${base}/news/summer-holiday-2026`}><time>2026.08.01</time><span>お知らせ</span><strong>夏季休業のお知らせ</strong><Arrow/></a><a href={`${base}/news/year-end-holiday-2025`}><time>2025.12.15</time><span>お知らせ</span><strong>年末年始休業のお知らせ</strong><Arrow/></a><a href={`${base}/news/summer-holiday-2025`}><time>2025.08.01</time><span>お知らせ</span><strong>夏季休業のお知らせ</strong><Arrow/></a></div>
  </section>
  );
}
