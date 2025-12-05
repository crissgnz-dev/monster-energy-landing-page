import Instagram from "../assets/social-media/instagram.svg";

export default function Ambassador() {
  return (
    <div className="p-15">
      <h2 className="uppercase text-6xl border-b-2 border-green-600 font-bold">
        Embajadores
      </h2>
      <div className="w-full mt-5">
        <div className="flex w-fit h-full bg-neutral-800 overflow-hidden rounded-xl flex-wrap">
          <img
            className="w-1/2 h-full"
            src="https://web-assests.monsterenergy.com/mnst/7e159192-6aae-485d-973d-83859c01362f.webp"
          />
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
                <a href="#">
                  <img src={Instagram} className="w-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
