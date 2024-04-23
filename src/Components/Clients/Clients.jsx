import React from "react";
import "./Clients.css";
const Clients = ({ data }) => {
  const { name, content, timestamp } = data;
  return (
    <div className="client">
      <div className="clieni-item">
        <img
          className="avatar"
          src="https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg"
          alt=""
        />
        <div className="user-client">
          <h3 className="client-name">{name}</h3>
          <p className="client-content">{content}</p>
        </div>
      </div>
      <p className="client-timestamp">{timestamp}</p>
    </div>
  );
};

export default Clients;
