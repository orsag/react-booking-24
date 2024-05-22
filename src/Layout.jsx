import "./layout.css";
import Navbar from "./components/navbar/Navbar"
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <div className="layout-navbar">
        <Navbar />
      </div>
      <div className="layout-content">
        <Outlet/>
      </div>
    </div>
  );
}

export default Layout;