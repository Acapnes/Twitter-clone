import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TwitterIcon } from "../../components/Icons/SVGIcons";

const LastLogin = () => {
  const location = useLocation();
  const _state = location.state as any;
  const userValue = _state.userValue;

  return (
    <div className="h-screen w-screen bg-gray-800 flex justify-center items-center">
      <div className="relative h-[70%] w-[32%] bg-black flex items-center flex-col text-white rounded-2xl py-4 space-y-4">
        <TwitterIcon />
        <div className="w-[70%] h-[80%] flex flex-col space-y-4 relative">
          <div className="text-4xl font-bold pb-5">Enter Your Password</div>
          <input
            disabled
            type="text"
            className="px-2 py-5 bg-slate-900 outline-none"
            placeholder={userValue}
          />

          <div className="flex flex-col">
            <input
              type="text"
              className="px-2 py-5 bg-black border-2 border-gray-800 rounded-md outline-none"
              placeholder="Password"
            />
            <a href="#">
              <span className=" text-blue-600 text-sm">Forgot password?</span>
            </a>
          </div>
        </div>
        <Link
          to="/LastLogin"
          className="w-[70%] bg-white bg-opacity-70 text-black font-bold rounded-full py-2 mt-8 text-center"
        >
          <button>Log in</button>
        </Link>
        <button className="absolute top-0 left-3 rounded-full hover:bg-gray-700 hover:bg-opacity-30 py-2 px-4 font-bold">
          X
        </button>
      </div>
    </div>
  );
};

export default LastLogin;
