import MonsterEnergy from "../assets/can/monster-energy.png";
import MonsterEnergyMangoLoco from "../assets/can/monster-energy-mango-loco.png";
import MonsterEnergyVr46 from "../assets/can/monster-energy-vr46.png";
import MonsterEnergyPipelinePunch from "../assets/can/monster-energy.pipeline-punch.png";
import MonsterEnergyUltra from "../assets/can/monster-energy-ultra.png";
import MonsterEnergyUltraWatermelon from "../assets/can/monster-energy-ultra-watermelon.png";
import MonsterEnergyUltraSunrise from "../assets/can/monster-energy-ultra-sunrise.png";

import Cart from "../assets/general/cart.svg";
import Arrow from "../assets/general/arrow.svg";

export default function Hero() {
  const MonsterEnergyList = [
    {
      title: "Monster Energy",
      description:
        "Monster Energy Original es un golpe energético que te da todo el poder que necesitas mientras te brinda una experiencia suave.",
      image: MonsterEnergy,
      color: "#22BB39",
    },
    {
      title: "Monster Energy VR46",
      description:
        'Nos unimos con Valentino Rossi, alias "El Doctor", para crear nuestro Monster más rápido. Increíble sabor con suficiente dosis de Monster para mantener la fiesta por varios días…',
      image: MonsterEnergyVr46,
      color: "#F3ED57",
    },
    {
      title: "Monster Energy Mango Loco",
      description:
        "Monster Energy Mango Loco usa el sabor del Mango potenciado con nuestra mezcla para conseguir una bebida energética refrescante.",
      image: MonsterEnergyMangoLoco,
      color: "#0DCAF0",
    },
    {
      title: "Monster Energy Pipeline Punch",
      description:
        "Al igual que el Banzai Pipeline de Oahu, el Pipeline Punch estaba destinado a convertirse en una leyenda. La mezcla carbonatada perfecta de maracuyá, naranja, guayaba y nuestra mezcla Monster Energy.",
      image: MonsterEnergyPipelinePunch,
      color: "#D63384",
    },
    {
      title: "Monster Energy Ultra",
      description:
        "Monster Energy Ultra es una bebida energética sin azúcar ni calorías, de un liviano sabor cítrico con todo el power de la mezcla Monster Energy.",
      image: MonsterEnergyUltra,
      color: "#E9ECEF",
    },
    {
      title: "Monster Energy Ultra Watermelon",
      description:
        "Monster Energy Ultra Watermelon es una bebida energética sin azúcar ni calorías, con un refrescante sabor a sandía y todo el power de la mezcla Monster Energy.",
      image: MonsterEnergyUltraWatermelon,
      color: "#FF6F61",
    },
    {
      title: "Monster Energy Ultra Sunrise",
      description:
        "Monster Energy Ultra Sunrise es una bebida sin azúcar ni calorías, con suaves toques cítricos y de naranja, cargada con toda la mezcla Monster Energy.",
      image: MonsterEnergyUltraSunrise,
      color: "#D36B18",
    },
  ];

  const title = "MONSTER ENERGY";

  const description =
    "Monster Energy Original es un golpe energético que te da todo el poder que necesitas mientras te brinda una experiencia suave.";

  return (
    <div className="bg-[url(/background.png)] w-full h-125 bg-cover grid grid-cols-2">
      <div className="flex flex-col items-start justify-center pl-16">
        <div className="w-xl">
          <h2 className="text-[#22BB39] text-[5em] font-bold h-24">{title}</h2>
          <p className="text-2xl w-full">{description}</p>
          <button className="bg-[#22BB39] flex items-center gap-1 px-2 py-2 rounded-sm mt-5 cursor-pointer">
            <img src={Cart} className="w-8" />
            <p className="text-[#000] mt-0.5 text-2xl">COMPRAR AHORA</p>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center relative">
        <div className="flex flex-col justify-center items-center w-full">
          <img
            src={MonsterEnergy}
            className="w-30 z-10 drop-shadow-2xl drop-shadow-green-900 "
          />
          <nav className="flex items-start mt-8 z-20 gap-10">
            {MonsterEnergyList.map((monster) => (
              <button
                key={monster.title}
                className="hover:scale-110 transition-transform"
              >
                <img src={monster.image} className="w-5" />
              </button>
            ))}
          </nav>
          <div className="flex gap-75 absolute">
            <button className="w-13  z-20 cursor-pointer">
              <img src={Arrow} />
            </button>
            <button className="w-13  z-20 cursor-pointer right-12 rotate-180">
              <img src={Arrow} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
