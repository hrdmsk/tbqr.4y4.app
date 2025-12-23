# Thunderbird設定QR生成アプリ

Thunderbirdのモバイルアプリ設定用QRコードを生成するWebアプリケーションです。

## プロジェクト構造

このプロジェクトは[Astro](https://astro.build/)フレームワークを使用しています。主なソースコードは`src`ディレクトリに含まれています。

### ディレクトリ構成

```
src/
├── components/       # UIコンポーネント
│   ├── Header.astro         # ヘッダー部分
│   ├── IncomingForm.astro   # 受信サーバー設定フォーム
│   ├── SMTPForm.astro       # 送信サーバー設定フォーム
│   └── QRHiddenArea.astro   # QRコード生成用の不可視領域
├── layouts/          # ページレイアウト
│   └── Layout.astro         # 共通レイアウト
├── lib/              # ロジック・ユーティリティ
│   ├── constants.ts         # 定数定義 (プロトコル、セキュリティポートなど)
│   ├── thunderbird.ts       # Thunderbird形式のデータ構造構築ロジック
│   └── ui-helpers.ts        # UI操作ヘルパー (タブ表示、画像生成など)
└── pages/            # ページルーティング
    └── index.astro          # メインページ (フォームと統合ロジック)
```

## 各ファイルの役割

### `src/pages/index.astro`
アプリケーションのエントリーポイントです。以下の役割を担います：
- 各コンポーネント(`IncomingForm`, `SMTPForm`, etc.)の配置
- フォーム間の連携ロジック (受信設定と送信設定の同期など)
- 最終的なQRコード生成処理のトリガー

### `src/lib/`
ビジネスロジックを分離しています。
- **thunderbird.ts**: フォームの入力値をThunderbirdが認識するJSON設定フォーマットに変換します。型定義(`ThunderbirdConfig`, `BaseConfig`, `SmtpConfig`)も含みます。
- **ui-helpers.ts**: 生成されたQRコードを新しいタブで表示し、画像として保存する機能などを提供します。
- **constants.ts**: ポート番号やセキュリティ設定の値を一元管理しています。

### `src/components/`
UIを部品化しています。
- **IncomingForm.astro**: メールアドレス、パスワード、受信サーバー情報の入力フォーム。
- **SMTPForm.astro**: 送信サーバー情報の入力フォーム。「受信サーバーと同じ設定を使用する」トグル機能のUIを含みます。
