import React from "react";
import "../styles/CorrectIncorrect.css";
import CheckIcon from "../assets/img/check-circle.png";
import FlagIcon from "../assets/img/flag.svg";

const CorrectAnswer = ({ pageType }) => {
  return (
    <div
      className={`correct-answer-box ${pageType === "review" ? "review" : ""}`}
    >
      <div className="correct-left">
        <img src={CheckIcon} alt="Checkmark" className="icon-left" />
        <h2>정답이에요!</h2>
      </div>
      <img src={FlagIcon} alt="Flag" className="icon-right" />
    </div>
  );
};

export default CorrectAnswer;
