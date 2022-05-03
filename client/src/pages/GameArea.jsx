import React from 'react'
import Board from '../components/Board'

const GameArea = ({isDisplay, isPlayerName, resetInputField, landingPageDisplay}) => {
  return (
    <div className={isDisplay == 3 ? "flex flex-col justify-center h-full" : "hidden"}>
        <h1 className="text-5xl">{isPlayerName}</h1>
        <Board />
        <h2 className="border-b-2 border-b-white w-72 text-2xl">Score Board</h2>
        <div className="flex justify-center text-xl">
            <div className="flex flex-col p-2 px-4 w-28 overflow-hidden">
                <p>You</p>
                <p>0</p>
            </div>
            <div className="border-l-2 border-l-white"></div>
            <div className="flex flex-col p-2 px-4 w-28 overflow-hidden">
                <p>Player2</p>
                <p>0</p>
            </div>
        </div>
        <button onClick={() =>{
            resetInputField();
            landingPageDisplay();
            }} 
            className="button-style absolute bottom-16 left-10 button-color-one w-28">Rage Quit
        </button>
    </div>
  )
}

export default GameArea