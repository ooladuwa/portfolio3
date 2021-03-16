import React from "react";
import Links from "./HomeLinks";

const FlowerBorder = () => {
  return (
    <section className="section1">
      <img
        src="https://i.ibb.co/BghNjVh/flowers-Border.png"
        alt="flowers"
        className="flower-border-img"
        usemap="#image-map"
      />
      <Links />

      <map name="image-map">
        <area
          target="_blank"
          alt="Github"
          title="Github"
          href="https://github.com/ooladuwa"
          coords="111,112,102"
          shape="circle"
        />
        <area
          target="_blank"
          alt="Instagram"
          title="Instagram"
          href="https://www.instagram.com/rbwanderlust/"
          coords="47,203,2,340,57,524,167,332"
          shape="poly"
        />

        <area
          target="_blank"
          alt="LinkedIn"
          title="LinkedIn"
          href="https://www.linkedin.com/in/ooladuwa/"
          coords="343,5,514,79,341,167,224,63"
          shape="poly"
        />
      </map>
    </section>
  );
};

export default FlowerBorder;
