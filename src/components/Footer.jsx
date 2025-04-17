import React, { useState } from "react";
import Wrapper from "./Wrapper";
import { Facebook, Instagram, Search, Twitter } from "lucide-react";
import { useMealStore } from "../../useMealStore";

const Footer = () => {
  const search = useMealStore((state) => state.search);
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = (query) => {
    // Call the search function from your store
    search(query);
    setSearchItem("");
  };

  return (
    <div className="bg-black pb-10">
      <Wrapper>
        <section className="grid grid-cols-3 md:flex gap-4 md:flex-row md:justify-around py-10">
          <div className="">
            <h1 className="font-[Aclonica] text-2xl text-white md:text-3xl">
              nageri
            </h1>
          </div>
          <ul>
            <li className="mb-4 text-white capitalize">Get started</li>
            <li className="text-white text-sm">how to cook rice</li>
          </ul>
          <ul>
            <li className="mb-4 text-white capitalize">Get started</li>
            <li className="text-white text-sm">how to cook rice</li>
          </ul>

          <div className="flex flex-col">
            <h1 className="text-white mb-4 capitalize">chat with us</h1>
            <div className="flex gap-2 text-white">
              <Twitter size={20} />
              <Instagram size={20} />
              <Facebook size={20} />
            </div>
          </div>
        </section>
        <div className="flex justify-center items-center gap-2 flex-1 bg-white rounded-lg w-full p-2  ">
          <input
            type="text"
            placeholder="search any type of recipe you want"
            onChange={(e) => setSearchItem(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch(searchItem);
              }
            }}
            className="text-sm outline-none bg-none w-full md:text-base"
            value={searchItem}
          />
          <div className="bg-black w-fit p-3 text-white rounded-lg">
            <Search />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
