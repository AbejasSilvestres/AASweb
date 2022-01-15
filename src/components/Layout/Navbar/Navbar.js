import { DesktopNavbar } from './DesktopNavbar';
import { MobileNavbar } from './MobileNavbar';

export const Navbar = () => (
  <>
    <div className="h-16 shrink-0" />
    <div className="fixed w-full bg-neutral-0 shadow-sm z-3000">
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
      <div className="hidden lg:block">
        <DesktopNavbar />
      </div>
    </div>
  </>
);
