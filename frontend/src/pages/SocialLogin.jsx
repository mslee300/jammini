import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SocialLogin.css";
import KakaoIcon from "../assets/img/kakaoicon.png";
import GoogleIcon from "../assets/img/googleicon.png";

const SocialLogin = () => {
  const navigate = useNavigate();

  const handleNavigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="login-option-container">
      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>
      
      <h2 className="heading">SNS로 가입하여</h2>
      <h2 className="sub-heading">빠르게 시작하세요!</h2>

      <button className="kakao-button" onClick={handleNavigateToLogin}>
        <img src={KakaoIcon} alt="Kakao Icon" className="icon" />
        카카오 로그인
      </button>

      <button className="google-button" onClick={handleNavigateToLogin}>
        <img src={GoogleIcon} alt="Google Icon" className="icon" />
        Google 로그인
      </button>

      <button className="idpw-button" onClick={handleNavigateToLogin}>
        ID/PW 회원가입
      </button>
    </div>
  );
};

export default SocialLogin;


