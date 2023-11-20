import React from "react";
import NavBar from "../home/nav-bar";
import SideBar from "../home/nav-bar/years-side-bar";
import { AppProvider } from "../utils/AppProvider";
const NavSide = () => {
  return (
    <div className="w-full ">
      <AppProvider>
        <NavBar />
        <SideBar />
      </AppProvider>
    </div>
  );
};
export default NavSide;
