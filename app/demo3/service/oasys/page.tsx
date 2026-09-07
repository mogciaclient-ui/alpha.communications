import { ContactSection } from "@/components/demo3/ContactSection";
import { FloatingMenu } from "@/components/demo3/FloatingMenu";
import { ScrollEffects } from "@/components/demo3/ScrollEffects";
import { SiteFooter } from "@/components/demo3/SiteFooter";
import { SiteHeader } from "@/components/demo3/SiteHeader";

function Visual({ label, className = "" }: { label: string; className?: string }) {
  return <div className={`oasysSupportVisual ${className}`} role="img" aria-label={`${label}の画像プレースホルダー`}><span>IMAGE</span><strong>{label}</strong><small>イラスト・図版を配置</small></div>;
}

const supports = [
  { no: "01", english: "PREMIUM", title: "OASYSプレミアム", lead: "コンシェルジュによる定期訪問つき保守サポートサービス", text: "ネットワークや機器の知識を持った当社コンシェルジュが、定期訪問により経営や業務の問題点を抽出・解消し、お客様の利益に貢献。専門のプロフェッショナルチームがお客様のビジネスをサポートいたします。", points: ["伴走型支援", "企業ドクター", "売上拡大", "セキュリティ対策"] },
  { no: "02", english: "KARTE", title: "OASYSカルテ", lead: "オフィス機器の状態を見える化する総合IT診断", text: "ネットワーク機器の情報を収集・管理し、トラブルの兆候を早期に発見。安定したオフィス環境づくりを支えます。", points: ["機器情報の自動収集", "アラート通知", "定期レポート", "資産管理"] },
  { no: "03", english: "SUPPORT CENTER", title: "OASYSサポートセンター", lead: "電話と遠隔操作によるお客様専用サポート", text: "PCや無線LAN、ソフトの操作方法から急なトラブルまで、専用窓口が電話と遠隔操作でスピーディーに対応します。", points: ["電話サポート", "遠隔サポート", "操作方法のご案内", "トラブル対応"] },
];

