import { Menu } from "lucide-react";
import React from "react";
import Wrapper from "./Wrapper";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center  bg-white w-full">
      <div>
        <h1 className="font-[Aclonica] text-3xl text-black md:text-4xl">
          nageri
        </h1>
      </div>
      <button className="p-1 rounded-md hover:bg-gray-100">
        <Menu color="black" size={30} />
      </button>
    </nav>
  );
};

export default Navbar;
