import React from "react";
import Button from "./Button";
import { Bookmark } from "lucide-react";

const RecommendedCard = () => {
  return (
    <div className=" bg-black flex p-5 mt-4 rounded-lg justify-between items-center text-base">
      <Button className="text-white bg-[#444444] w-fit justify-center items-center p-3 capitalize">
        breafast
      </Button>
      <Bookmark
        color="black"
        className="bg-amber-50 rounded-lg  p-2"
        size={40}
      />
    </div>
  );
};

export default RecommendedCard;
