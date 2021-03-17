import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="homelinks-container">
      <Link className="homelinks" to="/">Home</Link>
      <Link className="homelinks" to="/about">About</Link>
      <Link className="homelinks" to="/contact">Contact</Link>
      <Link className="homelinks" to="/projects">Projects</Link>
    </div>
  );
};

export default Links;
