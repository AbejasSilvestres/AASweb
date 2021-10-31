import Link from 'next/link';
import { CoverImage } from './CoverImage';
import { formatDate } from '../../lib/utils';

export const Preview = ({ title, coverImage, date, excerpt, author, slug }) => (
  <article>
    <div className="mb-5">
      <CoverImage
        slug={slug}
        title={title}
        src={coverImage}
        height={278}
        width={556}
      />
    </div>
    <h2 className="mb-3">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a className="hover:underline focus:underline">{title}</a>
      </Link>
    </h2>
    <time className="text-lg mb-6 inline-block text-neutral-700 font-light">
      {formatDate(date)}
    </time>
    <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
  </article>
);
