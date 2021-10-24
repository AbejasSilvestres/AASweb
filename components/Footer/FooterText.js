import classNames from 'classnames';

export const FooterText = ({ className, children, ...rest }) => (
  <span
    className={classNames(
      'text-neutral-300',
      'font-raleway',
      'text-base',
      'block',
      className
    )}
    {...rest}
  >
    {children}
  </span>
);
