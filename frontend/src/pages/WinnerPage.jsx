import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/WinnerPage.css";
import gradingImage from "../assets/img/winner.svg";

function WinnerPage() {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate("/");
  };

  return (
    <div className="winnerpage-container">
      <img src={gradingImage} alt="Winner" className="winner-image" />
      <h1 className="winner-korean-text">승리!</h1>
      <button className="replay-button">한판 더!</button>
      <button className="exit-game-button" onClick={handleExit}>
        나가기
      </button>
    </div>
  );
}

export default WinnerPage;
