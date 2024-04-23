import React, { useState } from "react";
import "./AddPost.css";
import axios from "axios";
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      title: title,
      body: content,
      userId: id,
    };

    axios
      .post(
        "https://jsonplaceholder.typicode.com/posts",
        { postData },
        {
          headers: {
            "Content-Type": "application/json;",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

      setContent('')
      setTitle("")
      setId(0);
  };

  return (
    <div className="add-post">
      <div className="add-post-form">
        <h2>Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="id">Id:</label>
            <input
              type="number"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="post-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
