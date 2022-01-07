import { Menu } from '../../../icons';
import { MobileNavbarLink } from './MobileNavbarLink';

import { links } from './links';

export const MobileNavbar = () => (
  <nav className="block shadow-sm relative">
    <div className="flex items-center">
      <button className="h-16 px-4 focus:ring-inset focus:ring-4 focus:ring-primary-100 transition-shadow">
        <Menu className="text-4xl text-neutral-800" />
      </button>
    </div>
  </nav>
);
