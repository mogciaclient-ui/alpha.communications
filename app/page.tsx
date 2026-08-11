import Image from "next/image";
import Link from "next/link";
import { OfficeAdvisor } from "@/components/OfficeAdvisor";
import { ScrollEffects } from "@/components/ScrollEffects";
import { FloatingMenu } from "@/components/FloatingMenu";
import { ParallaxCompany } from "@/components/ParallaxCompany";
import { SiteHeader } from "@/components/SiteHeader";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";

function Placeholder({ label, ratio = "landscape" }: { label: string; ratio?: "landscape" | "portrait" | "wide" }) {
  return <div className={`placeholder ${ratio}`} role="img" aria-label={`${label}の画像プレースホルダー`}>
    <span className="placeholderMark">IMAGE</span>
    <strong>{label}</strong>
    <small>画像・イラストを配置</small>
  </div>;
}

function Arrow() { return <span className="arrow" aria-hidden="true">→</span>; }

export default function Home() {
  return <main>
    <SiteHeader/>

    <section className="hero" id="top">
      <svg className="orbitAnimation" viewBox="0 0 1200 680" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <g className="orbitLines" transform="rotate(-12 600 340)">
          <ellipse cx="600" cy="340" rx="515" ry="250"/>
          <ellipse cx="600" cy="340" rx="385" ry="185"/>
          <ellipse cx="600" cy="340" rx="245" ry="116"/>
        </g>
        <g className="orbitDot orbitDotOuter" transform="rotate(-12 600 340)"><circle r="17"><animateMotion dur="22s" repeatCount="indefinite" path="M1115 340 A515 250 0 1 1 85 340 A515 250 0 1 1 1115 340"/></circle></g>
        <g className="orbitDot orbitDotMiddle" transform="rotate(-12 600 340)"><circle r="9"><animateMotion dur="17s" begin="-8s" repeatCount="indefinite" path="M985 340 A385 185 0 1 1 215 340 A385 185 0 1 1 985 340"/></circle></g>
        <g className="orbitDot orbitDotInner" transform="rotate(-12 600 340)"><circle r="7"><animateMotion dur="12s" begin="-4s" repeatCount="indefinite" path="M845 340 A245 116 0 1 1 355 340 A245 116 0 1 1 845 340"/></circle></g>
        <g className="orbitDot orbitDotReverse" transform="rotate(-12 600 340)"><circle r="5"><animateMotion dur="27s" begin="-16s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear" path="M985 340 A385 185 0 1 1 215 340 A385 185 0 1 1 985 340"/></circle></g>
      </svg>
      <div className="heroInner">
        <p className="heroEnglish"><em>A</em>lpha <em>C</em>ommunications</p>
        <h1>九州の企業を支える<br/><span>オフィスの総合パートナー</span></h1>
        <p>NTT西日本 情報機器特約店　アルファコミュニケーションズ</p>
      </div>
      <div className="scroll">SCROLL <span/></div>
    </section>

    <div className="brandMarquee" aria-hidden="true">
      <div><span>Alpha Communications</span><span>Alpha Communications</span><span>Alpha Communications</span></div>
      <div><span>Alpha Communications</span><span>Alpha Communications</span><span>Alpha Communications</span></div>
    </div>

    <div className="storyStack">
    <section className="intro storyPanel storyAbout" id="about">
      <div className="introBubbles" aria-hidden="true"><i/><i/><i/><i/><i/></div>
      <div className="introBubbles introBubblesBottom" aria-hidden="true"><i/><i/><i/></div>
      <div className="introSideLabel" aria-hidden="true">ABOUT US — ALPHA COMMUNICATIONS</div>
      <div className="introImage revealClipLeft" data-reveal><div className="introPhoto"><Image src="/alpha.png" alt="アルファコミュニケーションズ社屋" fill sizes="(max-width: 950px) 90vw, 42vw" priority/></div><p className="introImageCaption"><span/>ALPHA COMMUNICATIONS / FUKUOKA</p></div>
      <div className="introCopy revealUp" data-reveal>
        <p className="enTitle">ABOUT US</p>
        <h2>オフィスの課題を<br/>まとめて<span className="textBlue">解決</span>する</h2>
        <p>アルファコミュニケーションズは、福岡を中心に九州・山口の企業を支えるオフィスの総合パートナーです。ビジネスフォン、複合機、ネットワーク、セキュリティなど、オフィスに必要な環境をワンストップでご提案します。</p>
        <p>導入して終わりではなく、その先の保守まで。地域に根ざした身近な存在として、お客さまの事業に長く寄り添います。</p>
        <a className="more" href="/company"><span className="moreLabel">私たちについて</span> <Arrow/></a>
      </div>
    </section>

    <section className="ntt storyPanel storyPartner" id="partner">
      <div className="nttCopy revealUp" data-reveal><p className="enTitle">AUTHORIZED PARTNER</p><h2>NTT西日本<br/><span>情報機器特約店</span></h2><p>ブロードバンドサービスから情報機器まで、<br/>NTT西日本ブランドの幅広いラインナップで、<br/>ビジネスの通信環境をトータルにサポートいたします。</p></div>
      <div className="nttImage revealClipRight" data-reveal><div className="stripe stripeB"/><div className="nttPhoto"><Placeholder label="NTT西日本 特約店イメージ" ratio="wide"/></div></div>
    </section>
    </div>

    <section className="serviceSection" id="services">
      <div className="sectionLead revealUp" data-reveal><div><p className="enTitle">SERVICES</p><h2>オフィスに必要なものを<br/>ひとつの窓口で</h2></div><p>機器ひとつの見直しから、オフィス全体の環境改善まで。<br/>現在の課題と将来の働き方に合わせてご提案します。</p></div>
      <div className="serviceMainVisual revealUp" data-reveal>
        <Image src="/alphaservice3-transparent.png" alt="アルファコミュニケーションズのサービス紹介" fill sizes="(max-width: 650px) calc(100vw - 44px), 86vw"/>
        <div className="serviceImageLabels">
          <a href="/services/multifunction-printer" className="serviceImageLabel labelPrinter">複合機</a>
          <a href="/services/network" className="serviceImageLabel labelServer">サーバー</a>
          <a href="/services/security" className="serviceImageLabel labelSwitch">セキュリティスイッチ</a>
          <a href="/services/security" className="serviceImageLabel labelUtm">UTM</a>
          <a href="/services/business-phone" className="serviceImageLabel labelBusinessPhone">ビジネスフォン</a>
          <a href="/services/network" className="serviceImageLabel labelAccessPoint">アクセスポイント</a>
          <a href="/services/oa-equipment" className="serviceImageLabel labelUps">UPS</a>
          <a href="/services/security-camera" className="serviceImageLabel labelCameraLeft">AIカメラ</a>
          <a href="/services/security-camera" className="serviceImageLabel labelCameraBottom">AIカメラ</a>
          <a href="/services/network" className="serviceImageLabel labelInternet">インターネット</a>
          <a href="/services/security" className="serviceImageNote noteThreat">不正アクセス・<br/>ウイルスなどの<br/>脅威をブロック</a>
          <a href="/services/security" className="serviceImageNote noteLeak">外部への<br/>不正な通信・<br/>情報漏えいを防止</a>
          <a href="/services/network" className="serviceImageNote noteWifi">社内無線LANで<br/>安全・快適な<br/>ネットワーク環境を提供</a>
          <a href="/services/security" className="serviceImageNote noteDevice">使用不許可の<br/>デバイスや不正アプリを<br/>ブロック</a>
          <span className="deviceBlockX deviceBlockXPhone" aria-hidden="true">×</span>
          <span className="deviceBlockX deviceBlockXTablet" aria-hidden="true">×</span>
        </div>
      </div>
      <div className="serviceGatewayGrid revealUp" data-reveal>
        <article className="serviceGateway serviceGatewayOasys">
          <a className="serviceGatewayMain" href="/service/oasys">
            <span className="serviceGatewayIcon serviceGatewayIconImage"><Image src="/alpha-icon/oasis.png" alt="OASYSソリューション" fill sizes="(max-width: 650px) calc(100vw - 44px), 240px"/></span>
            <span className="serviceGatewayTitle"><strong>OASYSソリューション</strong><i><Arrow/></i></span>
          </a>
        </article>
        <article className="serviceGateway">
          <a className="serviceGatewayMain" href="/service/category/business_support">
            <span className="serviceGatewayIcon serviceGatewayIconImage"><Image src="/alpha-icon/istockphoto-1294367975-1024x1024.jpg" alt="ビジネスインフラサポート" fill sizes="(max-width: 650px) calc(100vw - 44px), 240px"/></span>
            <span className="serviceGatewayTitle"><strong>ビジネスインフラサポート</strong><i><Arrow/></i></span>
          </a>
        </article>
        <article className="serviceGateway">
          <a className="serviceGatewayMain" href="/service/category/it_support">
            <span className="serviceGatewayIcon serviceGatewayIconImage"><Image src="/alpha-icon/istockphoto-1372098117-1024x1024.jpg" alt="ITインフラサポート" fill sizes="(max-width: 650px) calc(100vw - 44px), 240px"/></span>
            <span className="serviceGatewayTitle"><strong>ITインフラサポート</strong><i><Arrow/></i></span>
          </a>
        </article>
        <article className="serviceGateway">
          <a className="serviceGatewayMain" href="/service/category/top_support">
            <span className="serviceGatewayIcon serviceGatewayIconImage"><Image src="/alpha-icon/istockphoto-2276148022-1024x1024.jpg" alt="アルファの幅広いサポート" fill sizes="(max-width: 650px) calc(100vw - 44px), 240px"/></span>
            <span className="serviceGatewayTitle"><strong>アルファの幅広いサポート</strong><i><Arrow/></i></span>
          </a>
        </article>
      </div>
      <a href="/service" className="more center"><span className="moreLabel">サービス一覧を見る</span> <Arrow/></a>
    </section>

    <section className="oasys">
      <div className="oasysImage revealClipLeft" data-reveal><div className="oasysMainImage"><Image src="/alpha-2.png" alt="OASYS メインイメージ" width={1080} height={1920} sizes="(max-width: 950px) 80vw, 390px"/></div></div>
      <div className="oasysCopy revealUp" data-reveal><p className="enTitle">PICK UP SERVICE</p><strong className="oasysLogo">OASYS</strong><h2>オフィスの安心を<br/>ひとつに</h2><p>通信機器・セキュリティ・サポートをまとめて提供。複雑になりがちなオフィス環境をシンプルに整えます。</p><a href="/service/oasys" className="more"><span className="moreLabel">OASYSについて</span> <Arrow/></a></div>
    </section>

    <section className="areaSection" id="strength">
      <div className="areaMarquee" aria-hidden="true">
        <div><span>FUKUOKA</span><span>SAGA</span><span>NAGASAKI</span><span>KUMAMOTO</span><span>KAGOSHIMA</span><span>YAMAGUCHI</span></div>
        <div><span>FUKUOKA</span><span>SAGA</span><span>NAGASAKI</span><span>KUMAMOTO</span><span>KAGOSHIMA</span><span>YAMAGUCHI</span></div>
      </div>
      <div className="areaCopy revealUp" data-reveal><p className="enTitle">SERVICE AREA</p><h2>九州・山口をつなぐ<br/>地域密着のネットワーク</h2><p>福岡・佐賀・長崎・熊本・鹿児島・山口の6拠点から、<br/>お客さまのオフィスをスピーディーにサポートします。</p></div>
      <div className="areaImage revealClipRight" data-reveal><div className="areaMapPhoto"><Image src="/alpha-back1.png" alt="九州・山口 対応エリアマップ" fill sizes="(max-width: 950px) 90vw, 50vw"/><svg className="mapLeaderLines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M66 15 L78 10 L87 10"/><path d="M44 23 L44 10 L50 10"/><path d="M35 34 L23 25 L13 25"/><path d="M29 36 L19 43 L9 43"/><path d="M46 52 L59 52 L68 52"/><path d="M42 77 L29 84 L17 84"/><ellipse cx="66" cy="15" rx=".45" ry=".8"/><ellipse cx="44" cy="23" rx=".45" ry=".8"/><ellipse cx="35" cy="34" rx=".45" ry=".8"/><ellipse cx="29" cy="36" rx=".45" ry=".8"/><ellipse cx="46" cy="52" rx=".45" ry=".8"/><ellipse cx="42" cy="77" rx=".45" ry=".8"/></svg><div className="areaMapPoints" aria-label="対応拠点"><span className="mapPoint mapYamaguchi">山口<small>YAMAGUCHI</small></span><span className="mapPoint mapFukuoka">福岡<small>FUKUOKA</small></span><span className="mapPoint mapSaga">佐賀<small>SAGA</small></span><span className="mapPoint mapNagasaki">長崎<small>NAGASAKI</small></span><span className="mapPoint mapKumamoto">熊本<small>KUMAMOTO</small></span><span className="mapPoint mapKagoshima">鹿児島<small>KAGOSHIMA</small></span></div></div></div>
    </section>

    <ParallaxCompany/>

    <section className="companySection" id="company">
      <div className="marquee" aria-hidden="true">COMPANY COMPANY COMPANY</div>
      <div className="sectionLead revealUp" data-reveal><div><p className="enTitle">COMPANY</p><h2>会社案内</h2></div></div>
      <div className="companyGrid companyGridSix">
        {[
          ["01", "代表挨拶", "代表挨拶イメージ", "/company/message", "/alpha-mein/2.png"],
          ["02", "会社概要", "会社概要イメージ", "/company", "/alpha-mein/3.png"],
          ["03", "営業所案内", "営業所案内イメージ", "/company/offices", "/alpha-mein/4.png"],
          ["04", "事業内容", "事業内容イメージ", "/company/business", ""],
          ["05", "会社沿革", "会社沿革イメージ", "/company/history", ""],
          ["06", "組織体制", "組織体制イメージ", "/company/organization", ""],
        ].map(([no, title, image, href, imageSrc]) => <a href={href} className="companyCard revealUp" data-reveal key={no}>
          <span className="companyCardNo">{no}</span>
          <div className={`companyCardImage${imageSrc ? " companyCardImageActual" : ""}`}>{imageSrc ? <Image src={imageSrc} alt={image} fill sizes="(max-width: 650px) 0px, (max-width: 950px) 38vw, 260px"/> : <Placeholder label={image}/>}</div>
          <span className="companyCardLabel">{title} <Arrow/></span>
        </a>)}
      </div>
    </section>

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

    <section className="newsSection" id="news">
      <div className="revealUp" data-reveal><p className="enTitle">NEWS</p><h2>最新情報</h2><a href="/news" className="more"><span className="moreLabel">一覧を見る</span> <Arrow/></a></div>
      <div className="newsList revealUp" data-reveal><a href="/news/website-renewal"><time>2026.07.01</time><span>お知らせ</span><strong>ウェブサイトリニューアルのお知らせ</strong><Arrow/></a><a href="/news/office-security"><time>2026.06.18</time><span>サービス</span><strong>オフィスのセキュリティ対策について</strong><Arrow/></a><a href="/news/summer-holiday"><time>2026.05.20</time><span>お知らせ</span><strong>夏季休業期間のお知らせ</strong><Arrow/></a></div>
    </section>

    <ContactSection id="contact" animated title={<>オフィスのお困りごとを、<br/>お気軽にご相談ください。</>} description={<>機器の入れ替え、通信費の見直し、ネットワークの不調など<br/>小さなお悩みからでも丁寧にお伺いします。</>}/>
    <SiteFooter/>
    <OfficeAdvisor/><FloatingMenu/><ScrollEffects/>
  </main>;
}
