import React, { useState } from "react";
import "../styles/GameModal.css";
import LoadingDots from "../assets/img/3-dots-scale.svg"; // Import the SVG
import CheckmarkIcon from "../assets/img/copy-checkmark.svg"; // Import the checkmark image
import Waiting from "../pages/Waiting"; // Import the Waiting component

const GameModal = ({ isOpen, onClose, fireIcon, questionImage }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedLink, setGeneratedLink] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false); // State for toast visibility
  const [isWaiting, setIsWaiting] = useState(false); // State to show Waiting component

  const handleButtonClick = () => {
    setIsLoading(true); // Show loading spinner

    // Simulate an API call or a delay to generate a link
    setTimeout(() => {
      setIsLoading(false); // Stop loading spinner
      setGeneratedLink("https://jammini.replit.app/speedgame/12345"); // Example generated link
    }, 2000); // Simulating 2 seconds delay
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);

    // Show the toast notification
    setIsToastVisible(true);

    // Hide toast after 3 seconds and THEN switch to the Waiting component
    setTimeout(() => {
      setIsToastVisible(false); // Hide toast
      setIsWaiting(true); // Show the Waiting component after toast
    }, 2500); // 3-second delay to allow the toast to appear
  };

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Conditionally render Waiting or the regular modal content
  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      {isWaiting ? (
        <Waiting /> // Render the Waiting component if isWaiting is true
      ) : (
        <div className="modal-content">
          <div className="modal-title-container">
            <img src={fireIcon} alt="Fire icon" className="modal-fire-icon" />
            <h2 className="modal-title">스피드게임</h2>
          </div>
          <p className="modal-description">
            TOEIC 문제를 최대한 빨리 맞추세요.
            <br />더 빨리, 많은 TOEIC 문제를 맞추면 승리합니다.
            <br />
            TOEIC 문제를 빨리 맞추면서 시간관리 능력을 기를 수 있어요!
          </p>
          <img
            src={questionImage}
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
