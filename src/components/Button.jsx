import React from "react";

const Button = ({ children, className }) => {
  return (
    <div className={` py-2 rounded-full flex ${className}`}>{children}</div>
  );
};

export default Button;
