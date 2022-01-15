import NextLink from 'next/link';

import { isExternalLink } from '../../lib/utils';

export const Item = ({ title, body, href }) => (
  <div className="pl-0 md:pl-20 mb-8">
    {isExternalLink(href) ? (
      <a
        className="block hover:underline focus:underline"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <h3 className="text-xl text-neutral-700 mb-2">{title}</h3>
      </a>
    ) : (
      <NextLink href={href}>
        <a className="block hover:underline focus:underline" rel="noreferrer">
          <h3 className="text-xl text-neutral-700 mb-2">{title}</h3>
        </a>
      </NextLink>
    )}
    <p className="text-lg leading-relaxed text-neutral-600">{body}</p>
  </div>
);
