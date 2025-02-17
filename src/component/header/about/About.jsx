import React from "react";
import "./about.css";
function About() {
  return (
    <>
      <div className="d-flex justify-content-center mt-3 ">
        <span className="splash position-relative text-white">
          About Me
          <img
            src="./splash.png"
            class="position-absolute top-50 start-50  translate-middle opacity-50"
            width="230"
            height="230"
          />
        </span>
      </div>
      <div className="container">
        <div className="about-container d-flex justify-content-between align-items-center ">
          <div className="left">
            <p className="text-white">
            I'm a passionate Full Stack Developer, recently certified from Northcoders, with expertise in React, Node.js, Express, and PostgreSQL. I love building dynamic, user-centric applications that seamlessly blend front-end aesthetics with back-end functionality. Always eager to learn and collaborate, I'm excited to create impactful digital experiences. Let’s connect!
            </p>
          </div>
          <div className="right ">
            <div className="image-box">
              <div className="image-item">
                <img src="./profile.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
