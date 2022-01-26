import NextLink from 'next/link';

import { Container, Link } from '../../components';

export const Preview = ({ type, title, excerpt, coverImage, slug }) => (
  <section className={type === 'primary' ? 'bg-primary-50' : 'bg-neutral-0'}>
    <Container className="py-20 md:py-0 md:h-96">
      <div className="flex flex-col md:flex-row md:items-center h-full gap-16 md:gap-20">
        <div className="shrink-0">
          <img
            src={coverImage}
            alt={title}
            className="w-56 h-56 object-contain"
          />
        </div>
        <div>
          <h2 className="text-4xl text-neutral-800 mb-4">{title}</h2>
          <p className="leading-relaxed text-xl text-neutral-800 mb-2">
            {excerpt}
          </p>
          <NextLink as={`/projects/${slug}`} href="/projects/[slug]" passHref>
            <Link className="text-xl">Lee más</Link>
          </NextLink>
        </div>
      </div>
    </Container>
  </section>
);
