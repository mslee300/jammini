import React, { useState } from "react";
import CorrectAnswer from "../components/CorrectAnswer";
import IncorrectAnswer from "../components/IncorrectAnswer";
import "../styles/GamePage.css";

const GamePage = () => {
  // Dummy data to simulate backend response
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
    setSelectedOption(option);
    setIsSubmitted(false); // Reset submission status when a new option is selected
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
      <div className="question-section">
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

      <div className="options">
        {dummyQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`option ${
              isSubmitted && selectedOption === option ? "selected" : ""
            }`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        {isCorrect === null ? "CHECK!" : "CONTINUE"}
      </button>

      {isCorrect === true && <CorrectAnswer />}
      {isCorrect === false && (
        <IncorrectAnswer correctAnswer={dummyQuestion.correct_answer} />
      )}
    </div>
  );
};

export default GamePage;
