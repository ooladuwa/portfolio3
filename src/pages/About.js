import React from 'react'
import OtherLinks from "./OtherLinks"
import Roots from '../components/Roots'
import "./pages.css"
import Intro from '../components/Intro'
import Socials from '../components/Socials'

const About = () => {
  return (
    <div className="about-container">
      <OtherLinks/> 
      <Roots />
      <div className="getMe">
        <Intro />
        <Socials />
      </div>
    </div>
  )
}

export default About
