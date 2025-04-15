import React from "react";

const LoadingMeals = () => {
  return (
    <div className="flex justify-center">
      <div className="w-44 h-auto flex-col flex justify-center items-center bg-gray-200 shadow rounded-lg overflow-hidden gap-y-0.5 animate-pulse">
        <div className="w-full h-32 bg-gray-200 flex justify-center items-center p-3">
          <div className="h-20 w-20 rounded-full bg-gray-300"></div>
        </div>
        <div className="flex w-full gap-2 justify-center items-center bg-gray-100 p-2">
          <div className="w-6 h-6 rounded-full bg-gray-300"></div>
          <div className="h-4 w-16 bg-gray-300 rounded"></div>
        </div>
        <div className="flex w-full gap-2 justify-center items-center bg-gray-100 p-2">
          <div className="w-6 h-6 rounded-full bg-gray-300"></div>
          <div className="h-4 w-16 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingMeals;
