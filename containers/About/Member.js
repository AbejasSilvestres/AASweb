import { ExternalLinkOutline } from '../../icons';
import { Link, RoundImage } from '../../components';
import memberStyles from './member.module.css';

export const Member = ({ photo, name, url, content }) => (
  <div>
    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
      <RoundImage src={photo} alt={name} className="w-40 h-40" />
      <div className="flex-grow items-center">
        <h3 className="font-semibold text-2xl mb-4">
          <span>{name}</span>
          <Link
            href={url}
            target="_blank"
            className="inline-block pl-1.5 pb-1.5 align-middle"
          >
            <ExternalLinkOutline />
          </Link>
        </h3>
        <div
          className={memberStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  </div>
);
