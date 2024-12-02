import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/StreakPage.css";
import StreakFire from "../assets/img/speedgame-fire.svg";

function StreakPage() {
  const navigate = useNavigate();

  const handleSaveAndExit = () => {
    navigate("/dashboard");
  };

  return (
    <div className="streak-container">
      <h1 className="streak-number">1</h1>
      <h2 className="streak-header">일 연속 학습!</h2>
      <img src={StreakFire} alt="Streak" className="streak-fire" />
      <p className="streak-subtext">
        내일도 공부하지 않으면
        <br />
        연속이 사라져 버려요!
      </p>
      <button className="streak-save-button" onClick={handleSaveAndExit}>
        성과 저장하기
      </button>
    </div>
  );
}

export default StreakPage;
