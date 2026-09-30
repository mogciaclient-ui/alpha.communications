import { Demo4WaveMotion } from "@/components/Demo4WaveMotion";

export function HomeHeroSection({heroMotion}:{heroMotion:"orbit"|"wave"}) {
  return (
    <section className={`hero${heroMotion === "wave" ? " demo4Hero" : ""}`} id="top">
      {heroMotion === "wave" ? <Demo4WaveMotion /> : <svg className="orbitAnimation" viewBox="0 0 1200 680" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <g className="orbitLines" transform="rotate(-12 600 340)">
          <ellipse cx="600" cy="340" rx="515" ry="250"/>
          <ellipse cx="600" cy="340" rx="385" ry="185"/>
          <ellipse cx="600" cy="340" rx="245" ry="116"/>
        </g>
        <g className="orbitDot orbitDotOuter" transform="rotate(-12 600 340)"><circle r="17"><animateMotion dur="22s" repeatCount="indefinite" path="M1115 340 A515 250 0 1 1 85 340 A515 250 0 1 1 1115 340"/></circle></g>
        <g className="orbitDot orbitDotMiddle" transform="rotate(-12 600 340)"><circle r="9"><animateMotion dur="17s" begin="-8s" repeatCount="indefinite" path="M985 340 A385 185 0 1 1 215 340 A385 185 0 1 1 985 340"/></circle></g>
        <g className="orbitDot orbitDotInner" transform="rotate(-12 600 340)"><circle r="7"><animateMotion dur="12s" begin="-4s" repeatCount="indefinite" path="M845 340 A245 116 0 1 1 355 340 A245 116 0 1 1 845 340"/></circle></g>
        <g className="orbitDot orbitDotReverse" transform="rotate(-12 600 340)"><circle r="5"><animateMotion dur="27s" begin="-16s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear" path="M985 340 A385 185 0 1 1 215 340 A385 185 0 1 1 985 340"/></circle></g>
      </svg>}
      <div className="heroInner">
        <p className="heroEnglish"><em>A</em>lpha <em>C</em>ommunications</p>
        <h1>九州の企業を支える<br/><span>オフィスの総合パートナー</span></h1>
        <p>NTT西日本 情報機器特約店　アルファコミュニケーションズ</p>
      </div>
      <div className="scroll">SCROLL <span/></div>
    </section>
  );
}

export function HomeBrandMarquee() {
  return (
    <div className="brandMarquee" aria-hidden="true">
      <div><span>Alpha Communications</span><span>Alpha Communications</span><span>Alpha Communications</span></div>
      <div><span>Alpha Communications</span><span>Alpha Communications</span><span>Alpha Communications</span></div>
    </div>
  );
}
