/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";

export function SiteFooter({pageTopHref="/demo2"}:{pageTopHref?:string}){return <footer>
  <div className="footerBrand"><span className="logoPlaceholder">LOGO</span><strong>アルファコミュニケーションズ株式会社</strong><small>福岡を中心に九州・山口の<br/>オフィス環境をサポートします。</small></div>
  <div className="footerSitemap"><div className="footerServices"><a className="footerParent" href="/demo2/service">サービス</a><div><a href="/demo2/services/business-phone">ビジネスフォン</a><a href="/demo2/services/multifunction-printer">複合機・コピー機</a><a href="/demo2/service/oasys">OASYS</a><a href="/demo2/services/network">ネットワーク構築</a><a href="/demo2/services/security-camera">防犯カメラ</a><a href="/demo2/services/security">セキュリティ</a><a href="/demo2/office-security">オフィスセキュリティ対策</a><a href="/demo2/services/oa-equipment">その他OA機器</a></div></div><div className="footerMainLinks"><a href="/demo2/ntt-partner">NTT特約店について</a><a href="/demo2/company/features">アルファの特徴</a><a href="/demo2/company">会社概要</a><a href="/demo2/company/message">代表挨拶</a><Link href="/demo2/recruit">採用情報</Link><a href="/demo2/news">お知らせ</a><a href="/demo2/faq">よくある質問</a><a href="/demo2/contact">お問い合わせ</a><a href="/demo2/privacy">プライバシーポリシー</a></div></div>
  <div className="footerBottom"><span>© ALPHA COMMUNICATIONS CO., LTD.</span><a href={pageTopHref}>PAGE TOP ↑</a></div>
</footer>}
