import classNames from 'classnames';

export const RoundImage = ({ src, alt, className }) => (
  <div
    className={classNames(
      'shrink-0',
      'rounded-full',
      'overflow-hidden',
      'shadow-md',
      'bg-neutral-100',
      className
    )}
  >
    <img src={src} alt={alt} className="h-full w-full object-cover" />
  </div>
);
