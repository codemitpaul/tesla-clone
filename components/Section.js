import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const Section = ({ header, text, bgImage, button1, button2, showIcon }) => {
  return (
    <div className={`h-screen w-screen relative z-0 snap-start`}>
      <div className="absolute -z-10 h-full w-full">
        <Image src={bgImage} fill className="object-cover" />
      </div>
      <div className="z-20 flex flex-col justify-between h-full pt-32 w-full items-center pb-32">
        <div>
          <h1 className="text-5xl font-semibold text-center">{header}</h1>
          <p className="undeline text-sm underline text-center">{text}</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center w-full px-20 space-y-5 md:space-y-0 md:space-x-5">
          {button1 && (
            <button className="bg-gray-900 opacity-90 p-3 text-center text-white w-1/2">
              {button1}
            </button>
          )}
          {button2 && (
            <button className="bg-gray-100 opacity-90 p-3 text-center text-slate-900 w-1/2">
              {button2}
            </button>
          )}
        </div>
      </div>
      <i
        className={`${
          showIcon ? "" : "hidden"
        } absolute bottom-4 left-1/2 -translate-x-1/2`}
      >
        <ChevronDownIcon
          className="h-7 w-7 cursor-pointer animate-bounce"
          fill="white"
        />
      </i>
    </div>
  );
};

export default Section;
