import { CoverImage } from '../CoverImage/CoverImage';
import { DateFormatter } from './DateFormatter';
import { PostTitle } from './Title';

export const PostHeader = ({ title, coverImage, date, author }) => (
  <>
    <PostTitle>{title}</PostTitle>
    <div className="mb-8 md:mb-16 sm:mx-0">
      <CoverImage title={title} src={coverImage} height={620} width={1240} />
    </div>
    <div className="max-w-2xl mx-auto">
      <div className="mb-6 text-lg">
        <DateFormatter dateString={date} />
      </div>
    </div>
  </>
);
