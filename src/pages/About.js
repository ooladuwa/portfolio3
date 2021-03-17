import React from 'react'
import OtherLinks from "./OtherLinks"
import Roots from '../components/Roots'
import "./pages.css"
import AboutInfo from "../components/AboutInfo"
import Socials from '../components/Socials'

const About = () => {
  return (
    <div className="about-container">
      <OtherLinks/> 
      {/* <Roots /> */}
      {/* <Socials /> */}
      <AboutInfo />
    </div>
  )
}

export default About
