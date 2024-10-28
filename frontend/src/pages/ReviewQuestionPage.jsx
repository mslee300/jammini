import React, { useState } from "react";
import CorrectAnswer from "../components/CorrectAnswer";
import IncorrectAnswer from "../components/IncorrectAnswer";
import ExitIcon from "../assets/img/exit.svg";
import SettingsIcon from "../assets/img/settings.svg";
import BookmarkIcon from "../assets/img/bookmark.svg";
import "../styles/GamePage.css";

const ReviewQuestionPage = () => {
  const questions = [
    {
      id: 1,
      text: "The CEO has already ___ the company’s new strategy before the meeting last week.",
      options: ["revise", "revised", "revises", "revising"],
      correct_answer: "revised",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const currentQuestion = questions[currentQuestionIndex];

  // Handle option selection
  const handleOptionSelect = (option) => {
    if (!isSubmitted) {
      setSelectedOption(option);
    }
  };

  // Handle submit and check if the selected option is correct
  const handleSubmit = () => {
    if (selectedOption) {
      setIsCorrect(selectedOption === currentQuestion.correct_answer);
      setIsSubmitted(true);
    }
  };

  // Handle moving to the next question after a correct answer
  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setIsSubmitted(false);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(0); // Reset to the first question if all are done
    }
  };

  // Handle resetting the question state on incorrect answer
  const handleRetry = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setIsSubmitted(false); // Resets submission state so user can try again
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <img src={ExitIcon} alt="Exit" className="header-icon exit-icon" />
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${
                ((currentQuestionIndex + 1) / questions.length) * 100
              }%`,
            }}
          ></div>
        </div>
        <img
          src={SettingsIcon}
          alt="Settings"
          className="header-icon settings-icon"
        />
      </div>

      <div className={`question-section ${isSubmitted ? "submitted" : ""}`}>
        <img src={BookmarkIcon} alt="Bookmark" className="bookmark-icon" />
        <h1>
          {currentQuestion.text.split("___").map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {/* Render answer box only once when there's a blank to fill */}
              {index < currentQuestion.text.split("___").length - 1 && (
                <span
                  className={`answer-box ${
                    isSubmitted
                      ? isCorrect
                        ? "correct-answer"
                        : "incorrect-answer"
                      : ""
                  }`}
                >
                  {selectedOption ? (
                    <span
                      className={`answer-text ${
                        isSubmitted
                          ? isCorrect
                            ? "correct-answer-text"
                            : "incorrect-answer-text"
                          : ""
                      }`}
                    >
                      {selectedOption}
                    </span>
                  ) : (
                    <span className="blank-box">___</span>
                  )}
                </span>
              )}
            </React.Fragment>
          ))}
        </h1>
        {currentQuestion.translation && <p>{currentQuestion.translation}</p>}
      </div>

      <div className="options">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`option ${
              isSubmitted
                ? selectedOption === option
                  ? isCorrect
                    ? "correct-option"
                    : "incorrect-option"
                  : ""
                : selectedOption === option
                ? "selected"
                : ""
            }`}
            onClick={() => handleOptionSelect(option)}
            disabled={isSubmitted} // Disable options after submission
          >
            {option}
          </button>
        ))}
      </div>

      <button
        className={`submit-btn ${selectedOption ? "" : "initial"} ${
          isCorrect === false ? "incorrect" : ""
        } ${isCorrect === true ? "correct" : ""}`}
        onClick={
          isCorrect === true
            ? handleNextQuestion // Move to the next question if correct
            : isCorrect === false
            ? handleRetry // Reset for retry if incorrect
            : handleSubmit // Submit if checking answer
        }
        disabled={!selectedOption && !isSubmitted} // Disable if no selection or already submitted
      >
        {isCorrect === null
          ? "정답 확인!" // Initial check answer state
          : isCorrect === false
          ? "확인했어요" // Retry state
          : "계속 풀기"}
      </button>

      {/* Feedback Components */}
      {isCorrect === true && <CorrectAnswer />}
      {isCorrect === false && (
        <IncorrectAnswer correctAnswer={currentQuestion.correct_answer} />
      )}
    </div>
  );
};

export default ReviewQuestionPage ;
