import React from "react";
import "../styles/Dashboard.css";

// Importing SVG images
import FireIcon from "../assets/img/speedgame-fire.svg";
import MicrophoneIcon from "../assets/img/pronounciation-mic.svg";
import ConversationIcon from "../assets/img/wordcollab-balloon.svg";
import TimerIcon from "../assets/img/countdown-watch.svg";
import SpeechBubbleIcon from "../assets/img/wordrelay-document.svg";
import ChainIcon from "../assets/img/20riddles-link.svg";
import DocumentIcon from "../assets/img/wordrelay-document.svg";
import LinkIcon from "../assets/img/20riddles-link.svg";

// Bottom nav icons
import HomeIcon from "../assets/img/home-nav.svg";
import PlayIcon from "../assets/img/play-nav.svg";
import SettingsIcon from "../assets/img/setting-nav.svg";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>1:1 미니게임</h1>
      <div className="game-grid">
        <div className="game-card">
          <p>스피드게임</p>
          <img src={FireIcon} alt="Fire icon" />
        </div>
        <div className="game-card">
          <p>발음 대결</p>
          <img src={MicrophoneIcon} alt="Microphone icon" />
        </div>
        <div className="game-card">
          <p>문장잇기</p>
          <img src={ConversationIcon} alt="Conversation icon" />
        </div>
        <div className="game-card">
          <p>카운트다운</p>
          <img src={TimerIcon} alt="Timer icon" />
        </div>
        <div className="game-card">
          <p>끝말잇기</p>
          <img src={SpeechBubbleIcon} alt="Speech bubble icon" />
        </div>
        <div className="game-card">
          <p>스무고개</p>
          <img src={ChainIcon} alt="Chain icon" />
        </div>
        <div className="game-card">
          <p>스펠링 대결</p>
          <img src={FireIcon} alt="Document icon" />
        </div>
        <div className="game-card">
          <p>동반의어 대결</p>
          <img src={MicrophoneIcon} alt="Link icon" />
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="bottom-nav">
        <img src={HomeIcon} alt="Home icon" />
        <img src={PlayIcon} alt="Game controller icon" />
        <img src={SettingsIcon} alt="Settings icon" />
      </div>
    </div>
  );
}

export default Dashboard;
