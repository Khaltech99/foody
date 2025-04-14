import React from "react";
import backgroundImage from "../assets/ingredients-near-pizza.jpg";
import food from "../assets/407745033_05dbafde-b769-43ad-909e-a3ab5f6dd7ea.jpg";
import Button from "./Button";
const Card = () => {
  return (
    <div
      className=" bg-cover bg-no-repeat w-full px-3 mt-4 rounded-lg flex justify-between"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col justify-around">
        <p className=" text-base text-white capitalize">
          discover the secrets to becoming a master chef
        </p>
        <Button className="text-black font-bold bg-white text-sm w-fit">
          start now
        </Button>
      </div>
      <img src={food} alt="alt" className="w-32 h-32" />
    </div>
  );
};

export default Card;
