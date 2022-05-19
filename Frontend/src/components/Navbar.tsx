import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon, ExploreIcon } from "./SVGIcons";

const Navbar = () => {
  return (
    <div className="h-full w-[16.5rem] sticky top-0">
      <div className="flex flex-col mt-2 space-y-1">
        <div className="w-full">
          <Link
            to="/home"
            className="w-fit flex flex-row items-center justify-start  space-x-4 px-4 py-4 rounded-full text-white text-2xl hover:bg-gray-900"
          >
            <HomeIcon />
            <span>Home</span>
          </Link>
        </div>

        <div className="w-full">
          <Link
            to="/explore"
            className=" w-fit flex flex-row items-center justify-start space-x-4 px-5 py-4 rounded-full text-white text-2xl hover:bg-gray-900"
          >
            <HomeIcon />
            <span>Explore</span>
          </Link>
        </div>

        <div className="w-full">
          <Link
            to="/notifications"
            className=" w-fit flex flex-row items-center justify-start  space-x-4 px-4 py-4 rounded-full text-white text-2xl hover:bg-gray-900"
          >
            <img src="/assets/twitter-32.png" alt="" className="w-7 h-7" />
            <span>Notifications</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
