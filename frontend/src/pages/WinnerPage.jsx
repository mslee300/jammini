import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import "../styles/WinnerPage.css";
import gradingImage from "../assets/img/winner-jammini.png";

function WinnerPage() {
  const navigate = useNavigate();

  // State for screen dimensions
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update dimensions on window resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleExit = () => {
    navigate("/");
  };

  return (
    <>
      {/* Confetti appears immediately */}
      <Confetti width={dimensions.width} height={dimensions.height} />
      <div className="winnerpage-container">
        <img src={gradingImage} alt="Winner" className="winner-image" />
        <h1 className="winner-korean-text">승리!</h1>
        <button className="replay-button">한판 더!</button>
        <button className="exit-game-button" onClick={handleExit}>
          나가기
        </button>
      </div>
    </>
  );
}

export default WinnerPage;
