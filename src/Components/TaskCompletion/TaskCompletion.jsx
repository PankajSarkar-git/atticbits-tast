import React from "react";
import "./TaskCompletion.css";
const TaskCompletion = () => {
  const completionPercentage = 71;

  return (
    <div className="task-completion">
      <h2>Task Completion</h2>
      <div className="progress">
        <div className="progress-number">{completionPercentage}%</div>
        <div className="svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
            className="svg-60deg"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="#e91e63" />
                <stop offset="100%" stopColor="#673ab7" />
              </linearGradient>
            </defs>
            <circle id="circle" cx="80" cy="80" r="70" strokeLinecap="round" />
          </svg>
        </div>
        <div className="svg1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
            className="svg-90deg"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="#e91e63" />
                <stop offset="100%" stopColor="#673ab7" />
              </linearGradient>
            </defs>
            <circle id="circle1" cx="80" cy="80" r="70" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <div className="status">
        <div className="box-status">
          <div className="color-1"></div>
          <span className="complete">Complete</span>
        </div>
        <div className="box-status">
          <span className="color-2"></span>
          <span className="missed">Missed</span>
        </div>
      </div>
      <button className="viwe-all breakdown">viwe breakdown</button>
    </div>
  );
};

export default TaskCompletion;
