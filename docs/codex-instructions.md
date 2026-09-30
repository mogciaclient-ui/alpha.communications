# Codex 作業指示書：アルファコミュニケーションズ 新HP

最終更新：2026-10-01

## 1. プロジェクトの概要

- クライアント：アルファコミュニケーションズ株式会社（NTT西日本の情報機器特約店、福岡本社＋5営業所）
- 内容：コーポレートサイトのリニューアル。Next.js（App Router）、Vercelにデプロイ。
- 旧HP：https://alpha-communications.co.jp/ （新HPは別ドメインで公開するため、旧URLのリダイレクトは不要）
- デザイン：旧「demo4」のトーン（明るい青・POP）で確定。2026-10-01にdemo4をルートへ昇格し、demo1〜3は削除済み。
  - 削除前の状態はタグ `before-demo-cleanup` に残っている。

## 2. 作業前に必ず守ること

1. `AGENTS.md` の指示に従い、Next.jsのAPIを使う前に `node_modules/next/dist/docs/` の該当ガイドを読むこと。このバージョンは学習データと挙動が違う。
2. **本文の文章は勝手に書き換えない。** 文言は旧HPから移植したもので、クライアント確認前提。誤字や明らかな不整合を見つけたら、直さずに報告する。
3. **`type: "pending"`（準備中）の枠は消さない。** クライアントから情報が届くまでの仮枠。
4. **`public/` の画像は消さない。** `public/demo3/alpha-logo-transparent.png`（フッターのロゴ）のように、フォルダ名がdemoでも現役で使っている画像がある。
5. macOSのファイルシステムは大文字小文字を区別しない。`Demo4Blocks.tsx` と `demo4Blocks.ts` のような、大小だけ違うファイル名を作らない。
6. `demo4` という名前（`SiteHeader demo4`、`FloatingMenu demo4`、`demo4FloatingMenu` クラスなど）はスタイルの切り替えに使われている。消すと見た目が変わるので、下のタスク5以外では触らない。
7. タスクごとにブランチを切ってコミットする。各タスクの完了条件（型チェック・lint・表示確認）を満たしてからmainに入れる。

## 3. コードの構成

| 場所 | 役割 |
|---|---|
| `app/page.tsx` + `app/home.module.css` | トップページ |
| `app/service/page.tsx` | サービス一覧 |
| `app/[...slug]/page.tsx` | その他の下層ページ。`pages` オブジェクトにページのタイトル・リード文・`services`（サービス詳細）を定義 |
| `app/dx` `app/sdgs` `app/social-initiatives` `app/regional-initiatives` | 取り組み系ページ。`components/Demo4InitiativePage.tsx` を使う |
| `components/demo4/Demo4ContentPage.tsx` | 下層ページの共通レイアウト。ヒーロー → イントロ → 本文 → フッター |
| `components/demo4/Demo4ServiceDetails.tsx` | パーツ「サービス詳細」と「誘導バナー」。カテゴリーページ（03/04/05/08）で使う |
| `components/demo4/Demo4Blocks.tsx` | 本文パーツ一式（表・年表・カード・ステップ・人物・対談・FAQ・リンク・拠点・方針・準備中） |
| `components/demo4/demo4PageBlocks.ts` | **各ページの本文データ**。キーはページのパス |
| `components/site/SiteEnding.tsx` | ページ下部の相談エリアとフッター（旧demo3から移動。CSSは `SiteEnding.module.css`） |
| `components/home/HomeSections.tsx` | トップページ用のセクション |
| `docs/demo4-site-map.md` | 最終サイトマップ（23画面） |

本文の描画の優先順位（`Demo4ContentPage`）：`blocks` があればBlocks → `services` があればサービス詳細 → 特殊ページ（お知らせ・お問い合わせ）→ 旧テンプレート。

## 4. タスク一覧（上から順に）

### タスク1：本番ビルドを通す

- `npm run build` を実行し、エラーと警告をすべて解消する。
- 開発サーバー（`next dev`）を止めてから実行すること（`.next` を共有しているため）。
- `.next/types` に削除済みの `app/(demo1)` などの古い型が残っている場合は、`.next` を消してから再ビルドする。
- 完了条件：`npm run build` と `npx tsc --noEmit` がエラー0。

### タスク2：スマホ表示の確認と修正

- 全23画面を幅375px・768px・1280pxで確認する。
- 横スクロールの発生、文字の見切れ、要素の重なり、タップしにくいリンクを修正する。
- 特に次を重点的に見る。
  - `Demo4Blocks` の表・年表・人物（採用ページの社員の声）
  - `Demo4ServiceDetails` の左右交互レイアウト
  - ヘッダーとフローティングメニュー
