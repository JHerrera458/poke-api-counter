"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

import { SimplePokemon } from "../interfaces/simple-pokemon";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemons";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[id]);
  const dispatch = useAppDispatch();

  const onToggle = () => {
    dispatch(toggleFavorite(pokemon));
  };

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
          <div
            onClick={onToggle}
            className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            <div className="text-red-600">
              {isFavorite ? (
                <IoHeart className="size-8" />
              ) : (
                <IoHeartOutline className="size-8" />
              )}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium leading-none text-gray-800">
                {isFavorite ? "Tu pokemon favorito" : "¿Añadir a favoritos?"}
              </p>
              <p className="text-xs text-gray-500">
                {isFavorite ? "Atrapado" : "¡Atrapame si puedes!"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
