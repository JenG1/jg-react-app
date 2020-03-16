import React from "react";
import "./About.css";

function About() {
  return (
    <div className="main-container row">
      <h1 className="col-12">About</h1>
      <div className="col-12 centered line-1 anim-typewriter">Hello, I'm Jennifer Genes.</div>
      <div className="col-12">
      I am a <span>Full-Stack Developer</span> residing in Baltimore, Maryland. I primarily work with Javascript, HTML5, CSS3, React, and Node. I have a passion for technology and I love designing and building user interfaces. I have experience designing, developing and implementing a Laboratory Information Management System (LIMS) and Electronic Lab Notebook (ELN).
      </div>
    </div>
  )
}

export default About;