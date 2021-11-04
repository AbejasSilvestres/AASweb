import { NavbarLink } from './NavbarLink';

const navbarLinks = [
  { href: '/', label: 'Abejas Silvestres' },
  { href: '/bees', label: 'Abejas Ibéricas' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/resources', label: 'Recursos' },
  { href: '/posts', label: 'Blog' },
  { href: '/about', label: ' ¿Quiénes somos?' },
];

export const Navbar = () => (
  <nav className="block shadow-sm">
    <ul className="flex flex-wrap justify-evenly">
      {navbarLinks.map(({ href, label }) => (
        <li key={href}>
          <NavbarLink className="py-2 px-6 sm:py-4 sm:text-lg" href={href}>
            {label}
          </NavbarLink>
        </li>
      ))}
    </ul>
  </nav>
);
