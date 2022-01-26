import Link from 'next/link';

export const CoverImage = ({ title, src, slug }) => {
  const image = (
    <img
      src={src}
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
