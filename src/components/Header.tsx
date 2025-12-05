import icon from "/monster-energy-icon.png";
import menu from "../assets/general/menu.svg";
import Cross from "../assets/general/cross.svg";
import Github from "../assets/social-media/github.svg";
import { useEffect, useState } from "react";

export default function Header() {
  const [handleOpenMenu, setHandleOpenMenu] = useState(false);

  useEffect(() => {
    document.addEventListener("click", () => {
      setHandleOpenMenu(false);
    });

    return () => {
      document.removeEventListener("click", () => {
        setHandleOpenMenu(false);
      });
    };
  }, []);

  return (
    <div className="relative h-28 w-full">
      <div className="flex bg-[#161616] items-center justify-between w-full min-h-10 p-5 fixed z-30">
        <div className="w-16">
          <img src={icon} alt="" />
        </div>

        <div
          className="flex justify-items-center"
          onClick={(event) => {
            event.stopPropagation();
          }}>
          <button
            className="w-8 cursor-pointer"
            onClick={() => setHandleOpenMenu(true)}>
            <img src={menu} alt="" />
          </button>
        </div>
      </div>

      {handleOpenMenu ? (
        <div
          className="flex flex-col w-xs bg-stone-900 fixed top-0 right-0 z-40 h-full transition"
          onClick={(event) => {
            event.stopPropagation();
          }}>
          <button
            className="w-8 self-end m-5 mt-8 cursor-pointer"
            onClick={() => setHandleOpenMenu(false)}>
            <img src={Cross} alt="" />
          </button>
          <nav className="flex flex-col items-center text-center p-5 gap-6">
            <a
              href="/"
              className="text-3xl p-1 py-3 w-full hover:scale-105 transition-all">
              INICIO
            </a>
            <a
              href="https://www.monsterenergy.com/es-ar/news/"
              target="_blank"
              className="text-3xl p-1 py-3 w-full hover:scale-105 transition-all">
              NOVEDADES
            </a>
            <a
              href="https://www.monsterenergy.com/es-ar/roster/"
              target="_blank"
              className="text-3xl p-1 py-3 w-full hover:scale-105 transition-all">
              ATLETAS
            </a>
            <a
              href="https://www.monsterenergy.com/es-ar/promotions/"
              target="_blank"
              className="text-3xl p-1 py-3 w-full hover:scale-105 transition-all">
              PROMOCIONES
            </a>
            <a
              href="https://www.monsterenergy.com/es-ar/events/"
              target="_blank"
              className="text-3xl p-1 py-3 w-full hover:scale-105 transition-all">
              EVENTOS
            </a>
          </nav>
          <a
            href="https://github.com/crissgnz-dev"
            target="_blank"
            className="bg-stone-800 text-center flex justify-center items-center self-center mt-5 gap-2 px-4 py-2 rounded-lg absolute bottom-8 hover:scale-105 transition-all">
            <img src={Github} className="w-6" />
            <p className="text-xl mt-1">@crissgnz-dev</p>
          </a>
        </div>
      ) : null}
    </div>
  );
}
