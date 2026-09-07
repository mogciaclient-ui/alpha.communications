import { ContentPage } from "@/components/demo2/ContentPage";

export default function AfterSalesPage() {
  return <ContentPage eyebrow="AFTER SALES" title="アフターサポート" lead="導入してからが、本当のお付き合いの始まり。日々の安心を地域密着の体制で支えます。" parents={[{label:"サービス",href:"/demo2/service"}]} pageHref="/demo2/service/after-sales" sections={[
    {title:"自社工事部門による対応",text:"電話、インターネット、FAXはビジネスに欠かせないインフラです。自社に工事部門を設け、障害時の迅速な対応に備えています。"},
    {title:"NTTフィールドテクノとの連携",text:"NTT直轄のNTTフィールドテクノと連携し、いざという時にも最短で復旧できる安心の体制を整えています。"},
    {title:"定期的なカスタマーサービス",text:"お客様を定期的に訪問し、機器のメンテナンスや清掃、利用状況のヒアリングを実施。事業の発展に合わせて必要な通信インフラをご提案します。"},
  ]}/>;
}
