import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import "../styles/RegisterForm.css";
import LoadingIndicator from "../components/LoadingIndicator";
import RegisterIntro from "../assets/img/register-intro.png";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("이용약관 및 개인정보처리방침에 동의해주세요!");
      return;
    }
    // if (password !== confirmPassword) {
    //   alert("비밀번호가 일치하지 않습니다!");
    //   return;
    // }
    setLoading(true);
    try {
      await api.post("/api/user/register/", { username, password });
      navigate("/login");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form-container">
      <img
        src={RegisterIntro}
        alt="Register Title"
        className="register-title-image"
      />
      <div className="register-form-group">
        <label htmlFor="username" className="register-form-label">
          아이디
        </label>
        <input
          className="register-form-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="register-form-group">
        <label htmlFor="password" className="register-form-label">
          비밀번호
        </label>
        <input
          className="register-form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {/* <div className="register-form-group">
        <label htmlFor="confirm-password" className="register-form-label">
          비밀번호 확인
        </label>
        <input
          className="register-form-input"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div> */}
      <div className="terms-container">
        <input
          type="checkbox"
          id="terms"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        <label htmlFor="terms">
          이용약관 & 개인정보처리방침{" "}
          <span className="required">동의(필수)</span>
        </label>
      </div>
      {loading && <LoadingIndicator />}
      <button className="register-form-button" type="submit">
        회원가입
      </button>
      <p className="login-link">
        이미 계정이 있으신가요?
        <a href="/login" style={{ color: "#FF4100", fontWeight: "bold" }}>
          <span> </span>로그인
        </a>
      </p>
    </form>
  );
}

export default RegisterForm;
