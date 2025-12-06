import MonsterEnergy from "/monster-energy-footer.png";

import Facebook from "../assets/social-media/facebook.svg";
import Instagram from "../assets/social-media/instagram.svg";
import X from "../assets/social-media/x.svg";
import Youtube from "../assets/social-media/youtube.svg";
import Tiktok from "../assets/social-media/tiktok.svg";
import Twitch from "../assets/social-media/twitch.svg";

export default function Footer() {
  return (
    <footer className="p-4 md:p-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 pb-8 border-b border-stone-800">
        <div className="lg:col-span-1">
          <img
            src={MonsterEnergy}
            alt="Logo de Monster Energy"
            className="w-40 sm:w-60"
          />
          <nav>
            <ul className="flex flex-wrap gap-3 sm:gap-4 mt-4">
              <li>
                <a
                  href="https://twitter.com/MonsterEnergy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  target="_blank"
                  className="w-fit flex hover:scale-110 transition duration-300">
                  <img className="w-6 sm:w-7" src={X} alt="X (Twitter)" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/MonsterEnergy/"
                  target="_blank"
                  className="w-fit flex hover:scale-110 transition duration-300">
                  <img className="w-6 sm:w-7" src={Facebook} alt="Facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCg1uYO329KcAEN-PQdoQMKQ"
                  target="_blank"
                  className="w-fit flex hover:scale-110 transition duration-300">
                  <img className="w-6 sm:w-7" src={Youtube} alt="YouTube" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/monsterenergy/"
                  target="_blank"
                  className="w-fit flex hover:scale-110 transition duration-300">
                  <img className="w-6 sm:w-7" src={Instagram} alt="Instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@monsterenergy?lang=en"
                  target="_blank"
                  className="w-fit flex hover:scale-110 transition duration-300">
                  <img className="w-6 sm:w-7" src={Tiktok} alt="TikTok" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitch.tv/monsterenergy"
                  target="_blank"
                  className="w-fit flex hover:scale-110 transition duration-300">
                  <img className="w-6 sm:w-7" src={Twitch} alt="Twitch" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* COLUMNA 2: Compañía */}
        <div className="flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold mb-1">Compañía</h2>
          <a
            href="https://www.monsterenergy.com/es-ar/careers/"
            target="_blank"
            className="text-stone-400 w-fit p-1 pl-0 text-md md:text-lg transition hover:text-neutral-300">
            Carrera
          </a>
          <a
            href="https://www.monsterenergy.com/es-ar/about-us/"
            target="_blank"
            className="text-stone-400 w-fit p-1 pl-0 text-md md:text-lg transition hover:text-neutral-300">
            Acerca de nosotros
          </a>
          <a
            href="https://www.monsterarmy.com/"
            target="_blank"
            className="text-stone-400 w-fit p-1 pl-0 text-md md:text-lg transition hover:text-neutral-300">
            Monster Army
          </a>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold mb-1">Soporte</h2>
          <a
            href="https://www.monsterenergy.com/es-ar/faqs/"
            target="_blank"
            className="text-stone-400 w-fit p-1 pl-0 text-md md:text-lg transition hover:text-neutral-300">
            Preguntas frecuentes
          </a>
          <a
            href="https://www.monsterenergy.com/es-ar/contact-us/"
            target="_blank"
            className="text-stone-400 w-fit p-1 pl-0 text-md md:text-lg transition hover:text-neutral-300">
            Contáctanos
          </a>
        </div>

        <div className="hidden lg:block" />
      </div>

      <div className="pt-4">
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-6 w-full text-xs">
          <p className="text-stone-600">© Monster Energy Company</p>
          <p className="text-stone-600">All Rights Reserved</p>

          <a
            href="https://www.monsterenergy.com/es-ar/terms-of-use/"
            target="_blank"
            className="text-stone-600 transition hover:text-stone-400">
            Términos y Condiciones
          </a>
          <a
            href="https://www.monsterenergy.com/es-ar/privacy-policy/"
            target="_blank"
            className="text-stone-600 transition hover:text-stone-400">
            Políticas de Privacidad
          </a>
          <a
            href="https://www.monsterenergy.com/es-ar/cookie-policy/"
            target="_blank"
            className="text-stone-600 transition hover:text-stone-400">
            Políticas de Cookies
          </a>
          <a
            href="https://www.monsterenergy.com/es-ar/news/#"
            target="_blank"
            className="text-stone-600 transition hover:text-stone-400">
            No Vender Mi información
          </a>
        </div>
      </div>
    </footer>
  );
}
