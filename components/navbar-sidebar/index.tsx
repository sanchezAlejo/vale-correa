import React from "react";
import NavBar from "../home/nav-bar";
import SideBar from "../home/nav-bar/years-side-bar";

const index = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <NavBar />
      <SideBar years={1} />
    </div>
  );
};
export default index;
