## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## サイトについて

- ブランド名: uys.
- テーマ: 中小の飲食店・温泉施設向けのマーケティング・集客情報
- 記事は `src/content/blog/*.md` に追加する(frontmatter: title, description, pubDate, tags, draft)
- サイトの`base`は `astro.config.mjs` で `/uys-media/` に設定済み。内部リンクは必ず `import.meta.env.BASE_URL` を使うこと(ハードコードした `/` だとGitHub Pagesの base pathで壊れる)

## 執筆時の注意(Markdownの既知の落とし穴)

日本語の全角句読点・かっこ(「」、。()など)に直接くっついた `**太字**` は、CommonMarkの flanking ルールにより太字として認識されずアスタリスクがそのまま表示されることがある(特に閉じ`**`の直前がASCII記号`)`などで、直後が「の」「が」のようなひらがなの場合に発生を確認)。
太字を使う場合は、前後に半角スペースを入れるか、句読点に直接接触させないこと。迷ったら太字を使わずビルド後に見た目を確認する。

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
