"use client";

import { useEffect, useRef, useState } from "react";
import { HiOutlineMenu, HiXCircle } from "react-icons/hi";
import style from "./header.module.css";
export default function Header() {
  let [scrol, setScrol] = useState(0);
  const [opacity, setOpacity] = useState(false);
  const [clickBuger, setClickBurguer] = useState(false);

  function handleHiden() {
    setClickBurguer((opac) => !opac);
  }

  useEffect(() => {
    function handlescrolly() {
      if (window.scrollY > scrol) {
        setOpacity(true);
        if (clickBuger) {
          setClickBurguer(false);
        }
      } else {
        setOpacity(false);
      }

      setScrol(window.scrollY);
    }
    window.addEventListener("scroll", handlescrolly);
    return () => window.removeEventListener("scroll", handlescrolly);
  }, [scrol]);
  return (
    <header
      className={`w-full z-50  bg-black opacity-90 flex justify-end  px-7 py-3 fixed scale-z-100 ${opacity ? "hidden" : "block"}`}
    >
      <div className={`w-full ${clickBuger ? "h-screen" : ""} `}>
        {!clickBuger && (
          <div className={`w-full flex justify-end min-md:hidden bg-black`}>
            <HiOutlineMenu
              onClick={handleHiden}
              className="opacity-100 hover:text-purple-800  transition duration-300 text-white"
              size={48}
            />
          </div>
        )}
        {clickBuger && (
          <div className={`w-full flex justify-end min-md:hidden bg-black`}>
            <HiXCircle
              onClick={handleHiden}
              className="opacity-100 hover:text-purple-800  transition duration-300 text-white"
              size={48}
            />
          </div>
        )}

        <nav
          className={` font-bold opacity-100  ${clickBuger ? style.navOpen : style.nav}`}
        >
          <a
            href="#contatos"
            onClick={handleHiden}
            className="inline-block px-3 py-2 hover:bg-purple-800 bg-purple-600 rounded transition duration-300"
          >
            Contatos
          </a>
          <a
            href="#projetos"
            onClick={handleHiden}
            className="inline-block px-3 py-2 hover:bg-purple-800 bg-purple-600 rounded transition duration-300"
          >
            Projetos
          </a>
          <a
            href="#infos"
            onClick={handleHiden}
            className="inline-block px-3 py-2 hover:bg-purple-800 bg-purple-600 rounded transition duration-300"
          >
            Mais informações
          </a>
        </nav>
      </div>
    </header>
  );
}
