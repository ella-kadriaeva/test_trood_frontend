import React from "react";
import Button from "../components/Button";

const NotFound = () => {
  return (
    <div className="projects__page">
      <div className="title__block">
        <h1 className="title">Page under development</h1>

        <Button text="Go to home page" isLink={true} path="/" />
      </div>
    </div>
  );
};

export default NotFound;
