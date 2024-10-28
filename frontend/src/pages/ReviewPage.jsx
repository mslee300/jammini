import React from "react";
import Navbar from "../components/Navbar";
import RecentIcon from "../assets/img/recent.svg";
import CheckIcon from "../assets/img/check-circle.svg";
import CrossIcon2 from "../assets/img/cross-circle-2.svg";
import CrossIcon3 from "../assets/img/cross-circle-3.svg";
import "../styles/ReviewPage.css";

const ReviewPage = () => {
  const reviews = [
    {
      question: "The event was ___ because of the bad weather.",
      options: "1. canceled 2. rescheduled 3. delayed 4. postponed",
      correct: true,
    },
    {
      question: "The event was ___ because of the bad weather.",
      options: "1. canceled 2. rescheduled 3. delayed 4. postponed",
      correct: false,
    },
    {
      question: "The event was ___ because of the bad weather.",
      options: "1. canceled 2. rescheduled 3. delayed 4. postponed",
      correct: true,
    },
    {
      question: "The event was ___ because of the bad weather.",
      options: "1. canceled 2. rescheduled 3. delayed 4. postponed",
      correct: true,
    },
    {
      question: "The event was ___ because of the bad weather.",
      options: "1. canceled 2. rescheduled 3. delayed 4. postponed",
      correct: true,
    },
    {
      question: "The event was ___ because of the bad weather.",
      options: "1. canceled 2. rescheduled 3. delayed 4. postponed",
      correct: true,
    },
    {
      question: "The event was ___ because of the bad weather.",
      options: "1. canceled 2. rescheduled 3. delayed 4. postponed",
      correct: true,
    },
  ];

  return (
    <div className="container">
      <Navbar />
      <h2 className="title">문제 리뷰</h2>
      <div className="filters">
        <button className="filterButton">
          <img src={RecentIcon} alt="Recent" className="icon" /> 최근순
        </button>
        <button className="filterButtonDisabled">
          <img src={CrossIcon2} alt="Disabled" className="icon" /> 틀린답
        </button>
        <button className="filterButtonDisabled">
          <img src={CrossIcon2} alt="Disabled" className="icon" /> 자주 틀리는답
        </button>
      </div>
      <div className="reviewList">
        {reviews.map((review, index) => (
          <div key={index} className="reviewCard">
            <div className="reviewText">
              <p className="question">{review.question}</p>
              <p className="options">{review.options}</p>
            </div>
            <div className="result">
              {review.correct ? (
                <img src={CheckIcon} alt="Correct" className="correctIcon" />
              ) : (
                <img
                  src={CrossIcon3}
                  alt="Incorrect"
                  className="incorrectIcon"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
