"use client";
import React from "react";
import { SimpleWidget } from "@/components";
import { useAppSelector } from "@/store";
import { IoCalculator } from "react-icons/io5";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);
  return (
    <div className="flex flex-wrap py-2 px-4 gap-4">
      <SimpleWidget
        title="Contador"
        subtitle="Artículos en el carrito"
        value={`${count}`}
        icon={<IoCalculator size={50} className="text-blue-500" />}
        href="/dashboard/counter"
      />
    </div>
  );
};
