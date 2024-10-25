import Image from "next/image";
import React from "react";

import {
  IoApertureOutline,
  IoBrowsersOutline,
  IoCalculatorOutline,
} from "react-icons/io5";

import { CgPokemon } from "react-icons/cg";

import { SideBarMenuItem } from "./SideBarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={30} />,
    title: "Dashboard",
    subtitle: "Visualización",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculatorOutline size={30} />,
    title: "Contador",
    subtitle: "Estados, sumas y restas",
  },
  {
    path: "/dashboard/pokemons",
    icon: <CgPokemon size={30} />,
    title: "PokeAPI",
    subtitle: "Atrapalos a todos",
  },
];

export const SideBar = () => {
  return (
    <div
      id="menu"
      className="left-0 z-10 w-[300px] min-h-screen bg-gray-900 text-slate-300"
    >
      <div id="logo" className="px-6 my-4">
        <h1 className="flex items-center text-lg font-bold text-white md:text-2xl">
          <IoApertureOutline />
          Next<span className="text-blue-500">8</span>.
        </h1>
        <p className="text-sm text-slate-500">Ejercicio práctico</p>
      </div>

      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Bienvenido,</p>
        <a href="#" className="inline-flex items-center space-x-2">
          <span>
            <Image
              className="w-8 h-8 rounded-full"
              width={50}
              height={50}
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="User Avatar"
            />
          </span>
          <span className="text-sm font-bold md:text-base">Julián Herrera</span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SideBarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
