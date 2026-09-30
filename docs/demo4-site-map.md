# 最終サイトマップ

`/demo4` で制作・確認し、完成時に `/demo4` を外してルートへ昇格する。

## 制作する画面

1. `/` — トップ
2. `/service` — サービス一覧
3. `/service/category/business_support` — ビジネスインフラ
4. `/service/category/it_support` — ITインフラ
5. `/service/category/top_support` — 幅広いオフィス支援
6. `/service/axcel` — 経営支援 AXCEL
7. `/service/ai-products` — AIプロダクト
8. `/office-security` — オフィスセキュリティ対策
9. `/company` — 会社案内
10. `/company/message` — 代表挨拶
11. `/company/offices` — 営業所案内
12. `/company/features` — アルファの特徴
13. `/ntt-partner` — NTT特約店について
14. `/social-initiatives` — 社会へのとりくみ
15. `/regional-initiatives` — 地域へのとりくみ
16. `/sdgs` — SDGs
17. `/dx` — DX
18. `/news` — お知らせ一覧
19. `/news/[slug]` — お知らせ記事詳細（共通テンプレート）
20. `/recruit` — 採用情報
21. `/faq` — よくある質問
22. `/contact` — お問い合わせ
23. `/privacy` — プライバシーポリシー

合計は23種類。お知らせ詳細は記事数にかかわらず、画面テンプレートとしては1種類と数える。

## ヘッダーの「サービス」

1. ビジネスインフラ
2. ITインフラ
3. 幅広いオフィス支援
4. 経営支援 AXCEL
5. AIプロダクト
6. オフィスセキュリティ対策

ビジネスフォン、複合機、ネットワーク、防犯カメラ、OA機器、保守はヘッダーへ直接並べず、対応するカテゴリーページ内で案内する。

## 完成時の移行

- `app/demo4` のデザインをルートへ昇格する。
- サイト内リンクから `/demo4` を除去する。
- 旧ルート、`demo2`、`demo3` を整理する。
- 公開済みの旧URLがある場合は必要なリダイレクトを設定する。
