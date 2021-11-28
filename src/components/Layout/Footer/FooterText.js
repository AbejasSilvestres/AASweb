import classNames from 'classnames';

export const FooterText = ({ className, children, ...rest }) => (
  <span
    className={classNames('text-neutral-400', 'text-base', 'block', className)}
    {...rest}
  >
    {children}
  </span>
);
