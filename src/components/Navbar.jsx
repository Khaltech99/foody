import { Menu } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="font-[Aclonica] text-3xl text-black md:text-4xl">
          nageri
        </h1>
      </div>
      <Menu color="black" size={30} />
    </div>
  );
};

export default Navbar;
