import react from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Waiting from "./pages/Waiting";
import GamePage from "./pages/GamePage";
import GamePage2 from "./pages/GamePage2";
import ReviewPage from "./pages/ReviewPage";
import ReviewQuestionPage from "./pages/ReviewQuestionPage";
import ReviewQuestionPage2 from "./pages/ReviewQuestionPage2";
import ReviewQuestionPage3 from "./pages/ReviewQuestionPage3";
import Grading from "./pages/Grading";
import WinnerPage from "./pages/WinnerPage";
import LoserPage from "./pages/LoserPage";
import ProfilePage from "./pages/ProfilePage";
import ChooseExamPage from "./pages/ChooseExam";
import LoginOptionPage from "./pages/LoginOption";
import SocialLoginPage from "./pages/SocialLogin";
// import DownloadAppModal from "./components/DownloadAppModal";
import Assessment from "./pages/Assessment";
import AssessmentResult from "./pages/AssessmentResult";
import StreakPage from "./pages/StreakPage";
import CountDownGamePage from "./pages/CountDownGamePage";
import CountDownGamePage2 from "./pages/CountDownGamePage2";

import "./styles/App.css";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      {/* <DownloadAppModal /> */}
      <Routes>
        {/* <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        /> */}
        <Route path="/" element={<LoginOptionPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route
          path="/game/speedgame/:userId/session/:sessionId"
          element={<Waiting />}
        />
        <Route path="/gamepage" element={<GamePage />} />
        <Route path="/gamepage2" element={<GamePage2 />} />
        <Route path="/reviewpage" element={<ReviewPage />} />
        <Route path="/reviewquestionpage" element={<ReviewQuestionPage />} />
        <Route path="/reviewquestionpage2" element={<ReviewQuestionPage2 />} />
        <Route path="/reviewquestionpage3" element={<ReviewQuestionPage3 />} />
        <Route path="/grading" element={<Grading />} />
        <Route path="/winnerpage" element={<WinnerPage />} />
        <Route path="/loserpage" element={<LoserPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/chooseexam" element={<ChooseExamPage />} />
        <Route path="/loginoption" element={<LoginOptionPage />} />
        <Route path="/sociallogin" element={<SocialLoginPage />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/assessmentresult" element={<AssessmentResult />} />
        <Route path="/streak" element={<StreakPage />} />
        <Route path="/countdowngamepage" element={<CountDownGamePage />} />
        <Route path="/countdowngamepage2" element={<CountDownGamePage2 />} />
        <Route path="/game/speedgame/1/session/bc61c131-57c0-45ad-869a-9b651f83edf4" element={<GamePage2 />} />
        <Route path="/game/countdowngame/1/session/cd478cb5-23d0-4837-bc7f-dd2af33051c4" element={<CountDownGamePage2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
