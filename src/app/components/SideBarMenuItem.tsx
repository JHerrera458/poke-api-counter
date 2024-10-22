"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
}

export const SideBarMenuItem = ({ path, icon, title, subtitle }: Props) => {
  const pathName = usePathname();
  return (
    <Link
      href={path}
      className={`${
        path === pathName ? "bg-blue-500" : ""
      } inline-flex items-center w-full px-2 py-3 space-x-2 transition duration-150 ease-linear border-b border-slate-700 hover:bg-white/5`}
    >
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="hidden text-sm text-white/50 md:block">
          {subtitle}
        </span>
      </div>
    </Link>
  );
};
