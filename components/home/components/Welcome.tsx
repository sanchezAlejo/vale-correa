import React from "react";
import Favicon from "../../icons/Favicon";
import BarLoading from "../../icons/BarLoading";

const Welcome = () => {
  return (
    <div className="fixed flex items-center justify-center w-full h-screen bg-white">
      {/* <h1 className="relative flex flex-col items-center justify-center textAnimation fadeBackground text-9xl">
        <div className="absolute flex items-center justify-center w-full h-full icon-animation ">
          <Favicon />
        </div>
        VCORREA
      </h1> */}
      <div className="text-center">
        <h2 className="text-5xl font-bold">hola! </h2>
        <br />
        <p className="mb-10 text-lg font-semibold" >
          estas ingrensando <br /> a un área de plena lectura <br /> asique,
          ¡ponete comodx!
        </p>
        <BarLoading size="70%"/>
      </div>
    </div>
  );
};

export default Welcome;
