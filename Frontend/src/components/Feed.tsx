import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CommentIcon, LikeIcon, ReTweetIcon, ShareIcon } from "./Icons/ShortIcons";
import { ProfileIcon, TopTweetsIcon } from "./Icons/SVGIcons";

export const Feed = () => {
  useEffect(() => {}, []);

  const Tweet = {
    id: 1,
    outhor: "Alper",
    username:"Acapnes",
    time: new Date(),
    img: "",
    data: "Full-stack developer",
    comment:{
      count:4
    }
  };

  const Tweet2 = {
    id: 1,
    outhor: "Alper",
    username:"Acapnes",
    time: new Date(),
    img: "",
    data: "Full-stack developer",
    comment:{
      count:4
    }
  };

  const Tweet3 = {
    id: 1,
    outhor: "Alper",
    username:"Acapnes",
    time: new Date(),
    img: "",
    data: "Full-stack developer",
    comment:{
      count:4
    }
  };

  const TweetAray = [Tweet,Tweet2,Tweet3,Tweet3,Tweet3,Tweet3,Tweet3];

  return (
    <div className="h-[100%] w-[37.5rem] border-l-2 border-r-2 border-b-2 border-gray-400 text-white">
      <div className="w-full h-[6rem] font-bold text-xl relative">
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
      <div className="flex flex-row w-full h-[6rem] ">
        <div className="w-[15%] h-[100%] ">
          <div className="text-center">Resim</div>
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="What's happening?"
            className=" bg-black ml-4 py-4 mr-4 w-[90%] outline-none"
          />
          <div className="flex flex-row space-x-3 ml-4 ">
            <Link to="*" className="hover:bg-blue-900 rounded-full px-2 py-2">
              <ProfileIcon />
            </Link>
          </div>
        </div>
      </div>



      {
        TweetAray.map(()=>(
          <div className="w-full h-[auto] mt-4 pt-2 flex flex-row border-t-2 border-t-gray-500">
          <div className="w-[15%] h-[100%] ">
            <div className="text-center">Resim</div>
          </div>
          <div className="w-full h-full flex flex-col">
            <div className="w-full h-[90%] ">
              <div className="flex flex-col w-full h-full ml-2 mt-2 ">
                <div className="flex flex-row w-[90%] h-auto space-x-2 ">
                  <span>{Tweet.outhor}</span> <span>{Tweet.username}</span> <span>{Tweet.time.getMinutes()+"m"}</span>
                </div>
                <div className="h-auto w-[90%] my-4">
                  <span>{Tweet.data}</span>
                </div>
              </div>
            </div>
            <div className="w-full h-fit">
              <div className="flex flex-row mx-2 space-x-20 mb-2">
  
                <Link to="*">
                <div className="flex flex-row space-x-3 w-[4rem] justify-center">
                  <div className="p-2 hover:bg-opacity-20 hover:bg-blue-600 hover:fill-blue-600 fill-gray-500 rounded-full "> <CommentIcon/> </div> <div className="mt-1.5 text-gray-500">{Tweet.comment.count}</div>
                </div>
                </Link>
  
                <Link to="*">
                <div className="flex flex-row space-x-3 w-[4rem] justify-center">
                  <div className="p-2 hover:bg-opacity-20 hover:bg-green-600 hover:fill-green-600 fill-gray-500 rounded-full"> <ReTweetIcon/> </div> <div className="mt-1.5 text-gray-500">{Tweet.comment.count}</div>
                </div>
                </Link>
  
                <Link to="*">
                <div className="flex flex-row space-x-3 w-[4rem] justify-center">
                  <div className="p-2 hover:bg-opacity-20 hover:bg-red-600 hover:fill-red-600 fill-gray-500 rounded-full"> <LikeIcon/> </div> <div className="mt-1.5 text-gray-500">{Tweet.comment.count}</div>
                </div>
                </Link>
  
                <Link to="*">
                  <div className="p-2 hover:bg-opacity-20 hover:bg-blue-600 hover:fill-blue-600 fill-gray-500 rounded-full"> <ShareIcon/> </div>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
        ))
      }

    </div>
  );
};
