import React from "react";
import { Routes, Route } from 'react-router-dom';
import GameArea from "./pages/GameArea";
import JoinGame from "./pages/JoinGame";
import LandingPage from "./pages/LandingPage";
import StartNew from "./pages/StartNew";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/startNew" element={<StartNew/>} />
        <Route path="/JoinGame" element={<JoinGame/>} />
        {/* <Route path="/gameArea" element={<GameArea/>} /> */}
      </Routes>
    </>
  );
}

export default App;
