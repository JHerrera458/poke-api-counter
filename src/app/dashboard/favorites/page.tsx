import { PokemonGrid } from "@/pokemons";

export const metadata = {
  title: "Pokemones favoritos",
  description: "Página de pokemons favoritos añadidos por el usuario",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col px-20 py-4">
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
