export default function News() {
  return (
    <div className="p-15">
      <h2 className="uppercase text-6xl border-b-2 border-green-600 font-bold">
        Novedades
      </h2>
      <div className="grid grid-cols-3 grid-rows-2 gap-8 mt-5 mb-10">
        <a
          href="https://www.monsterenergy.com/skateboard/disorderly-conduct-tour-episodio-3"
          target="_blank"
          className="bg-neutral-800 h-100 grid grid-rows-2 rounded-xl overflow-hidden hover:scale-101 transition">
          <div className="relative h-full w-full row-span-2">
            <div className="bg-[url(https://web-assests.monsterenergy.com/mnst/1ccf05b1-c856-42c0-9909-78bbb902ab24.webp)] bg-cover bg-center w-full h-full" />
            <div className="absolute top-1 left-1 bg-neutral-800 p-1 px-2 rounded-lg">
              <p className="text-green-600 uppercase font-bold mt-1">
                Action / Skateboard
              </p>
            </div>
          </div>

          <div className="p-2 w-full">
            <h2 className="text-2xl font-bold truncate">
              Disorderly Conduct Tour: Episodio 3
            </h2>
            <p className="text-neutral-300 truncate ">
              Sumérgete en el caos detrás de la Disorderly Conduct Tour!
            </p>
            <p className="text-xs mt-3">9/10/2025</p>
          </div>
        </a>

        <a
          href="https://www.monsterenergy.com/gaming/call-of-duty-next-beta-de-black-ops-7-nuevo-mapa-de-warzone-y-zombis"
          target="_blank"
          className="bg-neutral-800 rounded-xl overflow-hidden h-100 grid grid-rows-2 col-span-2 hover:scale-101 transition">
          <div className="relative h-full w-full row-span-2">
            <div className="bg-[url(https://web-assests.monsterenergy.com/mnst/b8c74029-1e8e-4d6f-a35c-5d414330aa6f.webp)] bg-cover bg-center w-full h-full" />
            <div className="absolute top-1 left-1 bg-neutral-800 p-1 px-2 rounded-lg">
              <p className="text-green-600 uppercase font-bold mt-1">Gaming</p>
            </div>
          </div>
          <div className="p-2">
            <h2 className="text-2xl font-bold truncate">
              Call of Duty NEXT: Beta de Black Ops 7, nuevo mapa de Warzone y
              Zombis
            </h2>
            <p className="text-neutral-300 truncate">
              Todo lo revelado en Call of Duty NEXT: campaña de Black Ops 7,
              multijugador, actualizaciones de Warzone y detalles de Zombies
              antes del lanzamiento del 14 de noviembre.
            </p>
            <p className="text-xs mt-3">8/10/2025</p>
          </div>
        </a>

        <a
          href="https://www.monsterenergy.com/2-ruedas/el-primer-gran-premio-de-bike-life-del-mundo"
          target="_blank"
          className="bg-neutral-800 rounded-xl overflow-hidden h-100 grid grid-rows-2 col-span-2 hover:scale-101 transition">
          <div className="relative h-full w-full row-span-2">
            <div className="bg-[url(https://web-assests.monsterenergy.com/mnst/7bf430a4-470d-4817-94bc-33548babeabd.webp)] bg-cover bg-center w-full h-full" />
            <div className="absolute top-1 left-1 bg-neutral-800 p-1 px-2 rounded-lg">
              <p className="text-green-600 uppercase font-bold mt-1">
                Motor / 2 Ruedas
              </p>
            </div>
          </div>
          <div className="p-2 w-full">
            <h2 className="text-2xl font-bold truncate">
              EL PRIMER GRAN PREMIO DE BIKE LIFE DEL MUNDO
            </h2>
            <p className="text-neutral-300 truncate w-210">
              20 pilotos de élite de todo el mundo se dieron cita en el Track
              Kartodromo de Atenas para la inauguración del Bike Life GP, un
              evento a puerta cerrada diseñado para mostrar el talento innato,
              la creatividad y el espíritu comunitario del movimiento Bike Life
              en un entorno profesional.
            </p>
            <p className="text-xs mt-3">7/10/2025</p>
          </div>
        </a>

        <a
          href="https://www.monsterenergy.com/f1/el-primer-campeonato-de-constructores-consecutivo-para-mc-laren-desde-1991"
          target="_blank"
          className="bg-neutral-800 rounded-xl w-full h-100 overflow-hidden grid grid-rows-2 hover:scale-101 transition">
          <div className="relative h-full w-full row-span-2">
            <div className="bg-[url(https://web-assests.monsterenergy.com/mnst/a2cdc461-7e55-4bbd-8e25-c5db0f6509da.webp)] bg-cover bg-center w-full h-full" />
            <div className="absolute top-1 left-1 bg-neutral-800 p-1 px-2 rounded-lg">
              <p className="text-green-600 uppercase font-bold mt-1">
                Motor / F1
              </p>
            </div>
          </div>
          <div className="p-2 w-full">
            <h2 className="text-2xl font-bold truncate w-100">
              EL PRIMER CAMPEONATO DE CONSTRUCTORES CONSECUTIVO PARA McLAREN
              DESDE 1991
            </h2>
            <p className="text-neutral-300 truncate w-100">
              Singapur iluminó la noche y McLaren iluminó el campeonato. Bajo
              las brillantes luces de Marina Bay, los pilotos papaya rugieron
              por las calles y entraron en los libros de historia, asegurando su
              segundo título consecutivo de Constructores a falta de seis
              carreras.
            </p>
            <p className="text-xs mt-3">6/10/2025</p>
          </div>
        </a>
      </div>

      <a
        href="https://www.monsterenergy.com/es-ar/news/"
        target="_blank"
        className="text-green-500 text-3xl border-2 px-12 py-2 rounded-lg uppercase active:text-green-300">
        Ver más
      </a>
    </div>
  );
}
