import { ServiceCategoryLayout } from "@/components/demo2/ServiceCategoryLayout";

const products=[
  {title:"光インターネット回線",text:"法人向けの高速・安定したインターネット回線で、日々の業務を快適に支えます。"},
  {title:"ネットワーク構築",text:"サーバー・ルーター・Wi-Fiを含め、規模や働き方に合った社内ネットワークを構築します。"},
  {title:"UTM・セキュリティ",text:"サイバー攻撃や不正アクセスなどの脅威から、企業のネットワークと情報を守ります。"},
  {title:"クラウド・サーバー",text:"データの共有・保管・バックアップを安全かつスムーズに行える環境を整えます。"},
  {title:"オフィスIT支援",text:"パソコン設定やトラブル対応など、社内ITに関する日常的なお困りごとを支援します。"},
  {title:"Web・メール環境",text:"ホームページや法人メールなど、事業に必要なオンライン環境の整備をサポートします。"},
];
export default function Page(){return <ServiceCategoryLayout title="ITインフラサポート" english="IT INFRA SUPPORT" current="it" products={products}/>}
