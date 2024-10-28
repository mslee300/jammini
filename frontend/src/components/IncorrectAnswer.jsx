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
          <h2>오답이에요</h2>
        </div>
        <p>정답: {correctAnswer}</p>
      </div>
      <img src={FlagIcon} alt="Flag" className="icon-right" />
    </div>
  );
};

export default InCorrectAnswer;
