import React from "react";
import "./Hero.css";
import Heading from "./Heading";
import tinkerbell from "../../assets/images/tinkerbell.png";

export default function Hero() {
  return (
    <div className="wrapper">
      <img className="tinkerbell" src={tinkerbell} alt={"Tinkerbell"} />
      <Heading text="Happy Birthday My Love !!!" arc={120} radius={400} />
    </div>
  );
}
