import { getBasePath } from '../../lib/utils';

export const Avatar = ({ name, picture }) => (
  <div className="flex gap-2 mb-8 items-center">
    <div className="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden">
      <img
        className="h-full w-full object-cover"
        src={`${getBasePath()}${picture}`}
        alt={name}
      />
    </div>
    <span className="font-semibold">{name}</span>
  </div>
);
