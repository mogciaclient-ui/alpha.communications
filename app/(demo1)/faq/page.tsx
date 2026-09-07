import { ContentPage } from "@/components/ContentPage";

export default function FaqPage() {
  const faqs=[
    ["相談や見積もりに費用はかかりますか？","ご相談と現地確認、お見積もりは原則無料です。内容や地域により費用が生じる場合は事前にご案内します。"],
    ["機器が故障したときも対応してもらえますか？","はい。導入後も窓口を一本化し、状況確認から修理・代替機の手配まで迅速に対応します。"],
    ["他社で導入した機器も相談できますか？","メーカーや契約状況を確認したうえで、可能な範囲をご案内します。まずは機種名や現在のお困りごとをお知らせください。"],
    ["複数拠点をまとめてお願いできますか？","可能です。拠点ごとの環境を整理し、運用ルールやセキュリティを統一した構成をご提案します。"],
    ["対応エリアを教えてください。","福岡を中心に九州・山口へ対応しています。エリア外についても連携体制を含めてご相談ください。"],
  ];
  return <ContentPage eyebrow="FAQ" title="よくある質問" lead="ご相談前によくいただくご質問をまとめました。掲載のない内容もお気軽にお問い合わせください。" pageHref="/faq" sections={[]}><div className="faqList">{faqs.map(([q,a])=><details key={q}><summary><b>Q</b>{q}<span>＋</span></summary><p><b>A</b>{a}</p></details>)}</div></ContentPage>;
}
