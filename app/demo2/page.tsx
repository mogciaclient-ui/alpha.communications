import Image from "next/image";
import Link from "next/link";
import { FloatingMenu } from "@/components/demo2/FloatingMenu";
import { HomeIntroLoader } from "@/components/demo2/HomeIntroLoader";
import { ScrollEffects } from "@/components/demo2/ScrollEffects";
import { SiteFooter } from "@/components/demo2/SiteFooter";
import { SiteHeader } from "@/components/demo2/SiteHeader";

const problems=[
  ["↗","ネット・Wi-Fiが遅い","通信環境から探す","/demo2/services/network"],
  ["☎","電話や複合機が古い","オフィス機器から探す","/demo2/service/category/business_support"],
  ["◎","防犯・情報漏えいが心配","セキュリティから探す","/demo2/services/security"],
  ["＋","移転・開設をまとめて頼みたい","環境づくりから探す","/demo2/service"],
  ["⚙","導入後の保守も任せたい","サポートを見る","/demo2/service/after-sales"],
  ["？","何が必要か分からない","無料で相談する","/demo2/contact"],
];
const services=[
  ["01","BUSINESS","ビジネスインフラ","ビジネスフォンや複合機など、毎日の仕事に欠かせない環境を整えます。","/demo2/business-alpha.png","/demo2/service/category/business_support"],
  ["02","IT","ITインフラ","ネットワークやセキュリティを整備し、安全で快適な業務を支えます。","/demo2/it-alpha.png","/demo2/service/category/it_support"],
  ["03","OFFICE","幅広いオフィス支援","防犯カメラ、OA機器、導入後の保守まで幅広く対応します。","/demo2/office-alpha.png","/demo2/service/category/top_support"],
];
const Arrow=()=> <span aria-hidden="true">→</span>;

