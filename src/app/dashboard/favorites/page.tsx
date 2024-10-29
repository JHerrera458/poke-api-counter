import { FavoritePokemons } from "@/pokemons";

export const metadata = {
  title: "Pokemones favoritos",
  description: "Página de pokemons favoritos añadidos por el usuario",
};

export default async function PokemonsPage() {
  return <FavoritePokemons />;
}
