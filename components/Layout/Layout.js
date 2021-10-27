import { Meta } from './Meta';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Layout = ({ children }) => (
  <>
    <Meta />
    <Navbar />
    <main className="min-h-screen">{children}</main>
    <Footer />
  </>
);
