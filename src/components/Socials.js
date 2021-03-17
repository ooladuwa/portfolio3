import React from 'react'
import { FaGithubSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"

const Socials = () => {
  return (
    <div className="socials-container">
      <FaGithubSquare className="socialIcon" size={42} />
      <FaLinkedin className="socialIcon" size={42} />
      <FaTwitterSquare className="socialIcon" size={42} />
    </div>
  )
}

export default Socials
