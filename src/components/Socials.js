import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="socials-container">
      <a href="https://www.github.com/ooladuwa" target="_blank">
        <button className="socials-button">
          <FaGithubSquare className="socialIcon" size={42} />
        </button>
      </a>
      <a href="https://www.linkedin.com/in/ooladuwa/" target="_blank">
        <button className="socials-button">
          <FaLinkedin className="socialIcon" size={42} />
        </button>
      </a>
      <a href="https://twitter.com/ooladuwa" target="_blank">
        <button className="socials-button">
          <FaTwitterSquare className="socialIcon" size={42} />
        </button>
      </a>
    </div>
  );
};

export default Socials;
