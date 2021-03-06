import classNames from 'classnames';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export const NavbarLink = ({ className, children, href, onClick, ...rest }) => {
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
        onClick={onClick}
      >
        {children}
      </a>
    </NextLink>
  );
};
