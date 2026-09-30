import type { Metadata } from "next";
import "./globals.css";
import { getSiteUrl, SITE_DESCRIPTION, SITE_NAME } from "./site-config";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: `${SITE_NAME}｜福岡・九州のNTT西日本 情報機器特約店`,
    template: `%s｜${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ["NTT特約店", "OA機器", "ビジネスフォン", "複合機", "福岡"],
  openGraph: {
    title: SITE_NAME,
    description: "オフィスのお困りごとは、まとめてお任せください。",
    type: "website",
    locale: "ja_JP",
    siteName: SITE_NAME,
  },
  twitter: { card: "summary_large_image", title: SITE_NAME, description: SITE_DESCRIPTION },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
