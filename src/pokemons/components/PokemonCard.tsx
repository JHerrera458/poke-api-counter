import Link from "next/link";
import React from "react";
import Image from "next/image";

import { SimplePokemon } from "../interfaces/simple-pokemon";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  return (
    <div className="right-0 mx-auto w-60">
      <div className="overflow-hidden bg-white shadow-lg rounded-xl">
        <div className="p-6 text-center border-b bg-blue-950">
          (
          <Image
            className="w-24 h-24 mx-auto"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={`Foto del pokemon: ${name}`}
            height={60}
            width={60}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold capitalize text-gray-50">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`pokemon/${name}`}
              className="px-4 py-2 text-xs font-semibold text-gray-100 border rounded-full hover:bg-blue-500"
            >
              Ver detalles
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link
            href="/account/campaigns"
            className="flex items-center px-4 py-2 hover:bg-gray-100"
          >
            <div className="text-red-600">
              <IoHeartOutline className="size-8" />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium leading-none text-gray-800">
                ¿Añadir a favoritos?
              </p>
              <p className="text-xs text-gray-500">No es favorito</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
