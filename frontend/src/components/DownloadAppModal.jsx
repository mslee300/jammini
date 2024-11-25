import React, { useState, useEffect } from "react";
import "../styles/DownloadAppModal.css";
import AppMascot from "../assets/img/cta-mascot.png"; // Replace with your mascot image

const DownloadAppModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if modal has been shown before
    const isModalShown = localStorage.getItem("downloadModalShown");
    if (!isModalShown && !window.matchMedia("(display-mode: standalone)").matches) {
      setIsVisible(true);
      localStorage.setItem("downloadModalShown", "true");
    }
  }, []);

  const closeModal = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="download-app-modal-overlay">
      <div className="download-app-modal">
        <img src={AppMascot} alt="App Mascot" className="mascot-image" />
        <p className="modal-title">
          앱에서 지금까지의 성과를 저장하고<br /> 토익점수를 체계적으로 높여보세요!
        </p>
        <p className="modal-subtitle">
          맞춤형 대시보드 및 리뷰 커리큘럼 등
        </p>
        <button className="cta-button">잼미니 앱 다운받기</button>
        <button className="dismiss-button" onClick={closeModal}>
          괜찮아요. 모바일웹으로 볼게요.
        </button>
      </div>
    </div>
  );
};

export default DownloadAppModal;