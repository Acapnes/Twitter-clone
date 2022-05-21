import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CommentIcon, LikeIcon, ReTweetIcon, ShareIcon, ShortMoreIcon } from "./Icons/ShortIcons";
import { ProfileIcon, TopTweetsIcon } from "./Icons/SVGIcons";

export const Feed = () => {
  useEffect(() => {}, []);

  const Tweet = {
    id: 1,
    outhor: "Alper",
    username:"Acapnes",
    time: new Date(),
    data: "Donec molestie, metus sed scelerisque cursus, nibh nulla placerat tortor, id gravida erat eros in lacus. Nullam dignissim non erat sit amet mattis. Etiam sit amet sem justo. Sed vel felis risus. Suspendisse sed mi felis. Pellentesque nec libero est. Cras cursus libero et neque varius dapibus",
    comment:{
      count:4
    },
    img:{
      src:"assets/twitter-512.png",
    },
    confrimed: true
  };

  const Tweet2 = {
    id: 1,
    outhor: "Ahmet",
    username:"Example",
    time: new Date(),
    data: "Nullam ultricies a justo non mattis. Aliquam dignissim at justo vitae imperdiet. Suspendisse sed lorem eget purus ultrices dapibus vitae vel nulla. Aenean dictum eleifend leo et ullamcorper. Praesent eu ullamcorper lacus. Maecenas pellentesque tellus et ipsum pretium, convallis dapibus nulla tempus. Sed tempus velit ligula. Etiam sit amet cursus justo, vitae fringilla risus. Nulla vitae magna id nibh tincidunt convallis. Quisque lobortis luctus maximus. Sed sed massa nunc. Suspendisse a ornare lacus, in egestas nibh. Etiam porta mi quis faucibus pharetra",
    comment:{
      count:4
    },
    img:{
      src:"assets/twitter-512.png",
    },
    confrimed: false
  };

  const Tweet3 = {
    id: 1,
    outhor: "Çağrı Ergün",
    username:"HypeSinemalar",
    time: new Date(),
    data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien massa, elementum in accumsan mattis, tempus sagittis felis. Proin at risus porttitor, maximus nisl vitae, aliquet ex. Proin facilisis, lectus sed sagittis tincidunt, velit nisi sollicitudin purus, eget facilisis eros quam ut quam. Etiam tempus pulvinar gravida. Etiam imperdiet, turpis vel placerat varius, ante odio finibus leo, in scelerisque risus velit at diam. Phasellus at bibendum erat. Cras in ante quis libero pharetra egestas non id orci. Mauris eget ex in sapien dictum mattis quis nec dui. Vestibulum pretium, arcu eget ornare mollis, elit neque auctor nibh, non blandit ante nisl vitae felis. Mauris convallis ultrices quam quis rutrum",
    comment:{
      count:4
    },
    img:{
      src:"assets/google_logo.png",
    },
    confrimed: true
  };

  const TweetAray = [Tweet,Tweet2,Tweet3,Tweet3,Tweet3,Tweet3,Tweet3];

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
        >
          <TopTweetsIcon />
        </Link>
      </div>
      

      {/* Tweet Input */}
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


      {/* Tweets Listing */}
      {
        TweetAray.map((tweet,i)=>(
          <div className="w-full h-[auto] mt-4 pt-2 flex flex-row border-t-2 border-t-gray-500 relative">
          <div className="w-[15%] h-[100%] ">
            <div className="text-center">Resim</div>
          </div>
          <div className="w-full h-full flex flex-col">
            <div className="w-full h-[90%] ">
              <div className="flex flex-col w-full h-full ml-2 mt-2 ">
                <div className="flex flex-row w-[90%] h-auto space-x-2 ">
                  <span>{tweet.outhor}</span> <span className=" text-sm text-gray-500">{tweet.username}</span>
                  <span>{tweet.confrimed ? "Confrimed":"Not Confrimed"}</span>
                  <span className=" text-sm text-gray-500">{tweet.time.getMinutes()+"m"}</span>
                </div>
                
                <div className="h-auto w-[90%] my-4">
                  <span>{tweet.data}</span>
                </div>
                <img src={tweet.img.src} alt="" className="h-24 w-24 "/>
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
          <Link to="*"><div className="absolute top-2.5 right-5 fill-gray-500"> <ShortMoreIcon/> </div></Link>
        </div>
        ))
      }



    </div>
  );
};
