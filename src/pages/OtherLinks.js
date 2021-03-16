import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

const OtherLinks = () => {
  return (
    <div className="other-links-container">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">Projects</Link>
    </div>
  );
};

export default OtherLinks;
