import React, { useEffect } from "react";
import "./Body.css";
import SideMenu from "../SideMenu/SideMenu";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";

const Body = () => {
  const authentication = useSelector((store) => {
    return store.authentication.isAuthentication;
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (authentication === false) {
      navigate("/login");
    } else {
      navigate("/dashboard");
    }
  }, []);
  return (
    <div className="">
      <NavBar />
      <div className="body">
        <SideMenu />
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
