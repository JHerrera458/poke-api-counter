"use client";
import { PokemonGrid } from "@/pokemons";
import { useAppSelector } from "@/store";
import Image from "next/image";
import Link from "next/link";

export function FavoritePokemons() {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );

  return (
    <div className="flex flex-col px-20 py-4 items-center">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonGrid pokemons={favoritePokemons} />
      )}
    </div>
  );
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <Image
        src={"/no_favorites.png"}
        alt="Bulbasaur, Squirtle, Pikachu y Charmander sonriendo"
        height={300}
        width={300}
      />
      <p>Aún no tienes Pokemones favoritos</p>
      <Link
        className="px-4 py-2 text-xs font-semibold text-gray-100 border rounded-full bg-blue-500 hover:bg-blue-700"
        href={"/dashboard/pokemons"}
      >
        Ir a atrapar Pokemones
      </Link>
    </div>
  );
};
