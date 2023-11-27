import React from "react";
import Favicon from "../../icons/Favicon";
import BarLoading from "../../icons/BarLoading";

const Welcome = () => {
  return (
    <div className="fixed flex items-center justify-center w-full h-screen bg-white">
      <div
        className="relative flex flex-col items-center justify-center w-full h-[10vw] overflow-hidden
      "
      >
        <div className="absolute  textAnimation w-[0]  text-9xl top-1/2 translate-y-translate50 font-playfair translate-x-translate50">
          VCORREA
        </div>
        <div className="absolute overflow-hidden -translate-y-1/2 bg-white -translate-x-translate50 top-1/2 favicon-anim">
          <div className="h-full faviconDisable">
            <Favicon size="100%" />
          </div>
          <div className="h-full faviconActive">
            <Favicon size="100%" background="red" />
          </div>
        </div>
      </div>
      {/* <div className="text-center">
        <h2 className="text-4xl font-playfairExtraBold"><strong>hola!</strong> </h2>
        <br />
        <p className="mb-10 text-2xl font-playfair">
          estas ingrensando <br /> a un área de plena lectura <br /> asique,
          ¡ponete comodx!
        </p>
        <BarLoading size="70%" />
      </div> */}
    </div>
  );
};

export default Welcome;
