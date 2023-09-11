import Header from "../Static/Header";
import Footer from "../Static/Footer";
import { Outlet } from "react-router-dom";
// import Hero from "../../Pages/Hero";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
