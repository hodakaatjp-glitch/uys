// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pagesでの公開を想定した設定(リポジトリ名: uys)。
// 独自ドメインを設定した場合はここを変更する。
export default defineConfig({
	site: 'https://hodakaatjp-glitch.github.io',
	base: '/uys/',
});
