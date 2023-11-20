import React, { useEffect, useState } from "react";
import IconNavbar from "./IconNavbar";
import Link from "next/link";
import { useRouter } from "next/router";
import YearSideBar from "./years-side-bar";
import { useAppContext } from "../../utils/AppProvider";

interface props {
  maxWhith?: boolean;
}
interface SubCategory {
  id: number;
  category: string;
  sub: string[];
}
const NavBar: React.FC<props> = ({ maxWhith }) => {
  const { state, dispatch } = useAppContext();
  const handleCategoryClick = (category) => {
    dispatch({ type: "SET_ACTIVE_CATEGORY", payload: category });
  };
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
  const [subCategory, setSetsubCategory] = useState<SubCategory[]>([]);
  useEffect(() => {
    // getCategory
    if (router.pathname.includes("derecho")) {
      setSetsubCategory([
        { id: 0, category: "derecho", sub: ["salud", "penal", "otros"] },
      ]);
    }
  }, []);

  return (
    <div
      className={`${
        maxWhith && "px-[5%] "
      } flex items-center justify-center  mx-auto h-[100px] w-full py-6 relative`}
    >
      <div className="absolute left-[5%] top-[50%] translate-y-[-50%]">
        <IconNavbar />
      </div>
      <ul className="flex gap-4">
        {menuItems.map((item) => (
          <li
            key={item.href}
            className={`w-max relative ${
              router.pathname === `/${item.href}` && "font-medium"
            }`}
          >
            {/* <p onClick={() => handleCategoryClick(item.label)}>{item.label}</p> */}
            <Link href={`/${item.href}`}>{item.label}</Link>
            {subCategory.map(
              (e) =>
                item.label === e.category && (
                  <div
                    className="absolute left-[50%] translate-x-[-50%] top-8"
                    key={e.id}
                  >
                    <ul>
                      {e.sub.map((subItem) => (
                        <li
                          className="font-normal cursor-pointer"
                          key={subItem}
                          onClick={() =>
                            dispatch({
                              type: "SET_ACTIVE_CATEGORY",
                              payload: subItem,
                            })
                          }
                        >
                          *{subItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
