import React from "react";
import { iconType } from "./iconTypes";

export const Book: React.FC<iconType> = ({ size, color, background }) => {
  return (
    <svg
      height={size ? size : "100%"}
      width={size ? size : "100%"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20.24 20.82"
      className={`${background ? background : " " } `}
    >
      <defs>
        {/* <style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;}</style> */}
      </defs>
      <g id="Capa_2" data-name="Capa 2">
        <g id="Capa_1-2" data-name="Capa 1">
          <path 
          fill={color ? color : "#000"}
            d="M16.49.5l-.09,0-1,.36A8,8,0,0,0,12.84,2.8,12.38,12.38,0,0,0,11,5.49a10.77,10.77,0,0,1-.48,1,13.89,13.89,0,0,0-2.3-3.7A8.37,8.37,0,0,0,5.63.88a4.92,4.92,0,0,0-1-.37h0l0,1.18-.75-.28A4.5,4.5,0,0,0,3,1.17l0,1c-.29-.07-1.2-.55-1.53-.59L1.38,2.83c-.16-.05-.53-.31-.64-.32h0c-.27,0-.19.46-.19.7V14.58c0,.54-.12,1.32.24,1.61l4.88,2.7c.79.46,1.63.9,2.44,1.35a6.88,6.88,0,0,1,.9.52c.06.13,0,.22.16.31a4.83,4.83,0,0,0,1.57.25h.06a4.23,4.23,0,0,0,.87-.11c.27-.06.51-.07.59-.33s.06-.16.24-.26l3.34-1.84c.4-.21.82-.46,1.22-.68l2.44-1.35c1.46-.82,1.26-.41,1.26-2.5V2.91c0-.3-.08-.41-.19-.41s-.56.35-.85.42l-.06-1.36c-.33,0-1.27.53-1.52.59l-.05-1a8.43,8.43,0,0,0-1.51.53c0-.2,0-.43,0-.63,0-.46,0-.58,0-.58ZM11,6.68a8,8,0,0,1,.4-.9A12.23,12.23,0,0,1,13,3.41a9.24,9.24,0,0,1,1-1,3.26,3.26,0,0,1,.36-.29A6.1,6.1,0,0,1,16,1.21V2a11.47,11.47,0,0,0-2.77,2.06c-.4.39-.77.8-1.16,1.26L11,6.68Zm-1,0A23.55,23.55,0,0,0,7.81,4.06,11.46,11.46,0,0,0,5,2l0-.79a6.37,6.37,0,0,1,1.71.93A9.58,9.58,0,0,1,9.18,5,10.16,10.16,0,0,1,10,6.69Zm1.73-.1a3.47,3.47,0,0,1,.29-.38,14.93,14.93,0,0,1,3-3,9.55,9.55,0,0,1,2.57-1.36v.55a5.85,5.85,0,0,0-.82.43,23.28,23.28,0,0,0-3.69,2.59L11.76,6.59Zm-2.4,0a.29.29,0,0,1-.14-.13,2.44,2.44,0,0,1-.33-.29c-.72-.68-1.58-1.33-2.37-1.94-.46-.35-1-.67-1.48-1L3.46,2.39l0-.52a9,9,0,0,1,1.78.83A12.07,12.07,0,0,1,7.45,4.42,18.34,18.34,0,0,1,9.24,6.49l.12.15Zm2.89.4c0-.18,0-.2.1-.29l.58-.51c.22-.22.52-.46.78-.67a22.29,22.29,0,0,1,3.47-2.36,13.24,13.24,0,0,1,2-.91h0l0,.91c-.1.09-3.29,1.83-3.46,1.92-.59.32-1.17.66-1.73,1-.25.13-1.62.92-1.75,1ZM9,7C8.77,7,5.67,5.22,5.42,5.08l-3.53-2,0-.82h0a12.41,12.41,0,0,1,2,.93,22.46,22.46,0,0,1,3.49,2.4c.29.23.52.44.8.68l.39.34A2.2,2.2,0,0,1,9,7Zm.07,13.2c-.12,0-6.83-3.74-7.6-4.18C1.31,16,1,15.87,1,15.73S1,6,1,4.72c0-.48,0-1.09,0-1.56C1.21,3.25,6.57,6.24,7,6.5A16.26,16.26,0,0,1,9,7.66c.07.12,0,11.39,0,12.57Zm3.15,0V7.67a6.47,6.47,0,0,1,1-.59l1-.56,2-1.12c.51-.27,3.88-2.18,4.08-2.23,0,.58,0,12.4,0,12.56a4,4,0,0,1-.95.59l-1,.56c-.36.2-5.93,3.3-6.09,3.36ZM11.74,7.38v.7a9.86,9.86,0,0,1-1.14.14A6.21,6.21,0,0,1,9.5,8.08V7.39c.67.08.9.12,1.12.12a10.26,10.26,0,0,0,1.12-.13Zm0,1.22v2.56a6.35,6.35,0,0,1-1.11.14h0a6.5,6.5,0,0,1-1.09-.13V8.61a9.74,9.74,0,0,0,1.1.12h.05a9.29,9.29,0,0,0,1.09-.13Zm0,3.09v.59a7.81,7.81,0,0,1-1.12.13h0a4.07,4.07,0,0,1-1.11-.14V11.7a9.75,9.75,0,0,0,1.1.11h.05a7.57,7.57,0,0,0,1.09-.12Zm0,1.11v3.32a3.1,3.1,0,0,1-1.12.16h0a5.7,5.7,0,0,1-1.1-.13V12.81c.7.07.9.12,1.13.12a10.47,10.47,0,0,0,1.11-.13Zm-1.17,4a8.46,8.46,0,0,0,1.17-.1v.65a3.84,3.84,0,0,1-1.16.14,2.9,2.9,0,0,1-1.07-.15v-.64a7.16,7.16,0,0,0,1.07.1Zm0,1.19a8.74,8.74,0,0,0,1.17-.11v1.71c0,.11-.4.13-.5.15a5.28,5.28,0,0,1-.62.05,7.3,7.3,0,0,1-1.11-.14V17.86a7.16,7.16,0,0,0,1.07.1Zm0,2.3h0a8,8,0,0,0,1.12-.12v.53a7.85,7.85,0,0,1-1.14.14,4.89,4.89,0,0,1-.87-.1c-.31-.06-.19-.06-.23-.1v-.46c.39,0,.68.11,1.11.11Z"
            transform="translate(-0.5 -0.5)"
          />
          <path 
          fill={color ? color : "#000"}
            stroke="#000"
            d="M19.28,5.68c-.2.05-5.07,2.9-5.47,3.13s-.46.28-.46,1c0,.37-.12,1.22.44,1l5.46-3.14c.49-.3.42-.34.42-1,0-.28.13-1.16-.39-1M13.86,9.42c.05-.12.51-.34.64-.41l4.66-2.68v.79l-5.3,3Z"
            transform="translate(-0.5 -0.5)"
          />
          <path 
          fill={color ? color : "#000"}
            d="M9.24,6.49l0,0a.29.29,0,0,0,.14.13l-.12-.15Z"
            transform="translate(-0.5 -0.5)"
          />
        </g>
      </g>
    </svg>
  );
};
export default Book;
