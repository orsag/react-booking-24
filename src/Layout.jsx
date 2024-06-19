import "./layout.css";
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <div className="layout-navbar">
        <Navbar />
        <Header />
      </div>
      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;