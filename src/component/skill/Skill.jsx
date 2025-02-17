import React from "react";
import { useEffect } from "react";
import "./skill.css";
import Skillcard from "./Skillcard";
import SkillIcons from "./skillIcons/SkillIcons";
function Skill() {
  return (
    <>
      <div style={{ height: "10vh" }} id="skills">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#black" fill-opacity="1" d="M0,160L1440,0L1440,0L0,0Z"></path></svg> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="black" fill-opacity="1" d="M0,64L1440,0L1440,0L0,0Z"></path></svg>
      </div>
      <div className="skill-section">
        <div className="d-flex justify-content-center ">
          <span className="splash position-relative text-dark mt-5 ">
            My Skills
            <img
              src="./skillLogo.png"
              className="skillImage position-absolute top-50 start-100 translate-middle opacity-90 z-n1"
              width="80"
              height="80"
            />
          </span>
        </div>
      </div>
      <Skillcard />
      <SkillIcons/>
    </>
  );
}

export default Skill;
