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
                <a
                  href="https://twitter.com/MonsterEnergy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  target="_blank"
                  className="w-fit flex hover:scale-110 transition">
                  <img className="w-7" src={X} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/MonsterEnergy/"
                  target="_blank"
                  className="w-fit flex hover:scale-110 transition">
                  <img className="w-7" src={Facebook} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCg1uYO329KcAEN-PQdoQMKQ"
                  target="_blank"
                  className="w-fit flex hover:scale-110 transition">
                  <img className="w-7" src={Youtube} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/monsterenergy/"
                  target="_blank"
                  className="w-fit flex hover:scale-110 transition">
                  <img className="w-7" src={Instagram} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@monsterenergy?lang=en"
                  target="_blank"
                  className="w-fit flex hover:scale-110 transition">
                  <img className="w-7" src={Tiktok} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitch.tv/monsterenergy"
                  target="_blank"
                  className="w-fit flex hover:scale-110 transition">
                  <img className="w-7" src={Twitch} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl">Compañía</h2>
          <a
            href="https://www.monsterenergy.com/es-ar/careers/"
            target="_blank"
            className="text-stone-400 w-fit p-1 pl-0 text-lg transition hover:text-stone-300">
            Carrera
          </a>
          <a
            href="https://www.monsterenergy.com/es-ar/about-us/"
            target="_blank"
            className="text-stone-400 w-fit p-1 pl-0 text-lg transition hover:text-stone-300">
            Acerca de nosotros
          </a>
          <a
            href="https://www.monsterarmy.com/"
            target="_blank"
            className="text-stone-400 w-fit p-1 pl-0 text-lg transition hover:text-stone-300">
            Monster Army
          </a>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl">Soporte</h2>
          <a
            href="https://www.monsterenergy.com/es-ar/faqs/"
            target="_blank"
            className="text-stone-400 w-fit p-1 pl-0 text-lg transition hover:text-stone-300">
            Preguntas frecuentes
          </a>
          <a
            href="https://www.monsterenergy.com/es-ar/contact-us/"
            target="_blank"
            className="text-stone-400 w-fit p-1 pl-0 text-lg transition hover:text-stone-300">
            Contáctanos
          </a>
        </div>
        <div className="flex gap-6 pb-4 pl-10 w-full col-span-4 mt-5">
          <p className="text-stone-700">© Monster Energy Company</p>
          <p className="text-stone-700">All Rights Reserved</p>
          <a
            href="https://www.monsterenergy.com/es-ar/terms-of-use/"
            target="_blank"
            className="text-stone-700 transition hover:text-stone-500">
            Términos y Condiciones
          </a>
          <a
            href="https://www.monsterenergy.com/es-ar/privacy-policy/"
            target="_blank"
            className="text-stone-700 transition hover:text-stone-500">
            Políticas de Privacidad
          </a>
          <a
            href="https://www.monsterenergy.com/es-ar/cookie-policy/"
            target="_blank"
            className="text-stone-700 transition hover:text-stone-500">
            Políticas de Cookies
          </a>
          <a
            href="https://www.monsterenergy.com/es-ar/news/#"
            target="_blank"
            className="text-stone-700 transition hover:text-stone-500">
            No Vender Mi información
          </a>
        </div>
      </footer>
    </>
  );
}
