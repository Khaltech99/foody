import { ChevronRight } from "lucide-react";
import React from "react";

const ViewAll = ({ children }) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <h2 className="text-black capitalize font-semibold md:text-lg">
        {children}
      </h2>
      <div className="flex gap-3 text-sm justify-between items-center">
        <p className="text-sm">View all</p>
        <ChevronRight color="#666666" />
      </div>
    </div>
  );
};

export default ViewAll;
