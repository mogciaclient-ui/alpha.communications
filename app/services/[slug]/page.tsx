import { notFound } from "next/navigation";
import { ContentPage } from "@/components/ContentPage";

const pages={
 "business-phone":{title:"ビジネスホン",lead:"多様化するビジネスニーズに対応する豊富なラインナップで、オフィスの課題を解決します。",points:["αZXⅡ typeS/M：クラウド連携・通話内容テキスト化・着信応答業務の効率化","αZX typeL：最大144外線・480内線、スマホや拠点間の連携に対応","αZX Home：SOHOや店舗併設住宅にも適した多機能システム"]},
 "multifunction-printer":{title:"複合機・FAX",lead:"FAX・コピー・プリンター・スキャナーの多彩な機能で、オフィスの文書管理を効率化します。",points:["OFISTARシリーズ：クラウドサービスと連携","オフィス内外の情報活用をサポート","多彩なセキュリティ機能を備えたビジネスFAX"]},
 network:{title:"ネットワーク構築",lead:"お客様の業務と利用環境に合わせ、安定したネットワーク環境を構築します。",points:["回線・ルーター・Wi-Fi環境の設計","サーバーや各種通信機器との接続","自社工事部門とNTTフィールドテクノとの連携"]},
 "security-camera":{title:"セキュリティカメラ",lead:"カメラやサーバーなどを組み合わせ、オフィスや店舗の状況に合った対策をご提案します。",points:["設置場所と目的に応じた機器選定","映像の録画・確認環境","ネットワークセキュリティと合わせた導入"]},
 security:{title:"ネットワークセキュリティ",lead:"情報漏えい、データ消失、不正アクセスから情報資産を守るため、環境に合った対策をお手伝いします。",points:["UTMによるネットワークの入口対策","サーバー・端末の情報資産保護","現状を確認したうえでのリスク対策"]},
 "oa-equipment":{title:"その他の商品・サービス",lead:"通信機器に加え、環境商材やアルファオリジナル商材で経営課題を幅広く支援します。",points:["LED照明・エアコン","アルファ光・アルファ電気","アルファWEB・アルファモバイル・経営支援サービスAXCEL"]},
} as const;
const slugs=Object.keys(pages);

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function ServicePlaceholderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!(slug in pages)) notFound();
  const page=pages[slug as keyof typeof pages];
  return <ContentPage eyebrow="SERVICE" title={page.title} lead={page.lead} parents={[{label:"サービス",href:"/service"}]} pageHref={`/services/${slug}`} sections={[
    {title:"こんな課題を解決します",text:"現在の利用状況や困りごとを整理し、過不足のない構成をご案内します。",items:[...page.points]},
    {title:"導入から保守までワンストップ",text:"販売、設置工事、アフターフォローをワンストップで行い、通信のプロフェッショナルとして業務効率向上、通信リスク軽減、コスト削減を支援します。"},
    {title:"まずは現状をお聞かせください",text:"台数や構成が決まっていなくても大丈夫です。コスト、使いやすさ、安全性のバランスを考えてご提案します。"},
  ]}/>;
}
