import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col text-white text-center justify-center items-center bg-main-background ">
      <header className="text-3xl font-medium mb-2">
        <h3>Tic Tac Toe</h3>  
      </header>
      <button className="w-40 flex justify-center bg-start-button rounded shadow-black font-medium shadow py-2 px-4 m-2 hover:opacity-75">Start New</button>
      <button className="w-40 flex justify-center text-sky-600 bg-join-button font-medium rounded shadow-black shadow py-2 px-4 mt-6 hover:opacity-75">Join Game</button>
    </div>
  );
}

export default App;
