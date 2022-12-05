import Image from "next/image";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { links } from "../constants/links";
import { useRecoilState } from "recoil";
import { sidebarState } from "../atoms/sidebarAtom";

const Header = () => {
  const [showSidebar, setShowSidebar] = useRecoilState(sidebarState);
  return (
    <header className="fixed top-0 bg-transparent w-full z-10">
      <nav className="flex items-center justify-between px-5 py-4 w-full">
        <Link href="/">
          <Image
            src={"/images/logo.svg"}
            width={100}
            height={80}
            alt=""
            className="object-contain"
          />
        </Link>
        <div className="space-x-5 hidden md:flex md:items-center">
          {links.map((link) => (
            <Link href={link.path}>{link.name}</Link>
          ))}
        </div>
        <button
          onClick={() => setShowSidebar(true)}
          className="rounded bg-slate-100 text-slate-900 font-semibold px-3 py-1 opacity-80"
        >
          Menu
        </button>
        <div
          className={`${
            !showSidebar ? "translate-x-full" : "translate-x-0"
          } fixed top-0 bottom-0 right-0 w-1/4 bg-white shadow-sm flex flex-col px-8 py-4 transition z-20`}
        >
          <div className="self-end">
            <i onClick={() => setShowSidebar(false)}>
              <XMarkIcon className="h-5 w-5 cursor-pointer" />
            </i>
          </div>
          <div className="flex flex-col space-y-5 pt-10">
            <Link className="text-gray-700 px-1" href="/">
              Model S
            </Link>
            <Link className="text-gray-700 px-1" href="/">
              Model 3
            </Link>
            <Link className="text-gray-700 px-1" href="/">
              Model X
            </Link>
            <Link className="text-gray-700 px-1" href="/">
              Model Y
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
