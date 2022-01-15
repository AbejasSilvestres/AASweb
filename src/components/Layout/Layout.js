import { Footer } from './Footer';
import { Meta } from './Meta';
import { Navbar } from './Navbar';

export const Layout = ({ children }) => (
  <>
    <Meta />
    <div className="flex flex-col h-full">
      <Navbar />
      <main>{children}</main>
      <div className="grow">
        <Footer />
      </div>
    </div>
  </>
);
