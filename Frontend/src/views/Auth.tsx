import React from "react";
import { Link } from "react-router-dom";
import { AuthAPI } from "../api/auth.api";

function Auth() {
  const handleLogin = () => {
    const resp = AuthAPI.Login({
      email: "Alper2@gmail.com",
      password: "12345672",
    });

    console.log(resp);
  };

  return (
    <div className="w-screen h-screen">
      <div className="w-screen h-little bg-black flex flex-row justify-between">
        <div className="h-full w-full bg-[url('/public/assets/home-bg.png')] flex justify-center items-center">
          <img
            src="/assets/twitter-512.png"
            alt="twitter.png"
            className="h-[24rem] w-[24rem]"
          />
        </div>
        <div className="h-full w-betweenRight text-white flex flex-col justify-center">
          <div className="px-10 py-20 w-[48rem]">
            <img src="assets/twitter-32.png" alt="" />
            <p className="text-7xl my-10 font-bold tracking-wide">
              Şu anda olup bitenler
            </p>
            <p className="text-4xl mb-5 font-bold">Twitter'a bugün katıl.</p>
            <div className="w-[20rem]  flex flex-col">
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
              <button className="bg-blue-500 font-bold rounded-full py-2 mb-2">
                Telefon numarası veya e-posta...
              </button>
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
              <div className="mt-20 flex flex-col">
                <span className="font-bold">Zaten bir hesabın var mı?</span>
                <Link to="/login" className="border-2 font-bold rounded-full py-2 mt-5 text">
                  <button
                    onClick={handleLogin}>
                    Giriş yap.
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-fill bg-slate-800 flex justify-center items-center"></div>
    </div>
  );
}

export default Auth;
