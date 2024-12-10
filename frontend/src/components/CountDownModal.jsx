import React, { useState } from "react";
import "../styles/GameModal.css";
import LoadingDots from "../assets/img/3-dots-scale.svg";
import CheckmarkIcon from "../assets/img/copy-checkmark.svg";
import Waiting from "../pages/Waiting";
import TimerIcon from "../assets/img/countdown-watch-small.svg";
import questionImage from "../assets/img/question-box.svg";

const CountDownModal = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedLink, setGeneratedLink] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setGeneratedLink(
        "https://467c53ab-f0a1-46b3-842b-b678a7556090.e1-us-east-azure.choreoapps.dev/game/countdowngame/1/session/cd478cb5-23d0-4837-bc7f-dd2af33051c4"
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
      window.location.href = "https://467c53ab-f0a1-46b3-842b-b678a7556090.e1-us-east-azure.choreoapps.dev/countdowngamepage";
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
            <img
              src={TimerIcon}
              alt="Timer icon"
              className="modal-timer-icon"
            />
            <h2 className="modal-title">카운트다운</h2>
          </div>
          <p className="modal-description">
            1분 안에 최대한 많은 TOEIC 문제를 맞춰보세요.
            <br />
            더 많은 TOEIC 문제를 맞추면 승리합니다.
            <br />
            제한된 시간 내에 TOEIC 문제를 풀면서
            <br />
            순발력과 집중력을 기를 수 있어요!
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

export default CountDownModal;
