import React from "react";
import { iconType } from "./iconTypes";

const Play: React.FC<iconType> = ({ size, color, background }) => {
  return (
    <svg
      height={size ? size : "100%"}
      width={size ? size : "100%"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.01 19"
    >
      <defs>
        {/* <style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;}</style> */}
      </defs>
      <g id="Capa_2" data-name="Capa 2">
        <g id="Capa_1-2" data-name="Capa 1">
          <path d="M.52,10A9,9,0,1,0,5.46,1.46a8.88,8.88,0,0,0-1.39.86c-.22.17-.42.34-.62.51s-.65.65-.83.87L2.38,4A9,9,0,0,0,.52,10m.55-.11a8.44,8.44,0,1,1,8.81,8A8.46,8.46,0,0,1,1.07,9.89Z" />
          <path d="M7.47,6c-.27.08-.21.35-.21.63v5.95c0,.29,0,.56.2.64s.46-.16.6-.24l3.24-1.87c.73-.43,1.44-.82,2.16-1.25a.28.28,0,0,0,0-.51l-.54-.32c-1.58-.93-3.25-1.88-4.85-2.8C7.92,6.18,7.64,6,7.47,6" />
        </g>
      </g>
    </svg>
  );
};

export default Play;
