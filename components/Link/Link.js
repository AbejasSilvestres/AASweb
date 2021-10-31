import NextLink from 'next/link';
import classNames from 'classnames';

export const Link = ({ className, children, ...rest }) => (
  <NextLink {...rest}>
    <a
      className={classNames(
        'text-primary-500',
        'hover:text-primary-600',
        'focus-within:text-primary-600',
        'font-semibold',
        'text-lg',
        className
      )}
    >
      {children}
    </a>
  </NextLink>
);
