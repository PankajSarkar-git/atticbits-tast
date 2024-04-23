import React from "react";
import "./ListCard.css";
const ListCard = ({data}) => {

  return (
    <div>
      <div className="post-card" >
        <div className="post-name">{data?.title}</div>
        <div className="post-tag"></div>
        <div className="Post-contant">
          <p>{data?.body}</p>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
