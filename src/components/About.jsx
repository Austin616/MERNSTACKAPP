import React from "react";
import NBackground from "./NBackground";
import Navbar from "./Navbar";
import "./About.css";

const About = () => {
  return (
    <div>
      <NBackground />
      <Navbar />

      <div className="about">
        <div className="about-title">About Us</div>
        <div className="about-content">
          <p>
          Catalytic Services Co. specializes in custom fiberglass filter bags
          for catalytic distillation in global chemical, petrochemical, and
          refining industries. Proudly made in the USA, we offer a range of
          fiberglass products tailored to meet diverse specifications. Catalytic
          distillation (CD), combining catalytic reaction and product separation
          in one reactor, enhances efficiency and reduces resource usage
          compared to traditional methods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
