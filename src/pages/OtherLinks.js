import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";

const Links = () => {
  return (
    <div className="other-links-container about">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">Projects</Link>
    </div>
  );
};

export default Links;
