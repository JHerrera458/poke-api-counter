import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "404 | Not found",
  description: "Página de error 404",
};

export default function NotFound() {
  return (
    <section className="bg-white h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen lg:py-16 lg:px-6">
        <Image
          className="mx-auto"
          src={"/404_pikachu.png"}
          alt="Imágen de pikachu triste"
          height={256}
          width={256}
        />
        <div className="mx-auto max-w-screen-sm text-center">
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            Algo salió mal...
          </p>
          <p className="mb-4 text-lg font-light text-gray-500">
            Lo sentimos, el pokemon que intentas visualizar no existe.
          </p>
          <Link
            href="/dashboard/pokemons"
            className="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Volver a lista de pokemones
          </Link>
        </div>
      </div>
    </section>
  );
}
