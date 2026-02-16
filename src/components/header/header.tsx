"use client";

import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
export default function Header() {
  let [scrol, setScrol] = useState(0);
  const [opacity, setOpacity] = useState(false);
  useEffect(() => {
    function handlescrolly() {
      if (window.scrollY > scrol) {
        setOpacity(true);
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
      className={`w-full bg-black opacity-90 flex justify-end  px-7 py-3 fixed scale-z-100 ${opacity ? "hidden" : "block"}`}
    >
      <nav className="flex gap-3 font-bold justify-center max-md:hidden opacity-100">
        <a
          href="#contatos"
          className="inline-block px-3 py-2 hover:bg-purple-800 bg-purple-600 rounded transition duration-300"
        >
          Contatos
        </a>
        <a
          href="#projetos"
          className="inline-block px-3 py-2 hover:bg-purple-800 bg-purple-600 rounded transition duration-300"
        >
          Projetos
        </a>
        <a
          href="#infos"
          className="inline-block px-3 py-2 hover:bg-purple-800 bg-purple-600 rounded transition duration-300"
        >
          Mais informações
        </a>
      </nav>
      <div className="w-full flex justify-end min-md:hidden bg-black">
        <HiOutlineMenu
          className="opacity-100 hover:text-purple-800  transition duration-300 text-white"
          size={48}
        />
      </div>
    </header>
  );
}
