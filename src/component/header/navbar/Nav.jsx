import React from "react";
import './nav.css'
function Nav() {
  return (
    <>
 <nav class="navbar navbar-expand-lg" data-aos = 'fade-down' data-aos-duration ='1000' >
  <div class="container-fluid nav-container">
      <img className="logo" src="./logo.png" width={130}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon bg-white rounded"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li class="nav-list mx-3">
          <a class="nav-link text-white active  fs-5" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-list mx-3 ">
          <a class="nav-link text-white fs-5" href="#">About Me</a>
        </li>
        <li class="nav-list mx-3">
         <a class="nav-link text-white fs-5" href="#qualification">Certificate</a>
        </li>
        <li class="nav-list mx-3">
        <a class="nav-link text-white fs-5" href="#skills">Skills</a>
        </li>
        <li class="nav-list mx-3">
         <a class="nav-link text-white fs-5" href="#projects" >Projects</a>
         </li>
         <li class="nav-list mx-3">
         <a class="nav-link text-white fs-5" href="#footer" >Contact me</a>
         </li>
      </ul>
      <button type="button" class="btn btn-outline-success" onClick={() => window.location.href = 'https://www.linkedin.com/home'}>Connect Me</button>
     
    </div>
  </div>
</nav>
    </>
  );
}

export default Nav;
