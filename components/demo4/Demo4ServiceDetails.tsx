import Image from "next/image";
import Link from "next/link";
import styles from "./Demo4ServiceDetails.module.css";

export type Demo4ServiceItem={
  id:string;
  label:string;
  title:string;
  lead:string;
  text:string;
  points?:string[];
  image?:string;
};

/** パーツ「誘導バナー」：関連ページへの横長リンク */
export type Demo4RelatedLink={eyebrow:string;title:string;text:string;href:string};

/** 旧HP「導入の流れ」7ステップ。サービス系ページの OUR APPROACH で使う */
export const DEMO4_SERVICE_FLOW:Array<{label:string;title:string;text:string}>=[
  {label:"VISIT",title:"訪問",text:"名刺とNTT西日本の情報機器特約店の資格証を提示してお伺いします。"},
  {label:"HEARING",title:"ヒアリング",text:"オフィス環境の課題を伺います。各種明細をご用意いただくと、よりスムーズにご提案できます。"},
  {label:"PROPOSAL",title:"ご提案",text:"売上拡大、業務効率の向上、コスト削減など、お客様のニーズに合わせてご提案します。"},
  {label:"APPLICATION",title:"お申込み",text:"お客様確認書を用いて、お申し込みの内容を丁寧にご説明します。"},
  {label:"INSTALLATION",title:"設置工事",text:"外注ではなく、自社の工事担当者が設置工事に伺います。"},
  {label:"MAINTENANCE",title:"保守サービス",text:"機器の不調は自社の工事担当者が迅速に対応します。NTTフィールドテクノとも連携しています。"},
  {label:"CUSTOMER SERVICE",title:"カスタマーサービス",text:"定期訪問を通じて、機器の清掃やオフィス環境のお悩みを解決します。"},
];

/** パーツ「サービス詳細」：画像＋見出し＋説明＋ポイント。カテゴリーページの本文に使う */
export function Demo4ServiceDetails({items,related}:{items:Demo4ServiceItem[];related?:Demo4RelatedLink}){
  return <section className={styles.wrap} aria-label="サービス一覧">
    <div className={styles.list}>
      {items.map((item,index)=><article key={item.id} id={item.id} className={styles.item}>
        <div className={styles.visual}>
          {item.image
            ?<Image src={item.image} alt="" width={800} height={600}/>
            :<div className={styles.placeholder} aria-hidden="true"><span>{String(index+1).padStart(2,"0")}</span><small>{item.label}</small></div>}
        </div>
        <div className={styles.body}>
          <small className={styles.label}>{item.label}</small>
          <h2>{item.title}</h2>
          <p className={styles.lead}>{item.lead}</p>
          <p className={styles.text}>{item.text}</p>
          {item.points&&item.points.length>0&&<ul className={styles.points}>
            {item.points.map((point)=><li key={point}>{point}</li>)}
          </ul>}
        </div>
      </article>)}
    </div>
    {related&&<Link href={related.href} className={styles.related}>
      <div><small>{related.eyebrow}</small><strong>{related.title}</strong><p>{related.text}</p></div>
      <span aria-hidden="true">→</span>
    </Link>}
  </section>;
}
