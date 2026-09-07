import { ServiceCategoryLayout } from "@/components/demo2/ServiceCategoryLayout";

const products=[
  {title:"オフィス環境改善",text:"機器・通信・レイアウトをまとめて見直し、働きやすいオフィス環境をご提案します。"},
  {title:"防犯・入退室管理",text:"防犯カメラや入退室管理を組み合わせ、オフィスや店舗の安全性を高めます。"},
  {title:"省エネ・コスト削減",text:"LED照明や設備の見直しを通じて、ランニングコストと環境負荷を抑えます。"},
  {title:"OA機器・消耗品",text:"業務に必要なOA機器や周辺用品を、導入後のサポートとともに提供します。"},
  {title:"移転・増設サポート",text:"オフィス移転や拠点増設に伴う通信・ネットワーク・機器設置を一括対応します。"},
  {title:"保守・メンテナンス",text:"導入後のトラブルや設定変更にも、地域密着の体制で迅速に対応します。"},
];
export default function Page(){return <ServiceCategoryLayout title="オフィスの幅広いサービス" english="OFFICE SUPPORT" current="wide" products={products}/>}
