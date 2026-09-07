import { ContentPage } from "@/components/demo3/ContentPage";

export default function ContactPage() {
  return <ContentPage eyebrow="CONTACT" title="お問い合わせ" lead="ご質問やご相談など、どんなことでもお気軽にお問い合わせください。担当者が責任を持って対応します。" pageHref="/demo3/contact" sections={[]}>
    <div className="contactInfoPanel"><div><small>PHONE</small><strong>お電話でのお問い合わせ</strong><a href="tel:0120610113">0120-610-113</a><p>受付時間 9:00〜18:00<br/>土日祝日・当社休業日を除く</p></div><div><small>OFFICE</small><strong>本社</strong><p>〒812-0863<br/>福岡県福岡市博多区金の隈1-28-50<br/>TEL：(092)514-1788　FAX：(092)514-1789</p></div></div>
    <form className="officialContactForm"><p><span>*</span> は必須項目です。</p><label>御社名<input name="company" placeholder="例）アルファコミュニケーションズ株式会社"/></label><label>担当者様名 <span>*</span><input name="name" required placeholder="例）山田太郎"/></label><label>フリガナ<input name="kana" placeholder="例）ヤマダタロウ"/></label><label>メールアドレス <span>*</span><input name="email" type="email" required placeholder="例）info@sample.com"/></label><label>お電話番号 <span>*</span><input name="tel" type="tel" required placeholder="例）0925141788"/></label><label>ご住所 <span>*</span><input name="address" required placeholder="郵便番号・都道府県・市区町村・番地"/></label><label>お問い合わせ内容 <span>*</span><textarea name="message" required rows={7}/></label><label className="contactConsent"><input type="checkbox" required/> <a href="/demo3/privacy">プライバシーポリシー</a>に同意する</label><button type="submit">入力内容を確認する →</button></form>
  </ContentPage>;
}
