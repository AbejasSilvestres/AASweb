import { ExternalLinkOutline } from '../../icons';
import { ExternalLink } from '../../components';
import { getBasePath } from '../../lib/utils';
import memberStyles from './member.module.css';

export const Member = ({ photo, name, url, content }) => (
  <div>
    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
      <div className="w-40 h-40 flex-shrink-0 rounded-full overflow-hidden border-neutral-300 border-2">
        <img
          className="h-full w-full object-cover"
          src={`${getBasePath()}${photo}`}
          alt={name}
        />
      </div>
      <div className="flex-grow items-center">
        <h3 className="font-semibold text-2xl mb-4">
          <span>{name}</span>
          <ExternalLink
            href={url}
            target="_blank"
            className="inline-block pl-1.5 pb-1.5 align-middle"
          >
            <ExternalLinkOutline />
          </ExternalLink>
        </h3>
        <div
          className={memberStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  </div>
);
