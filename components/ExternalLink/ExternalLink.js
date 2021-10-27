import classNames from 'classnames';

export const ExternalLink = ({ className, children, ...rest }) => (
  <a
    className={classNames(
      'text-primary-500',
      'hover:text-primary-600',
      'focus-within:text-primary-600',
      'font-raleway',
      'font-semibold',
      className
    )}
    {...rest}
  >
    {children}
  </a>
);
