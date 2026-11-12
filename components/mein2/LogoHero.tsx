"use client";

/**
 * /mein2 用：ロゴを使ったファーストビュー案（1案ずつ表示するヒーロー）
 * - 白×大きなロゴ（細い線が∞に回る → 描き上がる → 静止 → 消える）
 * - 2系：細い∞の線（2-1 そのまま / 2-2 中央 / 2-3 波紋）
 * - 4系：POPな図形（4-1 そのまま / 4-2 中央 / 4-3 2と4のミックス）
 * 2系・4系のロゴは D1〜D3 の描き方で描き上がり、その後は静止する
 */
import { useEffect, useId, useRef } from "react";
import { LOGO_BLUE, LOGO_DEFS, LOGO_PATH, LOGO_TEAL, LOGO_VIEWBOX } from "./alphaLogoData";
import { VARIANTS, type Draw, type Variant } from "./variants";
import styles from "./LogoHero.module.css";

const SVG_NS = "http://www.w3.org/2000/svg";
const CY = 383;
const ease = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
const cl = (x: number) => Math.min(1, Math.max(0, x));

type Pt = [number, number];
type LineItem = { g: SVGGElement; pulse: SVGPathElement | null; f: number; i: number; cx: number; dir: number; sp: number };
type RingItem = { g: SVGGElement; p: SVGPathElement; ph: number; cx: number };
type PopItem = { node: SVGElement; track: Pt[]; ph: number; rot: number; bob: number; sp: number; amp: number };
type Scene = { lines: LineItem[]; rings: RingItem[]; pops: PopItem[] };

function svgEl<K extends keyof SVGElementTagNameMap>(parent: Element, tag: K, attrs: Record<string, string | number>) {
  const e = document.createElementNS(SVG_NS, tag);
  for (const k in attrs) e.setAttribute(k, String(attrs[k]));
  parent.appendChild(e);
  return e;
}
function lem(cx: number, cy: number, a: number, b: number, rot: number, n = 240): Pt[] {
  const p: Pt[] = [];
  const c = Math.cos(rot), s = Math.sin(rot);
  for (let i = 0; i <= n; i++) {
    const t = (i / n) * Math.PI * 2, d = 1 + Math.sin(t) ** 2;
    const x = (a * Math.cos(t)) / d, y = (b * Math.sin(t) * Math.cos(t)) / d;
    p.push([cx + x * c - y * s, cy + x * s + y * c]);
  }
  return p;
}
const toD = (p: Pt[]) => "M" + p.map((q) => `${q[0].toFixed(1)} ${q[1].toFixed(1)}`).join(" L") + "Z";

function buildScene(svg: SVGSVGElement, v: Variant, gradId: string): Scene {
  svg.replaceChildren();
  const defs = svgEl(svg, "defs", {});
  const lg = svgEl(defs, "linearGradient", { id: gradId, x1: 0, y1: 0, x2: 1, y2: 0 });
  svgEl(lg, "stop", { offset: 0, "stop-color": "#2f6fd6" });
  svgEl(lg, "stop", { offset: 1, "stop-color": "#18a6c4" });
  const scene: Scene = { lines: [], rings: [], pops: [] };
  const cfg = VARIANTS[v];
  const stroke = `url(#${gradId})`;

  const buildLines = (cx: number, count: number, withPulse: boolean) => {
    for (let i = 0; i < count; i++) {
      const f = i / (count - 1), a = 300 + f * 760;
      const g = svgEl(svg, "g", {});
      const d = toD(lem(0, 0, a, a * 1.55, -0.18 + f * 0.12));
      svgEl(g, "path", { d, fill: "none", stroke, "stroke-width": (1.5 - f * 0.7).toFixed(2), opacity: (0.5 - f * 0.36).toFixed(3) });
      const pulse = withPulse && i % 2 === 0
        ? svgEl(g, "path", { d, fill: "none", stroke: i % 4 ? "#18a6c4" : "#2f6fd6", "stroke-width": (2.6 - f * 1.2).toFixed(2), "stroke-linecap": "round", pathLength: 1, "stroke-dasharray": "0.05 0.95", opacity: (0.95 - f * 0.55).toFixed(3) })
        : null;
      scene.lines.push({ g, pulse, f, i, cx, dir: i % 4 < 2 ? 1 : -1, sp: 0.07 + (0.05 * ((i * 7) % 3)) / 2 });
    }
  };
  const shape = (i: number, sz: number) => {
    const cols = ["#2f6fd6", "#18a6c4", "#8cc4ff", "#5bd0e0", "#bfdcff", "#2f6fd6", "#9be3ec", "#4f8de8"];
    const kind = i % 3, col = cols[i % cols.length];
    const n = kind === 0
      ? svgEl(svg, "circle", { r: sz / 2, fill: col })
      : kind === 1
        ? svgEl(svg, "rect", { x: -sz / 2, y: -sz / 2, width: sz, height: sz, rx: sz * 0.3, fill: col })
        : svgEl(svg, "circle", { r: sz / 2, fill: "none", stroke: col, "stroke-width": Math.max(5, sz * 0.18) });
    n.setAttribute("opacity", kind === 2 ? "0.8" : "0.85");
    return n;
  };

  if (cfg.bg === "lines") buildLines(cfg.cx, 24, true);
  if (cfg.bg === "ripple") {
    // 2-1 との違い：線を常に置かず、ロゴから∞の線が1本ずつ生まれて外へ広がって消える
    for (let i = 0; i < 9; i++) {
      const g = svgEl(svg, "g", {});
      const p = svgEl(g, "path", { d: toD(lem(0, 0, 300, 465, -0.12)), fill: "none", stroke: i % 2 ? "#18a6c4" : "#2f6fd6", "stroke-width": 2, "vector-effect": "non-scaling-stroke", opacity: 0 });
      scene.rings.push({ g, p, ph: i / 9, cx: cfg.cx });
    }
  }
  if (cfg.bg === "pop") {
    const center = cfg.layout === "center";
    const track = lem(cfg.cx, CY, center ? 760 : 640, center ? 1050 : 1000, -0.12, 600);
    const n = center ? 18 : 14;
    for (let i = 0; i < n; i++) scene.pops.push({ node: shape(i, 26 + ((i * 37) % 5) * 16), track, ph: i / n, rot: (i % 2 ? 1 : -1) * (20 + i * 7), bob: i * 0.7, sp: 0.018, amp: 10 });
  }
  if (cfg.bg === "mix") {
    buildLines(cfg.cx, 16, false);
    for (let i = 0; i < 10; i++) {
      const ring = [2, 5, 8, 11, 14][i % 5], f = ring / 15, a = 300 + f * 760;
      scene.pops.push({ node: shape(i, 18 + ((i * 29) % 4) * 12), track: lem(cfg.cx, CY, a, a * 1.55, -0.18 + f * 0.12, 600), ph: i / 10 + (i % 2) * 0.37, rot: (i % 2 ? 1 : -1) * (30 + i * 6), bob: i, sp: 0.03, amp: 0 });
    }
  }
  return scene;
}

