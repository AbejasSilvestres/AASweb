import NextLink from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

export const DesktopNavbarLink = ({ className, children, href, ...rest }) => {
  const { pathname } = useRouter();
  const isActive = href === '/' ? pathname === '/' : pathname.includes(href);

  return (
    <NextLink href={href} {...rest}>
      <a
        className={classNames(
          isActive ? 'text-primary-500' : 'text-neutral-900',
          isActive ? 'border-primary-400' : 'border-neutral-0',
          'inline-flex',
          'items-center',
          'whitespace-nowrap',
          'hover:text-primary-500',
          'focus-within:text-primary-500',
          'outline-none',
          'font-semibold',
          'text-lg',
          'border-b-2',
          className
        )}
      >
        {children}
      </a>
    </NextLink>
  );
};
