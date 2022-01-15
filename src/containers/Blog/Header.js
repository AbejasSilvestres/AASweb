import { formatDate } from '../../lib/utils';
import { Author } from './Author';
import { CoverImage } from './CoverImage';

export const Header = ({ title, coverImage, date, author }) => (
  <>
    <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-snug md:leading-tight lg:leading-none mb-8 text-left">
      {title}
    </h1>
    <Author name={author.name} picture={author.picture} />
    <div className="mb-8 md:mb-16">
      <CoverImage title={title} src={coverImage} />
    </div>
    <div className="max-w-2xl mx-auto">
      <time className="text-lg mb-2 inline-block font-light">
        {formatDate(date)}
      </time>
    </div>
  </>
);
