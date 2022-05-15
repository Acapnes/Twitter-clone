import React from "react";

function Login() {
  return (
    <div className="w-screen h-screen bg-black flex flex-row justify-between">
      <div className="h-screen w-full">
        <img
          src="/assets/home-bg.png"
          alt="twitter.png"
          className="h-screen w-full"
        />
      </div>
      <div className="h-screen w-screen text-white flex flex-col justify-center">
        <div className="px-20 py-20">
          <div id="Logo">Logo</div>
          <p className="text-5xl my-10 font-bold">Şu anda olup bitenler</p>
          <p className="text-4xl mb-5 font-bold">Şu anda olup bitenler</p>
          <div className="w-[16rem]  flex flex-col">
            <button className="bg-red-100 rounded-full py-2 mb-5">Kaydol</button>
            <button className="bg-red-100 rounded-full py-2">Giriş Yap</button>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">veya</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <button className="bg-red-100 rounded-full py-2">Telefon numarası veya e-posta...</button>
            <span className="text-xs">By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
