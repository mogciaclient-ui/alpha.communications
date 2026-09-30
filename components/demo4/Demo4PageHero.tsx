import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Demo4PageHero.module.css";

type Demo4PageHeroProps = {
  title: string;
  description: ReactNode;
  breadcrumbLabel?: string;
  breadcrumbHref?: string;
  tagline?: string | string[];
};

export function Demo4PageHero({
  title,
  description,
  breadcrumbLabel = title,
  breadcrumbHref = "/demo4",
  tagline = "BUSINESS SUPPORT FOR A BETTER TOMORROW",
}: Demo4PageHeroProps) {
  const taglineLines = Array.isArray(tagline) ? tagline : tagline.split(" ");

  return (
    <section className={styles.hero}>
      <svg className={styles.heroWaves} viewBox="0 0 1600 540" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="demo4PageWaveA" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#e8f8ff" stopOpacity=".04" />
            <stop offset=".42" stopColor="#8bd4f8" stopOpacity=".2" />
            <stop offset=".72" stopColor="#62c7ef" stopOpacity=".26" />
            <stop offset="1" stopColor="#d9f4ff" stopOpacity=".04" />
          </linearGradient>
          <linearGradient id="demo4PageWaveC" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity=".08" />
            <stop offset=".48" stopColor="#d1effc" stopOpacity=".17" />
            <stop offset=".78" stopColor="#a4cdf2" stopOpacity=".12" />
            <stop offset="1" stopColor="#ffffff" stopOpacity=".04" />
          </linearGradient>
        </defs>
        <g className={styles.waveMiddle}>
          <path d="M-120 250C178 285 421 333 687 317C935 302 1096 248 1277 177C1440 113 1559 78 1720 44L1720 111C1567 145 1452 179 1294 241C1103 316 939 369 700 383C422 400 168 352-120 321Z" fill="url(#demo4PageWaveA)" />
          <path d="M-120 286C176 319 423 365 691 349C940 334 1102 281 1284 211C1447 148 1565 113 1720 80L1720 121C1569 154 1455 188 1300 248C1109 322 946 375 706 389C425 406 168 359-120 330Z" fill="url(#demo4PageWaveC)" />
          <path d="M-104 263C183 297 426 344 691 328C940 313 1101 259 1282 189C1445 125 1562 90 1712 58" fill="none" stroke="#69bfea" strokeOpacity=".22" strokeWidth="1.4" />
          <path d="M-96 271C190 305 433 352 698 336C947 321 1108 268 1289 197C1452 134 1567 99 1715 67" fill="none" stroke="#a8ddf3" strokeOpacity=".2" strokeWidth=".7" />
          <path d="M-88 280C197 314 440 360 705 344C954 329 1115 276 1296 206C1459 143 1572 108 1718 77" fill="none" stroke="#ffffff" strokeOpacity=".72" strokeWidth="1" />
          <path d="M-76 295C209 329 451 375 716 359C965 344 1126 291 1307 221C1470 158 1582 124 1722 93" fill="none" stroke="#8fcde9" strokeOpacity=".17" strokeWidth=".9" />
          <path d="M-67 304C218 338 460 384 725 368C974 353 1135 300 1316 230C1479 167 1591 133 1725 103" fill="none" stroke="#b8ddf0" strokeOpacity=".17" strokeWidth=".6" />
          <path d="M-58 314C227 348 469 394 734 378C983 363 1144 310 1325 240C1488 177 1600 143 1728 113" fill="none" stroke="#ffffff" strokeOpacity=".58" strokeWidth=".8" />
        </g>
        <g className={styles.waveFront}>
          <path d="M-120 302C171 335 416 380 686 364C936 349 1098 296 1280 226C1443 163 1561 128 1720 95L1720 141C1570 173 1457 207 1302 267C1111 341 948 394 708 408C425 425 168 379-120 351Z" fill="url(#demo4PageWaveA)" opacity=".42" />
          <path d="M-96 320C184 352 425 396 694 380C944 365 1106 312 1288 242C1451 179 1568 145 1717 113" fill="none" stroke="#72c4e9" strokeOpacity=".18" strokeWidth="1.4" />
        </g>
      </svg>
      <div className={styles.heroInner}>
        <nav className={styles.breadcrumb} aria-label="パンくずリスト">
          <Link href={breadcrumbHref}>HOME</Link><span aria-hidden="true">/</span><strong>{breadcrumbLabel}</strong>
        </nav>
        <div className={styles.heroCopy}>
          <div><h1>{title}</h1><div className={styles.description}>{description}</div></div>
          <p className={styles.heroTagline}>{taglineLines.map((line, index) => <span key={`${index}-${line}`}>{line}</span>)}</p>
        </div>
      </div>
    </section>
  );
}
