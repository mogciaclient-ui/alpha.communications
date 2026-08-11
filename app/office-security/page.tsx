import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingMenu } from "@/components/FloatingMenu";
import { ScrollEffects } from "@/components/ScrollEffects";

const risks = [
  ["不正アクセス", "外部からの侵入による情報漏えいや、システムへの不正アクセスが発生するリスクがあります。"],
  ["ウイルス・マルウェア", "メールやWebサイト経由で侵入し、業務停止や情報漏えいを引き起こします。"],
  ["情報漏えい", "内部・外部を問わず、大切なデータが流出するリスクがあります。"],
  ["ランサムウェア", "重要なデータを暗号化し、業務継続を妨げる重大な脅威です。"],
];

const networkItems = [
  ["UTM", "ネットワークの入口で不正アクセスやウイルスを検知・防御します。"],
  ["セキュリティスイッチ", "社内ネットワークを安全に制御し、不正な通信を遮断します。"],
  ["アクセスポイント", "安全なWi-Fi環境を提供し、社内通信を安定させます。"],
  ["サーバー・NAS", "大切なデータを安全に保管・共有します。"],
  ["UPS", "停電時にもシステムを安全に停止し、データ消失を防ぎます。"],
  ["AIカメラ", "映像監視だけでなく、不審者検知や防犯対策にも活用できます。"],
];

const networkLabels = [
  ["networkLabelPrinter", "複合機"], ["networkLabelServer", "サーバー"],
  ["networkLabelSwitch", "セキュリティスイッチ"], ["networkLabelUtm", "UTM"],
  ["networkLabelPhone", "ビジネスフォン"],
  ["networkLabelAp", "アクセスポイント"], ["networkLabelUps", "UPS"],
  ["networkLabelCameraLeft", "AIカメラ"], ["networkLabelCameraRight", "AIカメラ"],
  ["networkLabelInternet", "インターネット"],
];

const defenseLabels = [
  ["defenseLabelRouter", "ルーター"], ["defenseLabelUtm", "UTM"],
  ["defenseLabelIps", "IPS"], ["defenseLabelSwitch", "セキュリティスイッチ"],
  ["defenseLabelWifi", "Wi-Fi"], ["defenseLabelEndpoint", "エンドポイント\nセキュリティ"],
  ["defenseLabelAssets", "資産管理"], ["defenseLabelNas", "サーバー・NAS"],
];

const defenseRoles = [
  ["ルーター", "インターネットと社内ネットワークをつなぐ通信の入口です。"],
  ["UTM", "ウイルス・不正アクセス・危険なWeb通信をまとめて監視します。"],
  ["IPS", "攻撃につながる異常な通信をリアルタイムで検知・遮断します。"],
  ["セキュリティスイッチ", "不正端末や感染端末を検知し、内部での拡散を防ぎます。"],
  ["Wi-Fi", "認証された端末だけが接続できる安全な無線環境を提供します。"],
  ["端末・資産管理・NAS", "PCを保護し、接続機器と重要データを一元的に管理します。"],
];

const products = [
  ["UTM（統合脅威管理）", "ネットワークの入口で不正アクセスやウイルスをブロックします。"],
  ["IPS（侵入防止システム）", "異常な通信をリアルタイムで検知し、攻撃を未然に防ぎます。"],
  ["セキュリティスイッチ", "ネットワーク内で不正な接続や通信を制御します。"],
  ["エンドポイントセキュリティ", "PCやノートパソコンをマルウェアや不正アクセスから保護します。"],
  ["Wi-Fi・アクセスポイント", "認証管理により、許可された端末のみ接続できます。"],
  ["資産管理", "接続機器を一元管理し、不正端末の利用を防止します。"],
];

const faqs = [
  ["現在のネットワーク環境でも導入できますか？", "はい。現在ご利用中の環境を活かしながら、最適な構成をご提案します。"],
  ["小規模オフィスでも導入できますか？", "1〜数十名規模のオフィスまで、企業規模に合わせた構成をご提案しています。"],
  ["導入までどのくらいかかりますか？", "現地調査後、機器構成によって異なりますが、一般的には数日〜数週間程度です。"],
];

function VirusIcon() {
  return (
    <svg className="securityRiskIcon" viewBox="0 0 64 64" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2">
        <circle cx="32" cy="32" r="15" />
        <path d="M32 17V9M32 55v-8M17 32H9M55 32h-8M21.4 21.4l-5.7-5.7M48.3 48.3l-5.7-5.7M42.6 21.4l5.7-5.7M15.7 48.3l5.7-5.7" />
        <circle cx="32" cy="7" r="2" /><circle cx="32" cy="57" r="2" /><circle cx="7" cy="32" r="2" /><circle cx="57" cy="32" r="2" />
        <circle cx="14.3" cy="14.3" r="2" /><circle cx="49.7" cy="49.7" r="2" /><circle cx="49.7" cy="14.3" r="2" /><circle cx="14.3" cy="49.7" r="2" />
        <circle cx="27" cy="28" r="2" /><circle cx="38" cy="30" r="2.5" /><circle cx="31" cy="38" r="1.8" />
      </g>
    </svg>
  );
}

