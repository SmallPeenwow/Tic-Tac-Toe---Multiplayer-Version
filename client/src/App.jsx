import React from "react";
import { Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col text-white text-center justify-center items-center bg-main-background ">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </div>
  );
}

export default App;
