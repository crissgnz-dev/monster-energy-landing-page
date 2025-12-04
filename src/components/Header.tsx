import icon from "/monster-energy-icon.png";
import menu from "../assets/general/menu.svg";
import Cross from "../assets/general/cross.svg";
import Github from "../assets/social-media/github.svg";
import { useState } from "react";

export default function Header() {
  const [handleOpenMenu, setHandleOpenMenu] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between min-h-10 p-5">
        <div className="w-16">
          <img src={icon} alt="" />
        </div>

        <button
          className="w-8 cursor-pointer"
          onClick={() => setHandleOpenMenu(true)}
        >
          <img src={menu} alt="" />
        </button>
      </div>

      {handleOpenMenu ? (
        <div className="flex flex-col w-xs bg-stone-900 fixed top-0 right-0 z-30 h-full">
          <button
            className="w-8 self-end m-8 cursor-pointer"
            onClick={() => setHandleOpenMenu(false)}
          >
            <img src={Cross} alt="" />
          </button>
          <nav className="flex flex-col items-center text-center p-5 gap-10">
            <a href="#" className="text-3xl">
              INICIO
            </a>
            <a href="#" className="text-3xl">
              NOVEDADES
            </a>
            <a href="#" className="text-3xl">
              ATLETAS
            </a>
            <a href="#" className="text-3xl">
              PROMOCIONES
            </a>
            <a href="#" className="text-3xl">
              EVENTOS
            </a>
          </nav>
          <a
            href="#"
            className="bg-stone-800 text-center flex justify-center items-center self-center mt-5 gap-2 px-4 py-2 rounded-lg absolute bottom-8"
          >
            <img src={Github} className="w-6" />
            <p className="text-xl mt-1">@crissgnz-dev</p>
          </a>
        </div>
      ) : null}
    </>
  );
}
