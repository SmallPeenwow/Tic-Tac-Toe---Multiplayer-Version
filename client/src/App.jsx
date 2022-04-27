import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col text-white text-center justify-center bg-main-background ">
      <header>
        <h3 className="text-3xl font-medium mb-2">Tic Tac Toe</h3>  
      </header>
      <button>Start New</button>
      <button>Join Game</button>
    </div>
  );
}

export default App;
