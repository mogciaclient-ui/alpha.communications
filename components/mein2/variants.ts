// /mein2 のファーストビュー案の一覧（サーバー・クライアント両方から読む）

export type Variant = "big" | "2-1" | "2-2" | "2-3" | "4-1" | "4-2" | "4-3";
export type Draw = "D1" | "D2" | "D3";
export type Layout = "big" | "left" | "center";
export type Bg = "none" | "lines" | "ripple" | "pop" | "mix";

export const VARIANTS: Record<Variant, { label: string; bg: Bg; layout: Layout; cx: number; note: string }> = {
  big: { label: "白×大きなロゴ", bg: "none", layout: "big", cx: 800, note: "白い背景の中央にロゴを大きく。細い線が∞に回ってからロゴが描き上がり、静止したあと流れるように消える。" },
  "2-1": { label: "2-1 細い線", bg: "lines", layout: "left", cx: 1216, note: "ロゴを中心に細い∞の線が波紋のように呼吸し、線の上を色の筋が流れる。" },
  "2-2": { label: "2-2 細い線・中央", bg: "lines", layout: "center", cx: 800, note: "2の線を中央に置き、今のサイトと同じ中央揃えに。" },
  "2-3": { label: "2-3 波紋", bg: "ripple", layout: "left", cx: 1216, note: "2-1のように線を敷き詰めず、ロゴから∞の形の線が1本ずつ生まれて、外へ広がりながら消えていく。" },
  "4-1": { label: "4-1 POP図形", bg: "pop", layout: "left", cx: 1000, note: "丸や角丸の図形が大きな∞の流れに乗ってふわふわ回る。" },
  "4-2": { label: "4-2 POP図形・中央", bg: "pop", layout: "center", cx: 800, note: "4の図形を画面全体の∞に乗せ、今のサイトと同じ中央揃えに。" },
  "4-3": { label: "4-3 線＋図形", bg: "mix", layout: "left", cx: 1216, note: "細い∞の線の上を図形が線に沿って回る。" },
};
export const DRAWS: Record<Draw, string> = {
  D1: "青と青緑を同時に描く",
  D2: "青→青緑の順に描く",
  D3: "ゆっくり描く",
};

/** /mein2 に並べる順番 */
export const VARIANT_ORDER: Variant[] = ["big", "2-1", "2-2", "2-3", "4-1", "4-2", "4-3"];
