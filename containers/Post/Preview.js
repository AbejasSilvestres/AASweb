import Link from 'next/link';
import { DateFormatter } from './DateFormatter';
import { CoverImage } from '../../components';

export const Preview = ({ title, coverImage, date, excerpt, author, slug }) => (
  <div>
    <div className="mb-5">
      <CoverImage
        slug={slug}
        title={title}
        src={coverImage}
        height={278}
        width={556}
      />
    </div>
    <h3 className="text-3xl mb-3 leading-snug">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a className="hover:underline">{title}</a>
      </Link>
    </h3>
    <div className="text-lg mb-4">
      <DateFormatter dateString={date} />
    </div>
    <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
  </div>
);
