import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginOption.css";
import CharacterLogo from "../assets/img/character-logo.png";
import TextLogo from "../assets/img/text-logo.png";

const LoginOption = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/register");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="login-option">
      <div className="text-logo-container">
        <img src={TextLogo} alt="Text Logo" className="text-logo" />
      </div>
      <div className="header">
        <img src={CharacterLogo} alt="Jammini logo" className="logo" />
        <h2 className="title">게임으로 쉽게 준비하는 토익, 점수높이기.</h2>
      </div>
      <div className="button-container">
        <button className="signup-button" onClick={handleSignUpClick}>
          시작하기
        </button>
        <button className="login-button" onClick={handleLoginClick}>
          로그인
        </button>
      </div>
    </div>
  );
};

export default LoginOption;
