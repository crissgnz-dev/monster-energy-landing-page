export default function News() {
  return (
    <div className="p-4 md:p-15">
      <h2 className="uppercase text-5xl md:text-6xl border-b-2 border-green-600 font-bold mt-5 mb-10">
        Novedades
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mt-5 mb-10">
        <a
          href="https://www.monsterenergy.com/skateboard/disorderly-conduct-tour-episodio-3"
          target="_blank"
          className="bg-neutral-800 rounded-xl overflow-hidden hover:scale-[1.01] transition duration-300 md:col-span-1">
          <div className="grid grid-rows-[2fr_1fr] h-full">
            <div className="relative w-full">
              <div className="bg-[url(https://web-assests.monsterenergy.com/mnst/1ccf05b1-c856-42c0-9909-78bbb902ab24.webp)] bg-cover bg-center w-full h-full min-h-[150px]" />
              <div className="absolute top-2 left-2 bg-neutral-800 p-1 px-2 rounded-lg">
                <p className="text-green-600 uppercase font-bold text-sm">
                  Action / Skateboard
                </p>
              </div>
            </div>

            <div className="p-3 w-full">
              <h2 className="text-xl font-bold line-clamp-2">
                Disorderly Conduct Tour: Episodio 3
              </h2>
              <p className="text-neutral-300 text-sm line-clamp-2">
                Sumérgete en el caos detrás de la Disorderly Conduct Tour!
              </p>
              <p className="text-xs mt-2 text-neutral-400">9/10/2025</p>
            </div>
          </div>
        </a>

        <a
          href="https://www.monsterenergy.com/gaming/call-of-duty-next-beta-de-black-ops-7-nuevo-mapa-de-warzone-y-zombis"
          target="_blank"
          className="bg-neutral-800 rounded-xl overflow-hidden hover:scale-[1.01] transition duration-300 sm:col-span-2 md:col-span-3">
          <div className="grid grid-rows-[2fr_1fr] h-full">
            <div className="relative w-full">
              <div className="bg-[url(https://web-assests.monsterenergy.com/mnst/b8c74029-1e8e-4d6f-a35c-5d414330aa6f.webp)] bg-cover bg-center w-full h-full min-h-[150px]" />
              <div className="absolute top-2 left-2 bg-neutral-800 p-1 px-2 rounded-lg">
                <p className="text-green-600 uppercase font-bold text-sm">
                  Gaming
                </p>
              </div>
            </div>

            <div className="p-3 w-full">
              <h2 className="text-xl font-bold line-clamp-2">
                Call of Duty NEXT: Beta de Black Ops 7, nuevo mapa de Warzone y
                Zombis
              </h2>
              <p className="text-neutral-300 text-sm line-clamp-2">
                Todo lo revelado en Call of Duty NEXT: campaña de Black Ops 7,
                multijugador, actualizaciones de Warzone y detalles de Zombies
                antes del lanzamiento del 14 de noviembre.
              </p>
              <p className="text-xs mt-2 text-neutral-400">8/10/2025</p>
            </div>
          </div>
        </a>

        <a
          href="https://www.monsterenergy.com/2-ruedas/el-primer-gran-premio-de-bike-life-del-mundo"
          target="_blank"
          className="bg-neutral-800 rounded-xl overflow-hidden hover:scale-[1.01] transition duration-300 sm:col-span-2 md:col-span-3">
          <div className="grid grid-rows-[2fr_1fr] h-full">
            <div className="relative w-full">
              <div className="bg-[url(https://web-assests.monsterenergy.com/mnst/7bf430a4-470d-4817-94bc-33548babeabd.webp)] bg-cover bg-center w-full h-full min-h-[150px]" />
              <div className="absolute top-2 left-2 bg-neutral-800 p-1 px-2 rounded-lg">
                <p className="text-green-600 uppercase font-bold text-sm">
                  Motor / 2 Ruedas
                </p>
              </div>
            </div>

            <div className="p-3 w-full">
              <h2 className="text-xl font-bold line-clamp-2">
                EL PRIMER GRAN PREMIO DE BIKE LIFE DEL MUNDO
              </h2>
              <p className="text-neutral-300 text-sm line-clamp-2">
                20 pilotos de élite de todo el mundo se dieron cita en el Track
                Kartodromo de Atenas para la inauguración del Bike Life GP...
              </p>
              <p className="text-xs mt-2 text-neutral-400">7/10/2025</p>
            </div>
          </div>
        </a>

        <a
          href="https://www.monsterenergy.com/f1/el-primer-campeonato-de-constructores-consecutivo-para-mc-laren-desde-1991"
          target="_blank"
          className="bg-neutral-800 rounded-xl overflow-hidden hover:scale-[1.01] transition duration-300 md:col-span-1">
          <div className="grid grid-rows-[2fr_1fr] h-full">
            <div className="relative w-full">
              <div className="bg-[url(https://web-assests.monsterenergy.com/mnst/a2cdc461-7e55-4bbd-8e25-c5db0f6509da.webp)] bg-cover bg-center w-full h-full min-h-[150px]" />
              <div className="absolute top-2 left-2 bg-neutral-800 p-1 px-2 rounded-lg">
                <p className="text-green-600 uppercase font-bold text-sm">
                  Motor / F1
                </p>
              </div>
            </div>

            <div className="p-3 w-full">
              <h2 className="text-xl font-bold line-clamp-2">
                EL PRIMER CAMPEONATO DE CONSTRUCTORES CONSECUTIVO PARA McLAREN
                DESDE 1991
              </h2>
              <p className="text-neutral-300 text-sm line-clamp-2">
                Singapur iluminó la noche y McLaren iluminó el campeonato...
              </p>
              <p className="text-xs mt-2 text-neutral-400">6/10/2025</p>
            </div>
          </div>
        </a>
      </div>
      <a
        href="https://www.monsterenergy.com/es-ar/news/"
        target="_blank"
        className="text-green-500 text-2xl mb:text-3xl border-2 px-12 py-2 rounded-lg uppercase active:text-green-300 ">
        Ver más
      </a>
    </div>
  );
}
