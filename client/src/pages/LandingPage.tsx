import React, { useState } from 'react'
import GameArea from './GameArea';
import PlayerName from './PlayerName';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const [isDisplay, setIsDisplay] = useState(0);  
    
    const [isPlayerName, setIsPlayerName] = useState("");

    const [isRoomCode, setIsRoomCode] = useState("");

    const setName = (event:any) => {
      setIsPlayerName(event.target.value);
    };

    const setRoomId = (event:any) => {
      setIsRoomCode(event.target.value);
    }

    const resetInputField  = () => {
      setIsPlayerName("");
      setIsRoomCode("");
    };

    const landingPageDisplay = () => {
      setIsDisplay(0);
    }

  return (
    <div className="min-h-screen flex flex-col text-white text-center justify-center items-center bg-main-background">
      {/* <PlayerName isDisplay={isDisplay} setIsDisplay={setIsDisplay} setName={setName} resetInputField ={resetInputField} landingPageDisplay={landingPageDisplay} isPlayerName={isPlayerName} setRoomId={setRoomId} isRoomCode={isRoomCode}/>
      <GameArea isDisplay={isDisplay} isPlayerName={isPlayerName} resetInputField ={resetInputField} landingPageDisplay={landingPageDisplay} />  */}
      <div className={isDisplay != 0 ? 'hidden' : 'visible'}>
        <header className="text-4xl font-medium mb-6">
        <h3>Tic Tac Toe</h3>  
        </header>
        {/* <button onClick={() => setIsDisplay(1)} className="button-style button-color-one mt-4 w-52">Start New</button>
        <button onClick={() => setIsDisplay(2)} className="button-style button-color-two mt-6 w-52">Join Game</button> */}
        <Link to="/startNew" className="button-style button-color-one mt-4 w-52">Start New</Link>
        <Link to="/joinGame" className="button-style button-color-two mt-6 w-52">Join Game</Link>
      </div>
    </div>
  )
}

export default LandingPage