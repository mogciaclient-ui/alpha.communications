"use client";

import { useState } from "react";

type Step = "closed" | "problem" | "size" | "result";

const answers: Record<string, string> = {
  "ネットが遅い": "ネットワーク構築・Wi-Fi改善",
  "コピー機が古い": "複合機・コピー機のリプレイス",
  "電話を見直したい": "ビジネスフォンの見直し",
  "防犯・セキュリティ": "防犯カメラ・セキュリティ対策",
  "よく分からない": "オフィス環境の無料診断",
};

export function OfficeAdvisor() {
  const [step, setStep] = useState<Step>("closed");
  const [problem, setProblem] = useState("");
  const choose = (value: string) => { setProblem(value); setStep("size"); };

  return <div className={`advisor ${step !== "closed" ? "isOpen" : ""}`} id="advisor">
    {step !== "closed" && <div className="advisorPanel" role="dialog" aria-label="オフィスお困りごと診断">
      <div className="advisorHead"><span className="advisorAvatar">α</span><div><strong>アルファAI</strong><small>オフィス相談コンシェルジュ</small></div><button onClick={()=>setStep("closed")} aria-label="閉じる">×</button></div>
      <div className="advisorBody">
        <div className="botMessage">こんにちは！<br/>オフィスのお困りごとを教えてください。</div>
        {step === "problem" && <div className="choices">{Object.keys(answers).map(x=><button onClick={()=>choose(x)} key={x}>{x}<span>›</span></button>)}</div>}
        {(step === "size" || step === "result") && <><div className="userMessage">{problem}</div><div className="botMessage">現在のオフィスの人数を教えてください。</div></>}
        {step === "size" && <div className="choices row">{["〜10人","11〜30人","31人〜"].map(x=><button onClick={()=>setStep("result")} key={x}>{x}</button>)}</div>}
        {step === "result" && <><div className="userMessage">回答済み</div><div className="botMessage result"><small>おすすめは…</small><strong>{answers[problem]}</strong><span>詳しい状況を伺い、最適なプランをご提案します。</span></div><a className="advisorCta" href="/demo3/contact" onClick={()=>setStep("closed")}>無料相談へ進む <span>→</span></a><button className="retry" onClick={()=>setStep("problem")}>もう一度診断する</button></>}
      </div>
    </div>}
    <button className="advisorButton" onClick={()=>setStep(step === "closed" ? "problem" : "closed")} aria-expanded={step !== "closed"}><span className="chatIcon">{step === "closed" ? "✦" : "×"}</span><span><small>AIオフィス相談</small>困りごとを診断する</span></button>
  </div>;
}
