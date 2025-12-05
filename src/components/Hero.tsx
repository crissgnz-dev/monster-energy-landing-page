import { useState } from "react";

import MonsterEnergy from "../assets/can/monster-energy.png";
import MonsterEnergyMangoLoco from "../assets/can/monster-energy-mango-loco.png";
import MonsterEnergyVr46 from "../assets/can/monster-energy-vr46.png";
import MonsterEnergyPipelinePunch from "../assets/can/monster-energy.pipeline-punch.png";
import MonsterEnergyUltra from "../assets/can/monster-energy-ultra.png";
import MonsterEnergyUltraWatermelon from "../assets/can/monster-energy-ultra-watermelon.png";
import MonsterEnergyUltraSunrise from "../assets/can/monster-energy-ultra-sunrise.png";

import Cart from "../assets/general/cart.svg";

export default function Hero() {
  const MonsterEnergyList = [
    {
      title: "Monster Energy",
      description:
        "Monster Energy Original es un golpe energético que te da todo el poder que necesitas mientras te brinda una experiencia suave.",
      image: MonsterEnergy,
      color: "#22BB39",
      url: "https://www.mercadolibre.com.ar/monster-energy-green-lata-473ml-energizante-taurina-cafeina/p/MLA20004535#polycard_client=search-nordic&search_layout=stack&position=4&type=product&tracking_id=11478380-3c3e-4c03-964d-eb247566baa2&wid=MLA1529128888&sid=search",
    },
    {
      title: "Monster Energy VR46",
      description:
        'Nos unimos con Valentino Rossi, alias "El Doctor", para crear nuestro Monster más rápido. Increíble sabor con suficiente dosis de Monster para mantener la fiesta por varios días…',
      image: MonsterEnergyVr46,
      color: "#F3ED57",
      url: "https://www.mercadolibre.com.ar/monster-energy-vr-46-the-doctor-473ml-energizante-ed-limit/p/MLA19991011#polycard_client=search-nordic&search_layout=stack&position=35&type=product&tracking_id=e980af87-0416-4a6a-932c-6ad2ad450e4f&wid=MLA1497789575&sid=search",
    },
    {
      title: "Monster Energy Mango Loco",
      description:
        "Monster Energy Mango Loco usa el sabor del Mango potenciado con nuestra mezcla para conseguir una bebida energética refrescante.",
      image: MonsterEnergyMangoLoco,
      color: "#0DCAF0",
      url: "https://www.mercadolibre.com.ar/monster-energy-mango-loco-lata-473ml/p/MLA20720260#polycard_client=search-nordic&search_layout=stack&position=40&type=product&tracking_id=f75db909-a1e5-4c7d-a142-cb9acaf43f8e&wid=MLA1287044823&sid=search",
    },
    {
      title: "Monster Energy Pipeline Punch",
      description:
        "Al igual que el Banzai Pipeline de Oahu, el Pipeline Punch estaba destinado a convertirse en una leyenda. La mezcla carbonatada perfecta de maracuyá, naranja, guayaba y nuestra mezcla Monster Energy.",
      image: MonsterEnergyPipelinePunch,
      color: "#D63384",
      url: "https://www.mercadolibre.com.ar/energizante--monster--pipeline-punch-473ml-origen-brasil/up/MLAU2842003603#polycard_client=search-nordic&search_layout=stack&position=3&type=product&tracking_id=d3fb7302-95bc-40d9-8c54-985b25b0bc96&wid=MLA1964094800&sid=search",
    },
    {
      title: "Monster Energy Ultra",
      description:
        "Monster Energy Ultra es una bebida energética sin azúcar ni calorías, de un liviano sabor cítrico con todo el power de la mezcla Monster Energy.",
      image: MonsterEnergyUltra,
      color: "#E9ECEF",
      url: "https://www.mercadolibre.com.ar/monster-ultra-lata-473ml-sin-azucar-energy-drink-energizante/p/MLA20720261?pdp_filters=item_id:MLA2197972562#is_advertising=true&searchVariation=MLA20720261&backend_model=search-backend&position=1&search_layout=stack&type=pad&tracking_id=0375ce9a-d4dc-4b14-91bc-bb274440182e&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=MTZmY2E3MDQtOWI0Zi00ZTBmLWE5ZGMtYWJlYjA2MzZjYjAx",
    },
    {
      title: "Monster Energy Ultra Watermelon",
      description:
        "Monster Energy Ultra Watermelon es una bebida energética sin azúcar ni calorías, con un refrescante sabor a sandía y todo el power de la mezcla Monster Energy.",
      image: MonsterEnergyUltraWatermelon,
      color: "#FF6F61",
      url: "https://www.mercadolibre.com.ar/bebida-energizante-monster-energy-watermelon-roja/up/MLAU255700692#polycard_client=search-nordic&search_layout=stack&position=43&type=product&tracking_id=43d4da8a-65bd-41e1-a935-bd59b2100022&wid=MLA1168751220&sid=search",
    },
    {
      title: "Monster Energy Ultra Sunrise",
      description:
        "Monster Energy Ultra Sunrise es una bebida sin azúcar ni calorías, con suaves toques cítricos y de naranja, cargada con toda la mezcla Monster Energy.",
      image: MonsterEnergyUltraSunrise,
      color: "#D36B18",
      url: "https://www.mercadolibre.com.ar/monster-energy-ultra-sunrise-lata-473ml-sin-azucar-taurina/p/MLA19991010#polycard_client=search-nordic&search_layout=stack&position=14&type=product&tracking_id=59f46c62-39cd-4fe0-a8b8-c769d7888666&wid=MLA1561545607&sid=search",
    },
  ];

  const [title, setTitle] = useState("Monster Energy");

  const [description, setDescription] = useState(
    "Monster Energy Original es un golpe energético que te da todo el poder que necesitas mientras te brinda una experiencia suave."
  );

  const [color, setColor] = useState("#22BB39");

  const [image, setImage] = useState(MonsterEnergy);

  const [url, setUrl] = useState(
    "https://www.mercadolibre.com.ar/monster-energy-green-lata-473ml-energizante-taurina-cafeina/p/MLA20004535#polycard_client=search-nordic&search_layout=stack&position=4&type=product&tracking_id=11478380-3c3e-4c03-964d-eb247566baa2&wid=MLA1529128888&sid=search"
  );

  return (
    <div className="bg-[url(/background.png)] w-full h-fit bg-cover grid lg:grid-cols-2 lg:grid-rows-1 sm:grid-rows-2">
      <div className="flex flex-col items-start justify-center pl-16 py-5">
        <div className="w-full ">
          <h2
            className="text-[5em] font-bold text-sm/20 uppercase transition"
            style={{ color: color }}
          >
            {title}
          </h2>
          <p className="text-2xl w-full transition">{description}</p>
          <a
            className="flex items-center w-fit gap-1 px-2 py-2 rounded-sm mt-5 cursor-pointer hover:scale-105 transition"
            href={url}
            target="_blank"
            style={{ backgroundColor: color }}
          >
            <img src={Cart} className="w-8" />
            <p className="text-[#000000] mt-0.5 text-2xl">COMPRAR AHORA</p>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center relative sm:pt-5 sm:pb-10">
        <div className="flex flex-col justify-center items-center w-full">
          <img
            src={image}
            className="w-30 z-10"
            style={{ filter: `drop-shadow(0px 15px 45px ${color}` }}
          />
          <nav className="flex items-start mt-8 z-20 gap-2">
            {MonsterEnergyList.map((monster) => (
              <button
                key={monster.title}
                className="hover:scale-110 transition-transform px-5 py-2 relative"
                onClick={() => {
                  setColor(monster.color);
                  setTitle(monster.title);
                  setDescription(monster.description);
                  setImage(monster.image);
                  setUrl(monster.url);
                }}
              >
                <img src={monster.image} className="w-5 z-20" />
                {monster.title === title ? (
                  <div
                    className="w-2 h-8 bg-stone-900 absolute top-0 mx-1 mt-5"
                    style={{
                      filter: `drop-shadow(0px 10px 15px ${color}`,
                      zIndex: -1,
                    }}
                  ></div>
                ) : null}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
