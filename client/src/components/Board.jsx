import React, { useState } from 'react'


const Board = () => {
  
  const [state, setState] = useState({ 
    turn: 'X', 
    gameEnded: false, 
    board: Array(9).fill(''),
    totalMoves: 0,
    winner: undefined,
  });

  const clicked = (event) => {

    let num = event.target.dataset.square;
    console.log(num);
    //console.log(state.board[num])
    //console.log(state.board);

    if(state.board[event.target.dataset.square] == ''){

      state.board[event.target.dataset.square] = state.turn;
      
      event.target.innerText = state.turn;
      setState({
        turn: state.turn == 'X' ? 'O' : 'X',
        board: state.board,
        totalMoves: state.totalMoves++,
      })
      
    }
    
    let result = checkWinner();

    if(result == 'X'){
      setState({
        gameEnded: true,
        winner: 'X',
      })
    } else {
      setState({
        gameEnded: true,
        winner: 'O',
      })
    }

  };

  const checkWinner = () => {
    let lines = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];

    for(let i = 0; i < lines.length; i++){
      if(state.board[lines[i][0]] == state.board[lines[i][1]] && state.board[lines[i][1]] == state.board[lines[i][2]]) {
        return state.board[lines[i][0]];
      }
    }
  }

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