"use client";
import React from "react";
import { useState } from "react";

export const CartCounter = () => {
  const [counter, setCounter] = useState(0);

  function addCounter() {
    setCounter((a) => a + 1);
  }

  function minusCounter() {
    setCounter((a) => a - 1);
  }
  return (
    <>
      <span className="text-8xl">{counter}</span>
      <div className="flex gap-x-2">
        <button
          onClick={minusCounter}
          className="flex items-center justify-center px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-colors w-[50px]"
        >
          -1
        </button>
        <button
          onClick={addCounter}
          className="flex items-center justify-center px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-colors w-[50px]"
        >
          +1
        </button>
      </div>
    </>
  );
};
