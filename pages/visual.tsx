import React from "react";
import NavBar from "../components/home/nav-bar";
import LayoutHScreen from "../components/utils/LayoutHScreen";
import Footer from "../components/footer";

const visual = () => {
  return (
    <LayoutHScreen>
      <NavBar />
      <Footer />
    </LayoutHScreen>
  );
};

export default visual;
