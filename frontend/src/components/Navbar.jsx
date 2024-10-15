import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

// Nav icons
import HomeIcon from "../assets/img/home-nav.svg";
import ReviewIcon from "../assets/img/review-nav.svg";
import ProfileIcon from "../assets/img/profile-nav.svg";

const Navbar = () => {
  return (
    <div className="bottom-nav">
      <NavLink to="/" activeClassName="active">
        <img src={HomeIcon} alt="Home" />
        <span>홈</span>
      </NavLink>
      <NavLink to="/play" activeClassName="active">
        <img src={ReviewIcon} alt="Review" />
        <span>리뷰</span>
      </NavLink>
      <NavLink to="/settings" activeClassName="active">
        <img src={ProfileIcon} alt="Profile" />
        <span>프로필</span>
      </NavLink>
    </div>
  );
};

export default Navbar;
