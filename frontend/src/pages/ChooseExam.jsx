import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/ChooseExam.css";

// Import exam images
import ToeicImage from "../assets/img/toeic.png";
import ToeflImage from "../assets/img/toefl.png";
import OpicImage from "../assets/img/opic.png";
import TepsImage from "../assets/img/teps.png";
import GTelpImage from "../assets/img/gtelp.png";
import FlexImage from "../assets/img/flex.png";

function ChooseExam() {
  const exams = [
    { img: ToeicImage, title: "TOEIC", description: "비즈니스, 취업, 실용 영어", link: "/sociallogin" },
    { img: ToeflImage, title: "TOEFL", description: "학술, 유학, 학문적 영어", link: "/sociallogin" },
    { img: OpicImage, title: "OPIc", description: "영어 말하기, 회화, 인터뷰", link: "/sociallogin" },
    { img: TepsImage, title: "TEPS", description: "종합 영어", link: "/teps" },
    { img: GTelpImage, title: "G-TELP", description: "실용, 공무원 영어", link: "/gtelp" },
    { img: FlexImage, title: "FLEX", description: "영어 능력 평가", link: "/flex" },
  ];

  return (
    <div className="exams-container">
      <div className="progress-bar">
        <div className="progress-fill-chooseexam"></div>
      </div>
      <h1 className="title">제가 배우고 싶은건...</h1>
      <div className="exams-grid">
        {exams.map((exam, index) => (
          <NavLink to={exam.link} key={index} className="exam-card-link">
            <div className="exam-card">
              <img src={exam.img} alt={exam.title} className="exam-image" />
              <h2 className="exam-title">{exam.title}</h2>
              <p className="exam-description">{exam.description}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default ChooseExam;
