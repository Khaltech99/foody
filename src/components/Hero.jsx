import { Search, SlidersHorizontal } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="font-[Poppins]">
      <h2 className=" text-lg capitalize mt-5 mb-4 font-[Poppins] text-[#333333] font-semibold md:text-3xl md:text-center md:tracking-wider">
        what would you like to cook today?
      </h2>
      <div className="flex flex-1 justify-between rounded-lg bg-neutral-100 items-center p-3">
        <div className="flex justify-center items-center gap-2 flex-1">
          <Search />
          <input
            type="text"
            placeholder="search any type of recipe you want"
            className="text-sm outline-none bg-none w-full md:text-base"
          />
        </div>
        <SlidersHorizontal
          className=" border-l-1 border-[#555555] pl-2 "
          size={30}
        />
      </div>
    </div>
  );
};

export default Hero;
