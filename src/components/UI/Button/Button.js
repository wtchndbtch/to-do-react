import React from "react";

import classes from "./Button.module.css";

const Button = ({ children, onClick, className, type }) => {
  return (
    <button
      type={type}
      className={`${classes.btn} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
