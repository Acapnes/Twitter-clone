import React from "react";
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
  return (
    <div className="h-full w-[16.5rem] sticky top-0">
      <div className="flex flex-col mt-2 space-y-1">
        <div className="w-full">
          <Link
            to="*" className="w-fit flex flex-row items-center justify-start  space-x-4 px-4 py-4 rounded-full text-white text-2xl hover:bg-gray-900">
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
    </div>
  );
};

export default Navbar;
