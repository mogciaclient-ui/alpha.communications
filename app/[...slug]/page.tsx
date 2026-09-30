import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Demo4ContentPage, type Demo4PageContent } from "@/components/demo4/Demo4ContentPage";
import { DEMO4_BLOCKS } from "@/components/demo4/demo4PageBlocks";

const sharedPoints=(subject:string):Demo4PageContent["points"]=>{
  if(subject.includes("事業と姿勢"))return [{label:"BUSINESS",title:"通信とオフィスを支える",text:"電話、複合機、ネットワーク、セキュリティから経営支援まで、企業の仕事環境を横断して支えます。"},{label:"LOCAL",title:"6拠点の地域対応",text:"福岡・九州全域と山口のお客様へ、地域を知る担当者が迅速に対応します。"},{label:"ONE STOP",title:"相談から保守まで一貫",text:"提案、施工、設定、導入後の保守を分断せず、ひとつの窓口で受け止めます。"}];
  if(subject.includes("大切にする考え"))return [{label:"CUSTOMER",title:"お客様の仕事から考える",text:"商品を売ることより、仕事が止まらず、より良く進む環境をつくることを優先します。"},{label:"PEOPLE",title:"顔の見える関係を築く",text:"地域の身近な相談相手として、誠実な対話と迅速な行動を積み重ねます。"},{label:"FUTURE",title:"変化に合わせて支え続ける",text:"通信や働き方の変化を捉え、導入後も次の改善を一緒に考えます。"}];
  if(subject.includes("アルファの強み")||subject.includes("NTT特約店"))return [{label:"DIRECT",title:"NTT西日本との直接連携",text:"情報機器特約店として、商品選定から回線・機器の手配まで円滑に進めます。"},{label:"FIELD",title:"自社工事部門が現場を担当",text:"現地調査、配線、設置、設定まで、販売だけで終わらない対応体制です。"},{label:"AFTERCARE",title:"導入後も定期的に見直す",text:"故障対応だけでなく、運用や通信環境の変化に合わせて継続支援します。"}];
  if(subject.includes("電話環境"))return [{label:"CALL FLOW",title:"応対の流れを設計",text:"着信先、転送、留守番電話など、実際の応対に合わせて構成します。"},{label:"SYSTEM",title:"規模に合う機種を選定",text:"利用人数や必要な機能、将来の増設を踏まえて無駄のない機器を選びます。"},{label:"SUPPORT",title:"設置後の変更にも対応",text:"内線変更や増設、操作相談、故障対応まで同じ窓口で支えます。"}];
  if(subject.includes("複合機"))return [{label:"VOLUME",title:"印刷状況を確認",text:"月間枚数、カラー比率、用紙サイズを確認し、適切な性能を見極めます。"},{label:"WORKFLOW",title:"文書業務を効率化",text:"スキャン、共有、クラウド連携を活用し、紙を扱う作業を減らします。"},{label:"COST",title:"運用コストを見直す",text:"本体費用だけでなく、保守や消耗品を含めた総コストを整理します。"}];
  if(subject.includes("防犯"))return [{label:"SURVEY",title:"設置場所を現地確認",text:"死角、明るさ、配線経路を確認し、目的に合う設置計画を作ります。"},{label:"RECORD",title:"必要な画質と保存期間",text:"確認したい場面と期間から、カメラ性能と録画容量を決めます。"},{label:"OPERATION",title:"見やすく使いやすい運用",text:"遠隔確認やデータ保存を含め、担当者が扱いやすい環境を整えます。"}];
  return [{label:"ASSESS",title:"現状と課題を整理",text:`${subject}の利用状況、困りごと、今後の変化を具体的に確認します。`},{label:"PLAN",title:"必要な構成をご提案",text:"過不足のない機器と支援内容を選び、費用と導入手順を分かりやすくご案内します。"},{label:"SUPPORT",title:"導入後まで継続支援",text:"設置・設定・操作説明から保守、環境変化に伴う見直しまで対応します。"}];
};

