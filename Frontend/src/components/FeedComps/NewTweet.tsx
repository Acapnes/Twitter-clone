import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweetAPI } from "../../api/tweet.api";
import { ShortGalleryIcon } from "../Icons/ShortIcons";

export const NewTweet = () => {
  const [author, setauthor] = useState("");

  const [message, setMessage] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);

  const ref = useRef(null);

  const reset = () => {
   
  };

  const sendTweet = () => {
    TweetAPI.sendTweet({
      author: "628f7687b4097d4de664f617",
      data: {
        time: Date().toLocaleString(),
        message: message,
        likeCount: 0,
        retweetCount: 0,
        commentCount: 0,
        img: {
          src: "abc.jpg",
        },
      },
    }).then((resp) => console.log(resp));
  };

  return (
    <div className="flex flex-row w-full h-[7rem] ">
      <div className="w-[15%] h-[100%] ">
        <div className="text-center">Resim</div>
      </div>
      <div className="w-full relative">
        <input
          type="text"
          placeholder="What's happening?"
          className=" bg-black ml-4 py-4 mr-4 w-[90%] outline-none"
          onChange={(event) => setMessage(event.target.value)}
        />
        <div className="flex-grow border-t mt-3 border-gray-700 mr-10 mb-3"></div>
        <div className="flex flex-row space-x-1 ml-4 ">

          <Link to="*">
            <div className="p-2 hover:bg-opacity-20 hover:bg-blue-600 fill-blue-400 rounded-full">
              {" "}
              <ShortGalleryIcon />{" "}
            </div>
          </Link>

          <Link to="*">
            <div className="p-2 hover:bg-opacity-20 hover:bg-blue-600 fill-blue-400 rounded-full">
              {" "}
              <ShortGalleryIcon />{" "}
            </div>
          </Link>

          <Link to="*">
            <div className="p-2 hover:bg-opacity-20 hover:bg-blue-600 fill-blue-400 rounded-full">
              {" "}
              <ShortGalleryIcon />{" "}
            </div>
          </Link>

          <Link to="*">
            <div className="p-2 hover:bg-opacity-20 hover:bg-blue-600 fill-blue-400 rounded-full">
              {" "}
              <ShortGalleryIcon />{" "}
            </div>
          </Link>

          <Link to="*">
            <div className="p-2 hover:bg-opacity-20 hover:bg-blue-600 fill-blue-400 rounded-full">
              {" "}
              <ShortGalleryIcon />{" "}
            </div>
          </Link>

          <Link to="*">
            <div className="p-2 hover:bg-opacity-20 hover:bg-blue-600 fill-blue-400 rounded-full">
              {" "}
              <ShortGalleryIcon />{" "}
            </div>
          </Link>
        </div>

        <button
          onClick={sendTweet}
          className="absolute bottom-0 right-5 bg-opacity-70 bg-blue-500 hover:bg-opacity-100 rounded-full px-4 py-1"
        >
          Tweet
        </button>
      </div>
    </div>
  );
};
