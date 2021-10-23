import classNames from 'classnames';
import Link from 'next/link';
import { getBasePath } from '../../lib/utils';

export const CoverImage = ({ title, src, slug, height, width }) => {
  const image = (
    <img
      src={`${getBasePath()}${src}`}
      alt={`Cover Image for ${title}`}
      className={classNames('shadow-sm', {
        'hover:shadow-md transition-shadow duration-200': slug,
      })}
      layout="responsive"
      width={width}
      height={height}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};
