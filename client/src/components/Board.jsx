import React, { useState } from 'react'


const Board = () => {
  
  const [setTurn, isSetTurn] = useState('X');

  const [setGameEnded, isSetGameEnded] = useState(false);

  const clicked = (event) => {
    event.target.innerText = setTurn;
    isSetTurn(setTurn == 'X' ? 'O' : 'X');
  };

  return (
    <div className="flex w-72 flex-wrap mt-6 mb-6" onClick={(e) => clicked(e)}>
      <div className="square border-r-2 border-b-2"></div>
      <div className="square border-b-2 border-r-2"></div>
      <div className="square border-b-2"></div>
      <div className="square border-b-2 border-r-2"></div>
      <div className="square border-b-2 border-r-2"></div>
      <div className="square border-b-2"></div>
      <div className="square border-r-2"></div>
      <div className="square border-r-2"></div>
      <div className="square"></div>
    </div>
  )
}

export default Board