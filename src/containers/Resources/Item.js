import { getBasePath, isExternalLink } from '../../lib/utils';

export const Item = ({ title, body, href }) => (
  <div className="pl-0 md:pl-20 mb-8">
    <a
      className="block hover:underline focus:underline"
      href={isExternalLink(href) ? href : `${getBasePath()}${href}`}
      target="_blank"
      rel="noreferrer"
    >
      <h3 className="text-xl text-neutral-700 mb-2">{title}</h3>
    </a>
    <p className="text-lg leading-relaxed text-neutral-600">{body}</p>
  </div>
);
