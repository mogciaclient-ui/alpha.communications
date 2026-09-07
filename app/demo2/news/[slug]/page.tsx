import { notFound } from "next/navigation";
import { ContentPage } from "@/components/demo2/ContentPage";

const pages={
  "summer-holiday-2026":{date:"2026.08.01",title:"夏季休業のお知らせ",lead:"夏季休業期間についてご案内します。",body:"平素は格別のお引き立てを賜り、厚く御礼申し上げます。誠に勝手ながら、弊社は夏季期間中を休業とさせていただきます。期間中は何かとご迷惑をおかけいたしますが、何卒ご了承のほどお願い申し上げます。"},
  "year-end-holiday-2025":{date:"2025.12.15",title:"年末年始休業のお知らせ",lead:"年末年始の休業期間についてご案内します。",body:"平素は格別のお引き立てを賜り、厚く御礼申し上げます。誠に勝手ながら、2025年12月27日（土）から2026年1月4日（日）まで年末年始休業とさせていただきます。"},
  "summer-holiday-2025":{date:"2025.08.01",title:"夏季休業のお知らせ",lead:"2025年の夏季休業期間についてご案内します。",body:"平素は格別のお引き立てを賜り、厚く御礼申し上げます。誠に勝手ながら、2025年8月9日（土）から2025年8月17日（日）まで夏季休業とさせていただきます。"},
  "website-renewal-2025":{date:"2025.04.01",title:"ホームページリニューアルのお知らせ",lead:"アルファコミュニケーションズのホームページをリニューアルしました。",body:"このたび、より分かりやすく情報をお届けするため、ホームページをリニューアルしました。サービス情報や会社からのお知らせを随時発信してまいりますので、今後ともよろしくお願い申し上げます。"},
} as const;
const slugs=Object.keys(pages);

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function NewsPlaceholderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!(slug in pages)) notFound();
  const page=pages[slug as keyof typeof pages];
  return <ContentPage eyebrow="NEWS" title={page.title} lead={page.lead} current={page.title} parents={[{label:"お知らせ",href:"/demo2/news"}]} pageHref={`/news/${slug}`} sections={[{eyebrow:page.date,title:"お知らせ内容",text:page.body},{title:"お問い合わせについて",text:"ご不明な点がございましたら、お問い合わせページまたはお電話でご連絡ください。"}]}/>;
}
