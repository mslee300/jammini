import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Dashboard.css";
import Navbar from "../components/Navbar";
import GameModal from "../components/GameModal";
import CountDownModal from "../components/CountDownModal";
import FireIcon from "../assets/img/speedgame-fire.svg";
import QuestionBox from "../assets/img/question-box.svg";
import MicrophoneIcon from "../assets/img/pronounciation-mic.svg";
import ConversationIcon from "../assets/img/wordcollab-balloon.svg";
import TimerIcon from "../assets/img/countdown-watch.svg";
import SpeechBubbleIcon from "../assets/img/wordrelay-document.svg";
import ChainIcon from "../assets/img/20riddles-link.svg";

function Dashboard() {
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);
  const [isCountDownModalOpen, setIsCountDownModalOpen] = useState(false);

  const openGameModal = () => setIsGameModalOpen(true);
  const closeGameModal = () => setIsGameModalOpen(false);

  const openCountDownModal = () => setIsCountDownModalOpen(true);
  const closeCountDownModal = () => setIsCountDownModalOpen(false);

  return (
    <div className="dashboard-container">
      <h1>
        {/* Friend mode<span>Random mode</span> */}
        1:1 게임으로 즐기는 토익공부
      </h1>

      <div className="game-grid">
        <div className="game-card" onClick={openGameModal}>
          <p>스피드게임</p>
          <img src={FireIcon} alt="Fire icon" />
        </div>

        <div className="game-card" onClick={openCountDownModal}>
          <p>카운트다운</p>
          <img src={TimerIcon} alt="Timer icon" />
        </div>

        <NavLink to="/" className="game-card coming-soon">
          <p>끝말잇기</p>
          <img src={SpeechBubbleIcon} alt="Speech bubble icon" />
          <div className="coming-soon-overlay">
            COMING
            <br />
            SOON
          </div>
        </NavLink>

        <NavLink to="/" className="game-card coming-soon">
          <p>스무고개</p>
          <img src={ChainIcon} alt="Chain icon" />
          <div className="coming-soon-overlay">
            COMING
            <br />
            SOON
          </div>
        </NavLink>

        <NavLink to="/" className="game-card coming-soon">
          <p>문장잇기</p>
          <img src={ConversationIcon} alt="Conversation icon" />
          <div className="coming-soon-overlay">
            COMING
            <br />
            SOON
          </div>
        </NavLink>

        <NavLink to="/" className="game-card coming-soon">
          <p>발음 대결</p>
          <img src={MicrophoneIcon} alt="Microphone icon" />
          <div className="coming-soon-overlay">
            COMING
            <br />
            SOON
          </div>
        </NavLink>

        <NavLink to="/" className="game-card coming-soon">
          <p>스펠링 대결</p>
          <img src={FireIcon} alt="Document icon" />
          <div className="coming-soon-overlay">
            COMING
            <br />
            SOON
          </div>
        </NavLink>

        <NavLink to="/" className="game-card coming-soon">
          <p>동/반의어 대결</p>
          <img src={TimerIcon} alt="Link icon" />
          <div className="coming-soon-overlay">
            COMING
            <br />
            SOON
          </div>
        </NavLink>
      </div>

      <GameModal
        isOpen={isGameModalOpen}
        onClose={closeGameModal}
        fireIcon={FireIcon}
        questionImage={QuestionBox}
      />

      <CountDownModal
        isOpen={isCountDownModalOpen}
        onClose={closeCountDownModal}
        timerIcon={TimerIcon}
      />

      {/* Bottom navigation */}
      <Navbar />
    </div>
  );
}

export default Dashboard;
