import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";

const products=[
  {no:"01",title:"ビジネスホン",text:"多様化するビジネスニーズに応える機能とラインナップで、着信対応や拠点間連携を効率化します。",href:"/services/business-phone"},
  {no:"02",title:"複合機・FAX",text:"コピー、プリンター、スキャナー、FAXを一台に集約。クラウド連携を含め、文書管理の効率化を支援します。",href:"/services/multifunction-printer"},
  {no:"03",title:"ネットワーク環境",text:"回線やネットワーク機器を業務に合わせて構成し、日々の仕事を支える安定した通信基盤を整えます。",href:"/services/network"},
  {no:"04",title:"ネットワークセキュリティ",text:"UTM、サーバー、カメラなどを組み合わせ、情報漏えい・データ消失・不正アクセスへの対策をご提案します。",href:"/services/security"},
];

export default function NttPartnerPage(){return <ContentPage eyebrow="NTT WEST PARTNER" title="NTT西日本の情報機器特約店" lead="アルファコミュニケーションズは、NTT西日本と強固なパートナーシップを結ぶ情報機器特約店です。商品を販売するだけではなく、お客様のビジネスを理解し、通信環境の課題解決まで伴走します。" pageHref="/ntt-partner" sections={[
  {eyebrow:"ABOUT",title:"情報機器特約店として、通信環境をトータルサポート",text:"電話やインターネット、FAXなどの情報通信機器は、仕事を円滑に進めるために欠かせないビジネスインフラです。私たちはNTT西日本ブランドのブロードバンドサービスから情報機器まで幅広く取り扱い、お客様の環境とニーズに合う通信ソリューションをご提案します。"},
  {eyebrow:"KNOWLEDGE",title:"豊富な経験・知識・技術力",text:"NTT西日本認定の情報機器特約店として、商品知識だけでなく設置や運用まで見据えた提案を行います。通信のプロフェッショナルとして、業務効率の向上、通信リスクの軽減、コスト削減につながる環境づくりを支援します。",items:["業務効率の向上","通信リスクの軽減","通信・運用コストの見直し"]},
  {eyebrow:"ENGINEERING",title:"自社工事部門とNTTフィールドテクノとの連携",text:"通信機器は、電話・インターネット・FAXのいずれかが止まるだけでも業務に大きな影響を与えます。当社は自社の工事部門を持ち、NTT直轄のNTTフィールドテクノとも連携。いざという時に最短で復旧を目指せる体制を整えています。"},
  {eyebrow:"CUSTOMER SERVICE",title:"導入後も続くカスタマーサービス",text:"定期訪問を通じて機器のメンテナンスや清掃、利用状況のヒアリングを行い、事業の成長に合わせて必要となる通信インフラをご提案します。"},
]}>
  <section className="nttProductSection"><header><p>PRODUCTS &amp; SOLUTIONS</p><h2>お取り扱い領域</h2><span>機器単体ではなく、オフィス全体のつながりを考えてご提案します。</span></header><div>{products.map(product=><Link href={product.href} key={product.no}><small>{product.no}</small><h3>{product.title}</h3><p>{product.text}</p><b>詳しく見る →</b></Link>)}</div></section>
  <section className="nttFlowSection"><header><p>ONE STOP SUPPORT</p><h2>ご相談から導入後まで、<br/>一つの窓口で支えます</h2></header><ol>
    <li><span>STEP 01</span><h3>ヒアリング</h3><p>現在の機器構成、利用状況、業務上のお困りごとを丁寧に伺います。</p></li><li><span>STEP 02</span><h3>調査・ご提案</h3><p>通信環境を確認し、必要な機器やサービスを組み合わせてご案内します。</p></li><li><span>STEP 03</span><h3>設置工事</h3><p>自社工事部門と連携体制を活かし、業務への影響に配慮して施工します。</p></li><li><span>STEP 04</span><h3>保守・改善</h3><p>導入後も定期訪問やメンテナンスを行い、利用状況の変化に対応します。</p></li>
  </ol></section>
  <section className="nttFaqSection"><header><p>FAQ</p><h2>情報機器特約店について</h2></header>
    <details><summary><span>Q</span>機器の購入だけでなく、設置工事も相談できますか？<b>＋</b></summary><p>はい。販売、設置工事、アフターフォローまでワンストップで対応しています。現在の環境確認からご相談ください。</p></details><details><summary><span>Q</span>電話・複合機・セキュリティをまとめて相談できますか？<b>＋</b></summary><p>まとめてご相談いただけます。機器同士のつながりや日々の運用まで考え、オフィスの通信環境を総合的にご提案します。</p></details><details><summary><span>Q</span>導入後の故障やメンテナンスにも対応していますか？<b>＋</b></summary><p>自社工事部門とNTTフィールドテクノとの連携に加え、定期訪問によるメンテナンスや利用状況の確認を行っています。</p></details>
  </section>
</ContentPage>}
