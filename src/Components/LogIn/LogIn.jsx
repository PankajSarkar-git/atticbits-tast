import React, { useEffect, useState } from "react";
import "./LogInPage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../app/store/authenticationSlice";
import { addToken } from "../../app/store/tokenSlice";

const LogInpage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authentication = useSelector((store) => {
    return store.authentication.isAuthentication;
  });

  const dispatch = useDispatch();

  //   console.log(authentication);

  const navigate = useNavigate();
  useEffect(() => {
    if (authentication === true) {
      navigate("/dashboard");
    }
  }, []);

  const handleSubmit = (e) => {
    function generateToken() {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let token = "";
      for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        token += characters[randomIndex];
      }
      return token;
    }

    // Example usage:
    const token = generateToken();

    dispatch(addToken(token));
    dispatch(logIn());
  };

  return (
    <div>
      <div className="login-page">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-submit-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogInpage;
