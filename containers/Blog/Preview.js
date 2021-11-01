import Link from 'next/link';
import { CoverImage } from './CoverImage';
import { Author } from './Author';
import { formatDate } from '../../lib/utils';

export const Preview = ({ title, coverImage, date, excerpt, author, slug }) => (
  <article>
    <div className="mb-5">
      <CoverImage slug={slug} title={title} src={coverImage} />
    </div>
    <h2 className="mb-3">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a className="hover:underline focus:underline">{title}</a>
      </Link>
    </h2>
    <time className="text-lg mb-6 inline-block font-light">
      {formatDate(date)}
    </time>
    <p className="text-lg leading-relaxed mb-8">{excerpt}</p>
    <Author name={author.name} picture={author.picture} />
  </article>
);
