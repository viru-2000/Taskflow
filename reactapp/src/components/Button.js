import React from "react";

const Button = ({ label, onClick, type = "button", variant = "primary" }) => {
  return (
    <button className={`btn btn-${variant}`} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

//Reusable Button
