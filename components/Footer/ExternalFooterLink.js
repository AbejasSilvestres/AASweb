import classNames from 'classnames';

export const ExternalFooterLink = ({ className, children, ...rest }) => (
  <a
    className={classNames(
      'text-neutral-300',
      'hover:text-primary-400',
      'focus-within:text-primary-400',
      'font-raleway',
      'text-base',
      'inline-block',
      className
    )}
    {...rest}
  >
    {children}
  </a>
);
