import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import "../styles/RegisterForm.css"; // New CSS file for the Register page
import LoadingIndicator from "../components/LoadingIndicator";
import RegisterIntro from "../assets/img/register-intro.png"; // Optional: different image for register page

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다!");
      setLoading(false);
      return;
    }

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
      <input
        className="register-form-input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="아이디"
      />
      <input
        className="register-form-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
      />
      <input
        className="register-form-input"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="비밀번호 확인"
      />
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
