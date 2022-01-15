import Link from 'next/link';

import { getBasePath } from '../../lib/utils';

export const CoverImage = ({ title, src, slug }) => {
  const image = (
    <img
      src={`${getBasePath()}${src}`}
      alt={`Una Imagen para ${title}`}
      className={slug ? '' : 'shadow-sm'}
    />
  );
  return slug ? (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <a
        aria-label={title}
        className="inline-block shadow-sm hover:shadow-md focus:shadow-md transition-shadow duration-200"
      >
        {image}
      </a>
    </Link>
  ) : (
    image
  );
};
