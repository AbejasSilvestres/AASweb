import { Meta } from '../Meta/Meta';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';

export const Layout = ({ children }) => (
  <>
    <Meta />
    <Navbar />
    <div className="min-h-screen">
      <main>{children}</main>
    </div>
    <Footer />
  </>
);
