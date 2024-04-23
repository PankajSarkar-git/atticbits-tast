import React from "react";
import "./Dashboard.css";
import RevenueCard from "../../Components/RevenueCard/RevenueCard";
import { RevenueData } from "../../data/data";
import ClientsActivity from "../../Components/ClientsActivity/ClientsActivity";
import Calendar from "../../Components/Calendar/Calendar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="income-section">
        <div className="income-container">
          <h1>Income report</h1>
          <div className="select-container">
            <select id="Week-select">
              <option value="week">Week</option>
              <option value="nothing">null</option>
            </select>
            <select id="prev-week-select">
              <option value="compare to : prev week">
                compare to : prev week
              </option>
              <option value="nothing">Nothing..</option>
            </select>
          </div>
        </div>
        <div className="card-container">
          {RevenueData.map((res) => (
            <RevenueCard data={res} key={res.name} />
          ))}
        </div>
        <div className="schedule-container">
          <div className="scedule-header">
            <h2>schedule</h2>
            <select id="Week-select">
              <option value="week">This Week</option>
              <option value="nothing">null</option>
            </select>
          </div>
          <div className="calendar-container">
            <Calendar />
          </div>
        </div>
      </div>
      <div className="clients-info">
        <ClientsActivity />
      </div>
    </div>
  );
};

export default Dashboard;
