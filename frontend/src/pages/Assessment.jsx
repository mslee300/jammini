import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Assessment.css";
import gradingImage from "../assets/img/winner-jammini.png";

function WinnerPage() {
  const navigate = useNavigate();

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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

  const handleStart = () => {
    navigate("/gamepage");
  };

  return (
    <>
      <div className="winnerpage-container">
        <img src={gradingImage} alt="Winner" className="winner-image" />
        <h1 className="assess-korean-text">
          잼미니랑 게임하고 <br />
          예상점수를 받아보세요!
        </h1>
        <button className="replay-button" onClick={handleStart}>게임 시작</button>
      </div>
    </>
  );
}

export default WinnerPage;