export default function Demo2Home(){return <main className="demo2Home" id="top">
  <HomeIntroLoader/><SiteHeader className="demo2Header"/>
  <section className="demo2Hero">
    <div className="demo2HeroSlides" aria-hidden="true">
      <figure><Image src="/demo2/hero-office.jpeg" alt="" fill priority sizes="100vw"/><figcaption><span>01</span>OUR BASE</figcaption></figure>
      <figure><Image src="/demo2/hero-consultation.png" alt="" fill priority sizes="100vw"/><figcaption><span>02</span>CONSULTING</figcaption></figure>
      <figure><Image src="/demo2/hero-team.png" alt="" fill priority sizes="100vw"/><figcaption><span>03</span>TEAM SUPPORT</figcaption></figure>
    </div>
    <div className="demo2HeroWipe" aria-hidden="true"/>
    <div className="demo2HeroCopy"><p className="demo2Eyebrow">OFFICE SOLUTION PARTNER</p><h1>そのオフィスの<br/>困りごとを<br/><strong>まるごとアルファへ</strong></h1><p className="demo2HeroLead">機器のことも、ネットワークのことも、導入後のことも。<br/>相談からサポートまで、すぐそばで支えます。</p><div className="demo2HeroActions"><a href="#problems">困りごとから探す <span>↓</span></a><Link href="/demo2/contact">まずは相談する <Arrow/></Link></div></div>
    <a className="demo2Scroll" href="#ntt">SCROLL <i/></a>
  </section>
  <section className="demo2TrustStrip"><h2>地域のオフィスを<br/>すぐそばで支える</h2><div><strong>相談から対応</strong><span>窓口を一本化</span></div><div><strong>幅広い領域</strong><span>機器・IT・防犯</span></div><div><strong>導入後も安心</strong><span>継続サポート</span></div></section>
  <section className="demo2NttPremium" id="ntt">
    <div className="demo2NttPremiumGhost" aria-hidden="true"><span>NTT WEST PARTNER</span><span>NTT WEST PARTNER</span></div>
    <div className="demo2NttPremiumLayout">
      <div className="demo2NttPremiumCopy revealUp" data-reveal>
        <p className="demo2Eyebrow">NTT WEST PARTNER</p>
        <h2>NTT西日本の信頼と<br/><em>アルファの現場力</em></h2>
        <p>情報機器特約店として、通信環境のご相談から設置・運用・保守まで。オフィスに必要な環境を一つの窓口で支えます。</p>
        <Link href="/demo2/ntt-partner">特約店としての強みを見る <Arrow/></Link>
      </div>
      <div className="demo2NttPremiumBoard revealUp" data-reveal>
        <span>INFORMATION EQUIPMENT PARTNER</span>
        <div className="demo2NttBoardPlaceholder" role="img" aria-label="NTT西日本情報機器特約店のイメージ画像プレースホルダー">
          <b>IMAGE</b>
          <strong>NTT WEST PARTNER</strong>
          <i>イメージ画像を配置</i>
        </div>
        <small>PARTNER / 01</small>
      </div>
    </div>
    <div className="demo2NttPremiumPoints revealUp" data-reveal>
      <div><small>01</small><span><strong>豊富な知識・技術力</strong><i>NTT西日本 情報機器特約店</i></span></div>
      <div><small>02</small><span><strong>自社工事部門との連携</strong><i>相談から施工までスムーズに</i></span></div>
      <div><small>03</small><span><strong>導入後の定期サポート</strong><i>売って終わりにしない体制</i></span></div>
    </div>
  </section>
  <section className="demo2Problems" id="problems"><header className="revealUp" data-reveal><p className="demo2Eyebrow">WHAT&apos;S YOUR PROBLEM?</p><h2>今 どんなことで<br/><em>お困りですか？</em></h2><p>サービス名が分からなくても大丈夫。気になるお悩みからお選びください。</p></header><div className="demo2ProblemGrid">{problems.map(([icon,title,text,href])=><Link href={href} className="demo2ProblemCard revealUp" data-reveal key={title}><span className="demo2ProblemIcon">{icon}</span><strong>{title}</strong><small>{text} <Arrow/></small></Link>)}</div></section>
  <section className="demo2OneStop"><div className="demo2OneStopVisual demo2OneStopOrbitVisual revealUp" data-reveal><span className="demo2Orbit demo2OrbitOuter"><i/><i/><i/></span><span className="demo2Orbit demo2OrbitInner"/><strong>ALPHA<small>ONE STOP</small></strong><div className="demo2OrbitItem itemPhone"><span>IMAGE</span><b>電話機</b></div><div className="demo2OrbitItem itemNetwork"><span>IMAGE</span><b>ネットワーク</b></div><div className="demo2OrbitItem itemSecurity"><span>IMAGE</span><b>セキュリティ</b></div><div className="demo2OrbitItem itemSupport"><span>IMAGE</span><b>保守・サポート</b></div></div><div className="demo2OneStopCopy revealUp" data-reveal><p className="demo2Eyebrow">ONE-STOP SUPPORT</p><h2>バラバラな悩みを<br/><em>ひとつの窓口で</em></h2><p>機器を売って終わりではありません。働く環境全体を見て、必要なものを組み合わせ、導入後まで伴走します。</p><ul><li>ヒアリング・現状確認</li><li>複数サービスを組み合わせたご提案</li><li>設置・設定・運用支援</li><li>導入後の保守・ご相談</li></ul></div></section>
  <section className="demo2Services"><header className="revealUp" data-reveal><p className="demo2Eyebrow">OUR SERVICE</p><h2>3つの領域で<br/><em>オフィスを支えます</em></h2><Link href="/demo2/service" className="demo2TextLink">サービス一覧 <Arrow/></Link></header><div className="demo2ServiceGrid">{services.map(([no,en,title,text,image,href])=><Link href={href} className="demo2ServiceCard revealUp" data-reveal key={no}><div className="demo2ServiceImage"><Image src={image} alt="" fill unoptimized sizes="(max-width: 700px) 100vw, 33vw"/></div><small>{no} / {en}</small><h3>{title}</h3><p>{text}</p><b><Arrow/></b></Link>)}</div></section>
  <section className="demo2Oasys demo2OasysSingle"><div className="demo2OasysCopy revealUp" data-reveal><p className="demo2Eyebrow">PICK UP SOLUTION</p><h2>経営・オフィスの悩みに<br/>専門チームの答えを</h2><strong>OASYS</strong><p>機器やネットワークの保守から、GDXを活用した業務改善、ソフトの活用支援まで。専門のプロフェッショナルチームが継続してサポートします。</p><Link href="/demo2/service/oasys">OASYSについて <Arrow/></Link></div></section>
  <section className="demo2About"><div className="demo2AboutVisual revealUp" data-reveal><div className="demo2AboutImage"><Image src="/demo2/aboutalpha-demo2.png" alt="お客様と打ち合わせをするアルファコミュニケーションズのスタッフ" fill sizes="(max-width: 800px) 100vw, 62vw" /></div><p><span>LOCAL TEAM</span>FUKUOKA / KYUSHU / YAMAGUCHI</p></div><div className="demo2AboutCopy revealUp" data-reveal><p className="demo2Eyebrow">ABOUT ALPHA</p><h2>人と向き合い<br/><em>地域の仕事を<br/>支える</em></h2><p>地域に根ざし、お客様の仕事を知る。相談から保守まで、人と人とのつながりを大切に支え続けます。</p><div className="demo2AboutFacts"><span><strong>2005</strong><small>創業</small></span><span><strong>6</strong><small>営業拠点</small></span><span><strong>4,000</strong><small>取引実績</small></span></div><Link href="/demo2/company" className="demo2TextLink">アルファについて <Arrow/></Link></div></section>
  <Link href="/demo2/recruit" className="demo2RecruitSection demo2RecruitPhoto"><div className="demo2RecruitCopy revealUp" data-reveal><p className="demo2Eyebrow">RECRUIT</p><h2>この街の仕事を支える<br/><em>次の仲間へ</em></h2><p>人と向き合い、オフィスの困りごとをチームで解決する。<br/>アルファで、地域に必要とされる仕事をしませんか。</p><span>採用情報を見る <Arrow/></span></div></Link>
  <section className="demo2Information"><div className="demo2News revealUp" data-reveal><header><div><p className="demo2Eyebrow">NEWS</p><h2>お知らせ</h2></div><Link href="/demo2/news">一覧を見る <Arrow/></Link></header><Link href="/demo2/news/summer-holiday-2026"><time>2026.08.01</time><span>お知らせ</span><strong>夏季休業のお知らせ</strong></Link><Link href="/demo2/news/year-end-holiday-2025"><time>2025.12.15</time><span>お知らせ</span><strong>年末年始休業のお知らせ</strong></Link><Link href="/demo2/news/summer-holiday-2025"><time>2025.08.01</time><span>お知らせ</span><strong>夏季休業のお知らせ</strong></Link><Link href="/demo2/news/website-renewal-2025"><time>2025.04.01</time><span>お知らせ</span><strong>ホームページリニューアルのお知らせ</strong></Link></div></section>
  <section className="demo2Contact"><div className="demo2ContactDots" aria-hidden="true">{Array.from({length:12},(_,i)=><i key={i}/>)}</div><p className="demo2Eyebrow">LET&apos;S TALK</p><h2>何を選べばいいか<br/><em>分からなくても大丈夫です</em></h2><p>まずは、今のお困りごとをお聞かせください。</p><div><Link href="/demo2/contact">無料で相談する <Arrow/></Link><a href="tel:0120610113"><small>平日 9:00–18:00</small>0120-610-113</a></div></section>
  <SiteFooter pageTopHref="/demo2#top"/><FloatingMenu/><ScrollEffects/>
</main>}
