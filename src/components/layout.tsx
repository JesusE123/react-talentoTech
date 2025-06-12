
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

import "../index.css";

const Layout = () => {

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
