import React from "react";
import { useLocation } from "react-router-dom";
import oilrig2 from "../assets/image1.png";
import oilrig from "../assets/image2.png";
import "./NBackground.css";
import factory from "../assets/image3.png";

const NBackground = () => {
  const location = useLocation();

  // Define a function to determine which image to display based on the current location
  const getImage = () => {
    switch (location.pathname) {
      case "/about":
        return oilrig;
      case "/contact":
        return oilrig2;
      case "/services":
        return factory;
       // Default to image1 for any other route
    }
  };

  return <img src={getImage()} className="background fade-in" alt="" />;
};

export default NBackground;
