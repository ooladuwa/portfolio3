import React from 'react'
import OtherLinks from "./OtherLinks"
import "./pages.css"
import AboutInfo from "../components/AboutInfo"

const About = () => {
  return (
    <div className="about-container">
      <OtherLinks/> 
      <AboutInfo />
    </div>
  )
}

export default About
