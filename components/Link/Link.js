import classNames from 'classnames';

export const Link = ({ className, children, ...rest }) => (
  <a
    className={classNames(
      'text-primary-500',
      'hover:text-primary-600',
      'focus-within:text-primary-600',
      'font-semibold',
      className
    )}
    {...rest}
  >
    {children}
  </a>
);