const pages:Record<string,Demo4PageContent>={
  "company":{eyebrow:"COMPANY",title:"会社案内",lead:"地域の仕事を、人の力で支える。",description:"福岡・九州全域と山口を中心に、通信とオフィス環境を支えてきたアルファコミュニケーションズをご紹介します。",visual:"ABOUT ALPHA",points:sharedPoints("アルファの事業と姿勢"),cta:{label:"お問い合わせ",href:"/contact"}},
  "company/message":{eyebrow:"MESSAGE",title:"代表挨拶",lead:"お客様と地域に、誠実であり続ける。",description:"変化する働き方に向き合い、身近で頼れるパートナーとして価値を届け続けます。",visual:"TOP MESSAGE",points:sharedPoints("私たちが大切にする考え"),cta:{label:"会社案内へ",href:"/company"}},
  "company/offices":{eyebrow:"OFFICE",title:"営業所案内",lead:"地域のすぐそばから、支えます。",description:"各地域の拠点から、導入前のご相談と導入後のサポートに迅速に対応します。",visual:"LOCAL OFFICE",points:sharedPoints("地域ごとのサポート"),cta:{label:"お問い合わせ",href:"/contact"}},
  "company/features":{eyebrow:"OUR STRENGTH",title:"アルファの特徴",lead:"相談から保守まで、ひとつの窓口で。",description:"機器単体ではなくオフィス全体を捉え、必要な支援を組み合わせられることが私たちの強みです。",visual:"WHY ALPHA",points:sharedPoints("アルファの強み"),cta:{label:"サービスを見る",href:"/service"}},
  "ntt-partner":{eyebrow:"NTT WEST PARTNER",title:"NTT特約店について",lead:"確かな品質と、地域に根ざした対応力。",description:"NTT西日本の情報機器特約店として、通信環境の提案から導入、保守まで責任を持って対応します。",visual:"TRUST & SUPPORT",points:sharedPoints("NTT特約店としての支援"),cta:{label:"相談する",href:"/contact"}},
  "recruit":{eyebrow:"RECRUIT",title:"採用情報",lead:"地域の仕事を支える仲間へ。",description:"お客様の近くで課題に向き合い、チームでより良い仕事環境をつくる仲間を募集しています。",visual:"PEOPLE & CAREER",points:sharedPoints("アルファで働くこと"),cta:{label:"応募について相談する",href:"/contact"}},
  "news":{eyebrow:"NEWS",title:"お知らせ",lead:"アルファからの最新情報。",description:"サービス、会社、地域での活動に関するお知らせを掲載します。",visual:"LATEST NEWS",points:sharedPoints("最新の取り組み"),cta:{label:"お問い合わせ",href:"/contact"}},
  "news/summer-holiday-2026":{eyebrow:"NEWS",title:"夏季休業のお知らせ",lead:"2026年の夏季休業期間について",description:"誠に勝手ながら、夏季休業期間中は各窓口の営業を休止いたします。お客様にはご不便をおかけしますが、何卒ご理解賜りますようお願い申し上げます。",visual:"2026.08.01",points:sharedPoints("休業期間中の対応"),cta:{label:"お知らせ一覧へ",href:"/news"}},
  "news/year-end-holiday-2025":{eyebrow:"NEWS",title:"年末年始休業のお知らせ",lead:"年末年始の営業について",description:"年末年始の休業期間と、休業期間中にいただいたお問い合わせへの対応についてご案内します。",visual:"2025.12.15",points:sharedPoints("休業期間中の対応"),cta:{label:"お知らせ一覧へ",href:"/news"}},
  "news/summer-holiday-2025":{eyebrow:"NEWS",title:"夏季休業のお知らせ",lead:"2025年の夏季休業期間について",description:"夏季休業期間中の営業およびお問い合わせへの対応についてご案内します。",visual:"2025.08.01",points:sharedPoints("休業期間中の対応"),cta:{label:"お知らせ一覧へ",href:"/news"}},
  "news/website-renewal-2025":{eyebrow:"NEWS",title:"Webサイトをリニューアルしました",lead:"より分かりやすく、相談しやすいサイトへ。",description:"サービス情報や会社の取り組みをより分かりやすくお伝えするため、Webサイトをリニューアルしました。",visual:"2025.04.01",points:sharedPoints("サイトリニューアル"),cta:{label:"お知らせ一覧へ",href:"/news"}},
  "faq":{eyebrow:"FAQ",title:"よくある質問",lead:"ご相談前の疑問にお答えします。",description:"サービス、対応地域、導入、保守について多く寄せられる質問をまとめています。",visual:"QUESTIONS",points:sharedPoints("よくあるご相談"),cta:{label:"直接相談する",href:"/contact"}},
  "privacy":{eyebrow:"POLICY",title:"プライバシーポリシー",lead:"大切な情報を、適切に取り扱います。",description:"お預かりする個人情報の利用目的、管理方法、お問い合わせ窓口についてご案内します。",visual:"PRIVACY POLICY",points:sharedPoints("個人情報の取り扱い"),cta:{label:"お問い合わせ",href:"/contact"}},
  "contact":{eyebrow:"CONTACT",title:"お問い合わせ",lead:"まとまっていないお悩みも、お聞かせください。",description:"オフィスの困りごとを伺い、必要な対応を一緒に整理します。お電話またはお問い合わせフォームからご相談ください。",visual:"LET'S TALK",points:sharedPoints("ご相談の流れ")},
  "office-security":{eyebrow:"OFFICE SECURITY",title:"オフィスセキュリティ対策",lead:"情報と空間を、まとめて守る。",description:"防犯カメラや入退室管理など、オフィスの空間を守る対策を中心に、情報と空間の両面からオフィスのセキュリティを整えます。",visual:"SECURE OFFICE",points:sharedPoints("セキュリティ対策"),cta:{label:"相談する",href:"/contact"},services:[
    {id:"security-camera",label:"SECURITY CAMERA",title:"防犯カメラ",lead:"見守る仕組みを、環境に合わせて。",text:"設置場所や目的を確認し、確認しやすく運用しやすい防犯カメラ環境を整えます。",points:["死角・明るさ・配線経路を現地で確認","確認したい場面と期間から、画質と録画容量を決定","遠隔での確認やデータの保存まで、運用しやすく"]},
    {id:"access-control",label:"ENTRY MANAGEMENT",title:"入退室管理",lead:"誰が、いつ入ったかを把握する。",text:"入口やサーバールームなど、守りたい場所の出入りを管理する仕組みを整えます。"},
    {id:"theft-prevention",label:"ANTI-THEFT",title:"盗難・侵入対策",lead:"夜間や休日のオフィスも安心に。",text:"不在時の侵入や盗難に備え、オフィスの状況に合わせた対策をご提案します。"},
    {id:"physical-safety",label:"PHYSICAL SAFETY",title:"オフィスの物理的な安全対策",lead:"機器と書類を、物理的に守る。",text:"重要書類や機器の保管場所、配線まわりなど、オフィスの物理的なリスクを一緒に確認します。"},
  ],related:{eyebrow:"IT INFRASTRUCTURE",title:"ITインフラ",text:"UTMやウイルス対策、不正アクセス対策など、情報セキュリティの対策はこちらでご紹介しています。",href:"/service/category/it_support"}},
  "service/axcel":{eyebrow:"MANAGEMENT SUPPORT",title:"経営支援 AXCEL",lead:"専門知識を結集し、経営課題を前へ。",description:"売上拡大や新規事業、人材確保、社内規定の策定など、経営に関するさまざまな課題を継続してサポートします。",visual:"AXCEL",points:sharedPoints("AXCELの経営支援"),cta:{label:"AXCELを相談する",href:"/contact"}},
  "service/ai-products":{eyebrow:"AI PRODUCTS",title:"AIプロダクト",lead:"毎日の仕事を、AIでもっと軽く。",description:"業務内容に合うAI活用と自動化を提案し、繰り返し作業の負担を減らします。",visual:"AI PRODUCTS",points:sharedPoints("AIプロダクトの活用"),cta:{label:"AI活用を相談する",href:"/contact"}},
  "service/category/business_support":{eyebrow:"BUSINESS INFRASTRUCTURE",title:"ビジネスインフラサポート",lead:"毎日の仕事を、もっと使いやすく。",description:"電話や複合機など、業務の土台となる機器を働き方に合わせて整えます。",visual:"BUSINESS SUPPORT",points:sharedPoints("ビジネスインフラ"),cta:{label:"サービスを相談する",href:"/contact"},services:[
    {id:"business-phone",label:"BUSINESS PHONE",title:"ビジネスフォン",lead:"オフィスの業務効率化を進める、NTT西日本のビジネスフォン。",text:"利用人数や拠点、電話の受け方に合わせて、Smart Netcommunityシリーズから最適な機種をご提案します。",points:["αZXⅡ typeS/M：クラウドサービスとの連携、音声AIによる通話内容のテキスト化、着信応答業務の効率化","αZX typeL：外線最大144ch・内線最大480台。スマホ連携や拠点間連携で中〜大規模オフィスに","αZX Home：SOHOや店舗併設住宅に。お店用と住宅用の使い分け、留守番電話・録音通知機能"]},
    {id:"multifunction-printer",label:"PRINTER & FAX",title:"複合機・コピー機・FAX",lead:"オフィスワークと文書管理を、もっと効率的に。",text:"FAX・コピー・プリンタ・スキャナなどの機能で、オフィスの文書管理を効率化します。",points:["ビジネス複合機 OFISTARシリーズ：さまざまなクラウドサービスとつながり、外出先でも同じように情報を扱えます","ビジネスFAX：多彩なセキュリティ機能を搭載した感熱紙ファクス","コスト削減の対策で、オフィスや店舗のムダな経費を見直します"]},
    {id:"oa-equipment",label:"OA EQUIPMENT",title:"その他OA機器",lead:"必要な設備を、まとめて整える。",text:"業務内容やオフィス環境に合わせて各種OA機器を選定し、設置から使い始めまで一括して対応します。"},
    {id:"alpha-hikari",label:"ALPHA HIKARI",title:"光回線「アルファ光」",lead:"今の回線はそのままに、通信費を見直す。",text:"NTT西日本の「フレッツ光」の提供を受け、アルファコミュニケーションズのオリジナル料金でご提供する光回線サービスです。",points:["現在ご利用中の回線はそのまま","光回線の安定した品質はそのままに、通信費のコストを削減"]},
    {id:"alpha-mobile",label:"ALPHA MOBILE",title:"携帯料金の見直し「アルファモバイル」",lead:"携帯の料金プランを、定期的に見直す。",text:"携帯の料金プランは毎年更新されています。アルファモバイルでは、ご利用状況に合わせて最適な料金プランをご提案します。"},
  ]},
  "service/category/it_support":{eyebrow:"IT INFRASTRUCTURE",title:"ITインフラサポート",lead:"つながる環境を、安全で快適に。",description:"ネットワーク構築からセキュリティまで、見えにくいIT環境の課題を整理します。",visual:"IT SUPPORT",points:sharedPoints("ITインフラ"),cta:{label:"サービスを相談する",href:"/contact"},services:[
    {id:"network",label:"NETWORK",title:"ネットワーク構築",lead:"止まりにくく、管理しやすい通信環境へ。",text:"利用人数や端末、拠点、業務内容を確認し、必要な速度と構成のネットワークを構築します。",points:["社内LANや拠点間の接続を、業務に合わせて設計","不具合時の切り分けから、増員・移転時の見直しまで対応"]},
    {id:"network-security",label:"NETWORK SECURITY",title:"ネットワークセキュリティ",lead:"オフィス環境のリスク管理は万全ですか？",text:"企業を取り巻く情報セキュリティのリスクは日々高まっています。情報漏えい、データ消失、不正アクセスなどから情報資産を守るために、お客様の環境に合った対策をご提案します。"},
    {id:"utm",label:"UTM / ANTIVIRUS",title:"UTM・ウイルス対策",lead:"外からの脅威を、入口でまとめて防ぐ。",text:"ファイアウォールやウイルス対策などの機能をひとつにまとめたUTMを導入し、社内ネットワークへの脅威に備えます。"},
    {id:"unauthorized-access",label:"ACCESS CONTROL",title:"不正アクセス対策",lead:"社外からの不正な侵入に備える。",text:"アクセス権限やネットワークの設定を見直し、社外からの不正なアクセスのリスクを減らします。"},
    {id:"device-data",label:"WI-FI / DEVICE / DATA",title:"Wi-Fi・端末・データ保護",lead:"毎日使う機器とデータを守る。",text:"Wi-Fiの暗号化や端末の管理、データのバックアップなど、日々の業務で使う機器と情報を守る仕組みを整えます。"},
    {id:"alpha-web",label:"ALPHA WEB",title:"ホームページ制作「アルファWEB」",lead:"ホームページは、24時間動ける営業マン。",text:"貴社の経営戦略に合ったホームページの提案から制作、管理までを行います。スマートフォン対応のご相談も承ります。"},
  ],related:{eyebrow:"OFFICE SECURITY",title:"オフィスセキュリティ対策",text:"防犯カメラや入退室管理など、オフィスの物理的な対策はこちらでご紹介しています。",href:"/office-security"}},
  "service/category/top_support":{eyebrow:"OFFICE SUPPORT",title:"幅広いオフィス支援",lead:"設備も保守も、ひとつの窓口で。",description:"照明や空調、電気代の見直しから導入後の保守まで、オフィスに必要な支援を横断してご提案します。",visual:"TOTAL SUPPORT",points:sharedPoints("オフィス全体の支援"),cta:{label:"サービスを相談する",href:"/contact"},services:[
    {id:"led",label:"LED LIGHTING",title:"LED照明",lead:"電気代とCO2を、同時に減らす。",text:"電気代のコスト削減とCO2排出の削減で、地球温暖化の防止に貢献します。"},
    {id:"air-conditioner",label:"AIR CONDITIONER",title:"エアコン",lead:"快適なオフィス環境は、生産性を向上させます。",text:"集中力の続く快適なオフィス空間は、快適な空調から生まれます。オフィスのご利用状況に合わせた最適な空調をご提案します。"},
    {id:"alpha-denki",label:"ALPHA DENKI",title:"電気代の見直し「アルファ電気」",lead:"新電力に切り替えて、毎月の電気代をおトクに。",text:"電気の安定した品質はそのままに、電気代のコストを削減します。",points:["安心の一律割引","解約手数料0円","電力の見える化ができます"]},
    {id:"after-sales",label:"AFTER SUPPORT",title:"アフターサービス・定期訪問",lead:"導入した後も、ずっと安心。",text:"機器の不調があった場合は、自社の工事担当者が迅速に対応します。定期訪問では、機器のメンテナンスや清掃、ご利用状況のヒアリングを行い、必要な通信インフラの整備をご提案します。",points:["自社の工事部門が保守を担当","NTTフィールドテクノとの連携で、万が一のときも迅速に対応","定期訪問で機器の清掃・メンテナンス"]},
  ]},
};

type Props={params:Promise<{slug:string[]}>};

export function generateStaticParams(){return Object.keys(pages).map((key)=>({slug:key.split("/")}));}

export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const content=pages[slug.join("/")];return content?{title:`${content.title}｜アルファコミュニケーションズ株式会社`,description:content.description}:{};}

export default async function Demo4DynamicPage({params}:Props){const {slug}=await params;const key=slug.join("/");const content=pages[key];if(!content)notFound();return <Demo4ContentPage content={{...content,blocks:content.blocks??DEMO4_BLOCKS[key]}}/>;}
