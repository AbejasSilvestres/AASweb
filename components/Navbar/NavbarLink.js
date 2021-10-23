import NextLink from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

export const NavbarLink = ({ className, children, href, ...rest }) => {
  const { pathname } = useRouter();
  const isActive = href === pathname;
  return (
    <NextLink href={href} {...rest}>
      <a
        className={classNames(
          isActive ? 'text-primary-500' : 'text-neutral-900',
          'inline-block',
          'hover:text-primary-500',
          'focus-within:text-primary-500',
          'outline-none',
          'font-raleway',
          'font-semibold',
          'text-lg',
          'border-b-2',
          isActive ? 'border-primary-400' : 'border-neutral-0',
          className
        )}
      >
        {children}
      </a>
    </NextLink>
  );
};
