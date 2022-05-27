import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TweetAPI } from "../api/tweet.api";
import { TweetDto } from "../dto/tweets/tweet.dto";
import { NewTweet } from "./FeedComps/NewTweet";

import {
  CommentIcon,
  LikeIcon,
  ReTweetIcon,
  ShareIcon,
  ShortMoreIcon,
  ConfrimedIcon
} from "./Icons/ShortIcons";

export const Feed = () => {
  const [tweets, setTweets] = useState<TweetDto[]>([]);

  const fetchAllTweets = async () => {
    const resp = await TweetAPI.getAllTweets();
    setTweets(resp);
  };

  useEffect(() => {
    fetchAllTweets();
  }, []);

  return (
    <div className="h-[100%] w-[37.5rem] border-l-2 border-r-2 border-b-2 border-gray-400 text-white">
      {/* HomeBanner */}
      <div className="w-full h-[6rem] font-bold text-xl relative">
        <Link to="/home" className="absolute top-5 left-5">
          Home
        </Link>
        <Link
          to="*"
          className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-900"
        ></Link>
      </div>

      {/* Tweet Input */}
      <NewTweet />

      {/* Tweets Listing */}
      {tweets
        .map((tweet, i) => (
          <div
            key={i}
            className="w-full h-[auto] mt-4 pt-2 flex flex-row border-t-2 border-t-gray-500 relative"
          >
            <div className="w-[15%] h-[100%] ">
              <div className="text-center">Resim</div>
            </div>
            <div className="w-full h-full flex flex-col pr-12">
              <div className="w-full h-[90%] ">
                <div className="flex flex-col w-full h-full ml-2 mt-2 space-y-3 ">
                  <div className="flex flex-row w-[90%] h-auto space-x-2 ">
                    <span>{tweet.author.name}</span>{" "}
                    <span className=" text-sm text-gray-500">
                    {tweet.author.confrimed ? <ConfrimedIcon/> : <div></div>}
                    </span>
                    <span>
                      {tweet.author.username}
                    </span>
                    <span className=" text-sm text-gray-500">
                      {tweet.data.time + "m"}
                    </span>
                  </div>

                  <div className="h-auto w-[90%]">
                    <span>{tweet.data.message}</span>
                  </div>
                  <div className="w-full flex justify-center items-center">
                    {tweet.data.img.src && (
                      <img
                        src={tweet.data.img.src}
                        alt=""
                        className="rounded-2xl"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full h-fit">
                <div className="flex flex-row mx-2 space-x-20 my-2">
                  <Link to="*">
                    <div className="flex flex-row space-x-3 w-[4rem] justify-center">
                      <div className="p-2 hover:bg-opacity-20 hover:bg-blue-600 hover:fill-blue-600 fill-gray-500 rounded-full ">
                        {" "}
                        <CommentIcon />{" "}
                      </div>{" "}
                      <div className="mt-1.5 text-gray-500">
                        {tweet.data.commentCount}
                      </div>
                    </div>
                  </Link>

                  <Link to="*">
                    <div className="flex flex-row space-x-3 w-[4rem] justify-center">
                      <div className="p-2 hover:bg-opacity-20 hover:bg-green-600 hover:fill-green-600 fill-gray-500 rounded-full">
                        {" "}
                        <ReTweetIcon />{" "}
                      </div>{" "}
                      <div className="mt-1.5 text-gray-500">
                        {tweet.data.commentCount}
                      </div>
                    </div>
                  </Link>

                  <Link to="*">
                    <div className="flex flex-row space-x-3 w-[4rem] justify-center">
                      <div className="p-2 hover:bg-opacity-20 hover:bg-red-600 hover:fill-red-600 fill-gray-500 rounded-full">
                        {" "}
                        <LikeIcon />{" "}
                      </div>{" "}
                      <div className="mt-1.5 text-gray-500">
                        {tweet.data.commentCount}
                      </div>
                    </div>
                  </Link>

                  <Link to="*">
                    <div className="p-2 hover:bg-opacity-20 hover:bg-blue-600 hover:fill-blue-600 fill-gray-500 rounded-full">
                      {" "}
                      <ShareIcon />{" "}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <Link to="*">
              <div className="absolute top-2.5 right-5 fill-gray-500">
                {" "}
                <ShortMoreIcon />{" "}
              </div>
            </Link>
          </div>
        ))
        .reverse()}
    </div>
  );
};
