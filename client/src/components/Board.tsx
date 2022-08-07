//import React, { Component } from 'react'
import { useState } from 'react';

const Board = () => {
	const [isWinner, setIsWinner] = useState('');
	const [isTurn, setIsTurn] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isBoard, setIsBoard] = useState(Array(9).fill(''));
	const [isTotalMoves, setIsTotalMoves] = useState(0);

	const clicked = async (event: React.MouseEvent<HTMLDivElement>) => {
		console.log(isGameEnded);
		if (isGameEnded) {
			return;
		}

		// The number of the div data-square
		const squareValue = parseInt((event.target as HTMLDivElement).dataset.square ?? 'null');

		if (isBoard[squareValue] === '') {
			await updateArray(squareValue);
			// setIsBoard((items) => {
			// 	const index = isBoard.length;
			// 	return [...items.slice(0, index), squareValue, ...items.slice(index)];
			// });

			(event.target as HTMLDivElement).innerText = isTurn;

			setIsTurn(isTurn == 'X' ? 'O' : 'X');

			setIsTotalMoves(isTotalMoves + 1);
		}

		let result = await checkWinner();
		console.log(result);

		// need to make this less
		if (result == 'X') {
			setIsGameEnded(true);
			setIsWinner('X');
		} else if (result == 'O') {
			setIsGameEnded(true);
			setIsWinner('O');
		} else if (result == 'draw') {
			setIsGameEnded(true);
			setIsWinner('draw');
		}
	};

	const checkWinner = async () => {
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

		let board = isBoard;
		console.log('board', board);

		for (let i = 0; i < lines.length; i++) {
			if (board[lines[i][0]] == board[lines[i][1]] && board[lines[i][1]] == board[lines[i][2]]) {
				console.log('check', board[lines[i][0]]);
				return board[lines[i][0]];
			}
		}

		if (isTotalMoves == 9) {
			return 'draw';
		}
	};

	// put into hooks folder later
	const updateArray = async (number: number) => {
		const arrayCopy = [...isBoard];
		arrayCopy[number] = isTurn;
		setIsBoard(arrayCopy);
	};

	return (
		<div className='flex w-72 flex-wrap mt-6 mb-6 cursor-pointer' onClick={(e) => clicked(e)}>
			<div className='square border-r-2 border-b-2' data-square='0'></div>
			<div className='square border-b-2 border-r-2' data-square='1'></div>
			<div className='square border-b-2' data-square='2'></div>
			<div className='square border-b-2 border-r-2' data-square='3'></div>
			<div className='square border-b-2 border-r-2' data-square='4'></div>
			<div className='square border-b-2' data-square='5'></div>
			<div className='square border-r-2' data-square='6'></div>
			<div className='square border-r-2' data-square='7'></div>
			<div className='square' data-square='8'></div>
		</div>
	);
};

// class board extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			winner: undefined,
// 		};
// 		this.gameState = {
// 			turn: 'X',
// 			gameEnded: false,
// 			board: Array(9).fill(''),
// 			totalMoves: 0,
// 		};
// 	}

// 	clicked(event) {
// 		if (this.gameState.gameEnded) {
// 			return;
// 		}

// 		if (this.gameState.board[event.target.dataset.square] == '') {
// 			this.gameState.board[event.target.dataset.square] = this.gameState.turn;

// 			event.target.innerText = this.gameState.turn;

// 			this.gameState.turn = this.gameState.turn == 'X' ? 'O' : 'X';

// 			this.gameState.totalMoves++;
// 		}

// 		let result = this.checkWinner();
// 		// need to make this less
// 		if (result == 'X') {
// 			this.gameState.gameEnded = true;
// 			this.setState({
// 				gameEnded: true,
// 				winner: 'X',
// 			});
// 		} else if (result == 'O') {
// 			this.gameState.gameEnded = true;
// 			this.setState({
// 				gameEnded: true,
// 				winner: 'O',
// 			});
// 		} else if (result == 'draw') {
// 			this.gameState.gameEnded = true;
// 			this.setState({
// 				gameEnded: true,
// 				winner: 'draw',
// 			});
// 		}
// 	}

// 	checkWinner() {
// 		let lines = [
// 			[0, 3, 6],
// 			[1, 4, 7],
// 			[2, 5, 8],
// 			[0, 4, 8],
// 			[2, 4, 6],
// 			[0, 1, 2],
// 			[3, 4, 5],
// 			[6, 7, 8],
// 		];

// 		let board = this.gameState.board;

// 		for (let i = 0; i < lines.length; i++) {
// 			if (board[lines[i][0]] == board[lines[i][1]] && board[lines[i][1]] == board[lines[i][2]]) {
// 				return board[lines[i][0]];
// 			}
// 		}

// 		if (this.gameState.totalMoves == 9) {
// 			return 'draw';
// 		}
// 	}

// 	render() {
// 		return (
// 			<div className='flex w-72 flex-wrap mt-6 mb-6 cursor-pointer' onClick={(e) => this.clicked(e)}>
// 				<div className='square border-r-2 border-b-2' data-square='0'></div>
// 				<div className='square border-b-2 border-r-2' data-square='1'></div>
// 				<div className='square border-b-2' data-square='2'></div>
// 				<div className='square border-b-2 border-r-2' data-square='3'></div>
// 				<div className='square border-b-2 border-r-2' data-square='4'></div>
// 				<div className='square border-b-2' data-square='5'></div>
// 				<div className='square border-r-2' data-square='6'></div>
// 				<div className='square border-r-2' data-square='7'></div>
// 				<div className='square' data-square='8'></div>
// 			</div>
// 		);
// 	}
// }

export default Board;
