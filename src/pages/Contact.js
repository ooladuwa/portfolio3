import React from 'react'
import OtherLinks from './OtherLinks'
import Socials from "../components/Socials"
import "./pages.css"
import { Link, Switch, Route } from "react-router-dom";
import Intro from '../components/Intro';

const Contact = () => {
  return (
    <div className="contact-container">
        {/* <img 
          src="https://i.ibb.co/ymzjNXw/border3.png"  alt="contact" 
        className="contact-img"/> */}
      <OtherLinks />
      <div className="socials-container">
        <Socials />
      </div>
   
    </div>
  )
}

export default Contact
