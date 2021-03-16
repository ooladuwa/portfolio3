import React from "react";
import Roots from "./Roots";

const Sunshine = () => {
  return (
    <section className="section3">
      <img
        src="https://i.ibb.co/H20Bv0t/sunshine.png"
        alt="sunshine"
        className="sunshine-img"
        usemap="#image-map"
      />
      
      <map name="image-map">
        <area
          target="_blank"
          alt="LinkedIn"
          title="LinkedIn"
          href="https://www.linkedin.com/in/ooladuwa/"
          coords="2356,2352,444"
          shape="circle"
        />
      </map>
      <Roots />
    </section>
  );
};

export default Sunshine;
