import React from "react";
import "../styles/Grading.css";
import gradingImage from "../assets/img/grading-jammini.png";

function Grading() {
  return (
    <div className="grading-container">
      <img src={gradingImage} alt="Grading" className="grading-image" />
      <h1 className="grading-korean-text">채점하는 중...</h1>
      <p className="grading-english-text">
        In a business context, “Qualify” means to “meet the criteria.”
      </p>
    </div>
  );
}

export default Grading;