function renderScene(scene: Scene, t: number) {
  for (const l of scene.lines) {
    const sc = 1 + Math.sin(t * 1.1 - l.i * 0.32) * 0.025;
    l.g.setAttribute("transform", `translate(${l.cx} ${CY}) scale(${sc.toFixed(4)})`);
    if (l.pulse) l.pulse.setAttribute("stroke-dashoffset", ((-(l.f * 0.7 + l.dir * t * l.sp)) % 1).toFixed(4));
  }
  for (const r of scene.rings) {
    const ph = (r.ph + t * 0.11) % 1;
    r.g.setAttribute("transform", `translate(${r.cx} ${CY}) scale(${(0.35 + ph * 2.6).toFixed(4)})`);
    r.p.setAttribute("opacity", (Math.pow(1 - ph, 1.4) * Math.min(1, ph * 6) * 0.85).toFixed(3));
  }
  for (const p of scene.pops) {
    const N = p.track.length - 1, u = ((p.ph + t * p.sp) % 1) * N, i = Math.floor(u), f = u - i;
    const a = p.track[i], b = p.track[Math.min(N, i + 1)];
    const x = a[0] + (b[0] - a[0]) * f, y = a[1] + (b[1] - a[1]) * f + Math.sin(t * 1.3 + p.bob) * p.amp;
    p.node.setAttribute("transform", `translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${((t * p.rot) % 360).toFixed(1)})`);
  }
}

type Props = { variant: Variant; draw?: Draw; loop?: boolean };

