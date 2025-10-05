import React from "react";
import NavBar from "../components/NavBar/NavBar.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Outlet/>
      </div>
    </>
  );
}

export default Layout;
