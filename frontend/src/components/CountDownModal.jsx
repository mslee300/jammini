import React, { useState } from "react";
import "../styles/SpeedGameModal.css";
import LoadingDots from "../assets/img/3-dots-scale.svg";
import CheckmarkIcon from "../assets/img/copy-checkmark.svg";
import SpeedQuestionBox from "../assets/img/speed-question-box.svg";
import Waiting from "../pages/Waiting";
import TimerIcon from "../assets/img/countdown-watch.svg";
import api from "../api"; // Assuming this is the axios instance you're using

const GameModal = ({ isOpen, onClose}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedLink, setGeneratedLink] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);

    api
      .post("/game/gameplay/")
      .then((res) => {
        setGeneratedLink(res.data.game_link); // Use the game link from the response
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(
          "Error creating game session:",
          err.response ? err.response.data : err
        );
        alert("Failed to create game session.");
        setIsLoading(false);
      });
  };

  const copyToClipboard = () => {
    // Create a modified version of the link strictly for copying
    const modifiedLinkForClipboard = generatedLink.replace(
      /\/game\/speedgame\/\d+\//,
      "/game/speedgame/1/"
    );

    // Copy the modified link to the clipboard, but keep the original for redirection
    navigator.clipboard.writeText(modifiedLinkForClipboard);

    setIsToastVisible(true);

    // After the 3-second delay, navigate to the generated URL
    setTimeout(() => {
      setIsToastVisible(false); // Hide the toast notification
      window.location.href = generatedLink; // Redirect to the original generated link
    }, 2500); // 3-second delay
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
            <img src={TimerIcon} alt="Timer icon" className="modal-timer-icon" />
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
            src={SpeedQuestionBox}
            alt="Example question"
            className="modal-question-box"
          />

          {/* Show loading spinner or generated link box */}
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

          {/* Show the toast notification if visible */}
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
