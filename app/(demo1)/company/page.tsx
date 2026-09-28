import { ContentPage, LinkCards } from "@/components/ContentPage";

const offices=[
  {name:"本社",address:"〒812-0863 福岡県福岡市博多区金の隈1-28-50",tel:"(092)514-1788",fax:"(092)514-1789"},{name:"山口営業所",address:"〒750-0009 山口県下関市上田中町1-13-25 NTT下関設備センタビル4F",tel:"(083)229-0707",fax:"(083)229-0708"},{name:"佐賀営業所",address:"〒840-0833 佐賀県佐賀市中の小路5-5 NTT中の小路ビル1F",tel:"(0952)27-7800",fax:"(0952)27-7811"},{name:"長崎営業所",address:"〒856-0826 長崎県大村市東三城町153 NTT大村ビル1F",tel:"(0957)48-8050",fax:"(0957)48-8051"},{name:"熊本営業所",address:"〒860-0805 熊本県熊本市中央区桜町4-20 NTT桜町交換所ビル4F",tel:"(096)312-3750",fax:"(096)312-3751"},{name:"鹿児島営業所",address:"〒890-0064 鹿児島県鹿児島市鴨池新町6-2 NTT鴨池ビル1F",tel:"(099)202-0285",fax:"(099)202-0286"},
];
const history=[["2005","8月　アルファコミュニケーションズ株式会社 設立"],["2006","6月　山口営業所 開設"],["2010","4月　佐賀営業所 開設"],["2011","10月　長崎営業所 開設"],["2014","熊本営業所を開設。山口・佐賀・長崎の営業所をNTTビルへ移転"],["2018","1月　本社 移転"],["2019","8月　熊本営業所をNTT桜町交換所ビルへ移転"],["2020","9月　鹿児島営業所 開設"]];

export default function CompanyPage(){return <ContentPage demo4 eyebrow="COMPANY" title="会社案内" lead="先進技術と専門知識を結集し、お客様の利益に貢献する会社。福岡本社と九州・山口の営業拠点から、ビジネスに欠かせない通信環境を支えています。" pageHref="/company" sections={[
  {eyebrow:"OUR MISSION",title:"通信環境を通じて、豊かな社会の実現に貢献する",text:"NTT西日本の情報機器特約店として、販売、設置工事、アフターフォローをワンストップで行っています。お客様のビジネスを理解し、一歩踏み込んだコミュニケーションから本質的な課題を見つけ、通信機器を通じて解決することを目指します。"},
  {eyebrow:"OUR STRENGTH",title:"提案・工事・カスタマーサービスを一つに",text:"豊富な経験・知識・技術力に加え、自社工事部門とNTTフィールドテクノとの連携、定期訪問によるメンテナンス体制を整えています。",items:["NTT西日本の情報機器特約店","自社工事と連携体制","充実したカスタマーサービス"]},
]}>
  <section className="companyOutlineSection"><header><p>OUTLINE</p><h2>会社概要</h2></header><dl><div><dt>会社名</dt><dd>アルファコミュニケーションズ株式会社<br/><small>Alpha Communications Corporation</small></dd></div><div><dt>設立</dt><dd>2005（平成17）年8月8日</dd></div><div><dt>資本金</dt><dd>10,000,000円</dd></div><div><dt>代表者</dt><dd>代表取締役　長尾 政徳</dd></div><div><dt>事業内容</dt><dd>情報通信機器販売事業<br/>ネットワーク環境構築事業<br/>各種工事・保守・メンテナンス</dd></div><div><dt>主要取引銀行</dt><dd>西日本シティ銀行（筑紫通支店）／福岡銀行（比恵支店）／佐賀銀行（那珂支店）／三井住友銀行（福岡支店）／福岡中央銀行（筑紫通支店）</dd></div></dl></section>
  <section className="companyOfficeSection"><header><p>OFFICE</p><h2>九州・山口を結ぶ6拠点</h2><span>各地域のお客様に近い場所から、日々の通信環境をサポートします。</span></header><div>{offices.map((office,index)=><article key={office.name}><small>{String(index+1).padStart(2,"0")}</small><h3>{office.name}</h3><p>{office.address}</p><dl><div><dt>TEL</dt><dd>{office.tel}</dd></div><div><dt>FAX</dt><dd>{office.fax}</dd></div></dl></article>)}</div></section>
  <section className="companyHistorySection"><header><p>HISTORY</p><h2>沿革</h2></header><div>{history.map(([year,event])=><article key={year}><strong>{year}</strong><span>{event}</span></article>)}</div></section>
  <section className="companyPartnersSection"><header><p>BUSINESS PARTNERS</p><h2>主要取引先</h2></header><div><span>西日本電信電話株式会社</span><span>NTTビジネスソリューションズ株式会社</span><span>NTTコミュニケーションズ株式会社</span><span>株式会社NTTフィールドテクノ</span><span>NTTアドバンステクノロジ株式会社</span><span>サクサビジネスシステム株式会社</span><span>株式会社アレクソン</span><span>NTTファイナンス株式会社</span></div></section>
  <LinkCards links={[{href:"/company/message",label:"代表挨拶",description:"長尾政徳から皆さまへ"},{href:"/company/features",label:"アルファの特徴",description:"選ばれる3つの強み"},{href:"/company/offices",label:"拠点案内",description:"各拠点の詳しい情報"},{href:"/company/history",label:"沿革",description:"設立から現在までの歩み"}]}/>
</ContentPage>}
