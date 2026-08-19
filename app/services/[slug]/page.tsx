import { notFound } from "next/navigation";
import { HeaderOnlyPage } from "@/components/HeaderOnlyPage";

const slugs = ["business-phone", "multifunction-printer", "network", "security-camera", "security", "oa-equipment"];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function ServicePlaceholderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!slugs.includes(slug)) notFound();
  return <HeaderOnlyPage />;
}
