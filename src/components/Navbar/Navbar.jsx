import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logout } from "../../Firebase/firebase";

const Navbar = () => {
  const navref = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navref.current.classList.add("nav-dark");
      } else {
        navref.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <div ref={navref} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/tv-shows")}>TV Shows</li>
          <li onClick={() => navigate("/movies")}>Movies</li>
          <li onClick={() => navigate("/new&popular")}>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="icon">
          <img src={search_icon} alt="Search Icon" />
          <img src={bell_icon} alt="Bell Icon" />
        </div>
        <div className="profile-name">
          <p>Welcome</p>
        </div>
        <div className="navbar-profile">
          <img src={profile_img} alt="Profile" />
          <img src={caret_icon} alt="Caret Icon" />
          <div className="dropdown">
            <p onClick={() => logout()}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
