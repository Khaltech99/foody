import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="m-3 font-[Poppins] md:w-[1200px] md:m-auto md:mt-5">
      {children}
    </div>
  );
};

export default Wrapper;
