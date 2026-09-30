import type { Metadata } from "next";
import { Demo4InitiativePage } from "@/components/Demo4InitiativePage";

export const metadata: Metadata = {
  title: "地域へのとりくみ",
  description: "地域とともに歩み、身近なつながりを大切にするための活動を一つずつ積み重ねています。",
};

export default function RegionalInitiativesPage() {
  return <Demo4InitiativePage
    eyebrow="REGIONAL INITIATIVES"
    title="地域へのとりくみ"
    description="地域とともに歩み、身近なつながりを大切にするための活動を一つずつ積み重ねています。"
    visualLabel="REGIONAL INITIATIVE"
  />;
}
