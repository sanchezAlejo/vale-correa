import React from "react";
import Favicon from "../icons/Favicon";
import Hammer from "../icons/Hammer";
import Camera from "../icons/Camera";
import Book from "../icons/Book";
import Ligth from "../icons/Ligth";
import Play from "../icons/Play";
import ValeCorrea from "../icons/ValeCorrea";
import Heart from "../icons/Heart";
import IconMenu from "./IconMenu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import listOfBanner from "./listOfBanner.json";
import slider from "./swiper.module.css";
const IconsTouch = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    style: {
      textAlign: "center",
      with: "max-content",
      "& .slick-slide": {
        margin: "0",
        with: "max-content",
      },
      "& > div": {
        width: "auto !important",
        fontSize: "2.4vw",
        color: "black",
        /* Agrega otros estilos necesarios */
      },
      "& > div>div": {
        width: "auto !important",
        fontSize: "2.4vw",
        color: "black",
        /* Agrega otros estilos necesarios */
      },
    },
  };
  const responsiveSettings = [
    {
      breakpoint: 4500, // Ancho de la pantalla en píxeles
      settings: {
        slidesToShow: 8, // Número de elementos a mostrar en pantallas más grandes
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1500, // Ancho de la pantalla en píxeles
      settings: {
        slidesToShow: 7, // Número de elementos a mostrar en pantallas más grandes
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024, // Ancho de la pantalla en píxeles
      settings: {
        slidesToShow: 5, // Número de elementos a mostrar en pantallas más grandes
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // Ancho de la pantalla en píxeles
      settings: {
        slidesToShow: 3, // Número de elementos a mostrar en pantallas medianas
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // Ancho de la pantalla en píxeles
      settings: {
        slidesToShow: 5, // Número de elementos a mostrar en pantallas pequeñas
        slidesToScroll: 1,
      },
    },
  ];
  console.log(slider);

  return (
    <div className="flex flex-col justify-between w-full min-h-[90vh]">
      <div className=" mt-36 relative w-[20vw] h-[20vw] mx-auto my-1 flex justify-center items-center">
        <IconMenu
          link={"derecho"}
          title={"hammer"}
          className="left-[50%]  top-[-30%] translate-x-[-50%]"
        >
          <Hammer size="65%" />
        </IconMenu>
        <IconMenu
          link={"derecho"}
          title={"hammer"}
          className="top-[-10%] right-[-15%] "
        >
          <Camera size="65%" />
        </IconMenu>
        <IconMenu
          link={"derecho"}
          title={"hammer"}
          className="right-[-30%]  top-[50%] translate-y-[-50%]"
        >
          <Book size="65%" />
        </IconMenu>
        <IconMenu
          link={"derecho"}
          title={"hammer"}
          className="bottom-[-15%] right-[-15%]"
        >
          <Ligth size="65%" />
        </IconMenu>
        <IconMenu
          link={"derecho"}
          title={"hammer"}
          className="right-[50%]  bottom-[-30%] translate-x-[50%]"
        >
          <Play size="65%" />
        </IconMenu>
        <IconMenu
          link={"derecho"}
          title={"hammer"}
          className="top-[-10%] left-[-10%] "
        >
          <ValeCorrea size="65%" />
        </IconMenu>
        <IconMenu
          link={"derecho"}
          title={"hammer"}
          className="left-[-30%]  bottom-[50%] translate-y-[50%] "
        >
          <Hammer size="65%" />
        </IconMenu>
        <IconMenu
          link={"derecho"}
          title={"hammer"}
          className="bottom-[-10%] left-[-10%] "
        >
          <Heart size="65%" />
        </IconMenu>
        <div className="w-[10vw] mx-auto">
          <Favicon />
        </div>
      </div>
      <div>
        {/* responsive={responsiveSettings} */}
        <Slider {...settings}>
          {listOfBanner.map((list) => (
            <div
              key={list.id}
              className={`w-[auto!important] text-[2.4vw] text-center text-black ${slider.className} slide-item`}
            >
              {list.name}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default IconsTouch;
