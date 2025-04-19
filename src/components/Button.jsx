import React from "react";
import { Link } from "react-router";

const Button = ({ isLink = false, type = "button", text, path, onClick }) => {
  return isLink ? (
    <Link className="button" to={path}>
      {text}
    </Link>
  ) : (
    <button type={type} className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
