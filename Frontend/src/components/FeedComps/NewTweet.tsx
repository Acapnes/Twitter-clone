import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweetAPI } from "../../api/tweet.api";
import { ShortEmojiIcon, ShortGalleryIcon, ShortGifIcon, ShortLocationIcon, ShortPollIcon, ShortScheduleIcon } from "../Icons/ShortIcons";

export const NewTweet = () => {
  const [message, setMessage] = useState("");

  const sendTweet = () => {
    TweetAPI.sendTweet({
      author: window.sessionStorage.getItem("pathId")?.toString()!,
      data: {
        time: Date().toLocaleString(),
        message: message,
        likeCount: 0,
        retweetCount: 0,
        commentCount: 0,
        img: {
          src: "https://i.pinimg.com/736x/ce/67/d5/ce67d5259c2c91f10d83a2439ea15006.jpg",
        },
      },
    }).then((resp) => console.log(resp._id));
    window.location.reload();
  };

  const [imageURL, setImageURL] = useState<any>();

  const hiddenFileInput =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleClick = () => {
    hiddenFileInput.current ? hiddenFileInput.current.click() : alert("Error!");
  };

  const handleChange = (e: any) => {
    const fileUploaded = e.target.files[0];
    setImageURL(URL.createObjectURL(fileUploaded));
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-row w-full h-[7rem]">
        <div className="w-[15%] h-[100%] ">
          {window.sessionStorage.getItem("avatar") != "undefined" ? (
            <img src={window.sessionStorage.getItem("avatar")!} alt="" className="w-[3.5rem] h-[3.5rem] rounded-full m-2"/>
          ) : (
            <div className="text-center">Resim</div>
          )}
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
            <input
              type="file"
              style={{ display: "none" }}
              ref={hiddenFileInput}
              onChange={handleChange}
            />

            <button
              onClick={handleClick}
              className="p-2 hover:bg-opacity-20 hover:bg-blue-600 fill-blue-400 rounded-full"
            >
              <ShortGalleryIcon />
            </button>

            <Link to="*">
              <div className="p-2 hover:bg-opacity-20 hover:bg-blue-600 fill-blue-400 rounded-full">
                {" "}
                <ShortGifIcon />{" "}
              </div>
            </Link>

            <Link to="*">
              <div className="p-2 hover:bg-opacity-20 hover:bg-blue-600 fill-blue-400 rounded-full">
                {" "}
                <ShortPollIcon />{" "}
              </div>
            </Link>

            <Link to="*">
              <div className="p-2 hover:bg-opacity-20 hover:bg-blue-600 fill-blue-400 rounded-full">
                {" "}
                <ShortEmojiIcon />{" "}
              </div>
            </Link>

            <Link to="*">
              <div className="p-2 hover:bg-opacity-20 hover:bg-blue-600 fill-blue-400 rounded-full">
                {" "}
                <ShortScheduleIcon />{" "}
              </div>
            </Link>

            <Link to="*">
              <div className="p-2 hover:bg-opacity-20 hover:bg-blue-600 fill-blue-400 rounded-full">
                {" "}
                <ShortLocationIcon />{" "}
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
      {imageURL && (
        <div className="w-full mt-4 flex justify-center items-center p-4 ">
          <div className="relative">
            <button className="absolute top-2 left-1 rounded-full bg-gray-800 hover:bg-gray-400 hover:bg-opacity-25 px-3 py-1">
              X
            </button>
            <img src={imageURL} alt="" className="rounded-2xl" />
          </div>
        </div>
      )}
    </div>
  );
};
