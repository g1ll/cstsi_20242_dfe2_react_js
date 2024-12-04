// import React from "react";
import './navbar.css'
import appLogo from '../../assets/appLogo.svg';

export const Navbar = () => {
  return (
    <nav className="nav_container">
      <div className="nav_logo">
        <a href="#">
        <img src={appLogo}  className="nav_logo_img" />
        </a>
      </div>
      <div className="nav_links">
        <a  href="#dashboard">
          Dashboard
        </a>
        <a href="#login">
          Log in
        </a>
        <a href="#register">
          Register
        </a>
      </div>
    </nav>
  );
};
