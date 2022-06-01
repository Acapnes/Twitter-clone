import React, { useEffect, useState } from "react";
import { ShortMoreIconWithoutCircle } from "./Icons/ShortIcons";
import { TopTweetsIcon } from "./Icons/SVGIcons";

export const Widgets = () => {
  const [trends, setTrends] = useState([Object]);

  const fetchTrends = async () => {
    await fetch("http://localhost:3000/trend", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((trends) => setTrends(trends))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchTrends();
  }, []);

  return (
    <div className="h-full w-[24rem] sticky top-0 flex flex-col items-center mt-2">
      <div className="w-[20rem] h-full">
        {/* Search Bar */}
        <div className="w-full h-[2.5rem] flex flex-row items-center px-4 mb-4 bg-slate-800 rounded-full">
          <TopTweetsIcon />
          <input
            type="text"
            name=""
            id=""
            className="w-[85%] ml-2 py-1 outline-none text-white bg-slate-800"
            placeholder="Search Twitter"
          />
        </div>

        {/* Trends */}
        <div className="h-auto bg-slate-800 rounded-2xl pt-2">
          <span className="text-2xl font-bold text-white px-4 ">
            Trends For You
          </span>

          {trends.map((trend, index) => (
            <button
              key={index}
              className="w-full h-auto flex flex-col hover:bg-gray-500 hover:bg-opacity-10"
            >
              <div className="w-full h-auto flex flex-col px-4 mt-4">
                <div className=" w-fill  flex flex-row justify-between">
                  <span className=" text-sm text-gray-500">
                    Tending in Turkey
                  </span>{" "}
                  <button className="rounded-full p-2 fill-gray-500 hover:bg-blue-500 hover:bg-opacity-25 hover:fill-blue-400">
                    <ShortMoreIconWithoutCircle />
                  </button>
                </div>
                <div className="w-full flex flex-col items-start">
                  <span className="text-white font-bold">
                    {trend.name.includes("#") ? "" : "#"}
                    {trend.name}
                  </span>
                  <span className=" text-sm text-gray-500">Tweet Count</span>
                </div>
              </div>
            </button>
          ))}

          {/* Show More Button */}
          <button className="w-full h-auto text-left hover:bg-gray-500 hover:bg-opacity-10 rounded-b-2xl mt-4 py-4 px-4 text-blue-600">Show more</button>
        </div>
      </div>
    </div>
  );
};
