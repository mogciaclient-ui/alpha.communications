import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Demo4ContentPage, type Demo4PageContent } from "@/components/demo4/Demo4ContentPage";

const sharedPoints=(subject:string):Demo4PageContent["points"]=>[
  {label:"LISTEN",title:"まず状況を知る",text:`${subject}について、現在の環境やお困りごとを丁寧に確認します。`},
  {label:"DESIGN",title:"必要な形を考える",text:"決まった商品を当てはめず、働き方や運用に合う方法を整理します。"},
  {label:"SUPPORT",title:"導入後まで支える",text:"地域密着の体制で、設定・運用・保守まで継続してサポートします。"},
];

const pages:Record<string,Demo4PageContent>={
  "company":{eyebrow:"COMPANY",title:"会社案内",lead:"地域の仕事を、人の力で支える。",description:"福岡・九州全域と山口を中心に、通信とオフィス環境を支えてきたアルファコミュニケーションズをご紹介します。",visual:"ABOUT ALPHA",points:sharedPoints("アルファの事業と姿勢"),cta:{label:"お問い合わせ",href:"/demo4/contact"}},
  "company/message":{eyebrow:"MESSAGE",title:"代表挨拶",lead:"お客様と地域に、誠実であり続ける。",description:"変化する働き方に向き合い、身近で頼れるパートナーとして価値を届け続けます。",visual:"TOP MESSAGE",points:sharedPoints("私たちが大切にする考え"),cta:{label:"会社案内へ",href:"/demo4/company"}},
  "company/offices":{eyebrow:"OFFICE",title:"営業所案内",lead:"地域のすぐそばから、支えます。",description:"各地域の拠点から、導入前のご相談と導入後のサポートに迅速に対応します。",visual:"LOCAL OFFICE",points:sharedPoints("地域ごとのサポート"),cta:{label:"お問い合わせ",href:"/demo4/contact"}},
  "company/features":{eyebrow:"OUR STRENGTH",title:"アルファの特徴",lead:"相談から保守まで、ひとつの窓口で。",description:"機器単体ではなくオフィス全体を捉え、必要な支援を組み合わせられることが私たちの強みです。",visual:"WHY ALPHA",points:sharedPoints("アルファの強み"),cta:{label:"サービスを見る",href:"/demo4/service"}},
  "ntt-partner":{eyebrow:"NTT WEST PARTNER",title:"NTT特約店について",lead:"確かな品質と、地域に根ざした対応力。",description:"NTT西日本の情報機器特約店として、通信環境の提案から導入、保守まで責任を持って対応します。",visual:"TRUST & SUPPORT",points:sharedPoints("NTT特約店としての支援"),cta:{label:"相談する",href:"/demo4/contact"}},
  "recruit":{eyebrow:"RECRUIT",title:"採用情報",lead:"地域の仕事を支える仲間へ。",description:"お客様の近くで課題に向き合い、チームでより良い仕事環境をつくる仲間を募集しています。",visual:"PEOPLE & CAREER",points:sharedPoints("アルファで働くこと"),cta:{label:"応募について相談する",href:"/demo4/contact"}},
  "news":{eyebrow:"NEWS",title:"お知らせ",lead:"アルファからの最新情報。",description:"サービス、会社、地域での活動に関するお知らせを掲載します。",visual:"LATEST NEWS",points:sharedPoints("最新の取り組み"),cta:{label:"お問い合わせ",href:"/demo4/contact"}},
  "faq":{eyebrow:"FAQ",title:"よくある質問",lead:"ご相談前の疑問にお答えします。",description:"サービス、対応地域、導入、保守について多く寄せられる質問をまとめています。",visual:"QUESTIONS",points:sharedPoints("よくあるご相談"),cta:{label:"直接相談する",href:"/demo4/contact"}},
  "privacy":{eyebrow:"POLICY",title:"プライバシーポリシー",lead:"大切な情報を、適切に取り扱います。",description:"お預かりする個人情報の利用目的、管理方法、お問い合わせ窓口についてご案内します。",visual:"PRIVACY POLICY",points:sharedPoints("個人情報の取り扱い"),cta:{label:"お問い合わせ",href:"/demo4/contact"}},
  "contact":{eyebrow:"CONTACT",title:"お問い合わせ",lead:"まとまっていないお悩みも、お聞かせください。",description:"オフィスの困りごとを伺い、必要な対応を一緒に整理します。お電話またはお問い合わせフォームからご相談ください。",visual:"LET'S TALK",points:sharedPoints("ご相談の流れ")},
  "office-security":{eyebrow:"OFFICE SECURITY",title:"オフィスセキュリティ対策",lead:"守るべき情報と環境を、まとめて確認。",description:"ネットワークと物理セキュリティの両面から、オフィスに必要な対策を整理します。",visual:"SECURE OFFICE",points:sharedPoints("セキュリティ対策"),cta:{label:"相談する",href:"/demo4/contact"}},
  "service/oasys":{eyebrow:"AXCEL",title:"AXCEL",lead:"オフィスの課題を、ひとつずつ前へ。",description:"通信・セキュリティ・サポートをまとめ、複雑になりがちなオフィス環境を整理します。",visual:"AXCEL SOLUTION",points:sharedPoints("AXCELの支援"),cta:{label:"AXCELを相談する",href:"/demo4/contact"}},
  "service/after-sales":{eyebrow:"AFTER SUPPORT",title:"アフターサービス",lead:"導入した後も、ずっと安心。",description:"設定、操作、トラブル、保守まで、導入後に起こる困りごとを同じ窓口で支えます。",visual:"AFTER SUPPORT",points:sharedPoints("導入後の支援"),cta:{label:"サポートを相談する",href:"/demo4/contact"}},
  "service/category/business_support":{eyebrow:"BUSINESS INFRASTRUCTURE",title:"ビジネスインフラサポート",lead:"毎日の仕事を、もっと使いやすく。",description:"電話や複合機など、業務の土台となる機器を働き方に合わせて整えます。",visual:"BUSINESS SUPPORT",points:sharedPoints("ビジネスインフラ"),cta:{label:"サービスを相談する",href:"/demo4/contact"}},
  "service/category/it_support":{eyebrow:"IT INFRASTRUCTURE",title:"ITインフラサポート",lead:"つながる環境を、安全で快適に。",description:"ネットワーク構築からセキュリティまで、見えにくいIT環境の課題を整理します。",visual:"IT SUPPORT",points:sharedPoints("ITインフラ"),cta:{label:"サービスを相談する",href:"/demo4/contact"}},
  "service/category/top_support":{eyebrow:"OFFICE SUPPORT",title:"幅広いオフィス支援",lead:"設備も保守も、ひとつの窓口で。",description:"防犯カメラやOA機器、導入後の保守まで、オフィスに必要な支援を横断してご提案します。",visual:"OFFICE SUPPORT",points:sharedPoints("オフィス全体の支援"),cta:{label:"サービスを相談する",href:"/demo4/contact"}},
  "services/business-phone":{eyebrow:"BUSINESS PHONE",title:"ビジネスフォン",lead:"電話環境を、働き方に合わせて。",description:"利用人数や拠点、運用方法を確認し、使いやすく管理しやすい電話環境をご提案します。",visual:"BUSINESS PHONE",points:sharedPoints("電話環境"),cta:{label:"ビジネスフォンを相談する",href:"/demo4/contact"}},
  "services/multifunction-printer":{eyebrow:"MULTIFUNCTION PRINTER",title:"複合機・コピー機",lead:"使い方とコストの両面から見直す。",description:"印刷量や業務フローを確認し、必要な機能と運用コストのバランスを整えます。",visual:"PRINTER",points:sharedPoints("複合機環境"),cta:{label:"複合機を相談する",href:"/demo4/contact"}},
  "services/network":{eyebrow:"NETWORK",title:"ネットワーク構築",lead:"止まりにくく、管理しやすい通信環境へ。",description:"速度や安定性、拠点間接続、Wi-Fi環境まで、業務に合うネットワークを構築します。",visual:"NETWORK",points:sharedPoints("ネットワーク環境"),cta:{label:"ネットワークを相談する",href:"/demo4/contact"}},
  "services/security":{eyebrow:"SECURITY",title:"セキュリティ",lead:"情報を守り、安心して働ける環境へ。",description:"リスクを確認し、必要な機器・設定・運用ルールを組み合わせて対策します。",visual:"CYBER SECURITY",points:sharedPoints("情報セキュリティ"),cta:{label:"セキュリティを相談する",href:"/demo4/contact"}},
  "services/security-camera":{eyebrow:"SECURITY CAMERA",title:"防犯カメラ",lead:"見守る仕組みを、環境に合わせて。",description:"設置場所や目的を確認し、確認しやすく運用しやすい防犯カメラ環境を整えます。",visual:"SECURITY CAMERA",points:sharedPoints("防犯環境"),cta:{label:"防犯カメラを相談する",href:"/demo4/contact"}},
  "services/oa-equipment":{eyebrow:"OA EQUIPMENT",title:"その他OA機器",lead:"必要な設備を、まとめて整える。",description:"業務内容やオフィス環境に合わせ、各種OA機器を選定・導入します。",visual:"OA EQUIPMENT",points:sharedPoints("OA機器"),cta:{label:"OA機器を相談する",href:"/demo4/contact"}},
};

type Props={params:Promise<{slug:string[]}>};

export function generateStaticParams(){return Object.keys(pages).map((key)=>({slug:key.split("/")}));}

export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const content=pages[slug.join("/")];return content?{title:`${content.title}｜アルファコミュニケーションズ株式会社`,description:content.description}:{};}

export default async function Demo4DynamicPage({params}:Props){const {slug}=await params;const content=pages[slug.join("/")];if(!content)notFound();return <Demo4ContentPage content={content}/>;}
