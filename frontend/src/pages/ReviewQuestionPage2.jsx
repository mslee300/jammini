import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CorrectAnswer from "../components/CorrectAnswer";
import IncorrectAnswer from "../components/IncorrectAnswer";
import ExitIcon from "../assets/img/exit.svg";
import "../styles/GamePage.css";

const ReviewQuestionPage2 = () => {
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      text: "Which word means 'to forbid something by law'?",
      options: ["Prohibit", "mandate", "entitle", "appeal"],
      correct_answer: "Prohibit",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (option) => {
    if (!isSubmitted) {
      setSelectedOption(option);
    }
  };

  const handleSubmit = () => {
    if (selectedOption) {
      setIsCorrect(selectedOption === currentQuestion.correct_answer);
      setIsSubmitted(true);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setIsSubmitted(false);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(0);
    }
  };

  const handleRetry = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setIsSubmitted(false);
  };

  const handleExit = () => {
    navigate("/reviewpage");
  };

  return (
    <div className="review-game-container">
      <div className="game-header">
        <img
          src={ExitIcon}
          alt="Exit"
          className="header-icon exit-icon"
          onClick={handleExit}
        />
      </div>

      <div
        className={`review-question-section ${isSubmitted ? "submitted" : ""}`}
      >
        <h1>
          {currentQuestion.text.split("___").map((part, index) => (
            <React.Fragment key={index}>
              {part}
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
            disabled={isSubmitted}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="review-buttons">
        <button
          className={`submit-btn ${selectedOption ? "" : "initial"} ${
            isCorrect === false ? "incorrect" : ""
          } ${isCorrect === true ? "correct" : ""}`}
          onClick={
            isCorrect === true
              ? handleNextQuestion
              : isCorrect === false
              ? handleRetry
              : handleSubmit
          }
          disabled={!selectedOption && !isSubmitted}
        >
          {isCorrect === null
            ? "정답 확인!"
            : isCorrect === false
            ? "다시 풀어보기"
            : "다시 풀기"}
        </button>
        {isSubmitted && (
          <button
            className={`exit-btn ${isCorrect === false ? "incorrect" : ""} ${
              isCorrect === true ? "correct" : ""
            }`}
            onClick={handleExit}
          >
            나가기
          </button>
        )}
      </div>

      {isCorrect === true && <CorrectAnswer pageType="review" />}
      {isCorrect === false && (
        <IncorrectAnswer
          correctAnswer={currentQuestion.correct_answer}
          pageType="review"
        />
      )}
    </div>
  );
};

export default ReviewQuestionPage2;
