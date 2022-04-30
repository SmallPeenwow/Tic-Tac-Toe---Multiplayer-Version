import React, { useState } from 'react'
import PlayerName from './PlayerName';

const LandingPage = () => {
    const [isDisplay, setIsDisplay] = useState(0);    

  return (
    <>
        <PlayerName isDisplay={isDisplay} setIsDisplay={setIsDisplay}/>
        <div className={isDisplay != 0 ? 'hidden' : 'visible'}>
            <header className="text-4xl font-medium mb-6">
            <h3>Tic Tac Toe</h3>  
            </header>
            <button onClick={() => setIsDisplay(1)} className="button-style button-color-one mt-4 w-52">Start New</button>
            <button onClick={() => setIsDisplay(2)} className="button-style button-color-two mt-6 w-52">Join Game</button>
        </div>
    </>
  )
}

export default LandingPage