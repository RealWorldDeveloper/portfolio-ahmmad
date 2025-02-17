import React from "react";
import "./service.css";
import { handleIcon } from "../../assets/utils";
import { services } from "../../assets/service";
function Service() {
  return (
    <>    <div className="container-fluid main-section">
      <div className="container">
        <div className="serviceText d-flex justify-content-center ">
          <span className="splash text-dark">My Services</span>
        </div>
        <div className="row p-4">
          {services.map((items) => {
            return (
              <div className="col-lg-3 col-md-6 col-12">
                <div className="service shadow-sm" style={{ height: "300px" }}>
                  <div className="service-hex d-flex align-items-center justify-content-center">
                    <div className="icon">
                      {handleIcon(items.title)}
                    </div>
                  </div>
                  <div className="service-inner">
                    <h3>{items.title}</h3>
                    <p>{items.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
      <div className="container border-top" style={{height:'100px'}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,256L1440,224L1440,320L0,320Z"></path></svg>
      </div></>
      
  );
}

export default Service;
