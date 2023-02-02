import React from "react";

const Button = ({ children, onClick, className, type }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
