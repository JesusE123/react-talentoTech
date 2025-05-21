// Ajusta el path si es necesario
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Outlet />
    </div>
  );
};

export default Layout;
