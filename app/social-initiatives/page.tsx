import type { Metadata } from "next";
import { Demo4InitiativePage } from "@/components/Demo4InitiativePage";

export const metadata: Metadata = {
  title: "社会へのとりくみ",
  description: "地域と未来のために、私たちができることを一つずつ積み重ねています。",
};

export default function SocialInitiativesPage() {
  return <Demo4InitiativePage/>;
}
