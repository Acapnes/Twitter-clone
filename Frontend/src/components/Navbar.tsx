import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  ExploreIcon,
  NotificationIcon,
  MessageIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
  TwitterIcon,
} from "./Icons/SVGIcons";

const Navbar = () => {
  const [userInfo, setUserInfo] = useState(Object);

  const userMenu = () => {};

  const getUserDetails = async () => {
    const _id = window.sessionStorage.getItem("pathId");
    await fetch(`http://localhost:3000/users/${_id}`, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((userDetails) => {
        setUserInfo(userDetails);
        window.sessionStorage.setItem("avatar", userDetails.avatar);
      });
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className="h-screen w-[16.5rem] flex flex-col sticky top-0">
      <div className="flex flex-col mt-2 space-y-1 mb-10">
        <div className="w-full">
          <Link
            to="/home"
            className="w-fit flex flex-row items-center justify-start  space-x-4 px-4 py-4 rounded-full text-white text-2xl hover:bg-gray-900"
          >
            <TwitterIcon />
          </Link>
        </div>

        <div className="w-full">
          <Link
            to="/home"
            className="w-fit flex flex-row items-center justify-start  space-x-4 px-4 py-4 rounded-full text-white text-2xl hover:bg-gray-900"
          >
            <HomeIcon />
            <span>Home</span>
          </Link>
        </div>

        <div className="w-full">
          <Link
            to="/explore"
            className=" w-fit flex flex-row items-center justify-start space-x-4 px-5 py-4 rounded-full text-white text-2xl hover:bg-gray-900"
          >
            <ExploreIcon />
            <span>Explore</span>
          </Link>
        </div>

        <div className="w-full">
          <Link
            to="/notifications"
            className=" w-fit flex flex-row items-center justify-start  space-x-4 px-4 py-4 rounded-full text-white text-2xl hover:bg-gray-900"
          >
            <NotificationIcon />
            <span>Notifications</span>
          </Link>
        </div>

        <div className="w-full">
          <Link
            to="/notifications"
            className=" w-fit flex flex-row items-center justify-start  space-x-4 px-4 py-4 rounded-full text-white text-2xl hover:bg-gray-900"
          >
            <MessageIcon />
            <span>Messages</span>
          </Link>
        </div>

        <div className="w-full">
          <Link
            to="/notifications"
            className=" w-fit flex flex-row items-center justify-start  space-x-4 px-4 py-4 rounded-full text-white text-2xl hover:bg-gray-900"
          >
            <BookmarksIcon />
            <span>Bookmarks</span>
          </Link>
        </div>

        <div className="w-full">
          <Link
            to="/notifications"
            className=" w-fit flex flex-row items-center justify-start  space-x-4 px-4 py-4 rounded-full text-white text-2xl hover:bg-gray-900"
          >
            <ListsIcon />
            <span>Lists</span>
          </Link>
        </div>

        <div className="w-full">
          <Link
            to="/notifications"
            className=" w-fit flex flex-row items-center justify-start  space-x-4 px-4 py-4 rounded-full text-white text-2xl hover:bg-gray-900"
          >
            <ProfileIcon />
            <span>Profile</span>
          </Link>
        </div>

        <div className="w-full pb-5">
          <Link
            to="/notifications"
            className=" w-fit flex flex-row items-center justify-start  space-x-4 px-4 py-4 rounded-full text-white text-2xl hover:bg-gray-900"
          >
            <MoreIcon />
            <span>More</span>
          </Link>
        </div>

        <a
          href="https://www.google.com/"
          className="w-fit bg-blue-500 rounded-full"
        >
          <div className="flex justify-center items-center px-24 py-4">
            <span className="text-white font-bold">Tweet</span>
          </div>
        </a>
      </div>

      {/* User Details */}
      <button onClick={userMenu}>
        <div className="absolute bottom-5 w-full ">
          <div className="px-3 rounded-full w-fit py-2 flex flex-row space-x-2 hover:bg-gray-700 hover:bg-opacity-30">
            <div className="w-12 h-12">
              <img src={userInfo.avatar} alt="" className="rounded-full" />
            </div>

            <div className="flex flex-col pl-2 items-start text-white">
              <div>{userInfo.username}</div>
              <div className="text-gray-500">{userInfo.email}</div>
            </div>

            <div className="text-white pl-2 text-2xl ">...</div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Navbar;
