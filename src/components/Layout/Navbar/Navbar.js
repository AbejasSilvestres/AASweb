import { NavbarLink } from './NavbarLink';
import { getBasePath } from '../../../lib/utils';
import { Logo } from '../../Logo/Logo';

const navbarLinks = [
  {
    href: '/',
    label: <Logo className="h-10 w-10" />,
  },
  { href: '/iberian-bees', label: 'Abejas Ibéricas' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/resources', label: 'Recursos' },
  { href: '/posts', label: 'Blog' },
  { href: '/about', label: ' ¿Quiénes somos?' },
];

export const Navbar = () => (
  <nav className="block shadow-sm relative">
    <ul className="flex justify-center">
      {navbarLinks.map(({ href, label }) => (
        <li key={href}>
          <NavbarLink className="h-16 px-8" href={href}>
            {label}
          </NavbarLink>
        </li>
      ))}
    </ul>
  </nav>
);
