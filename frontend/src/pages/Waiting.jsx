import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "../styles/Waiting.css";
// import FireIcon from "../assets/img/speedgame-fire.svg";
import TimerIcon from "../assets/img/countdown-watch.svg";
import api from "../api"; // Axios instance

const Waiting = ({ onExit }) => {
  const { userId, sessionId } = useParams(); // Retrieve userId and sessionId from URL
  const [canStart, setCanStart] = useState(false);
  const [countdown, setCountdown] = useState(null); // State to manage countdown
  const navigate = useNavigate(); // For redirecting to the game page

  useEffect(() => {
    console.log("useEffect triggered");

    const intervalId = setInterval(() => {
      console.log("Polling API with userId:", userId, "sessionId:", sessionId);

      if (userId && sessionId) {
        api
          .get(`/game/speedgame/${userId}/session/${sessionId}/`)
          .then((response) => {
            console.log("API response:", response.data);
            if (response.data.can_start) {
              setCanStart(true);
              clearInterval(intervalId); // Stop polling once the game can start
              startCountdown(); // Start the countdown when the game can start
            }
          })
          .catch((err) => {
            console.error(
              "Error checking game status:",
              err.response ? err.response.data : err.message
            );
          });
      }
    }, 1000); // Poll every 1 second

    return () => {
      clearInterval(intervalId); // Clean up the interval on unmount
      console.log("Cleaning up interval");
    };
  }, [userId, sessionId]);

  const startCountdown = () => {
    // First show "READY?" for 2 seconds
    setTimeout(() => {
      setCountdown(3); // Start the countdown at 3 after 2 seconds

      let counter = 3;
      const countdownInterval = setInterval(() => {
        counter -= 1;
        setCountdown(counter);

        if (counter === 0) {
          clearInterval(countdownInterval);
          navigate("/gamepage"); // Redirect to game page after countdown
        }
      }, 1000); // Update countdown every second
    }, 2000); // Wait 2 seconds to display "READY?"
  };

  return (
    <div className="waiting-container">
      {!canStart && countdown === null && (
        // <img src={FireIcon} alt="Fire icon" className="waiting-fire-icon" />
        <img src={TimerIcon} alt="Timer icon" className="waiting-fire-icon" />
      )}

      {canStart ? (
        <>
          {countdown === null ? (
            <p className="waiting-title ready">READY?</p>
          ) : (
            <p className="countdown-circle">{countdown}</p>
          )}
        </>
      ) : (
        <>
          <p className="waiting-title">플레이어를 기다리는 중...</p>
          <p className="waiting-subtitle">친구에게 초대링크를 보내주세요!</p>
          <button className="exit-button" onClick={onExit}>
            나가기
          </button>
        </>
      )}
    </div>
  );
};

export default Waiting;
