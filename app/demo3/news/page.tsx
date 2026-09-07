import Link from "next/link";
import { ContentPage } from "@/components/demo3/ContentPage";

export default function NewsPage() {
  const news=[{date:"2026.08.01",category:"お知らせ",title:"夏季休業のお知らせ",href:"/demo3/news/summer-holiday-2026"},{date:"2025.12.15",category:"お知らせ",title:"年末年始休業のお知らせ",href:"/demo3/news/year-end-holiday-2025"},{date:"2025.08.01",category:"お知らせ",title:"夏季休業のお知らせ",href:"/demo3/news/summer-holiday-2025"}];
  return <ContentPage eyebrow="NEWS" title="お知らせ" lead="アルファコミュニケーションズからの最新情報や、オフィスづくりに役立つ情報をお届けします。" pageHref="/demo3/news" sections={[]}><div className="contentNewsList">{news.map(item=><Link href={item.href} key={item.href}><time>{item.date}</time><span>{item.category}</span><strong>{item.title}</strong><b>→</b></Link>)}</div></ContentPage>;
}
