import classNames from 'classnames';

export const FooterIcon = ({ children, className }) => (
  <span
    className={classNames(
      'inline-flex items-center justify-center mr-3 align-middle',
      className
    )}
  >
    {children}
  </span>
);
