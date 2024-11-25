import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AssessmentResult.css";
import SurprisedMascot from "../assets/img/surprised-mascot.png";

function LoserPage() {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate("/register");
  };

  return (
    <div className="loserpage-container">
      <img src={SurprisedMascot} alt="Winner" className="loser-image" />
      <h1 className="score-header">예측 점수:</h1>
      <p className="score-subtext">970</p>
      <button className="game-save-button" onClick={handleExit}>
        점수 저장하기
      </button>
    </div>
  );
}

export default LoserPage;
