import { DesktopNavbarLink } from './DesktopNavbarLink';
import { Logo } from '../../Logo/Logo';
import { links } from './links';

export const DesktopNavbar = () => (
  <nav className="block shadow-sm relative">
    <ul className="flex justify-center">
      <li>
        <DesktopNavbarLink className="h-16 px-8" href="/">
          <Logo className="h-10 w-10" />
        </DesktopNavbarLink>
      </li>
      {links.map(({ href, label }) => (
        <li key={href}>
          <DesktopNavbarLink className="h-16 px-8" href={href}>
            {label}
          </DesktopNavbarLink>
        </li>
      ))}
    </ul>
  </nav>
);
