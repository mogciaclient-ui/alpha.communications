/* eslint-disable @next/next/no-html-link-for-pages */
export function SiteHeader({className=""}:{className?:string}){
  return <header className={`header ${className}`.trim()}>
    <a href="/" className="brand" aria-label="アルファコミュニケーションズ ホーム"><span className="logoPlaceholder">LOGO</span><strong>アルファコミュニケーションズ株式会社</strong></a>
    <nav aria-label="メインナビゲーション" className="mainNav"><div className="navDropdown"><a href="/service">サービス <span>⌄</span></a><div className="serviceMenu"><p>SERVICES</p><a href="/services/business-phone">ビジネスフォン <span className="arrow">→</span></a><a href="/services/multifunction-printer">複合機・コピー機 <span className="arrow">→</span></a><a href="/service/oasys">OASYS <span className="arrow">→</span></a><a href="/services/network">ネットワーク構築 <span className="arrow">→</span></a><a href="/services/security-camera">防犯カメラ <span className="arrow">→</span></a><a href="/services/security">セキュリティ <span className="arrow">→</span></a><a href="/services/oa-equipment">その他OA機器 <span className="arrow">→</span></a></div></div><a href="/ntt-partner">NTT特約店について</a><a href="/office-security">オフィスセキュリティ対策</a><a href="/company">会社概要</a><a href="/recruit">採用情報</a></nav>
    <div className="headerButtons"><a href="/contact">ご相談・お問い合わせ</a><a href="tel:0120610113">0120-610-113</a></div>
  </header>
}
