//import React, { Component } from 'react'
import { useEffect, useState } from 'react';
import { socket } from '../App';

type BoardProps = {
	roomId: string | undefined;
};

const Board = ({ roomId }: BoardProps) => {
	const [isWinner, setIsWinner] = useState('');
	const [isTurn, setIsTurn] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isBoard, setIsBoard] = useState(Array(9).fill(''));
	const [isTotalMoves, setIsTotalMoves] = useState(1);

	// This this the variable used to check to see which player one and using the useState to keep the data
	const boardArray: Array<string> = isBoard;

	// socket.on('board-turn', (isTurn: string, boardArray: Array<string>) => {});
	// socket.on('board-turn', async (event: React.MouseEvent<HTMLDivElement>) => {
	// 	await clicked(event);
	// });
	// ?? still will useState

	const clicked = async (event: React.MouseEvent<HTMLDivElement>) => {
		// Will stop the rest of the code from running when is true
		if (isGameEnded) {
			return;
		}

		// The number of the div data-square
		let squareValue = parseInt((event.target as HTMLDivElement).dataset.square ?? 'null');

		if (isBoard[squareValue] === '') {
			let newArray: Array<string> = await updateArray(squareValue, isBoard);

			//setIsBoard(newArray); // This doesn't render on the first click
			console.log('set', newArray);
			boardArray.splice(0, isBoard.length, ...newArray);

			(event.target as HTMLDivElement).textContent = isTurn;

			setIsTurn(isTurn == 'X' ? 'O' : 'X');

			setIsTotalMoves(isTotalMoves + 1);
		}

		let result = await checkWinner(boardArray);

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

		socket.emit('board-function', roomId, boardArray, isTurn);
	};

	const checkWinner = async (boardArray: Array<string>) => {
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

		let board = boardArray;

		for (let i = 0; i < lines.length; i++) {
			if (board[lines[i][0]] == board[lines[i][1]] && board[lines[i][1]] == board[lines[i][2]]) {
				return board[lines[i][0]];
			}
		}

		if (isTotalMoves == 9) {
			return 'draw';
		}
	};

	// Used to update the board useState
	const updateArray = async (number: number, board: Array<string>) => {
		const arrayCopy = [...board];
		arrayCopy[number] = isTurn;

		return arrayCopy;
	};

	// Renders to many times and win check is behind
	useEffect(() => {
		socket.on('board-turn', (array: string[], turn: string) => {
			console.log('on', array);
			setIsBoard(array);
			setIsTurn(turn == 'X' ? 'O' : 'X');
		});
	}, [isBoard]);

	return (
		<div className='flex w-72 flex-wrap mt-6 mb-6 cursor-pointer' onClick={(e) => clicked(e)}>
			<div className='square border-r-2 border-b-2' data-square='0'>
				{boardArray[0]}
			</div>
			<div className='square border-b-2 border-r-2' data-square='1'>
				{boardArray[1]}
			</div>
			<div className='square border-b-2' data-square='2'>
				{boardArray[2]}
			</div>
			<div className='square border-b-2 border-r-2' data-square='3'>
				{boardArray[3]}
			</div>
			<div className='square border-b-2 border-r-2' data-square='4'>
				{boardArray[4]}
			</div>
			<div className='square border-b-2' data-square='5'>
				{boardArray[5]}
			</div>
			<div className='square border-r-2' data-square='6'>
				{boardArray[6]}
			</div>
			<div className='square border-r-2' data-square='7'>
				{boardArray[7]}
			</div>
			<div className='square' data-square='8'>
				{boardArray[8]}
			</div>
		</div>
	);
};

export default Board;
