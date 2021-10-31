import { CoverImage } from './CoverImage';
import { formatDate } from '../../lib/utils';

export const Header = ({ title, coverImage, date, author }) => (
  <>
    <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-snug md:leading-tight lg:leading-none mb-12 text-left">
      {title}
    </h1>
    <div className="mb-8 md:mb-16">
      <CoverImage title={title} src={coverImage} height={620} width={1240} />
    </div>
    <div className="max-w-2xl mx-auto">
      <time className="text-lg mb-2 inline-block font-light">
        {formatDate(date)}
      </time>
    </div>
  </>
);
