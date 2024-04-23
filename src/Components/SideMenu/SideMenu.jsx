import React from "react";
import "./SideMenu.css";
import { TbGraph } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { MdOutlineGroups } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { IoChatbubble } from "react-icons/io5";
import { LuHelpCircle } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../app/store/authenticationSlice";
import { removeToken } from "../../app/store/tokenSlice";
import { closeMenu } from "../../app/store/toggleSideMenuSlice";

const SideMenu = () => {
  const dispatch = useDispatch();

  const toggleSideMenuee = useSelector((store) => {
    return store.toggleSideMenu.sidemenu;
  });
  // console.log(toggleSideMenuee);

  function logOutFun(params) {
    dispatch(removeToken());
    dispatch(logOut());
  }

  return (
    <div
      className={toggleSideMenuee ? "side-menu active-side-menu" : "side-menu"}
    >
      <ul className="side-nav-menu">
        <Link
          to={"/dashboard"}
          className="nav-links"
          onClick={() => dispatch(closeMenu())}
        >
          <TbGraph className="icon" /> Dashboard
        </Link>
        <Link
          to={"/dummy-list"}
          className="nav-links"
          onClick={() => dispatch(closeMenu())}
        >
          {" "}
          <FaUser className="icon" /> Post List
        </Link>
        <a href="/" className="nav-links" onClick={() => dispatch(closeMenu())}>
          {" "}
          <MdOutlineGroups className="icon" /> Groups
        </a>
        <a href="/" className="nav-links" onClick={() => dispatch(closeMenu())}>
          {" "}
          <CiGrid41 className="icon" /> Templates
        </a>
        <a href="/" className="nav-links" onClick={() => dispatch(closeMenu())}>
          {" "}
          <SlCalender className="icon" /> Calendar
        </a>
        <a href="/" className="nav-links" onClick={() => dispatch(closeMenu())}>
          {" "}
          <IoChatbubble className="icon" /> Chat
        </a>
        <a href="/" className="nav-links" onClick={() => dispatch(closeMenu())}>
          {" "}
          <LuHelpCircle className="icon" /> Help
        </a>
      </ul>
      <div className="setting">
        <a href="/" className="setting-btn">
          settings
        </a>

        <Link to={"/login"} className="log-out" onClick={logOutFun}>
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
