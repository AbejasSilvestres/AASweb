import classNames from 'classnames';

export const FooterHeading = ({ className, ...rest }) => (
  <h6
    className={classNames('text-neutral-200', 'text-xl', 'mb-3', className)}
    {...rest}
  />
);
