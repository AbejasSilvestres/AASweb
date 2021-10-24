import { Meta } from '../Meta/Meta';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';

export const Layout = ({ children }) => (
  <>
    <Meta />
    <Navbar />
    <main className="min-h-screen">{children}</main>
    <Footer />
  </>
);
