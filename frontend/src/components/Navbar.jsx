import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="bottom-nav">
      <NavLink exact to="/" activeClassName="active">
        <svg
          className="nav-icon"
          width="58"
          height="51"
          viewBox="0 0 58 51"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M57.5934 25.4452C57.5934 27.2378 56.0927 28.6421 54.3918 28.6421H51.1902L51.2603 44.5964C51.2603 44.8653 51.2402 45.1342 51.2102 45.403V47.0164C51.2102 49.2173 49.4193 51 47.2082 51H45.6074C45.4974 51 45.3873 51 45.2773 50.99C45.1372 51 44.9971 51 44.8571 51L41.6054 50.99H39.2042C36.9931 50.99 35.2022 49.2074 35.2022 47.0064V44.6163V38.2425C35.2022 36.4798 33.7715 35.0557 32.0006 35.0557H25.5974C23.8266 35.0557 22.3959 36.4798 22.3959 38.2425V44.6163V47.0064C22.3959 49.2074 20.605 50.99 18.3939 50.99H15.9927H12.8011C12.651 50.99 12.5009 50.9801 12.3508 50.9701C12.2308 50.9801 12.1107 50.99 11.9907 50.99H10.3899C8.17876 50.99 6.38786 49.2074 6.38786 47.0064V35.8524C6.38786 35.7627 6.38786 35.6632 6.39787 35.5735V28.6321H3.19627C1.39537 28.6321 -0.00532532 27.2378 -0.00532532 25.4353C-0.00532532 24.539 0.294824 23.7422 0.995174 23.0451L26.638 0.796719C27.3383 0.0995899 28.1387 0 28.8391 0C29.5394 0 30.3398 0.19918 30.9401 0.69713L56.4929 23.0551C57.2933 23.7522 57.6935 24.5489 57.5934 25.4452Z"
            fill="currentColor"
          />
        </svg>
        <span>홈</span>
      </NavLink>
      <NavLink to="/reviewpage" activeClassName="active">
        <svg
          className="nav-icon"
          width="24"
          height="33"
          viewBox="0 0 24 33"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 0C2.6863 0 0 2.77025 0 6.1875V26.8125C0 30.2299 2.6863 33 6 33H24V28.875H4V24.75H24V0H6Z"
            fill="currentColor"
          />
        </svg>
        <span>리뷰</span>
      </NavLink>
      <NavLink to="/settings" activeClassName="active">
        <svg
          className="nav-icon"
          width="27"
          height="34"
          viewBox="0 0 27 34"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.1021 8.6071C21.1021 14.0386 17.842 18.7 13.5007 18.7C9.15612 18.7 5.89935 14.0386 5.89935 8.6054C5.89935 3.1756 8.70341 0 13.5007 0C18.298 0 21.1021 3.1739 21.1021 8.6071ZM0.159469 30.8414C0.809809 31.62 3.61049 34 13.5007 34C23.391 34 26.19 31.62 26.842 30.8431C26.9025 30.7684 26.9471 30.6821 26.9733 30.5894C26.9994 30.4968 27.0065 30.3997 26.994 30.3042C26.8454 28.8048 25.5041 22.1 13.5007 22.1C1.49731 22.1 0.156091 28.8048 0.00575251 30.3042C-0.00648076 30.3998 0.00084436 30.497 0.0272787 30.5896C0.0537131 30.6823 0.0986984 30.7669 0.159469 30.8414Z"
            fill="currentColor"
          />
        </svg>
        <span>프로필</span>
      </NavLink>
    </div>
  );
};

export default Navbar;
