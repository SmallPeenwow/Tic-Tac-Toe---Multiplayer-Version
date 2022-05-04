import React, { useState } from 'react'


const Board = () => {
  
  const [state, setState] = useState({ 
    turn: 'X', 
    gameEnded: false, 
    board: Array(9).fill('')
  });

  const clicked = (event) => {

    if(state.board[event.target.dataset.square] == ''){

      state.board[event.target.dataset.square] = state.turn;
  
      event.target.innerText = state.turn;
      setState({
        turn: state.turn == 'X' ? 'O' : 'X',
        board: state.board,
      })
      
    }

    console.log(state.board);
  };

  return (
    <div className="flex w-72 flex-wrap mt-6 mb-6 cursor-pointer" onClick={(e) => clicked(e)}>
      <div className="square border-r-2 border-b-2" data-square="0"></div>
      <div className="square border-b-2 border-r-2" data-square="1"></div>
      <div className="square border-b-2" data-square="2"></div>
      <div className="square border-b-2 border-r-2" data-square="3"></div>
      <div className="square border-b-2 border-r-2" data-square="4"></div>
      <div className="square border-b-2" data-square="5"></div>
      <div className="square border-r-2" data-square="6"></div>
      <div className="square border-r-2" data-square="7"></div>
      <div className="square" data-square="8"></div>
    </div>
  )
}

export default Board