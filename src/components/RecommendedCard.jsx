import React from "react";
import Button from "./Button";
import { Bookmark } from "lucide-react";

const RecommendedCard = () => {
  return (
    <div className=" bg-[#222222] flex p-5 mt-4 rounded-lg justify-between items-start  text-base h-48">
      <Button className="text-white bg-[#444444] flex justify-center items-center p-3 capitalize">
        breakfast
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