- 完了条件：全画面・3つの幅で横スクロールなし。修正前後のスクリーンショットをPRに添付。

### タスク3：個別サービスURLの整理

設計上、個別サービスはカテゴリーページに統合済み。ただし `app/[...slug]/page.tsx` に旧テンプレートのままの個別ページが残っていて、フッターからもリンクされている。

- 対象：`services/business-phone`、`services/multifunction-printer`、`services/network`、`services/security`、`services/security-camera`、`services/oa-equipment`、`service/after-sales`、`service/oasys`
- やること：
  1. `next.config.ts` の `redirects()` で、各URLを対応するカテゴリーページのアンカーへ恒久リダイレクト（308）する。

     | 旧URL | 転送先 |
     |---|---|
     | `/services/business-phone` | `/service/category/business_support#business-phone` |
     | `/services/multifunction-printer` | `/service/category/business_support#multifunction-printer` |
     | `/services/oa-equipment` | `/service/category/business_support#oa-equipment` |
     | `/services/network` | `/service/category/it_support#network` |
     | `/services/security` | `/service/category/it_support#network-security` |
     | `/services/security-camera` | `/office-security#security-camera` |
     | `/service/after-sales` | `/service/category/top_support#after-sales` |
     | `/service/oasys` | `/service/axcel` |

  2. `pages` オブジェクトから上記のエントリを削除する。
  3. `SiteEnding.tsx` のフッターと `FloatingMenu.tsx` のリンクを転送先URLに直接書き換える。
- 完了条件：サイト内に上記の旧URLへのリンクが0件。旧URLにアクセスすると転送先に移動する。

### タスク4：使われていないコードの削除

- `components/site/SiteEnding.module.css`（約60KB、旧demo3のCSS全体）から、`SiteEnding.tsx` で使っていないクラスを削除する。
- `components/home/HomeSections.tsx` で、どこからも使われていないexportを削除する。
- `app/[...slug]/page.tsx` の `sharedPoints()` のうち、`blocks` や `services` を持つページでは表示されない分岐を整理する。
- `public/demo2`・`public/demo3` のうち、コードから参照されていない画像を削除する。削除前に `grep -rn "<ファイル名>" app components` で参照がないことを必ず確認する。
- 完了条件：表示が変わらないこと（主要ページの修正前後のスクリーンショットで比較）。

### タスク5（任意）：`demo4` という命名の整理

- `SiteHeader`・`FloatingMenu`・`SiteEnding` の `demo4` propを削除し、demo4用の見た目を標準にする。
- `demo4FloatingMenu` などのCSSクラスもあわせて整理する。
- `components/demo4/` を `components/page/` などに改名し、importを更新する。
- 完了条件：表示が変わらないこと。コードに `demo4` の文字列が残らないこと（`public/demo4/` の画像パスは除く）。

### タスク6：lintの警告を解消

- `Demo4Blocks.tsx` と `Demo4ServiceDetails.tsx` の `<img>` を `next/image` に置き換える。画像はまだ未設定で仮枠表示なので、`image` を指定したときだけ使われる。
- `HomeSections.tsx` の未使用変数 `index`、`SiteEnding.tsx` の未使用引数 `demo4` を解消する。
- 完了条件：`npx eslint app components` が警告0。

### タスク7：SEOの基本設定

- `app/sitemap.ts` と `app/robots.ts` を追加する。本番ドメインは未定なので、環境変数 `NEXT_PUBLIC_SITE_URL` から読む。
- 各ページの `metadata`（title・description）を確認し、空や重複があれば `pages` のデータから生成する。
- OGP画像を `app/opengraph-image` で用意する。ロゴと社名を使ったシンプルなもの。

## 5. やらないこと（クライアント確認待ち）

以下は情報が揃っていないので、コードでは対応しない。

- お問い合わせフォームの送信処理。今は送信しても届かない。送信先（メールかフォームサービスか）が未決定。
- 「準備中」枠の中身。AIプロダクト、事例、料金、対応エリアなど。
- サービス・人物・営業所の写真。今は仮枠表示。
- 募集要項の年齢表記や給与などの文言修正。

## 6. 報告のしかた

タスクごとに次をまとめて報告する。

- 変更したファイル
- 確認した内容（ビルド・lint・表示確認した画面と幅）
- 判断に迷った点、クライアント確認が必要そうな点
