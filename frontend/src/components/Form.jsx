import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css";
import LoadingIndicator from "./LoadingIndicator";
import LoginIntro from "../assets/img/login-intro.png";

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post(route, { username, password });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <img src={LoginIntro} alt="Login Title" className="title-image" />
      <input
        className="form-input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="아이디"
      />
      <input
        className="form-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
      />
      {loading && <LoadingIndicator />}
      <button className="form-button" type="submit">
        로그인
      </button>
      <p className="register">
        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSetBkLfxzPYM71FPXd19RHxmB7OWYCcBeoZEW7dvrfXFGk26g/viewform?usp=header">아이디·비밀번호 찾기 | </a>
        <a href="/register" style={{ color: "#FF4100", fontWeight: "bold" }}>
          회원가입
        </a>
      </p>
    </form>
  );
}

export default Form;
