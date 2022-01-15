import { Logo } from '../../Logo/Logo';
import { links } from './links';
import { NavbarLink } from './NavbarLink';

export const DesktopNavbar = () => (
  <nav className="block shadow-sm relative">
    <ul className="flex justify-center">
      <li>
        <NavbarLink className="h-16 px-8" href="/">
          <Logo className="h-10 w-10" />
        </NavbarLink>
      </li>
      {links.map(({ href, label }) => (
        <li key={href}>
          <NavbarLink className="h-16 px-8" href={href}>
            {label}
          </NavbarLink>
        </li>
      ))}
    </ul>
  </nav>
);
