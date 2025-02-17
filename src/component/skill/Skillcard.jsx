import React from "react";
import "./skill.css";
import { useEffect } from "react";
function Skillcard() {
  useEffect(() => {
    window.onload = () => {
      if (typeof loadSkills1 === "function") loadSkills1();
      if (typeof loadSkills2 === "function") loadSkills2();
      if (typeof loadSkills3 === "function") loadSkills3();
      if (typeof loadSkills4 === "function") loadSkills4();
      if (typeof loadSkills5 === "function") loadSkills5();
    };
  }, []);
  return (
    <div class="container text-center mt-3">
      <div class="row">
        <div class="col-xl-3 col-sm-6 col-12">
          <div class="card mb-3">
            <div
              class="col text-center"
            >
              <h5 className="py-2">HTML</h5>
              <canvas id="doughnut" width="120" height="120"></canvas>
              <canvas id="skill1" width="120" height="120" class=""></canvas>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
          <div class="card mb-3">
            <div
              class="col text-center"
            >
              <h5 className="py-2">CSS</h5>
              <canvas id="doughnut2" width="120" height="120"></canvas>
              <canvas id="skill2" width="120" height="120" class=""></canvas>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
          <div class="card mb-3">
            <div
              class="col text-center"
            >
              <h5 className="py-2">JavaScript</h5>
              <canvas id="doughnut3" width="120" height="120"></canvas>
              <canvas id="skill3" width="120" height="120" class=""></canvas>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
          <div class="card mb-3">
            <div
              class="col text-center"
            >
              <h5 className="py-2">React</h5>
              <canvas id="doughnut4" width="120" height="120"></canvas>
              <canvas id="skill4" width="120" height="120" class=""></canvas>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
          <div class="card mb-3">
            <div
              class="col text-center"
            >
              <h5 className="py-2">Git & GitHub</h5>
              <canvas id="doughnut5" width="120" height="120"></canvas>
              <canvas id="skill5" width="120" height="120" class=""></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skillcard;
