import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NavBar from "../../components/home/nav-bar";
import NavBarFooter from "../../components/navbar-footer";

const DerechoId = () => {
  const router = useRouter();
  const [content, setContent] = useState([
    {
      id: 0,
      title: "ONU y los Derechos Humanos",
      description:
        "Los derechos humanos son derechos inherentes a todos los seres humanos,\n sin distinción alguna de raza, sexo, nacionalidad, origen étnico, lengua, religión o \n cualquier otra condición",
    },
  ]);
  console.log(router);
  console.log(router.query.ID);
  useEffect(() => {
    // traerDatosdelid
  }, []);

  return (
    <NavBarFooter>
      <div className="flex flex-col items-center justify-center h-full mx-auto max-w-3/5 gap-9">
        {content.map((e) => (
          <>
            <h1 className="text-7xl font-playfairExtraBold">{e.title}</h1>

            <p className="text-xl text-black ">
              {e.description.split("\n").map((line, index) => (
                <>
                  {line}
                  <br />
                </>
              ))}
            </p>
          </>
        ))}
      </div>
    </NavBarFooter>
  );
};

export default DerechoId;
