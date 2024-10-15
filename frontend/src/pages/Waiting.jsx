import React from "react";
import "../styles/Waiting.css";
import FireIcon from "../assets/img/speedgame-fire.svg";

const Waiting = ({ onExit }) => {
  return (
    <div className="waiting-container">
      <img src={FireIcon} alt="Fire icon" className="waiting-fire-icon" />
      <p className="waiting-title">플레이어를 기다리는 중...</p>
      <p className="waiting-subtitle">친구에게 초대링크를 보내주세요!</p>
      <button className="exit-button" onClick={onExit}>
        나가기
      </button>
    </div>
  );
};

export default Waiting;
