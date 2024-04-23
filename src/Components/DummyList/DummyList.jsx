import React, { useEffect, useState } from "react";
import "./DummyList.css";
import ListCard from "../ListCard/ListCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DummyList = () => {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  function getData() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // console.log(response);
        setPost(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="">
      <div className="dummy-list-container">
        <button className="add-post-btn" onClick={() => navigate("/addpost")}>
          add Post
        </button>
        <div className="list-container">
          {post.length !== 0 &&
            post.map((data) => <ListCard data={data} key={data.id} />)}
        </div>
      </div>
    </div>
  );
};

export default DummyList;
