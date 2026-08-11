import Link from "next/link";

export function SiteFooter({pageTopHref="/"}:{pageTopHref?:string}){return <footer>
  <div className="footerBrand"><span className="logoPlaceholder">LOGO</span><strong>アルファコミュニケーションズ株式会社</strong><small>福岡を中心に九州・山口の<br/>オフィス環境をサポートします。</small></div>
  <div className="footerSitemap"><div className="footerServices"><a className="footerParent" href="/service">サービス</a><div><a href="/services/business-phone">ビジネスフォン</a><a href="/services/multifunction-printer">複合機・コピー機</a><a href="/service/oasys">OASYS</a><a href="/services/network">ネットワーク構築</a><a href="/services/security-camera">防犯カメラ</a><a href="/services/security">セキュリティ</a><a href="/office-security">オフィスセキュリティ対策</a><a href="/services/oa-equipment">その他OA機器</a></div></div><div className="footerMainLinks"><a href="/ntt-partner">NTT特約店について</a><a href="/company/features">アルファの特徴</a><a href="/company">会社概要</a><a href="/company/message">代表挨拶</a><Link href="/recruit">採用情報</Link><a href="/news">お知らせ</a><a href="/faq">よくある質問</a><a href="/contact">お問い合わせ</a><a href="/privacy">プライバシーポリシー</a></div></div>
  <div className="footerBottom"><span>© ALPHA COMMUNICATIONS CO., LTD.</span><a href={pageTopHref}>PAGE TOP ↑</a></div>
</footer>}
