import classNames from 'classnames';

export const FooterHeading = ({ className, ...rest }) => (
  <h6
    className={classNames(
      'text-neutral-200',
      'text-xl',
      'font-bold',
      'font-raleway',
      'mb-3',
      className
    )}
    {...rest}
  />
);
