"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  addOne,
  initCounterState,
  minusOne,
} from "@/store/counter/counterSlice";

export interface CounterResponse {
  method: string;
  count: number;
}

const getAPICounter = async (): Promise<CounterResponse> => {
  const data = await fetch("/api/counter").then((res) => res.json());

  return data;
};

export const CartCounter = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  //useEffect(() => {
  //  dispatch(initCounterState(value));
  //}, [dispatch, value]);

  useEffect(() => {
    getAPICounter().then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch]);

  function addCounter() {
    dispatch(addOne());
  }

  function minusCounter() {
    dispatch(minusOne());
  }
  return (
    <>
      <span className="text-8xl">{count}</span>
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
