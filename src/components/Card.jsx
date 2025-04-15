import React from "react";
import food from "../assets/foodb-removebg-preview.png";
import Button from "./Button";
const Card = () => {
  return (
    <div className=" bg-[#222222] flex p-5 mt-4 rounded-lg justify-between items-center">
      <div className="flex flex-col justify-between gap-3 md:gap-6">
        <p className=" text-lg text-white capitalize md:text-5xl">
          discover the secrets to becoming a master chef
        </p>
        <Button className="text-black justify-center items-center px-5 font-bold bg-white text-sm w-fit">
          start now
        </Button>
      </div>
      <img src={food} alt="alt" className="w-auto h-28 md:w-auto md:h-80" />
    </div>
  );
};

export default Card;
