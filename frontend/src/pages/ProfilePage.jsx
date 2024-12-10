import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/ProfilePage.css";
import ProfileImage from "../assets/img/default-profile-jammini.png";
import StreakFire from "../assets/img/streak-fire.svg";
import SolvedProblem from "../assets/img/solved-problem.svg";
import PracticedTime from "../assets/img/practiced-time.svg";
import SpeedGame from "../assets/img/speedgame-shortcut.svg";
import CountDown from "../assets/img/countdown-shortcut.svg";
import WordRelay from "../assets/img/wordrelay-shortcut.svg";

function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div className="profilepage-container">
      <div className="profile-background">
        <img src={ProfileImage} alt="Profile" className="profile-image" />
      </div>
      <h1 className="username">Minseok</h1>
      <p className="user-handle">@meanstone</p>
      <p className="join-date">2024. 11. 3.에 가입함</p>
      <div className="profile-stats">
        <div className="stats-row">
          <div className="stat-item">
            <p className="stat-title">TOEIC</p>
            <p className="stat-value">과목</p>
          </div>
          <div className="stat-item">
            <p className="stat-title">0</p>
            <p className="stat-value">팔로우</p>
          </div>
          <div className="stat-item">
            <p className="stat-title">0</p>
            <p className="stat-value">팔로워</p>
          </div>
        </div>
        <button
          className="add-friend-button"
          onClick={() => alert("아직 지원하지 않는 기능이에요!")}
        >
          친구 추가하기
        </button>
      </div>
      <div className="user-metrics">
        <div className="metric-item">
          <img src={StreakFire} alt="Streak" className="metric-icon" />
          <p className="metric-value">1일</p>
          <p className="metric-label">
            현재 <br />
            불꽃 일수
          </p>
        </div>
        <div className="metric-item">
          <img src={SolvedProblem} alt="Completed" className="metric-icon" />
          <p className="metric-value">10개</p>
          <p className="metric-label">
            총 풀었던 <br />
            문제
          </p>
        </div>
        <div className="metric-item">
          <img src={PracticedTime} alt="Study Time" className="metric-icon" />
          <p className="metric-value">8분</p>
          <p className="metric-label">
            총 학습 <br />
            시간
          </p>
        </div>
      </div>
      <div className={"recent-games"}>
        <h2 className="recent-games-title">최근 플레이한 게임</h2>
        <div className="game-icons">
          <div
            className="game-item"
            onClick={() => navigate("/gamepage")}
          >
            <img src={SpeedGame} alt="Speed Game" className="game-icon" />
          </div>
          <div
            className="game-item"
            onClick={() => navigate("/countdowngamepage")}
          >
            <img src={CountDown} alt="Countdown" className="game-icon" />
          </div>
          <div className="game-item">
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default ProfilePage;
