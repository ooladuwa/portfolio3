import React from "react";
import { Link, Switch, Route } from "react-router-dom";


const Links = () => {
  return (
    <div className="otherlinks-container aboutlinks-container contactlinks-container projects-container">
      <Link className="otherlinks about-otherLinks" to="/">Home</Link>
      <Link className="otherlinks about-otherLinks" to="/about">About</Link>
      <Link className="otherlinks about-otherLinks" to="/projects">Projects</Link>
    </div>
  );
};

export default Links;
