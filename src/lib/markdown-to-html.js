import { remark } from 'remark';
import html from 'remark-html';

import { isProd } from './utils';

// previous solution
// https://github.com/mhm13dev/modify-image-url-md/blob/master/index.js
export const modifyMdImageUrl = (markdown) =>
  isProd ? markdown.replace('/assets/', '/AASweb/assets/') : markdown;

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html, { sanitize: false })
    .process(modifyMdImageUrl(markdown));
  return result.toString();
}
