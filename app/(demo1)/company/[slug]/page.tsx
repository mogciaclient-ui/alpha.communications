import { notFound } from "next/navigation";
import { ContentPage } from "@/components/ContentPage";

const pages = {
  features:{title:"アルファの特徴",lead:"NTT西日本と強固なパートナーシップを結ぶ、安心の情報機器特約店です。",sections:[{title:"NTT西日本の情報機器特約店",text:"豊富な経験と知識、技術力で、お客様の情報通信機器のよきアドバイザーとして行動しています。"},{title:"自社工事とNTTフィールドテクノとの連携",text:"自社工事部門とNTT直轄のNTTフィールドテクノとの連携により、いざという時にも最短で復旧できる体制を整えています。"},{title:"充実したカスタマーサービス",text:"定期訪問で機器のメンテナンスや清掃、利用状況のヒアリングを行い、事業の発展に合わせた通信インフラをご提案します。"}]},
  offices:{title:"拠点案内",lead:"福岡本社と5つの営業所から、九州・山口のお客様をサポートしています。",sections:[{title:"本社・山口営業所",text:"本社：〒812-0863 福岡県福岡市博多区金の隈1-28-50／山口営業所：〒750-0009 山口県下関市上田中町1-13-25 NTT下関設備センタビル4F",items:["本社 TEL：(092)514-1788","山口 TEL：(083)229-0707"]},{title:"佐賀・長崎営業所",text:"佐賀営業所：佐賀市中の小路5-5 NTT中の小路ビル1F／長崎営業所：大村市東三城町153 NTT大村ビル1F",items:["佐賀 TEL：(0952)27-7800","長崎 TEL：(0957)48-8050"]},{title:"熊本・鹿児島営業所",text:"熊本営業所：熊本市中央区桜町4-20 NTT桜町交換所ビル4F／鹿児島営業所：鹿児島市鴨池新町6-2 NTT鴨池ビル1F",items:["熊本 TEL：(096)312-3750","鹿児島 TEL：(099)202-0285"]}]},
  business:{title:"事業内容",lead:"先進技術と専門知識を結集し、お客様の利益に貢献します。",sections:[{title:"情報通信機器販売事業",text:"ビジネスホン、複合機・FAX、ネットワークセキュリティなど、NTT西日本ブランドの幅広い商品を取り扱っています。"},{title:"ネットワーク環境構築事業",text:"企業を取り巻く情報セキュリティリスクを踏まえ、お客様の環境に合った通信・セキュリティ環境を構築します。"},{title:"各種工事・保守・メンテナンス",text:"販売・設置工事・アフターフォローをワンストップで提供し、事業に欠かせない通信インフラを支えます。"}]},
  history:{title:"沿革",lead:"2005年の設立以来、九州・山口へサポート拠点を広げてきました。",sections:[{title:"2005–2011",text:"2005年8月に設立。2006年に山口、2010年に佐賀、2011年に長崎営業所を開設しました。"},{title:"2013–2018",text:"山口・長崎・佐賀の各営業所をNTTビルへ移転。2014年に熊本営業所を開設し、2018年に本社を移転しました。"},{title:"2019–2020",text:"2019年に熊本営業所をNTT桜町交換所ビルへ移転。2020年に鹿児島営業所をNTT鴨池ビルに開設しました。"}]},
  organization:{title:"組織体制",lead:"専門性の異なるチームが連携し、相談からアフターサポートまで伴走します。",sections:[{title:"営業・コンサルティング",text:"課題を丁寧に把握し、将来の運用まで見据えた提案を行います。"},{title:"技術・施工",text:"有資格者を含む技術スタッフが、安全と品質を大切に施工します。"},{title:"カスタマーサポート",text:"導入後の問い合わせや障害を受け付け、各担当へ迅速につなぎます。"}]},
} as const;
const slugs = Object.keys(pages);

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function CompanyPlaceholderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!(slug in pages)) notFound();
  const page=pages[slug as keyof typeof pages];
  return <ContentPage demo4 eyebrow="COMPANY" title={page.title} lead={page.lead} parents={[{label:"会社案内",href:"/company"}]} sections={[...page.sections]} pageHref={`/company/${slug}`}/>;
}
