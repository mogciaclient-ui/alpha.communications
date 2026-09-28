import { ServiceSelector } from "@/components/demo2/ServiceSelector";

export function OurServiceSection({ demo4 = false }: { demo4?: boolean }) {
  return (
    <section
      className={`d2ServiceCollection${demo4 ? " demo4OurService" : ""}`}
      id={demo4 ? "services" : undefined}
      aria-labelledby={demo4 ? "demo4-service-heading" : "d2-service-heading"}
    >
      <div className="d2ServiceOverview">
        <div className="revealUp" data-reveal>
          <p className="demo2Eyebrow">OUR SERVICE</p>
          <h2 id={demo4 ? "demo4-service-heading" : "d2-service-heading"}>
            オフィス全体を見て<br/><em>3つの領域</em>から支えます
          </h2>
          <p>
            商品を並べるのではなく、まず仕事の環境と困りごとを確認。<br/>
            必要なものだけを選び、導入後まで同じ窓口でサポートします。
          </p>
        </div>
      </div>
      <ServiceSelector basePath={demo4 ? "" : "/demo2"}/>
    </section>
  );
}
