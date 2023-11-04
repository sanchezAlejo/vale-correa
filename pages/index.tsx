import React, { useState } from "react";
import IconsTouch from "../components/home";
import useModal from "../hooks/useModal";
import Welcome from "../components/home/components/Welcome";
const Home = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [nextHome, setNextHome] = useState(false);
  // setTimeout(() => {
  //   setNextHome(true);
  // }, 1000);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <IconsTouch />
      {!nextHome && <Welcome />}
    </div>
  );
};

export default Home;
