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
import ReviewPage from "./pages/ReviewPage";
import ReviewQuestionPage from "./pages/ReviewQuestionPage";
import Grading from "./pages/Grading";
import WinnerPage from "./pages/WinnerPage";
import LoserPage from "./pages/LoserPage";
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
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        {/* <Route path="/game/speedgame/:userId/session:sessionId" element={<Waiting />} /> */}
        <Route
          path="/game/speedgame/:userId/session/:sessionId"
          element={<Waiting />}
        />
        <Route path="/gamepage" element={<GamePage />} />
        <Route path="/reviewpage" element={<ReviewPage />} />
        <Route path="/reviewquestionpage" element={<ReviewQuestionPage />} />
        <Route path="/grading" element={<Grading />} />
        <Route path="/winnerpage" element={<WinnerPage />} />
        <Route path="/loserpage" element={<LoserPage />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
