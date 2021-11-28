import { remark } from 'remark';
import html from 'remark-html';
import { getBasePath } from './utils';

// https://github.com/mhm13dev/modify-image-url-md/blob/master/index.js

export const modifyMdImageUrl = (markdown) => {
  const images = markdown.match(/\!\[.*\]\(.*\)/g);
  (images || []).forEach((img) => {
    const url = img.match(/[\(].*[^\)]/)[0].split('(')[1];
    if (!url.startsWith('http')) {
      const modifiedImageUrl = `${getBasePath()}${url}`;
      markdown = markdown.replace(url, modifiedImageUrl);
    }
  });
  return markdown;
};

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(modifyMdImageUrl(markdown));
  return result.toString();
}
