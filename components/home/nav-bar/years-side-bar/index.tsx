import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const YearSideBar = () => {
  const [activeYear, setActiveYear] = useState(null);
  const [yearList, setYearList] = useState([]);
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  useEffect(() => {
    // Simulación de datos del endpoint de años
    setYearList([
      {
        year: 2023,
      },
      {
        year: 2024,
      },
    ]);
  }, []);

  const handleYearClick = async (clickedYear) => {
    // Simulación de llamada al endpoint para obtener categorías
    // try {
    //   const response = await fetch(`tu_endpoint/${clickedYear}`);
    //   const data = await response.json();
    //   setCategories(data.categories); // Asumiendo que el servidor devuelve un array de categorías
    //   setActiveYear(clickedYear);
    // } catch (error) {
    //   console.error("Error al obtener categorías:", error);
    // }

    setCategories([
      {
        id: 0,
        title: "ONU y los Derechos Humanos",
      },
      {
        id: 1,
        title: "Derecho a la Sanidad",
      },
      {
        id: 2,
        title: "Derechos humanos y democracia",
      },
    ]);
    setActiveYear(clickedYear);
  };

  return (
    <div className="h-full overflow-y-scroll w-full pl-[150px] pt-28">
      {yearList.map((yearItem, index) => (
        <div key={index}>
          <div className="flex" key={yearItem.year}>
            <h3
              className={`${
                activeYear === yearItem.year && "font-extrabold text-5xl"
              } w-auto cursor-pointer`}
              onClick={() => handleYearClick(yearItem.year)}
            >
              {yearItem.year}
            </h3>
            {activeYear === yearItem.year && (
              <ul className={"pl-10"}>
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link href={`/${router.pathname}/${category.id}`}>
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default YearSideBar;
