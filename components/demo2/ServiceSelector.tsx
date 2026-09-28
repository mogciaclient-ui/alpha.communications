"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  {no:"01",en:"BUSINESS INFRASTRUCTURE",title:"毎日の仕事をもっと快適に",lead:"電話や複合機など、オフィスに欠かせない設備を使いやすく整えます。",path:"/service/category/business_support",items:["ビジネスフォン","複合機・コピー機","その他OA機器"]},
  {no:"02",en:"IT INFRASTRUCTURE",title:"つながる 守れる 止まらない",lead:"ネットワークと情報セキュリティを見直し、安心して働けるIT環境を支えます。",path:"/service/category/it_support",items:["ネットワーク構築","セキュリティ対策","オフィスセキュリティ"]},
  {no:"03",en:"OFFICE SUPPORT",title:"機器の外側までまとめて支える",lead:"防犯、設置、保守まで、オフィスごとに異なる困りごとへ柔軟に対応します。",path:"/service/category/top_support",items:["防犯カメラ","アフターサービス","導入・保守サポート"]},
];

export function ServiceSelector({basePath="/demo2"}:{basePath?:string}){
  const [active,setActive]=useState(0);
  const service=services[active];
  return <div className="d2ServiceSelector" id="service-list">
    <div className="d2ServiceSelectorVisual" aria-live="polite">
      <div className="d2ServiceSelectorPlaceholder"><span>IMAGE</span><small>{service.en}</small></div>
      <div className="d2ServiceSelectorInfo" key={service.no}>
        <p>{service.no} / {service.en}</p>
        <h2>{service.title}</h2>
        <span>{service.lead}</span>
        <div>{service.items.map(item=><small key={item}>{item}</small>)}</div>
        <Link href={`${basePath}${service.path}`}>この領域を見る <b aria-hidden="true">→</b></Link>
      </div>
    </div>
    <div className="d2ServiceSelectorMenu" role="tablist" aria-label="サービス領域">
      {services.map((item,index)=><button id={`service-${item.no}`} type="button" role="tab" aria-selected={active===index} className={active===index?"isActive":""} onMouseEnter={()=>setActive(index)} onFocus={()=>setActive(index)} onClick={()=>setActive(index)} key={item.no}>
        <span>{item.no}</span><div><small>{item.en}</small><strong>{item.title}</strong><p>{item.lead}</p></div><i aria-hidden="true">↗</i>
      </button>)}
    </div>
  </div>;
}
