import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Step 1: Import useNavigate for navigation
import CorrectAnswer from "../components/CorrectAnswer";
import IncorrectAnswer from "../components/IncorrectAnswer";
import ExitIcon from "../assets/img/exit.svg";
import BookmarkIcon from "../assets/img/bookmark.svg";
import "../styles/GamePage.css";

const GamePage = () => {
  const navigate = useNavigate(); // Step 1: Initialize useNavigate
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

  // Handle moving to the next question or redirecting after last question
  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setIsSubmitted(false);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Step 2: If last question is answered correctly, navigate to grading
      navigate("/grading");

      // Step 3: Set a timeout to navigate to /winnerpage after a few seconds
      setTimeout(() => {
        navigate("/winnerpage");
      }, 2500); // 3000 ms = 3 seconds
    }
  };

  // Handle resetting the question state on incorrect answer
  const handleRetry = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setIsSubmitted(false); // Resets submission state so user can try again
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
        disabled={!selectedOption && !isSubmitted} //
      >
        {isCorrect === null
          ? "정답 확인!" // Initial check answer state
          : isCorrect === false
          ? "확인했어요" // Retry state
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

export default GamePage;