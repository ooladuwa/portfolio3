import React from 'react'
import OtherLinks from './OtherLinks'
import "./pages.css"
import { Link, Switch, Route } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-container">
        {/* <img 
          src="https://i.ibb.co/ymzjNXw/border3.png"  alt="contact" 
        className="contact-img"/> */}
        
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">Projects</Link>
   
    </div>
  )
}

export default Contact
