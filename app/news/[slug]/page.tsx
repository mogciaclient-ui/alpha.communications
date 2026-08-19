import { notFound } from "next/navigation";
import { HeaderOnlyPage } from "@/components/HeaderOnlyPage";

const slugs = ["office-security", "summer-holiday", "website-renewal"];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function NewsPlaceholderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!slugs.includes(slug)) notFound();
  return <HeaderOnlyPage />;
}
