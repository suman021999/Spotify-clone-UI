import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="w-[25%] h-full p-2 hidden lg:flex flex-col gap-2  text-white">
        <div className="flex h-[15%] rounded bg-[#121212] flex-col justify-around">
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 pl-8 cursor-pointer"
          >
            <img className="w-6" src={assets.home_icon} alt="" />
            <p className="font-bold ">Home</p>
          </div>

          <div className="flex items-center gap-3 pl-8 cursor-pointer">
            <img className="w-6" src={assets.search_icon} alt="" />
            <p className="font-bol">Search</p>
          </div>
        </div>

        <div className="h-[85%] rounded bg-[#121212]">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img className="w-8" src={assets.stack_icon} alt="" />
              <p className="font-semibold">Your Libray</p>
            </div>

            <div className="flex items-center gap-3">
              <img className="w-5" src={assets.arrow_icon} alt="" />
              <img className="w-5" src={assets.plus_icon} alt="" />
            </div>
          </div>
          <div className="p-4 rounded bg-[#242424] m-2 font-semibold flex flex-col justify-start items-start gap-1 pl-4">
            <h1>Create your first playlist</h1>
            <p className="font-light">it's easy we will help you</p>
            <button className="px-4 py-1.5 mt-4 text-[15px] bg-white text-black rounded-full">
              Create Playlist
            </button>
          </div>

          <div className="p-4 rounded bg-[#242424] m-2 font-semibold flex flex-col justify-start items-start gap-1 pl-4 mt-4">
            <h1>Let's find some podcasts to follow</h1>
            <p className="font-light">we'll keep you update on new episodes</p>
            <button className="px-4 py-1.5 mt-4 text-[15px] bg-white text-black rounded-full">
              Browse podcasts
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
