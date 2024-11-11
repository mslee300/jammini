import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SocialLogin.css";
import KakaoIcon from "../assets/img/kakaoicon.png"; // Import Kakao icon
import GoogleIcon from "../assets/img/googleicon.png"; // Import Google icon

const SocialLogin = () => {
  const navigate = useNavigate();

  // Function to handle navigation to the login page
  const handleNavigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="login-option-container">
      {/* Back Arrow */}
      <div className="back-arrow">←</div>
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>
      
      <h2 className="heading">SNS로 가입하여</h2>
      <p className="sub-heading">빠르게 시작하세요!</p>

      {/* Kakao Login Button */}
      <button className="kakao-button" onClick={handleNavigateToLogin}>
        <img src={KakaoIcon} alt="Kakao Icon" className="icon" />
        카카오 로그인
      </button>

      {/* Google Login Button */}
      <button className="google-button" onClick={handleNavigateToLogin}>
        <img src={GoogleIcon} alt="Google Icon" className="icon" />
        Google 로그인
      </button>

      {/* ID/PW Signup Button */}
      <button className="idpw-button" onClick={handleNavigateToLogin}>
        ID/PW 회원가입
      </button>
    </div>
  );
};

export default SocialLogin;


