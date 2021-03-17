import React from "react";
import { Link, Switch, Route } from "react-router-dom";


const Links = () => {
  return (
    <div className="otherlinks-container aboutlinks-container contactlinks-container projects-container">
      <Link className="otherlinks" to="/">Home</Link>
      <Link className="otherlinks" to="/about">About</Link>
      <Link className="otherlinks" to="/contact">Contact</Link>
      <Link className="otherlinks" to="/projects">Projects</Link>
    </div>
  );
};

export default Links;
