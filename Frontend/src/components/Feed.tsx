import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ProfileIcon, TopTweetsIcon } from "./SVGIcons";

export const Feed = () => {
  useEffect(() => {}, []);

  const Tweet = {
    id: 1,
    outhor: "Alper",
    time: Date.now(),
    img: "",
    data: "Full-stack developer",
  };

  return (
    <div className="h-[100%] w-[37.5rem] border-l-2 border-r-2 border-b-2 border-gray-400">
      <div className="w-full h-[6rem] text-white font-bold text-xl relative">
        <Link to="/home" className="absolute top-5 left-5">
          Home
        </Link>
        <Link
          to="*"
          className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-900"
        >
          <TopTweetsIcon />
        </Link>
      </div>
      <div className="flex flex-row w-full h-[6rem]">
        <div className="w-[4rem]"></div>
        <div className="w-full">
          <input
            type="text"
            placeholder="What's happening?"
            className=" bg-black ml-4 py-4 mr-4 w-[90%]"
          />
          <div className="flex flex-row space-x-3 ml-4">
            <Link to="*" className="hover:bg-blue-900 rounded-full px-2 py-2">
              <ProfileIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[34rem] bg-yellow-200 flex flex-row">
        <img src="" alt="" className="w-24 h-full bg-purple-400" />
        <div className="w-full h-full flex flex-col bg-green-400">
          <div className="w-full h-[90%] bg-purple-800"></div>
          <div className="w-full h-[10%] bg-cyan-800"></div>
        </div>
      </div>
    </div>
  );
};
