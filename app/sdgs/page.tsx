import type { Metadata } from "next";
import { Demo4InitiativePage } from "@/components/Demo4InitiativePage";

export const metadata: Metadata = {
  title: "SDGsへの取り組み",
  description: "環境と地域社会の両面から、持続可能な未来につながる取り組みを進めています。",
};

export default function SdgsInitiativePage() {
  return <Demo4InitiativePage eyebrow="ATTEMPT:01" title="SDGsへの取り組み" description="環境と地域社会の両面から、持続可能な未来につながる取り組みを進めています。" visualLabel="SDGs INITIATIVE"/>;
}
