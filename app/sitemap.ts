import type { MetadataRoute } from "next";
import { getSiteUrl } from "./site-config";

const paths = [
  "/",
  "/service",
  "/service/category/business_support",
  "/service/category/it_support",
  "/service/category/top_support",
  "/service/axcel",
  "/service/ai-products",
  "/office-security",
  "/company",
  "/company/message",
  "/company/offices",
  "/company/features",
  "/ntt-partner",
  "/recruit",
  "/news",
  "/news/summer-holiday-2026",
  "/news/year-end-holiday-2025",
  "/news/summer-holiday-2025",
  "/news/website-renewal-2025",
  "/faq",
  "/privacy",
  "/contact",
  "/social-initiatives",
  "/regional-initiatives",
  "/sdgs",
  "/dx",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  return paths.map((path) => ({
    url: new URL(path, baseUrl).toString(),
    changeFrequency: path === "/news" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/service" ? 0.9 : 0.7,
  }));
}
