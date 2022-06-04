import React from "react";
import { Link } from "react-router-dom";
import RegisterDialog from "../../components/AuthComps/RegisterDialog";
import { TwitterIcon } from "../../components/Icons/SVGIcons";

const Register = () => {

  return (
    <div className="h-screen w-screen bg-gray-800 flex justify-center items-center">
      <div className="relative h-[70%] w-[32%] bg-black flex items-center flex-col text-white rounded-2xl py-4 space-y-4">
        <TwitterIcon />
        <div className="w-[50%] h-[80%] flex flex-col space-y-4 relative">
          <div className="text-4xl font-bold pb-5">Bugün Twitter'a katıl</div>

          <div className="flex flex-col">
            <button className="bg-white text-black rounded-full py-2 mb-4 mt-5 flex flex-row items-center justify-center">
              <img
                src="assets/google_logo.png"
                alt=""
                className="w-6 h-6 mr-2"
              />
              <span>Google ile Kaydolun</span>
            </button>

            <button className="bg-white text-black rounded-full py-2 mb-2 flex flex-row items-center justify-center">
              <img
                src="assets/apple_logo.png"
                alt=""
                className="w-6 h-6 mr-2"
              />
              <span>Apple ile kaydol</span>
            </button>

            <div className="relative flex py-2 ite mb-2 ms-center">
              <div className="flex-grow border-t mt-3 border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">veya</span>
              <div className="flex-grow border-t mt-3 border-gray-400"></div>
            </div>

            <RegisterDialog/>

            <div className="text-xs  text-gray-500">
              <span>By signing up, you agree to the </span>
              <a className=" text-blue-500" href="https://www.google.com/">
                Terms of Service{" "}
              </a>
              <span>and </span>
              <a className=" text-blue-500" href="https://www.google.com/">
                Privacy Policy,
              </a>
              <span> including </span>
              <a className=" text-blue-500" href="https://www.google.com/">
                Cookie Use.
              </a>
            </div>

            <div className="flex flex-row mt-10 text-gray-500 space-x-1">
              <span>Zaten bir hesabın var mı?</span>
              <button>
                <span className="text-blue-500">Giriş Yap</span>
              </button>
            </div>
          </div>
        </div>

        <Link
          to="/auth"
          className="absolute top-0 left-3 rounded-full hover:bg-gray-700 hover:bg-opacity-30 py-2 px-4 font-bold"
        >
          <button>X</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
