// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Step 1: Import useNavigate for navigation
// import CorrectAnswer from "../components/CorrectAnswer";
// import IncorrectAnswer from "../components/IncorrectAnswer";
// import ExitIcon from "../assets/img/exit.svg";
// import SettingsIcon from "../assets/img/settings.svg";
// import BookmarkIcon from "../assets/img/bookmark.svg";
// import ClockIcon from "../assets/img/clock.svg";
// import "../styles/GamePage.css";

// const CountDownGamePage = () => {
//   const navigate = useNavigate(); // Step 1: Initialize useNavigate
//   const questions = [
//     {
//       id: 1,
//       text: "The event was ___ because of the bad weather.",
//       translation: "날씨가 안 좋아서 행사가 취소됐어요.",
//       options: ["canceled", "rescheduled", "delayed", "postponed"],
//       correct_answer: "canceled",
//     },
//     {
//       id: 2,
//       text: "The CEO has already ___ the company’s new strategy before the meeting last week.",
//       options: ["revise", "revised", "revises", "revising"],
//       correct_answer: "revised",
//     },
//     {
//       id: 3,
//       text: "What does the word 'severely' mean?",
//       options: ["softly", "moderately", "harshly", "quickly"],
//       correct_answer: "harshly",
//     },
//   ];

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isCorrect, setIsCorrect] = useState(null);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(60); // Initialize timer to 60 seconds

//   const currentQuestion = questions[currentQuestionIndex];

//   // Timer logic
//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setInterval(() => {
//         setTimeLeft((prevTime) => prevTime - 1);
//       }, 1000);
//       return () => clearInterval(timer);
//     } else {
//       // Handle timer reaching zero (optional: redirect or show timeout message)
//       setIsSubmitted(true); // Mark as submitted if time runs out
//     }
//   }, [timeLeft]);

//   // Calculate the progress bar width based on the time left
//   const progressWidth = (timeLeft / 60) * 100;

//   const handleOptionSelect = (option) => {
//     if (!isSubmitted) {
//       setSelectedOption(option);
//     }
//   };

//   const handleSubmit = () => {
//     if (selectedOption) {
//       setIsCorrect(selectedOption === currentQuestion.correct_answer);
//       setIsSubmitted(true);
//     }
//   };

//   const handleNextQuestion = () => {
//     setSelectedOption(null);
//     setIsCorrect(null);
//     setIsSubmitted(false);
//     setTimeLeft(60); // Reset timer for next question

//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       navigate("/grading");
//       setTimeout(() => {
//         navigate("/winnerpage");
//       }, 2500);
//     }
//   };

//   const handleRetry = () => {
//     setSelectedOption(null);
//     setIsCorrect(null);
//     setIsSubmitted(false);
//     setTimeLeft(60); // Reset timer on retry
//   };

//   const handleExit = () => {
//     navigate("/");
//   };

//   return (
//     <div className="game-container">
//       <div className="game-header">
//         <img
//           src={ExitIcon}
//           alt="Exit"
//           className="header-icon exit-icon"
//           onClick={handleExit}
//         />
//         <div className="progress-bar">
//           <div
//             className="progress-fill"
//             style={{
//               width: `${progressWidth}%`, // Update width dynamically
//               transition: "width 1s linear", // Smooth transition
//             }}
//           ></div>
//         </div>
//         <div className="timer">
//           <img src={ClockIcon} alt="Clock icon" className="clock-icon" />
//           <span>{`${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, "0")}`}</span>
//         </div>
//         <img
//           src={SettingsIcon}
//           alt="Settings"
//           className="header-icon settings-icon"
//         />
//       </div>

//       <div className={`question-section ${isSubmitted ? "submitted" : ""}`}>
//         <img src={BookmarkIcon} alt="Bookmark" className="bookmark-icon" />
//         <h1>
//           {currentQuestion.text.split("___").map((part, index) => (
//             <React.Fragment key={index}>
//               {part}
//               {index < currentQuestion.text.split("___").length - 1 && (
//                 <span
//                   className={`answer-box ${
//                     isSubmitted
//                       ? isCorrect
//                         ? "correct-answer"
//                         : "incorrect-answer"
//                       : ""
//                   }`}
//                 >
//                   {selectedOption ? (
//                     <span
//                       className={`answer-text ${
//                         isSubmitted
//                           ? isCorrect
//                             ? "correct-answer-text"
//                             : "incorrect-answer-text"
//                           : ""
//                       }`}
//                     >
//                       {selectedOption}
//                     </span>
//                   ) : (
//                     <span className="blank-box">___</span>
//                   )}
//                 </span>
//               )}
//             </React.Fragment>
//           ))}
//         </h1>
//         {currentQuestion.translation && <p>{currentQuestion.translation}</p>}
//       </div>

//       <div className="options">
//         {currentQuestion.options.map((option, index) => (
//           <button
//             key={index}
//             className={`option ${
//               isSubmitted
//                 ? selectedOption === option
//                   ? isCorrect
//                     ? "correct-option"
//                     : "incorrect-option"
//                   : ""
//                 : selectedOption === option
//                 ? "selected"
//                 : ""
//             }`}
//             onClick={() => handleOptionSelect(option)}
//             disabled={isSubmitted}
//           >
//             {option}
//           </button>
//         ))}
//       </div>

//       <button
//         className={`submit-btn ${selectedOption ? "" : "initial"} ${
//           isCorrect === false ? "incorrect" : ""
//         } ${isCorrect === true ? "correct" : ""}`}
//         onClick={
//           isCorrect === true
//             ? handleNextQuestion
//             : isCorrect === false
//             ? handleRetry
//             : handleSubmit
//         }
//         disabled={!selectedOption && !isSubmitted}
//       >
//         {isCorrect === null
//           ? "정답 확인!"
//           : isCorrect === false
//           ? "확인했어요"
//           : "계속 풀기"}
//       </button>

//       {isCorrect === true && <CorrectAnswer pageType="game" />}
//       {isCorrect === false && (
//         <IncorrectAnswer
//           correctAnswer={currentQuestion.correct_answer}
//           pageType="game"
//         />
//       )}
//     </div>
//   );
// };

// export default CountDownGamePage;