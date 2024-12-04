import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CorrectAnswer from "../components/CorrectAnswer";
import IncorrectAnswer from "../components/IncorrectAnswer";
import ExitIcon from "../assets/img/exit.svg";
import BookmarkIcon from "../assets/img/bookmark.svg";
import "../styles/GamePage.css";

const GamePage2 = () => {
  const navigate = useNavigate();
  const questions = [
    {
      id: 1,
      text: "The event was ___ because of the bad weather.",
      translation: "날씨가 안 좋아서 행사가 취소됐어요.",
      options: ["canceled", "rescheduled", "delayed", "postponed"],
      correct_answer: "canceled",
    },
    {
      id: 2,
      text: "The CEO has already ___ the company’s new strategy before the meeting last week.",
      options: ["revise", "revised", "revises", "revising"],
      correct_answer: "revised",
    },
    {
      id: 3,
      text: "What does the word 'severely' mean?",
      options: ["softly", "moderately", "harshly", "quickly"],
      correct_answer: "harshly",
    },
    {
      id: 4,
      text: "All employees are required to submit their reports ___ the end of the day.",
      options: ["by", "until", "through", "during"],
      correct_answer: "by",
    },
    {
      id: 5,
      text: "Which word means 'to forbid something by law'?",
      options: ["prohibit", "mandate", "entitle", "appeal"],
      correct_answer: "prohibit",
    },
    {
      id: 6,
      text: "The manager is ___ a decision about the new policy tomorrow.",
      options: ["make", "made", "making", "to make"],
      correct_answer: "to make",
    },
    {
      id: 7,
      text: "What does 'abolish' mean?",
      options: ["to establish", "to enhance", "to eradicate", "to reinforce"],
      correct_answer: "to eradicate",
    },
    {
      id: 8,
      text: "We need to ___ our budget to accommodate the unexpected expenses.",
      options: ["adjust", "review", "cut", "increase"],
      correct_answer: "adjust",
    },
    {
      id: 9,
      text: "Which word refers to 'making something more clear'?",
      options: ["clarify", "restrict", "abolish", "submit"],
      correct_answer: "clarify",
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
      navigate("/grading");

      setTimeout(() => {
        navigate("/loserpage");
      }, 2500);
    }
  };

  const handleRetry = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setIsSubmitted(false);
  };

  const handleExit = () => {
    navigate("/dashboard");
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <img
          src={ExitIcon}
          alt="Exit"
          className="header-icon exit-icon"
          onClick={handleExit}
        />
        <div className="progress-bar-gamepage">
          <div
            className="progress-fill-gamepage"
            style={{
              width: `${
                ((currentQuestionIndex + 1) / questions.length) * 100
              }%`,
            }}
          ></div>
        </div>
      </div>

      <div className={`question-section ${isSubmitted ? "submitted" : ""}`}>
        <img src={BookmarkIcon} alt="Bookmark" className="bookmark-icon" />
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
          ? "확인했어요"
          : "계속 풀기"}
      </button>

      {/* Feedback Components */}
      {isCorrect === true && <CorrectAnswer pageType="game" />}
      {isCorrect === false && (
        <IncorrectAnswer
          correctAnswer={currentQuestion.correct_answer}
          pageType="game"
        />
      )}
    </div>
  );
};

export default GamePage2;