import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "アルファコミュニケーションズ株式会社｜福岡・九州のNTT西日本 情報機器特約店",
  description: "福岡を中心に九州・山口の法人向けOA機器、ビジネスフォン、複合機、ネットワーク構築をワンストップで支援します。",
  keywords: ["NTT特約店", "OA機器", "ビジネスフォン", "複合機", "福岡"],
  openGraph: {
    title: "アルファコミュニケーションズ株式会社",
    description: "オフィスのお困りごとは、まとめてお任せください。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
