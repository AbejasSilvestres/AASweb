import { NavbarLink } from './NavbarLink';

const navbarLinks = [
  { href: '/', label: 'Abejas Silvestres' },
  { href: '/bees', label: 'Abejas de España' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/resources', label: 'Recursos' },
  { href: '/blog', label: 'Blog' },
  { href: '/about-us', label: 'Quiénes somos' },
];

export const Navbar = () => (
  <nav className="block shadow-sm">
    <ul className="flex justify-center">
      {navbarLinks.map(({ href, label }) => (
        <li key={href}>
          <NavbarLink className="py-4 px-6" href={href}>
            {label}
          </NavbarLink>
        </li>
      ))}
    </ul>
  </nav>
);
