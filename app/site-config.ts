export const SITE_NAME = "アルファコミュニケーションズ株式会社";
export const SITE_DESCRIPTION = "福岡を中心に九州・山口の法人向けOA機器、ビジネスフォン、複合機、ネットワーク構築をワンストップで支援します。";

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  try {
    return new URL(configured || "http://localhost:3000");
  } catch {
    return new URL("http://localhost:3000");
  }
}
