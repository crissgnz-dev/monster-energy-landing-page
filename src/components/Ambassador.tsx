import Instagram from "../assets/social-media/instagram.svg";

export default function Ambassador() {
  return (
    <div className="p-15">
      <h2 className="uppercase text-6xl border-b-2 border-green-600 font-bold">
        Embajadores
      </h2>
      <div className="flex flex-col w-full mt-5 mb-15 gap-y-10">
        <div className="flex w-full h-full bg-neutral-800 overflow-hidden rounded-xl flex-wrap">
          <div className="bg-[url(https://web-assests.monsterenergy.com/mnst/7e159192-6aae-485d-973d-83859c01362f.webp)] bg-cover bg-center w-150 h-100" />
          <div className="w-145 p-5">
            <p className="text-green-500 font-bold">BIKE</p>
            <h2 className="text-3xl font-bold">JOSE TORRES</h2>
            <p className="text-neutral-300">
              José Augusto Torres Gil (Santa Cruz de la Sierra, 28 de marzo de
              1995) más conocido como Maligno Torres, es
              un ciclista argentino nacido en Bolivia que se especializa
              en ciclismo BMX. Dentro de este deporte, se desempeña
              principalmente en la disciplina Park. Obtuvo la medalla de oro en
              BMX freestyle en los Juegos Suramericanos de 2022, Juegos
              Panamericanos de 2023 y en los Juegos Olímpicos de París 2024.
              Además, obtuvo medalla de plata en los Juegos Panamericanos de
              2019.
            </p>
            <div className="mt-2 flex justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="w-6 h-fit"
                  src="https://www.claro.com.co/portal/co/recursos_tema_evo/assets/internal/flag-argentina.jpg"
                />
                <p className="mt-1">Argentina</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="mt-1">Sabor Favorito:</p>
                <p className="mt-1 text-[#FF6F61] font-bold">
                  Monster Ultra Watermelon
                </p>
              </div>
            </div>
            <div className="border-t-1 mt-2 pt-2">
              <h2 className="text-neutral-300 text-xl font-bold">REDES</h2>
              <div>
                <a
                  href="https://www.instagram.com/malignobmx"
                  target="_blank"
                  className="w-fit flex p-1 hover:scale-105 transition">
                  <img src={Instagram} className="w-7 " />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full h-full bg-neutral-800 overflow-hidden rounded-xl flex-wrap">
          <div className="bg-[url(https://web-assests.monsterenergy.com/mnst/f284aee9-575e-4633-aaee-cde7c859cc04.webp)] bg-cover bg-center w-150 h-100" />
          <div className="w-145 p-5">
            <p className="text-green-500 font-bold">MOTOGP</p>
            <h2 className="text-3xl font-bold">FRANCESCO BAGNAIA</h2>
            <p className="text-neutral-300">
              El piloto italiano Francesco Bagnaia, también conocido como Pecco,
              comenzó su carrera deportiva en 2010, donde terminó tercero en la
              general del altamente competitivo Campeonato CEV, en España.
              Pecco, que entró en el Campeonato del Mundo apenas dos años
              después, siguió impresionando y ascendió a Moto2™ en 2017, donde
              sus esfuerzos le recompensaron con el premio al Novato del Año en
              la categoría intermedia.
            </p>
            <div className="mt-2 flex justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="w-6 h-fit"
                  src="https://www.banderas-mundo.es/data/flags/h60/it.webp"
                />
                <p className="mt-1">Italia</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="mt-1">Sabor Favorito:</p>
                <p className="mt-1 text-green-400 font-bold">
                   Monster Energy Original Green “OG”
                </p>
              </div>
            </div>
            <div className="border-t-1 mt-2 pt-2">
              <h2 className="text-neutral-300 text-xl font-bold">REDES</h2>
              <div>
                <a
                  href="https://www.instagram.com/pecco63/"
                  target="_blank"
                  className="w-fit flex p-1 hover:scale-105 transition">
                  <img src={Instagram} className="w-7 " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://www.monsterenergy.com/es-ar/roster/"
        target="_blank"
        className="text-green-500 text-3xl border-2 px-12 py-2 rounded-lg uppercase active:text-green-300 ">
        Ver más
      </a>
    </div>
  );
}
