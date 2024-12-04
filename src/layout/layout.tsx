import Footer from "../components/Footer";
import { Header } from "../components/Header";

interface layoutProps {
  children: JSX.Element;
}

export const Layout = ({ children }: layoutProps) => {
  return (
    
      <div className="bg-gray-800 ">
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
   
  );
};

export default Layout;
