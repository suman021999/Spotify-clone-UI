import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(+1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block">
            Explore premium
          </p>
          <p className="bg-black text-[15px] px-3 py-1 rounded-2xl">
            Install App
          </p>
          <p className=" bg-purple-500 text-black flex items-center justify-center w-7 h-7 text-[15px] px-3 py-1 rounded-full">
            D
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl">
          All
        </p>
        <p className="bg-black   px-4 py-1 rounded-2xl">Music</p>
        <p className="bg-black  px-4 py-1 rounded-2xl">podcasts</p>
      </div>
    </>
  );
};

export default Navbar;
