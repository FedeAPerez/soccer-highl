import React from "react";
const namespace = "base-button";

const Button = ({ children, label, className, onClick }) => (
  <button
    onClick={onClick ? e => onClick(e) : null}
    className={className + " " + namespace}
  >
    {label && label}
    {children}
  </button>
);

export default Button;
