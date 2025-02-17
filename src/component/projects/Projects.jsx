import React from "react";
import { project } from "../../assets/project";
import "./projects.css";
import { MdOutlineVisibility } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function MyProject() {
  return (
    <React.Fragment>
  <div className="svgContainer" style={{marginTop:'-200px'}} id="projects">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1340 320"><path fill="black" fill-opacity="1" d="M0,320L1440,256L1440,320L0,320Z"></path></svg>
      </div>
        <div className="container-fluid bg-black">
          <div className="container">
             <div className="projectText d-flex justify-content-center ">
          <span className="splash text-white">
            My Projects
          </span>
        </div>      
        <div class="row row-cols-1 row-cols-sm-4 g-4">
          {project.map((items) => {
            return (
              <div class="col" >
                <div class="h-100 p-2" id="card-project">
                  <div className="project-image p-2"><img src={items.image} className="card-img-top" alt="..." /></div>
                  <div className="card-body p-2">
                    <h5 className="card-title">{items.Title}</h5>
                    <p className="card-text ">{items.Description}</p>
                    <div className="card-text-container">
                      <div className="card-text-container-image"><a href={items.url}><FaGithub size={25} /></a></div>
                      <div className="card-text-container-image"><a href={items.github}><MdOutlineVisibility size={25}/></a></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
          </div>
               
  
      </div>
      <div style={{height: '18vh'}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="black" fill-opacity="1" d="M0,64L1440,0L1440,0L0,0Z"></path></svg>
      </div>
     
  
    </React.Fragment>
  );
}

export default MyProject;
