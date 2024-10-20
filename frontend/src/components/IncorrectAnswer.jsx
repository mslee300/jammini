import React from "react";
import "../styles/CorrectIncorrect.css";
import CrossIcon from "../assets/img/cross-circle.svg";
import FlagIcon from "../assets/img/flag2.svg";

const InCorrectAnswer = ({ correctAnswer }) => {
  return (
    <div className="incorrect-answer-box">
      <div className="incorrect-left">
        <div className="icon-and-text">
          <img src={CrossIcon} alt="Cross" className="icon-left" />
          <h2>Incorrect</h2>
        </div>
        <p>Answer: {correctAnswer}</p>
      </div>
      <img src={FlagIcon} alt="Flag" className="icon-right" />
    </div>
  );
};

export default InCorrectAnswer;
