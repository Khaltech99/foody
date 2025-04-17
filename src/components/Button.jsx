import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <div
      className={` py-1 rounded-full flex cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
