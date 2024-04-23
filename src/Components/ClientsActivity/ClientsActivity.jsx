import React from "react";
import "./ClientsActivity.css";
import Clients from "../Clients/Clients";
import { clientData } from "../../data/data";
import TaskCompletion from "../TaskCompletion/TaskCompletion";

const ClientsActivity = () => {
  return (
    <div className="clients-activity">
      <div>
        <div className="clients-activity-heading">
          <h1>clients activity</h1>

          <select id="client-select">
            <option value="all">All</option>
            <option value="nothing">Null</option>
          </select>
        </div>
        <div className="clients-container">
          {clientData.map((res) => (
            <Clients data={res} key={res.name} />
          ))}
        </div>
        <button className="viwe-all">viwe all</button>
      </div>
      <TaskCompletion />
    </div>
  );
};

export default ClientsActivity;
