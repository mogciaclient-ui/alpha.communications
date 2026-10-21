import type { Metadata } from "next";
import { RegionalInitiativesContent } from "./RegionalInitiativesContent";

export const metadata: Metadata = {
  title: "地域へのとりくみ",
  description: "地域とともに歩み、身近なつながりを大切にするための活動を一つずつ積み重ねています。",
};

export default function RegionalInitiativesPage() {
  return <RegionalInitiativesContent />;
}
