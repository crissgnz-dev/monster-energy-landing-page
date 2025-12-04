import MonsterEnergy from "/monster-energy-footer.png";

import Facebook from "../assets/social-media/facebook.svg";
import Instagram from "../assets/social-media/instagram.svg";
import X from "../assets/social-media/x.svg";
import Youtube from "../assets/social-media/youtube.svg";
import Tiktok from "../assets/social-media/tiktok.svg";
import Twitch from "../assets/social-media/twitch.svg";

export default function Footer() {
  return (
    <>
      <footer className="grid grid-cols-4 p-8">
        <div className="col-span-2 px-10">
          <img src={MonsterEnergy} className="w-60" />
          <nav>
            <ul className="flex gap-4 mt-4">
              <li>
                <a href="#">
                  <img className="w-7" src={X} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="w-7" src={Facebook} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="w-7" src={Youtube} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="w-7" src={Instagram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="w-7" src={Tiktok} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="w-7" src={Twitch} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl">Compañía</h2>
          <a href="" className="text-stone-400 text-lg">
            Carrera
          </a>
          <a href="" className="text-stone-400 text-lg">
            Acerca de nosotros
          </a>
          <a href="" className="text-stone-400 text-lg">
            Monster Army
          </a>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl">Soporte</h2>
          <a href="" className="text-stone-400 text-lg">
            Preguntas frecuentes
          </a>
          <a href="" className="text-stone-400 text-lg">
            Contáctanos
          </a>
        </div>
        <div className="flex gap-6 pb-4 pl-10 w-full col-span-4 mt-5">
          <a
            href="#"
            className="text-stone-700 transition hover:text-stone-500"
          >
            © Monster Energy Company
          </a>
          <a
            href="#"
            className="text-stone-700 transition hover:text-stone-500"
          >
            All Rights Reserved
          </a>
          <a
            href="#"
            className="text-stone-700 transition hover:text-stone-500"
          >
            Términos y Condiciones
          </a>
          <a
            href="#"
            className="text-stone-700 transition hover:text-stone-500"
          >
            Políticas de Privacidad
          </a>
          <a
            href="#"
            className="text-stone-700 transition hover:text-stone-500"
          >
            Políticas de Cookies
          </a>
          <a
            href="#"
            className="text-stone-700 transition hover:text-stone-500"
          >
            No Vender Mi información
          </a>
        </div>
      </footer>
    </>
  );
}
