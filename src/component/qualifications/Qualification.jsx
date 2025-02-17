import React from "react";
import "./qualification.css";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
function Qualification() {
  return (
    <>
    <div className="container-fluid qualification d-flex flex-column justify-content-center align-items-center" id="qualification">
         <div className="skill-section ">
          <div className="splash d-flex justify-content-center ">
            <span className="position-relative text-dark p-3 ">
              Tech Certification
              <img
                src="/public/crown.png"
                className=" position-absolute top-0 start-0 translate-start"
                width="50"
                height="45"
              />
            </span>
          </div>
        </div>
       <div className="container">
        <div className="certificate d-flex justify-content-between align-items-center p-3">
          <div className="image border border-dark-subtle rounded-2 mx-4">
            <img
              src="/public/certificate.png"
              alt=""
              className="border-dark-subtle rounded-2 "
            />
          </div>
          <div className="certificate-title">
            <h3 className="text-danger">Software Development Bootcamp</h3>
            <h5>Year: Oct 2024</h5>
            <h6>
              Tech: <FaHtml5 className="i" style={{ color: "red", fontSize:'30px' }} />{" "}
              <FaCss3Alt className="i" style={{ color: "blue", fontSize:'30px' }} />{" "}
              <IoLogoJavascript className="i"  style={{ color: "#ffc00a",fontSize:'30px'  }} />{" "}
            </h6>
          </div>
        </div>
      </div>
    </div>
    <div className="container border-bottom" style={{height:'100px'}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,256L1440,224L1440,320L0,320Z"></path></svg>
      </div>
    </>
  );
}

export default Qualification;
