import React from "react";

const ButtonBack = ({ onClick, children }) => {
  return (
    <div className="grid bg-black rounded-full w-14 h-14 place-items-center" onClick={onClick}>
      {children}
    </div>
  );
};

export default ButtonBack;
