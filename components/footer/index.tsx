import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center h-48 bg-black">
      <p className="text-white">icon</p>
      <Link className="text-white" href="#">
        valeriacorrea@gmail.com
      </Link>
      <p className="text-white">icon</p>
      <Link className="text-white" href={"#"}>
        valecorrea
      </Link>
    </div>
  );
};

export default Footer;
