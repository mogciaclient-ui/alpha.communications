import { notFound } from "next/navigation";
import { HeaderOnlyPage } from "@/components/HeaderOnlyPage";

const slugs = ["features", "offices", "business", "history", "organization"];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function CompanyPlaceholderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!slugs.includes(slug)) notFound();
  return <HeaderOnlyPage />;
}
