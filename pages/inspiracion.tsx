import React from "react";
import NavBar from "../components/home/nav-bar";
import LayoutHScreen from "../components/utils/LayoutHScreen";
import Footer from "../components/footer";
import NavSide from "../components/navbar-sidebar";

const inspiración = () => {
  return (
    <LayoutHScreen>
      <NavBar />
      <div className="flex items-start justify-start h-full pb-64 ">
        <div className="relative w-[20%] h-screen">
          <p className="absolute leading-none -rotate-90 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/4 text-[64px]">
            Inspiracion
          </p>
        </div>
        <div className="grid w-[80%] h-screen  grid-cols-3 grid-rows-2 gap-2">
          <div className="col-start-1 col-end-2 row-start-1 row-end-2 bg-blue-600 "></div>
          <div className="col-start-1 col-end-2 row-start-2 row-end-3 bg-yellow-200 "></div>
          <div className="col-span-1 row-span-3 bg-red-700 "></div>
          <div className="col-start-3 col-end-4 row-start-1 row-end-2 bg-blue-600 "></div>
          <div className="col-start-3 col-end-4 row-start-2 row-end-3 bg-yellow-200 "></div>
        </div>
      </div>
      <Footer fixed={true} />
    </LayoutHScreen>
  );
};

export default inspiración;
