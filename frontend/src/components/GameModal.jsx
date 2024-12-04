import React, { useState } from "react";
import "../styles/GameModal.css";
import LoadingDots from "../assets/img/3-dots-scale.svg";
import CheckmarkIcon from "../assets/img/copy-checkmark.svg";
import Waiting from "../pages/Waiting";

const GameModal = ({ isOpen, onClose, fireIcon, questionImage }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedLink, setGeneratedLink] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setGeneratedLink(
        "https://467c53ab-f0a1-46b3-842b-b678a7556090.e1-us-east-azure.choreoapps.dev/game/speedgame/1/session/bc61c131-57c0-45ad-869a-9b651f83edf4"
      );
      setIsLoading(false);
    }, 1000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);

    setIsToastVisible(true);

    setTimeout(() => {
      setIsToastVisible(false);
      setIsWaiting(true);
    }, 2500);

    setTimeout(() => {
      window.location.href = "https://467c53ab-f0a1-46b3-842b-b678a7556090.e1-us-east-azure.choreoapps.dev/gamepage";
    }, 10000);
  };

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      {isWaiting ? (
        <Waiting />
      ) : (
        <div className="modal-content">
          <div className="modal-title-container">
            <img src={fireIcon} alt="Fire icon" className="modal-fire-icon" />
            <h2 className="modal-title">스피드게임</h2>
          </div>
          <p className="modal-description">
            TOEIC 문제를 최대한 빨리 맞추세요.
            <br />
            더 빨리, 많은 TOEIC 문제를 맞추면 승리합니다.
            <br />
            TOEIC 문제를 빨리 맞추면서 시간관리 능력을 기를 수 있어요!
          </p>
          <img
            src={questionImage}
            alt="Example question"
            className="modal-question-box"
          />

          {generatedLink ? (
            <div className="generated-link-box">
              <input
                type="text"
                value={generatedLink}
                readOnly
                className="generated-link-input"
              />
              <button className="copy-button" onClick={copyToClipboard}>
                복사
              </button>
            </div>
          ) : (
            <button
              className="modal-button"
              onClick={handleButtonClick}
              disabled={isLoading}
            >
              {isLoading ? (
                <img
                  src={LoadingDots}
                  alt="Loading..."
                  className="loading-dots"
                />
              ) : (
                "초대링크 만들기"
              )}
            </button>
          )}

          {isToastVisible && (
            <div className="toast-notification">
              <img
                src={CheckmarkIcon}
                alt="Checkmark"
                className="checkmark-icon"
              />
              복사되었습니다! 대기실로 이동합니다...
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GameModal;
