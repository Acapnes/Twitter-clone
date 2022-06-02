import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweetAPI } from "../../api/tweet.api";
import { ShortGalleryIcon } from "../Icons/ShortIcons";

export const NewTweet = () => {
  const [message, setMessage] = useState("");

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
          src: imageURL
        },
      },
    }).then((resp) => console.log(resp));
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
      {imageURL && (
        <div className="w-full mt-4 flex justify-center items-center p-4 ">
          <div className="relative">
            <button className="absolute top-2 left-1 rounded-full bg-gray-800 hover:bg-gray-400 hover:bg-opacity-25 px-3 py-1">X</button>
            <img src={imageURL} alt="" className="rounded-2xl" />
          </div>
        </div>
      )}
    </div>
  );
};
