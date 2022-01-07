import { DesktopNavbar } from './DesktopNavbar';
import { MobileNavbar } from './MobileNavbar';

export const Navbar = () => (
  <>
    <div className="lg:hidden">
      <MobileNavbar />
    </div>
    <div className="hidden lg:block">
      <DesktopNavbar />
    </div>
  </>
);
