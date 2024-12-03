import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CorrectAnswer from "../components/CorrectAnswer";
import IncorrectAnswer from "../components/IncorrectAnswer";
import ExitIcon from "../assets/img/exit.svg";
import ClockIcon from "../assets/img/clock.svg";
import "../styles/GamePage.css";

const CountdownGamePage = () => {
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
      {
        id: 10,
        text: "What is the meaning of 'dramatically'?",
        options: ["slightly", "carefully", "rapidly", "softly"],
        correct_answer: "rapidly",
      },
      {
        id: 11,
        text: "Which word means 'to reduce in number or size'?",
        options: ["increase", "restrict", "concentrate", "dwindle"],
        correct_answer: "dwindle",
      },
      {
        id: 12,
        text: "'Incentive' is closest in meaning to:",
        options: ["reward", "consequence", "penalty", "plan"],
        correct_answer: "reward",
      },
      {
        id: 13,
        text: "Which word means'to make sure that something happens'?",
        options: ["concentrate", "establish", "ensure", "draw"],
        correct_answer: "ensure",
      },
      {
        id: 14,
        text: "'Expansion' means:",
        options: ["reduction", "increase", "elimination", "prohibition"],
        correct_answer: "increase",
      },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // Initialize timer to 60 seconds

  const currentQuestion = questions[currentQuestionIndex];

  // Timer logic
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      // Handle timer reaching zero (optional: redirect or show timeout message)
      setIsSubmitted(true); // Mark as submitted if time runs out
    }
  }, [timeLeft]);

  // Calculate the progress bar width based on the time left
  const progressWidth = (timeLeft / 60) * 100;

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
        navigate("/winnerpage");
      }, 2500);
    }
  };

  const handleRetry = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setIsSubmitted(false);
  };

  const handleExit = () => {
    navigate("/");
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
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${progressWidth}%`, // Update width dynamically
              transition: "width 1s linear", // Smooth transition
            }}
          ></div>
        </div>
        <div className="timer">
          <img src={ClockIcon} alt="Clock icon" className="clock-icon" />
          <span>{`${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, "0")}`}</span>
        </div>
      </div>

      <div className={`question-section ${isSubmitted ? "submitted" : ""}`}>
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

export default CountdownGamePage;