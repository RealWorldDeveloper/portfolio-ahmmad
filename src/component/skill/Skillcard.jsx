import React, { useEffect } from "react";
import "./skill.css";

function Skillcard() {
  useEffect(() => {
    const drawProgressCircle = (canvasId, percentage, color) => {
      const canvas = document.getElementById(canvasId);
      const ctx = canvas.getContext('2d');
      const start = 4.72;
      const cw = canvas.width;
      const ch = canvas.height;
      let al = 0;
      let diff;

      function progressSim() {
        diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 3;
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.textAlign = 'center';
        ctx.font = "18px Roboto";
        ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
        ctx.beginPath();
        ctx.arc(60, 60, 30, start, diff / 10 + start, false);
        ctx.stroke();
        if (al >= percentage) {
          clearTimeout(sim);
        }
        al++;
      }
      const sim = setInterval(progressSim, 20);
    };

    drawProgressCircle('skill1', 85, '#FF004F');
    drawProgressCircle('skill2', 70, '#266887');
    drawProgressCircle('skill3', 87, '#c93b66');
    drawProgressCircle('skill4', 80, '#330b68');
    drawProgressCircle('skill5', 90, '#71b0d2');
  }, []);

  return (
    <div className="container text-center mt-3">
      <div className="row">
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card mb-3">
            <div className="col text-center">
              <h5 className="py-2">HTML</h5>
              <canvas id="skill1" width="120" height="120"></canvas>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card mb-3">
            <div className="col text-center">
              <h5 className="py-2">CSS</h5>
              <canvas id="skill2" width="120" height="120"></canvas>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card mb-3">
            <div className="col text-center">
              <h5 className="py-2">JavaScript</h5>
              <canvas id="skill3" width="120" height="120"></canvas>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card mb-3">
            <div className="col text-center">
              <h5 className="py-2">React</h5>
              <canvas id="skill4" width="120" height="120"></canvas>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card mb-3">
            <div className="col text-center">
              <h5 className="py-2">Git & GitHub</h5>
              <canvas id="skill5" width="120" height="120"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skillcard;
