import React, { useState } from "react";
import "./NavBar.css";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { closeMenu, openMenu } from "../../app/store/toggleSideMenuSlice";

const NavBar = () => {
  const [showBar, setShowBar] = useState(true);
  const dispatch = useDispatch();

  const openMenuHendel = () => {
    setShowBar(!showBar);
    dispatch(openMenu());
  };
  
  const closeMenuHendel = () => {
    setShowBar(!showBar);
    dispatch(closeMenu());
  };

  return (
    <>
      <nav className="nav-bar">
        <a href="/" className="logo">
          Fit space
        </a>
        <div className="search">
          <CiSearch className="icon" />
          <input type="text" name="" id="" placeholder="Search" />
        </div>
        <div className="user-info">
          <IoNotificationsOutline className="icon" />
          <MdOutlineEmail className="icon" />
          <div className="user">
            <p>Mike Wilson</p>
            <img
              src="https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="toggle-menu">
          {showBar ? (
            <FaBars onClick={openMenuHendel} />
          ) : (
            <IoMdClose onClick={closeMenuHendel} />
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
