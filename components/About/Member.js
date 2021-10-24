import { getBasePath } from '../../lib/utils';

export const AboutMember = ({ photo, name, link, description }) => (
  <div>
    <div className="flex gap-8">
      <div className="w-40 h-40 flex-shrink-0 rounded-full overflow-hidden border-neutral-300 border-2">
        <img
          className="h-full w-full object-cover"
          src={`${getBasePath()}${photo}`}
          alt={name}
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-raleway font-semibold text-xl text-neutral-800 leading-relaxed mb-4">
          {name}
        </h3>
        <p className="font-raleway font-normal text-base text-neutral-800 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);
