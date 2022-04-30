import React, { useState } from 'react'
import PlayerName from './PlayerName';

const LandingPage = () => {
    const [isDisplay, setIsDisplay] = useState(false);    

    const toggle = () => {
        setIsDisplay(!isDisplay);
    };

  return (
    <>
        <PlayerName toggle={toggle} isDisplay={isDisplay}/>
        <div className={isDisplay ? 'hidden' : 'visible'}>
            <header className="text-4xl font-medium mb-2">
            <h3>Tic Tac Toe</h3>  
            </header>
            <button onClick={toggle} className="button-style button-color-one mt-4 w-52">Start New</button>
            <button className="button-style button-color-two mt-6 w-52">Join Game</button>
        </div>
    </>
  )
}

export default LandingPage