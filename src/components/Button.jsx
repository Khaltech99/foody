import React from "react";

const Button = ({ children, className }) => {
  return (
    <div
      className={`px-3 py-2 rounded-full flex justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
