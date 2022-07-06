import React from "react";
import { Routes, Route } from 'react-router-dom';
import JoinGame from "./pages/JoinGame";
import LandingPage from "./pages/LandingPage";
import StartNew from "./pages/StartNew";

function App() {
  return (
    <div className="min-h-screen flex flex-col text-white text-center justify-center items-center bg-main-background ">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/startNew" element={<StartNew/>} />
        <Route path="/JoinGame" element={<JoinGame/>} />
      </Routes>
    </div>
  );
}

export default App;