export default function OasysPage() {
  return <main className="oasysSupportPage">
    <SiteHeader />

    <section className="oasysSupportHero">
      <div className="oasysSupportHeroCopy"><p>OASYS SUPPORT</p><h1><span className="oasysSupportHeroLine">経営・オフィスの</span><br/><span>お困りごと</span>を<br/>ひとつの窓口で</h1><strong>専門チームがお客様の課題を解決します</strong></div>
      <div className="oasysSupportHeroWord" data-scroll-flow aria-hidden="true">OASYS Support</div>
    </section>

    <section className="oasysSupportAbout" id="about">
      <div className="oasysSupportHeading revealUp" data-reveal><p>ABOUT OASYS</p><h2>お客様の利益に貢献する<br/><span>オフィスサポート</span></h2></div>
      <div className="oasysSupportAboutGrid"><Visual label="OASYS サポート体制図" /><div><p>通信機器やネットワークの保守だけでなく、業務改善、セキュリティ、ソフトの活用まで。専門チームが、オフィスのお困りごとをまとめてサポートします。</p><dl><div><dt>相談窓口</dt><dd>オフィスの課題をまとめて受付</dd></div><div><dt>専門チーム</dt><dd>分野ごとの担当者が連携して対応</dd></div><div><dt>継続支援</dt><dd>導入後も長く伴走するサポート</dd></div></dl></div></div>
    </section>

    <section className="oasysSupportProblems">
      <div className="oasysSupportHeading"><p>PROBLEMS</p><h2>こんなお困りごとは<br/>ありませんか？</h2></div>
      <div className="oasysSupportProblemGrid">{["日々の業務処理に時間がかかる", "急な通信トラブルで業務が止まる", "デジタル化の進め方が分からない"].map((problem, index) => <article key={problem}><span>0{index + 1}</span><p>{problem}</p></article>)}</div>
      <Visual label="オフィスのお困りごとイラスト" /><strong className="oasysSupportSolution">そのお悩み、OASYSが解決します。</strong>
    </section>

    <section className="oasysSupportServices" id="support">
      <div className="oasysSupportHeading"><p>SUPPORT SERVICES</p><h2>3つのサポートサービス</h2></div>
      <div className="oasysSupportServiceList">{supports.map((support, index) => <article className={index % 2 ? "isReverse" : ""} key={support.no}><Visual label={`${support.title} イラスト`} /><div><span>{support.no} / {support.english}</span><p>{support.lead}</p><h3>{support.title}</h3><p>{support.text}</p><ul>{support.points.map(point => <li key={point}>{point}</li>)}</ul></div>{index === 0 && <div className="oasysPremiumDetails">
        <section className="oasysPremiumComposition"><p>コンシェルジュによる定期訪問サポート</p><h4>OASYSプレミアム</h4><div className="oasysPremiumFormula"><div><strong>基本保守サービス</strong><div className="oasysPremiumMaintenance">{["オフィス電話機", "コピー機", "PC・ネットワーク機器", "ホームページ・ソフトウェアなど"].map(item => <span key={item}>{item}</span>)}</div></div><b>＋</b><div><strong>OASYSプレミアムのサービス</strong><p>企業の未来を見据えた、経営・業務の伴走支援</p></div></div></section>
        <section className="oasysPremiumSupport"><p>PREMIUM SUPPORT</p><h4>お客様の利益に貢献する<br/>4つの実践的なサポート</h4><div>{[
          ["01", "伴走型支援", "「ヒト・モノ・カネ・情報・時間」を可視化し、最適な業務環境を構築。企業の未来を見据えた支援を行います。"],
          ["02", "企業ドクター", "企業の「かかりつけ医」として企業永続性の視点に立ち、経営課題を見つけ健康経営をサポートします。"],
          ["03", "売上拡大", "DX化、ESG支援により、「選ばれる企業」になるための支援を実施します。"],
          ["04", "セキュリティ対策・評価制度対応支援", "信用の見える化や取引継続に必要な対策を整理し、体制整備から継続管理まで、★4取得を目標とした実践的なサポートを行います。"],
        ].map(([no, title, text]) => <div key={no}><span>{no}</span><h5>{title}</h5><p>{text}</p></div>)}</div></section>
        <section className="oasysPremiumTeam"><p>PROFESSIONAL TEAM</p><h4>専門のプロフェッショナルチームが<br/>お客様のビジネスをサポートします</h4><Visual label="OASYS 専門チーム連携図"/><div>{[
          ["CUSTOMER", "お客様", "課題抽出／改善活動"],
          ["CONCIERGE", "コンシェルジュ", "定期訪問による経営・業務のトータルサポート"],
          ["SPECIALIST", "スペシャリスト", "専用窓口と遠隔サポートによるトラブル解決"],
          ["CONSULTANT", "コンサルタント", "利益貢献につながる機器・サービスの提案"],
        ].map(([english, title, text]) => <div key={english}><span>{english}</span><h5>{title}</h5><p>{text}</p></div>)}</div></section>
      </div>}
      {index === 1 && <div className="oasysKarteDetails oasysServiceDetails">
        <section className="oasysDetailIntro"><p>TOTAL IT DIAGNOSIS</p><h4>総合IT診断ソリューション<br/><span>OASYSカルテ</span></h4><p>機器の状態を“見える化”して、お客様のオフィス環境を常に健やかに保つITヘルスマネジメントシステム。ネットワークを通じてオフィス機器の状況を自動収集し、トラブルを未然に防ぎます。</p></section>
        <section className="oasysKarteFlow"><div><strong>お客様のオフィス環境</strong><div>{["オフィス電話機", "コピー機", "PC・ネットワーク機器", "ハブ"].map(item => <span key={item}>{item}</span>)}</div></div><b>機器状況を<br/>自動収集 →</b><div className="oasysKarteCloud"><strong>OASYSカルテ<br/>クラウドセンター</strong><small>トラブルになる前にお知らせ</small></div></section>
        <section className="oasysKarteMonitor"><Visual label="OASYSカルテ システム構成図"/><div><p>COLLECTED DATA</p><h4>機器情報を継続的に収集・診断</h4><div>{["HDD温度上昇", "トナー残量低下", "HDDエラー発生", "IT機器情報", "HDD空き容量減少"].map(item => <span key={item}>{item}</span>)}</div><ul><li>資産管理機能</li><li>レポート</li><li>アラート通知</li></ul></div></section>
        <section className="oasysKarteCompare"><p>SERVICE COMPARISON</p><h4>一般的なネットワーク保守と<br/><span>OASYSカルテ</span>の違い</h4><div><article><span className="oasysCompareLabel">一般保守</span><h5>一般的なネットワーク保守サービス</h5><ul>{["異常を感じた時に確認してもらえる", "障害が発生した時に保守してもらえる", "自覚症状がなければ健康状態を把握できない", "ネットワークが病気になってから相談する", "対応がなくても契約保守費用は必要"].map(item => <li key={item}>{item}</li>)}</ul></article><article><span className="oasysCompareLabel">OASYS KARTE</span><h5>OASYSカルテ</h5><ul>{["ネットワーク情報を自動更新・管理", "障害や異常の兆候を事前に把握", "レポートをもとに改善アドバイス", "情報システム担当者に近い価値をローコストで提供", "健康診断と問診で病気になる前からケア", "異常がなくても品質向上を継続支援"].map(item => <li key={item}>{item}</li>)}</ul></article></div></section>
      </div>}
      {index === 2 && <div className="oasysOscDetails oasysServiceDetails">
        <section className="oasysDetailIntro"><p>OFFICE SUPPORT CENTER</p><h4>電話と遠隔による業務サポート<br/><span>OASYSサポートセンター（OSC）</span></h4><p>PCや無線LAN、Officeソフトの使い方などの日常的な業務から、いざという時のトラブルまで幅広く対応。お客様専用の窓口が電話と遠隔でサポートします。</p></section>
        <section className="oasysOscTrouble"><div className="oasysOscTroubleList"><h5>お客様のトラブル</h5><ul>{["サーバーにアクセスできない", "パソコンが起動しない・突然再起動する", "Officeソフトについて質問したい", "ファイルが開けない"].map(item => <li key={item}>{item}</li>)}</ul></div><b>→</b><div className="oasysOscTroubleCenter"><strong>OASYS<br/>サポートセンター</strong><small>お客様専用窓口</small></div></section>
        <section className="oasysOscMethods"><Visual label="電話・遠隔サポート構成図"/><div><article><span>01</span><h5>電話サポート</h5><p>専用ダイヤルで、たらい回しのない電話サポートをご提供します。</p></article><article><span>02</span><h5>遠隔サポート</h5><p>センターからの遠隔操作で、言葉だけでは分かりにくい内容にも細やかに対応します。</p></article></div></section>
        <section className="oasysOscData"><p>SUPPORT DATA</p><h4>お問い合わせ内容と対応実績</h4><p>お電話1本、平均15分の対応で、お困りごとを解決に導きます。</p><div><article><div className="oasysPie oasysPie60"><strong>60<small>%</small></strong></div><h5>設定・操作に関するお問い合わせ</h5><p>お問い合わせの約60％は設定・操作に関する内容で、その中でもPC関連が多くを占めます。</p><ul><li><i/>PC関連 41%</li><li><i/>周辺機器 25%</li><li><i/>その他 34%</li></ul></article><article><div className="oasysPie oasysPie80"><strong>80<small>%</small></strong></div><h5>サポートセンター内で完結</h5><p>約80％は電話または遠隔対応で完結。多くのお客様が約15分で問題を解決しています。</p><ul><li><i/>設定・操作 58%</li><li><i/>障害対応 42%</li></ul></article></div></section>
      </div>}
      </article>)}</div>
    </section>

    <section className="oasysSupportOptions" id="options">
      <div className="oasysSupportHeading"><p>OPTION SERVICES</p><h2>お客様の業種・規模に合わせた<br/><span>オプションサービス</span></h2></div>
      <div className="oasysOptionDetails">
        <article className="oasysOptionBusiness"><div className="oasysOptionTitle"><span>OPTION 01 / BUSINESS</span><p>OASYS PREMIUM</p><h3>ビジネス向上支援</h3><strong>OASYSプレミアム限定オプション</strong></div><Visual label="ビジネス向上支援 イラスト"/><div className="oasysOptionBusinessGrid">{[
          ["助成金コーディネート", ["お客様に見合った助成金の提案", "社労士へのアシスト業務", "助成金内容に沿った業務改善", "補助金・確定拠出年金の案内"]],
          ["補助金コーディネート", ["改善計画表作成から補助金提案", "中小企業診断士へのアシスト業務", "課題解決に向けたサポート業務"]],
          ["求人支援", ["お客様に合った求人方法のアドバイス", "求人媒体選び", "SNS・ホームページの活用", "応募しやすい職場環境づくり"]],
        ].map(([title, items]) => <section key={title as string}><h4>{title as string}</h4><ul>{(items as string[]).map(item => <li key={item}>{item}</li>)}</ul></section>)}</div></article>

        <article className="oasysOptionFeature"><Visual label="サイバー保険 イラスト"/><div className="oasysOptionTitle"><span>OPTION 02 / CYBER INSURANCE</span><p>サイバーリスクから会社を守る</p><h3>サイバー保険</h3><strong>サイバープロテクター<br/>サイバーセキュリティ特約付帯専門事業者賠償責任保険</strong><p>不正アクセスやウイルス感染など、会社の経営に大きく影響を与えかねないサイバー事故による損害をカバーします。</p><a href="/demo3/contact">MORE <b>→</b></a></div></article>

        <article className="oasysOptionFeature isReverse"><Visual label="WEBサイト解析・分析 イラスト"/><div className="oasysOptionTitle"><span>OPTION 03 / WEB ANALYTICS</span><p>解析データの活用でWEBサイトの可能性を引き出す</p><h3>＋AT</h3><strong>WEBサイト解析・分析サービス</strong><p>WEBサイト運営を「ひとつの事業」として捉え、会社経営の試算表や決算書のような役割を担うデータを提供。導入後すぐにアクセス解析・分析レポートをご活用いただけます。</p></div></article>

        <article className="oasysOptionApps"><div className="oasysOptionTitle"><span>OPTION 04 / GOOGLE WORKSPACE</span><p>Google Workspace導入から管理・運用まで一括サポート</p><h3>OASYS＋Apps</h3><strong>オアシスアップス</strong><p>Google Workspaceの導入により、お客様のビジネス環境にDX化を実現し、業務のお困りごとを解決します。</p></div><Visual label="OASYS＋Apps イラスト"/><div className="oasysOptionTroubles"><h4>こんなお困りごともお任せください</h4><ul>{["時間が足りない", "DX化が何か分からない", "資料作成や申請に時間がかかる", "紙の書類が多すぎて管理できない", "現場との連携がうまく取れない", "社内での情報共有を円滑にしたい"].map(item => <li key={item}>{item}</li>)}</ul></div></article>
      </div>
    </section>

    <section className="oasysSupportCompare" id="compare">
      <div className="oasysSupportHeading"><p>PLAN COMPARE</p><h2>プラン比較</h2></div>
      <div className="oasysSupportTableWrap"><table><thead><tr><th>サービス内容</th><th>基本サポート</th><th>プレミアム</th><th>カルテ</th></tr></thead><tbody>{[["定期訪問サポート", "—", "●", "—"], ["機器状態の自動収集", "—", "●", "●"], ["電話・遠隔サポート", "●", "●", "●"], ["ビジネス向上支援", "—", "●", "—"], ["サイバーリスク対策", "●", "●", "●"]].map(row => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th key={cell}>{cell}</th> : <td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>)}</tbody></table></div>
    </section>

    <section className="oasysSupportScenes">
      <div className="oasysSupportHeading"><p>USAGE SCENES</p><h2>経営から日々の業務まで<br/>幅広くサポート</h2></div>
      <div>{[["01", "経営・業務改善", "課題整理から改善策の実行まで伴走します。"], ["02", "IT・OA機器の運用", "機器設定、ネットワーク、トラブル対応をまとめて支援します。"], ["03", "デジタル活用", "働き方に合ったクラウド環境を整えます。"]].map(([no, title, text]) => <article key={no}><span>{no}</span><Visual label={`${title} 活用シーン`} /><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="oasysSupportFlow" id="flow">
      <div className="oasysSupportHeading"><p>FLOW</p><h2>導入の流れ</h2></div>
      <ol>{[["01", "無料相談", "フォームまたはお電話からご相談ください。"], ["02", "日程調整", "担当者よりご連絡し、打ち合わせ日を調整します。"], ["03", "ヒアリング・ご提案", "現状を確認し、最適なプランをご提案します。"], ["04", "ご契約・サポート開始", "ご契約後、各サービスをご利用いただけます。"]].map(([no, title, text]) => <li key={no}><span>STEP {no}</span><h3>{title}</h3><p>{text}</p><Visual label={`${title} イラスト`} /></li>)}</ol>
    </section>

    <section className="oasysSupportFaq" id="faq">
      <div className="oasysSupportHeading"><p>FAQ</p><h2>よくあるご質問</h2></div>
      {["相談だけでも可能ですか？", "現在利用中の機器もサポートできますか？", "複数拠点の相談もできますか？", "導入後の問い合わせ方法を教えてください。"].map((question, index) => <details key={question}><summary><span>Q{String(index + 1).padStart(2, "0")}</span>{question}</summary><p>はい。現在の環境やお困りごとを伺い、必要な範囲からご案内します。まずはお気軽にご相談ください。</p></details>)}
    </section>

    <ContactSection animated title={<>OASYSについて<br/>お気軽にご相談ください</>} description="経営・オフィスのお困りごとをまとめてお伺いします。" />
    <SiteFooter pageTopHref="/demo3/service/oasys" /><FloatingMenu /><ScrollEffects />
  </main>;
}