export default function OfficeSecurityPage() {
  return (
    <main className="securityLanding">
      <SiteHeader />

      <section className="securityLandingHero">
        <div className="securityLandingHeroCopy revealUp" data-reveal>
          <p>OFFICE SECURITY</p>
          <h1>オフィスを守る<br /><span>最適なセキュリティ対策を</span></h1>
          <p className="securityLandingLead">ネットワーク・Wi-Fi・UTM・監視カメラまで。<br />オフィス環境を総合的に見直し、安全で快適なIT環境をご提案します。</p>
          <PageBreadcrumb current="オフィスセキュリティ対策" />
        </div>
        <div className="securityLandingHeroImage revealClipRight" data-reveal>
          <Image src="/se.png" alt="オフィスセキュリティ対策" fill priority sizes="(max-width: 900px) 100vw, 52vw" />
        </div>
      </section>

      <section className="securityRisks">
        <div className="securitySectionHeading revealUp" data-reveal><p>SECURITY RISKS</p><h2>オフィスを取り巻くセキュリティリスク</h2><span>企業を狙ったサイバー攻撃は年々増加しています。<br />情報漏えいやウイルス感染だけでなく、不正アクセスやランサムウェアなど、さまざまな脅威が日々発生しています。<br />安心して業務を続けるためには、ネットワーク全体を考えたセキュリティ対策が重要です。</span></div>
        <div className="securityRiskGrid">{risks.map(([risk, text], index) => <article className="revealUp" data-reveal key={risk}><span>{String(index + 1).padStart(2, "0")}</span><VirusIcon /><h3>{risk}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="securityNetwork">
        <div className="securitySectionHeading revealUp" data-reveal><p>NETWORK STRUCTURE</p><h2>オフィス全体を守るネットワーク構成</h2><span>オフィス内の通信環境は、複数の機器が連携することで安全性を維持しています。<br />UTM・セキュリティスイッチ・アクセスポイント・監視カメラなどを適切に組み合わせることで、安全で快適なネットワーク環境を実現します。</span></div>
        <div className="securityNetworkGrid">
          <div className="securityNetworkImage revealClipLeft" data-reveal><Image src="/alphaservice3.png" alt="オフィス全体のネットワーク構成" fill sizes="(max-width: 900px) 100vw, 58vw" />{networkLabels.map(([className, label]) => <span className={`securityDiagramLabel ${className}`} key={className}>{label}</span>)}</div>
          <div><h3 className="securityNetworkRoleTitle revealUp" data-reveal>各機器の役割</h3><div className="securityNetworkList">{networkItems.map(([name, text], index) => <article className="revealUp" data-reveal key={name}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{name}</h3><p>{text}</p></div></article>)}</div></div>
        </div>
      </section>

      <section className="securityDefense">
        <div className="securityDefenseHeading revealUp" data-reveal>
          <p>MULTI-LAYERED DEFENSE</p>
          <h2>多層防御で<br />オフィス全体を守る</h2>
          <p>セキュリティ対策は、一つの機器だけでは十分ではありません。ネットワークの入口から社内ネットワーク、Wi-Fi、PCまで、それぞれのポイントで防御することで高いセキュリティを実現します。</p>
        </div>
        <div className="securityDefenseBody">
          <div className="securityDefenseImage revealClipRight" data-reveal><Image src="/alphaservice2.png" alt="UTM・IPS・セキュリティスイッチによる多層防御" fill sizes="(max-width: 900px) 100vw, 48vw" />{defenseLabels.map(([className, label]) => <span className={`securityDiagramLabel ${className}`} key={className}>{label.split("\n").map(line => <span key={line}>{line}<br /></span>)}</span>)}</div>
          <div className="securityDefenseGuide"><h3 className="revealUp" data-reveal>各セキュリティ機器の役割</h3><div className="securityDefenseRoles">{defenseRoles.map(([name, text], index) => <article className="revealUp" data-reveal key={name}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{name}</h3><p>{text}</p></div></article>)}</div></div>
        </div>
      </section>

      <section className="securityProducts">
        <div className="securitySectionHeading revealUp" data-reveal><p>SECURITY LAYERS</p><h2>オフィスを守る6つの対策</h2><span>ネットワークの入口から利用端末まで、それぞれのポイントで防御します。</span></div>
        <div className="securityProductGrid">{products.map(([name, text], index) => <article className="revealUp" data-reveal key={name}><div className="securityProductPlaceholder"><span>IMAGE</span></div><span>{String(index + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="securityFaq">
        <div className="securitySectionHeading revealUp" data-reveal><p>FAQ</p><h2>よくある質問</h2></div>
        <div>{faqs.map(([question, answer], index) => <details className="revealUp" data-reveal key={question}><summary><span>Q{String(index + 1).padStart(2, "0")}</span>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <ContactSection animated title={<>オフィスのセキュリティ対策<br />お任せください</>} description="ネットワーク構築からUTM・Wi-Fi・監視カメラ・保守まで。お客様のオフィス環境に合わせた最適なセキュリティ対策をご提案いたします。" />
      <SiteFooter pageTopHref="/office-security" /><FloatingMenu /><ScrollEffects />
    </main>
  );
}
