import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TwitterIcon } from "../../components/Icons/SVGIcons";

const Login = () => {
  const [userValue, setuserValue] = useState("");

  // const location = useLocation();
  // let returnedUserValue;

  // useEffect(() => {
  //   const _state = location.state as any;
  //   if (_state.userValue) {
  //     returnedUserValue = _state.userValue;
  //   } else {
  //     returnedUserValue = "Phone, Email or username"
  //   }
  // }, []);

  return (
    <div className="h-screen w-screen bg-gray-800 flex justify-center items-center">
      <div className="relative h-[70%] w-[32%] bg-black flex items-center flex-col text-white py-4 space-y-4">
        <TwitterIcon />
        <div className="text-4xl font-bold pb-5">Sign With Twitter</div>
        <div className="w-[45%] flex flex-col space-y-4">
          <button className="bg-white text-black rounded-full py-2 flex flex-row items-center justify-center">
            <img src="assets/google_logo.png" alt="" className="w-6 h-6 mr-2" />
            <span>Google ile Kaydolun</span>
          </button>

          <button className="bg-white text-black rounded-full py-2 mb-2 flex flex-row items-center justify-center">
            <img src="assets/apple_logo.png" alt="" className="w-6 h-6 mr-2" />
            <span>Apple ile kaydol</span>
          </button>

          <div className="relative flex py-2 ite mb-2 ms-center">
            <div className="flex-grow border-t mt-3 border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">or</span>
            <div className="flex-grow border-t mt-3 border-gray-400"></div>
          </div>

          <input
            type="text"
            className="px-2 py-4 bg-black border-2 border-blue-700 outl"
            placeholder="Phone, Email or username"
            onChange={(event) => setuserValue(event.target.value)}
          />

          <Link
            to="/LastLogin"
            state={{ userValue }}
            className="border-2 bg-white text-black rounded-full py-2 mt-8 text-center font-bold"
          >
            <button>Next</button>
          </Link>

          <Link
            to="/LastLogin"
            className="border-2  font-bold rounded-full py-2 mt-8 text-center"
          >
            <button>Forgot Password?</button>
          </Link>
        </div>
        <button className="absolute top-0 left-3 rounded-full hover:bg-gray-700 hover:bg-opacity-30 py-2 px-4 font-bold">
          X
        </button>
      </div>
    </div>
  );
};

export default Login;
