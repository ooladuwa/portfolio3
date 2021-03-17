import React from "react";
import Intro from "./Intro";
import Socials from "./Socials";

const aboutInfo = () => {
  return (
    <div className="aboutInfo-container">
      <h1>Onaje Oladuwa</h1>
      <h3>"Naj"</h3>
      <img
        className="najPhoto"
        src="https://i.ibb.co/25gMRY2/IMG-0057-jpeg-2.jpg"
        alt="Man wearing scarf"
      />
      <Socials />
      <button className="contactButton">Contact Me!</button>
      <p>
        Full-stack software engineering student with a background in education.
        Focused on providing meaningful, genuine contributions to colleagues,
        stakeholders, and end-users. Experienced and visionary educator with
        demonstrated history of working with diverse populations, building
        community, and implementing restorative practices/social-emotional
        learning. Served as a teacher, department chair, grade-level chair, and
        coach.
      </p>
    </div>
  );
};

export default aboutInfo;
