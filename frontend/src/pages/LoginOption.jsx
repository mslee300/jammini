import React from "react";
import "../styles/LoginOption.css";

const LoginOption = () => {
  return (
    <div className="login-option">
      <div className="header">
        <img
          src="https://github.com/user-attachments/assets/11a759b2-0b44-4e62-8746-841df3634cfd"
          alt="Jammini logo"
          className="logo"
        />
        <h2 className="title">
          게임으로 쉽게 준비하는 토익, 토플, 텝스, 오픽!
        </h2>
      </div>
      <div className="button-container">
        <button className="signup-button">회원가입</button>
        <button className="login-button">로그인</button>
      </div>
    </div>
  );
};

export default LoginOption;
