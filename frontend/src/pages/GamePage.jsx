import React, { useState } from "react";
import CorrectAnswer from "../components/CorrectAnswer";
import IncorrectAnswer from "../components/IncorrectAnswer";
import ExitIcon from "../assets/img/exit.svg";
import SettingsIcon from "../assets/img/settings.svg";
import BookmarkIcon from "../assets/img/bookmark.svg";
import "../styles/GamePage.css";

const GamePage = () => {
  const dummyQuestion = {
    id: 1,
    text: "The event was ___ because of the bad weather.",
    translation: "날씨가 안 좋아서 행사가 취소됐어요.",
    options: ["canceled", "rescheduled", "delayed", "postponed"],
    correct_answer: "canceled",
  };

  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false); // To check if "CHECK!" button is clicked

  // Handle option selection
  const handleOptionSelect = (option) => {
    if (!isSubmitted) {
      setSelectedOption(option);
    }
  };

  // Handle submit and check if the selected option is correct
  const handleSubmit = () => {
    if (selectedOption) {
      setIsCorrect(selectedOption === dummyQuestion.correct_answer);
      setIsSubmitted(true); // Set to true when the answer is submitted
    }
  };

  return (
    <div className="game-container">
      {/* Header Section */}
      <div className="game-header">
        <img src={ExitIcon} alt="Exit" className="header-icon exit-icon" />
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "50%" }}></div>
        </div>
        <img
          src={SettingsIcon}
          alt="Settings"
          className="header-icon settings-icon"
        />
      </div>

      {/* Question Section */}
      <div className={`question-section ${isSubmitted ? "submitted" : ""}`}>
        <img src={BookmarkIcon} alt="Bookmark" className="bookmark-icon" />
        <h1>
          The event was{" "}
          <span
            className={`answer-box ${
              isSubmitted && isCorrect ? "correct-answer" : ""
            }`}
          >
            {selectedOption ? (
              selectedOption
            ) : (
              <span className="blank-box">___</span>
            )}
          </span>{" "}
          because of the bad weather.
        </h1>
        <p>
          날씨가 안 좋아서 행사가{" "}
          <span
            className={`translation-answer ${
              isCorrect === true ? "correct-translation" : ""
            }`}
          >
            취소됐
          </span>
          어요.
        </p>
      </div>

      {/* Options Section */}
      <div className="options">
        {dummyQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`option ${
              isSubmitted && selectedOption === option ? "selected" : ""
            }`}
            onClick={() => handleOptionSelect(option)}
            disabled={isSubmitted} // Disable option buttons after submission
          >
            {option}
          </button>
        ))}
      </div>

      {/* Submit Button */}
      <button
        className={`submit-btn ${isCorrect === false ? "incorrect" : ""}`}
        onClick={handleSubmit}
        disabled={isSubmitted && isCorrect !== null} // Disable after submission
      >
        {isCorrect === null
          ? "CHECK!"
          : isCorrect === false
          ? "GOT IT"
          : "CONTINUE"}
      </button>

      {/* Feedback Components */}
      {isCorrect === true && <CorrectAnswer />}
      {isCorrect === false && (
        <IncorrectAnswer correctAnswer={dummyQuestion.correct_answer} />
      )}
    </div>
  );
};

export default GamePage;
