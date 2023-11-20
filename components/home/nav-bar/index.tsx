import React, { useEffect, useState } from "react";
import IconNavbar from "./IconNavbar";
import Link from "next/link";
import { useRouter } from "next/router";
import YearSideBar from "./years-side-bar";

const NavBar = () => {
  const router = useRouter();
  const menuItems = [
    { label: "derecho", href: "derecho" },
    { label: "sobre mi", href: "sobre-mi" },
    { label: "filosofía", href: "filosofia" },
    { label: "visual", href: "visual" },
    { label: "inspiración", href: "inspiracion" },
    { label: "bienestar", href: "bienestar" },
    { label: "psicologia", href: "psicologia" },
  ];

  return (
    <div className="flex items-center justify-between  h-[100px] w-full">
      <IconNavbar />
      <ul className="flex gap-4">
        {menuItems.map((item) => (
          <li
            key={item.href}
            className={`w-max ${
              router.pathname === `/${item.href}` && "font-medium"
            }`}
          >
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
