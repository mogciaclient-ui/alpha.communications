"use client";

import { useEffect, useRef } from "react";

const LINE_COUNT = 28;
const RIBBONS = [
  { base: 372, amplitude: 112, phase: -0.18, width: 58, speed: 0.18, drift: 12, gradient: "meshBandCyan" },
  { base: 342, amplitude: 88, phase: -0.62, width: 30, speed: -0.14, drift: 9, gradient: "meshBandBlue" },
  { base: 382, amplitude: 82, phase: 0.2, width: 18, speed: 0.24, drift: 7, gradient: "meshBandDeep" },
];

function waveY(u: number, line: number, time: number) {
  const normalizedLine = (line - (LINE_COUNT - 1) / 2) / LINE_COUNT;
  const edgeSpread = Math.pow(Math.abs(u - 0.5) * 2, 1.4);
  const mainWave = Math.sin(u * Math.PI * 2 - 0.4 + time * 0.16 + line * 0.006) * 100;
  const fineWave = Math.sin(u * Math.PI * 4.2 + time * 0.1 + line * 0.018) * 7;
  const verticalDrift = Math.sin(time * 0.3 + u * Math.PI * 1.4) * 9;
  return 350 + mainWave + fineWave + verticalDrift + normalizedLine * (112 + edgeSpread * 38);
}

function createPath(line: number, time: number) {
  const points = 18;
  const values = Array.from({ length: points }, (_, index) => {
    const u = index / (points - 1);
    return { x: -100 + u * 1400, y: waveY(u, line, time) };
  });

  let path = `M ${values[0].x.toFixed(1)} ${values[0].y.toFixed(1)}`;
  for (let index = 1; index < values.length - 1; index += 1) {
    const current = values[index];
    const next = values[index + 1];
    path += ` Q ${current.x.toFixed(1)} ${current.y.toFixed(1)} ${((current.x + next.x) / 2).toFixed(1)} ${((current.y + next.y) / 2).toFixed(1)}`;
  }
  const last = values[values.length - 1];
  path += ` T ${last.x.toFixed(1)} ${last.y.toFixed(1)}`;
  return path;
}

function ribbonY(u: number, ribbon: (typeof RIBBONS)[number], time: number) {
  return ribbon.base
    + Math.sin(u * Math.PI * 2 + ribbon.phase + time * ribbon.speed) * ribbon.amplitude
    + Math.sin(u * Math.PI * 3.6 - ribbon.phase + time * 0.08) * 8
    + Math.sin(time * 0.32 + u * Math.PI) * ribbon.drift;
}

function createRibbonPath(index: number, time: number) {
  const ribbon = RIBBONS[index];
  const points = 24;
  const top = Array.from({ length: points }, (_, point) => {
    const u = point / (points - 1);
    return { x: -100 + u * 1400, y: ribbonY(u, ribbon, time) - ribbon.width / 2 };
  });
  const bottom = Array.from({ length: points }, (_, point) => {
    const u = 1 - point / (points - 1);
    return { x: -100 + u * 1400, y: ribbonY(u, ribbon, time) + ribbon.width / 2 };
  });
  const pointsAroundRibbon = [...top, ...bottom];
  return `${pointsAroundRibbon.map((point, pointIndex) => `${pointIndex === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" ")} Z`;
}

export function Demo4WaveMotion() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let lastFrame = 0;

    const render = (timestamp: number) => {
      if (timestamp - lastFrame < 42 && !reducedMotion.matches) {
        frame = requestAnimationFrame(render);
        return;
      }
      lastFrame = timestamp;
      const seconds = reducedMotion.matches ? 18 : timestamp / 1000;
      svg.querySelectorAll<SVGPathElement>("[data-wave]").forEach((path) => {
        const line = Number(path.dataset.line);
        path.setAttribute("d", createPath(line, seconds));
      });
      svg.querySelectorAll<SVGPathElement>("[data-ribbon]").forEach((path) => {
        const ribbon = Number(path.dataset.ribbon);
        path.setAttribute("d", createRibbonPath(ribbon, seconds));
      });
      if (!reducedMotion.matches) frame = requestAnimationFrame(render);
    };

    const restart = () => {
      cancelAnimationFrame(frame);
      render(performance.now());
    };
    restart();
    reducedMotion.addEventListener("change", restart);
    return () => {
      cancelAnimationFrame(frame);
      reducedMotion.removeEventListener("change", restart);
    };
  }, []);

  return (
    <div className="demo4WaveMotion" aria-hidden="true">
      <svg ref={svgRef} className="demo4MeshWave" viewBox="0 0 1200 680" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="meshRibbon" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#54c8ef" stopOpacity=".06" />
            <stop offset=".24" stopColor="#1b9cdd" stopOpacity=".34" />
            <stop offset=".58" stopColor="#075bc4" stopOpacity=".68" />
            <stop offset=".84" stopColor="#27a9e2" stopOpacity=".42" />
            <stop offset="1" stopColor="#7ed8f3" stopOpacity=".12" />
          </linearGradient>
          <linearGradient id="meshBandCyan" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#85e4f5" stopOpacity=".05" />
            <stop offset=".35" stopColor="#29b9e8" stopOpacity=".2" />
            <stop offset=".72" stopColor="#5cccf0" stopOpacity=".2" />
            <stop offset="1" stopColor="#b1ecf8" stopOpacity=".07" />
          </linearGradient>
          <linearGradient id="meshBandBlue" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#1c8ed8" stopOpacity=".03" />
            <stop offset=".42" stopColor="#0969ce" stopOpacity=".24" />
            <stop offset=".78" stopColor="#3eb9e8" stopOpacity=".2" />
            <stop offset="1" stopColor="#8fdcf3" stopOpacity=".05" />
          </linearGradient>
          <linearGradient id="meshBandDeep" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#063e9f" stopOpacity=".03" />
            <stop offset=".5" stopColor="#063e9f" stopOpacity=".34" />
            <stop offset="1" stopColor="#198ed5" stopOpacity=".06" />
          </linearGradient>
        </defs>

        <g className="meshFlowBands">
          {RIBBONS.map((ribbon, index) => (
            <path
              key={ribbon.gradient}
              data-ribbon={index}
              d={createRibbonPath(index, 0)}
              fill={`url(#${ribbon.gradient})`}
            />
          ))}
        </g>
        <g className="meshWaveRibbon">
          {Array.from({ length: LINE_COUNT }, (_, line) => (
            <path
              key={line}
              data-wave
              data-line={line}
              d={createPath(line, 0)}
              stroke="url(#meshRibbon)"
            />
          ))}
        </g>

      </svg>
    </div>
  );
}
