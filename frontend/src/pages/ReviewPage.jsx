// import React from "react";
// import { NavLink } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import RecentIcon from "../assets/img/recent.svg";
// import CheckIcon from "../assets/img/check-circle.svg";
// import CrossIcon2 from "../assets/img/cross-circle-2.svg";
// import CrossIcon3 from "../assets/img/cross-circle-3.svg";
// import "../styles/ReviewPage.css";

// const ReviewPage = () => {
//   const reviews = [
//     {
//       question: "The event was ___ because of the bad weather.",
//       options: "1. canceled 2. rescheduled 3. delayed 4. postponed",
//       correct: true,
//     },
//     {
//       question:
//         "The CEO has already _______ the company’s new strategy before the meeting last week.",
//       options: "1. revise 2. revised 3. revises 4. revising",
//       correct: false,
//     },
//     {
//       question: "What does the word 'severely' mean",
//       options: "1. softly 2. moderately 3. harshly 4. quickly",
//       correct: true,
//     },
//   ];

//   return (
//     <div className="container">
//       <Navbar />
//       <h2 className="title">문제 리뷰</h2>
//       <div className="filters">
//         <button className="filterButton">
//           <img src={RecentIcon} alt="Recent" className="icon" /> 최근순
//         </button>
//         <button className="filterButtonDisabled">
//           <img src={CrossIcon2} alt="Disabled" className="icon" /> 틀린답
//         </button>
//         <button className="filterButtonDisabled">
//           <img src={CrossIcon2} alt="Disabled" className="icon" /> 자주 틀리는답
//         </button>
//       </div>
//       <div className="reviewList">
//         {reviews.map((review, index) => (
//           <NavLink
//             to="/reviewquestionpage"
//             key={index}
//             className="reviewCardLink"
//             activeClassName="activeReviewCardLink"
//           >
//             <div className="reviewCard">
//               <div className="reviewText">
//                 <p className="question">{review.question}</p>
//                 <p className="options">{review.options}</p>
//               </div>
//               <div className="result">
//                 {review.correct ? (
//                   <img src={CheckIcon} alt="Correct" className="correctIcon" />
//                 ) : (
//                   <img
//                     src={CrossIcon3}
//                     alt="Incorrect"
//                     className="incorrectIcon"
//                   />
//                 )}
//               </div>
//             </div>
//           </NavLink>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReviewPage;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import RecentIcon from "../assets/img/recent.svg";
import CheckIcon from "../assets/img/check-circle.svg";
import CrossIcon2 from "../assets/img/cross-circle-2.svg";
import CrossIcon3 from "../assets/img/cross-circle-3.svg";
import "../styles/ReviewPage.css";

const ReviewPage = () => {
  const [filter, setFilter] = useState("recent"); // Initialize filter state

  const reviews = [
    {
      question: "The event was ___ because of the bad weather.",
      options: "1. canceled 2. rescheduled 3. delayed 4. postponed",
      correct: true,
    },
    {
      question:
        "The CEO has already _______ the company’s new strategy before the meeting last week.",
      options: "1. revise 2. revised 3. revises 4. revising",
      correct: false,
    },
    {
      question: "What does the word 'severely' mean",
      options: "1. softly 2. moderately 3. harshly 4. quickly",
      correct: true,
    },
    {
      question: "All employees are required to submit their reports ___ the end of the day.",
      options: "1. by 2. until 3. through 4. during",
      correct: true,
    },
    {
      question: "Which word means 'to forbid something by law'?",
      options: "1. Prohibit 2. mandate 3. entitle 4. appeal",
      correct: false,
    },
    {
      question: "The manager is ___ a decision about the new policy tomorrow.",
      options: "1. make 2. made 3. making 4. to make",
      correct: true,
    },
    {
      question: "What does 'abolish' mean?",
      options: "1. to establish 2. to enhance 3. to eradicate 4. to reinforce",
      correct: true,
    },
    {
      question: "We need to ___ our budget to accommodate the unexpected expenses.",
      options: "1. adjust 2. review 3. cut 4. increase",
      correct: true,
    },
    {
      question: "Which word refers to 'making something more clear'?",
      options: "1. clarify 2. restrict 3. abolish 4. submit",
      correct: false,
    },
  ];

  // Filter reviews based on the selected filter
  const filteredReviews = reviews.filter((review) => {
    if (filter === "incorrect") {
      return !review.correct; // Show only incorrect answers
    } else if (filter === "frequentIncorrect") {
      // Apply additional logic for frequent incorrect answers if needed
      return !review.correct; // Placeholder logic: Show incorrect answers
    }
    return true; // Show all for 'recent' filter
  });

  return (
    <div className="container">
      <Navbar />
      <h2 className="title-review">문제 리뷰</h2>
      <div className="filters">
        <button
          className={`filterButton ${filter === "recent" ? "selected" : ""}`}
          onClick={() => setFilter("recent")}
        >
          <img src={RecentIcon} alt="Recent" className="icon" /> 최근순
        </button>
        <button
          className={`filterButton ${filter === "incorrect" ? "selected" : ""}`}
          onClick={() => setFilter("incorrect")}
        >
          <img src={CrossIcon2} alt="Incorrect" className="icon" /> 틀린답
        </button>
        <button
          className={`filterButton ${filter === "frequentIncorrect" ? "selected" : ""}`}
          onClick={() => setFilter("frequentIncorrect")}
        >
          <img src={CrossIcon2} alt="Frequent Incorrect" className="icon" /> 자주 틀리는답
        </button>
      </div>
      <div className="reviewList">
        {filteredReviews.map((review, index) => (
          <NavLink
            to="/reviewquestionpage"
            key={index}
            className="reviewCardLink"
            activeClassName="activeReviewCardLink"
          >
            <div className="reviewCard">
              <div className="reviewText">
                <p className="question">{review.question}</p>
                <p className="options">{review.options}</p>
              </div>
              <div className="result">
                {review.correct ? (
                  <img src={CheckIcon} alt="Correct" className="correctIcon" />
                ) : (
                  <img src={CrossIcon3} alt="Incorrect" className="incorrectIcon" />
                )}
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
