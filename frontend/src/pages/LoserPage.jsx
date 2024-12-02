import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoserPage.css";
import gradingImage from "../assets/img/loser-jammini.png";

function LoserPage() {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate("/");
  };

  return (
    <div className="loserpage-container">
      <img src={gradingImage} alt="Winner" className="loser-image" />
      <h1 className="loser-korean-text">패배</h1>
      <p className="loser-korean-subtext">다시 도전해보세요!</p>
      <button className="replay-button">한판 더!</button>
      <button className="exit-game-button" onClick={handleExit}>
        나가기
      </button>
    </div>
  );
}

export default LoserPage;
