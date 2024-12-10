import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Waiting.css";
import TimerIcon from "../assets/img/waiting-jammini.png";
import api from "../api";

const Waiting = ({ onExit }) => {
  const { userId, sessionId } = useParams();
  const [canStart, setCanStart] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const navigate = useNavigate();

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
              clearInterval(intervalId);
              startCountdown();
            }
          })
          .catch((err) => {
            console.error(
              "Error checking game status:",
              err.response ? err.response.data : err.message
            );
          });
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Cleaning up interval");
    };
  }, [userId, sessionId]);

  const startCountdown = () => {
    setTimeout(() => {
      setCountdown(3);

      let counter = 3;
      const countdownInterval = setInterval(() => {
        counter -= 1;
        setCountdown(counter);

        if (counter === 0) {
          clearInterval(countdownInterval);
          navigate("/gamepage");
        }
      }, 1000);
    }, 2000);
  };

  return (
    <div className="waiting-container">
      {!canStart && countdown === null && (
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