export function LogoHero({ variant, draw = "D1", loop = true }: Props) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<SVGSVGElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);
  const maskTeal = useRef<SVGPathElement>(null);
  const maskBlue = useRef<SVGPathElement>(null);
  const traceTeal = useRef<SVGPathElement>(null);
  const traceBlue = useRef<SVGPathElement>(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;
    const scene = buildScene(bg, variant, `${uid}-line`);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let start: number | null = null;

    const setMask = (p: SVGPathElement | null, drawn: number, erased = 0) => {
      if (!p) return;
      p.setAttribute("stroke-dasharray", `${Math.max(0.0001, drawn - erased).toFixed(4)} 2`);
      p.setAttribute("stroke-dashoffset", (-erased).toFixed(4));
    };
    const setTrace = (op: number, run: number) => {
      [traceBlue.current, traceTeal.current].forEach((p, i) => {
        if (!p) return;
        p.setAttribute("opacity", op.toFixed(3));
        p.setAttribute("stroke-dashoffset", (-(run + (i ? 0.5 : 0)) % 1).toFixed(4));
      });
    };

    const render = (t: number) => {
      const logo = logoRef.current;
      if (variant === "big") {
        // 細い線が∞に回る → 描き上がる → 静止 → 描いた方向へ消える（10秒周期）
        const T = 10, c = loop ? t % T : Math.min(t, 6);
        setTrace(c < 0.4 ? c / 0.4 : c < 2.4 ? 1 : 1 - cl((c - 2.4) / 0.8), c * 0.55);
        const b = ease(cl((c - 2.2) / 2.4)), a = loop ? ease(cl((c - 7.6) / 1.8)) : 0;
        setMask(maskBlue.current, b, a);
        setMask(maskTeal.current, b, a);
        if (logo) logo.style.opacity = "1";
      } else {
        // 描き上がったら静止（繰り返しのときは9秒周期でフェードして描き直し）
        setTrace(0, 0);
        const T = 9, c = loop ? t % T : t;
        let pb: number, pt: number;
        if (draw === "D2") { pb = ease(cl((c - 0.3) / 1.8)); pt = ease(cl((c - 1.7) / 1.6)); }
        else if (draw === "D3") { pb = pt = ease(cl((c - 0.3) / 4.2)); }
        else { pb = pt = ease(cl((c - 0.3) / 2.4)); }
        setMask(maskBlue.current, pb);
        setMask(maskTeal.current, pt);
        if (logo) logo.style.opacity = (loop && c > T - 0.7 ? 1 - cl((c - (T - 0.7)) / 0.6) : 1).toFixed(3);
      }
      bg.style.opacity = cl((t - 0.4) / 1.2).toFixed(3);
      renderScene(scene, t);
    };

    if (reduce) { render(6); return; }
    render(0);
    const frame = (now: number) => {
      if (start === null) start = now;
      render((now - start) / 1000);
      raf = requestAnimationFrame(frame);
    };
    // 画面に入ったときに最初から再生し、外れたら止める
    const io = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf);
      if (entry.isIntersecting) { start = null; raf = requestAnimationFrame(frame); }
    }, { threshold: 0.35 });
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [variant, draw, loop, uid]);

  const cfg = VARIANTS[variant];
  const id = (s: string) => `${uid}-${s}`;

  return (
    <section ref={sectionRef} className={`hero ${styles.hero} ${styles[cfg.layout]}`}>
      <svg ref={bgRef} className={styles.bg} viewBox="0 0 1600 767" preserveAspectRatio="xMidYMid slice" aria-hidden="true" />

      <div className={styles.mark}>
        <svg ref={logoRef} viewBox={LOGO_VIEWBOX} role="img" aria-label="アルファコミュニケーションズのロゴ" className={styles.logo}>
          <defs>
            <g dangerouslySetInnerHTML={{ __html: LOGO_DEFS.replaceAll("__ID__", uid) }} />
            <linearGradient id={id("tb")} gradientUnits="userSpaceOnUse" x1="230" y1="370" x2="340" y2="470">
              <stop offset="0" stopColor="#5676a3" /><stop offset="1" stopColor="#275383" />
            </linearGradient>
            <linearGradient id={id("tt")} gradientUnits="userSpaceOnUse" x1="260" y1="465" x2="365" y2="370">
              <stop offset="0" stopColor="#1ab4df" /><stop offset="1" stopColor="#209098" />
            </linearGradient>
            <mask id={id("m-teal")} maskUnits="userSpaceOnUse" x="200" y="340" width="200" height="170">
              <rect x="200" y="340" width="200" height="170" fill="black" />
              <path ref={maskTeal} d={LOGO_PATH.teal} pathLength={1} fill="none" stroke="white" strokeWidth={28} strokeDasharray="0.0001 2" />
            </mask>
            <mask id={id("m-blue")} maskUnits="userSpaceOnUse" x="200" y="340" width="200" height="170">
              <rect x="200" y="340" width="200" height="170" fill="black" />
              <path ref={maskBlue} d={LOGO_PATH.blue} pathLength={1} fill="none" stroke="white" strokeWidth={28} strokeDasharray="0.0001 2" />
            </mask>
          </defs>
          <path ref={traceTeal} d={LOGO_PATH.teal} pathLength={1} fill="none" stroke={`url(#${id("tt")})`} strokeWidth={2.2} strokeLinecap="round" strokeDasharray="0.3 0.7" opacity={0} />
          <path ref={traceBlue} d={LOGO_PATH.blue} pathLength={1} fill="none" stroke={`url(#${id("tb")})`} strokeWidth={2.2} strokeLinecap="round" strokeDasharray="0.3 0.7" opacity={0} />
          <g mask={`url(#${id("m-teal")})`} dangerouslySetInnerHTML={{ __html: LOGO_TEAL.replaceAll("__ID__", uid) }} />
          <g mask={`url(#${id("m-blue")})`} dangerouslySetInnerHTML={{ __html: LOGO_BLUE.replaceAll("__ID__", uid) }} />
        </svg>
      </div>

      <div className={`heroInner ${styles.inner}`}>
        <p className="heroEnglish"><em>A</em>lpha <em>C</em>ommunications</p>
        <h1>九州の企業を支える<br /><span>オフィスの総合パートナー</span></h1>
        <p>NTT西日本 情報機器特約店　アルファコミュニケーションズ</p>
      </div>
      <div className="scroll">SCROLL <span /></div>

    </section>
  );
}
