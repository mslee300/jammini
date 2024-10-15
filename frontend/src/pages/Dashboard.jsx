import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Dashboard.css";
import Navbar from "../components/Navbar";
import GameModal from "../components/GameModal";
import FireIcon from "../assets/img/speedgame-fire.svg";
import QuestionBox from "../assets/img/question-box.svg"; // Example question box image
import MicrophoneIcon from "../assets/img/pronounciation-mic.svg";
import ConversationIcon from "../assets/img/wordcollab-balloon.svg";
import TimerIcon from "../assets/img/countdown-watch.svg";
import SpeechBubbleIcon from "../assets/img/wordrelay-document.svg";
import ChainIcon from "../assets/img/20riddles-link.svg";


function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="dashboard-container">
      <h1>
        Multiplayer<span>Singleplayer</span>
      </h1>
      
      <div className="game-grid">
        <div className="game-card" onClick={openModal}>
          <p>스피드게임</p>
          <img src={FireIcon} alt="Fire icon" />
        </div>

        <NavLink to="/" className="game-card">
          <p>카운트다운</p>
          <img src={TimerIcon} alt="Timer icon" />
        </NavLink>

        <NavLink to="/" className="game-card">
          <p>끝말잇기</p>
          <img src={SpeechBubbleIcon} alt="Speech bubble icon" />
        </NavLink>

        <NavLink to="/" className="game-card">
          <p>스무고개</p>
          <img src={ChainIcon} alt="Chain icon" />
        </NavLink>

        <NavLink to="/" className="game-card">
          <p>문장잇기</p>
          <img src={ConversationIcon} alt="Conversation icon" />
        </NavLink>

        <NavLink to="/" className="game-card">
          <p>발음 대결</p>
          <img src={MicrophoneIcon} alt="Microphone icon" />
        </NavLink>

        <NavLink to="/" className="game-card">
          <p>스펠링 대결</p>
          <img src={FireIcon} alt="Document icon" />
        </NavLink>

        <NavLink to="/" className="game-card">
          <p>동반의어 대결</p>
          <img src={MicrophoneIcon} alt="Link icon" />
        </NavLink>
      </div>

      {/* Game modal for Speed Game */}
      <GameModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        fireIcon={FireIcon}
        questionImage={QuestionBox}
      />

      {/* Bottom navigation */}
      <Navbar />
    </div>
  );
}

export default Dashboard;
