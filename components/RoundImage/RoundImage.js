import classNames from 'classnames';
import { getBasePath } from '../../lib/utils';

export const RoundImage = ({ src, alt, className }) => (
  <div
    className={classNames(
      'flex-shrink-0',
      'rounded-full',
      'overflow-hidden',
      'shadow-md',
      'bg-neutral-100',
      className
    )}
  >
    <img
      src={`${getBasePath()}${src}`}
      alt={alt}
      className="h-full w-full object-cover"
    />
  </div>
);
