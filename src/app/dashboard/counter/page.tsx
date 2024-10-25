import { CartCounter } from "@/shopping-cart/components/CartCounter";
import React from "react";

export const metadata = {
  title: "Contador",
  description: "Un contador del lado del servidor",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito de compras</span>
      <CartCounter />
    </div>
  );
}
