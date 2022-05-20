import React from "react";
import { TopTweetsIcon } from "./Icons/SVGIcons";

export const Widgets = () => {
  return (
    <div className="h-full w-[24rem] sticky top-0 flex flex-col items-center mt-2">

      <div className="w-[20rem] h-full">
      {/* Search Bar */}
        <div className="w-full h-[2.5rem] flex flex-row items-center px-4 mb-4 bg-slate-800 rounded-full">
              <TopTweetsIcon />
            <input type="text" name="" id="" className="w-[85%] ml-2 py-1 outline-none text-white bg-slate-800" placeholder="Search Twitter" />
       </div>


      {/* Trends */}
        <div className="h-auto bg-slate-800 rounded-2xl py-2 px-4">
          <span className="text-2xl font-bold text-white  ">Trends For You</span>
          <div className="w-full h-auto flex flex-col mt-4">
            <div className="flex flex-row justify-between">
              <span className=" text-sm text-gray-500">Tending in Turkey</span> <div className="rounded-full bg-red-400 px-2">...</div>
            </div>
            <span className="text-white font-bold">Trend Title</span>
            <span className=" text-sm text-gray-500">Tweet Count</span>
          </div>
        </div>
      </div>
    </div>
  );
};
