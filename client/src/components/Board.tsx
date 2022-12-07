import { useEffect, useState } from 'react';
import { socket } from '../App';
import { CheckWinner } from '../hooks/CheckWinner';
import { GamePlay } from '../pages/GameArea';

type BoardProps = {
	roomId: string | undefined;
	playerCheckType: string | undefined; // This is either startedGame OR joinGame
	// winner: string | undefined;
	// turn: string;
	// playersTurn: string | undefined;
	// isGameEnded: boolean;
	// board: string[];
	// totalMoves: number;
	// setWinner: (active: string) => void;
	// setIsTurn: (active: string) => void;
	// setIsPlayersTurn: (active: string) => void;
	// setIsGameEnded: (active: boolean) => void;
	// setIsBoard: (data: string[]) => void;
	// setIsTotalMoves: (active: number) => void;
	gamePlay: GamePlay;
	setGamePlay: React.Dispatch<React.SetStateAction<GamePlay>>;
};

const Board = ({
	roomId,
	playerCheckType,
	// winner,
	// turn,
	// playersTurn,
	// isGameEnded,
	// board,
	// totalMoves,
	gamePlay,
	setGamePlay,
}: // setWinner,
// setIsTurn,
// setIsPlayersTurn,
// setIsGameEnded,
// setIsBoard,
// setIsTotalMoves,
BoardProps) => {
	// This this the variable used to check to see which player one and using the useState to keep the data

	const boardArray: string[] = gamePlay.board;

	// TODO: might need to keep track of X and O on server side to player id in room

	const clicked = (event: React.MouseEvent<HTMLDivElement>) => {
		event.preventDefault();
		// Will stop the rest of the code from running when is true
		if (gamePlay.isGameEnded || gamePlay.playersTurn !== playerCheckType) {
			return;
		}

		// The number of the div data-square
		let squareValue = parseInt((event.target as HTMLDivElement).dataset.square ?? 'null');

		if (gamePlay.board[squareValue] === '') {
			let newArray: string[] = updateArray(squareValue, gamePlay.board, gamePlay.boardTurn);

			boardArray.splice(0, gamePlay.board.length, ...newArray);
			console.log(boardArray + ' inside if');

			(event.target as HTMLDivElement).textContent = gamePlay.boardTurn;

			// setIsTurn(isTurn == 'X' ? 'O' : 'X');

			// setIsTotalMoves(isTotalMoves + 1);
			// setIsPlayersTurn(playerCheck === 'host' ? 'joinGame' : 'host');
			//setIsBoard(boardArray);
			//let gameEnd = checkWinner(boardArray);

			const { gameEnd, winnerName } = CheckWinner({ board: gamePlay.board, totalMoves: gamePlay.totalMoves });

			setGamePlay({
				...gamePlay,
				isGameEnded: gameEnd,
				theWinner: winnerName,
				boardTurn: gamePlay.boardTurn == 'X' ? 'O' : 'X',
				totalMoves: +1,
				playersTurn: playerCheckType === 'host' ? 'joinGame' : 'host',
			});
			console.log(JSON.stringify(gamePlay) + ' game');
			//setWinner(checkWinnerValues.winnerName);
			//setIsGameEnded(checkWinnerValues.gameEnd);
			//console.log(winnerName + ' winner');
			// TODO: Instead of playerCheckType it should be player turn from gamePlay but will have to check in the server side also
			socket.emit('board-function', roomId, boardArray, gamePlay.boardTurn, gameEnd, playerCheckType, winnerName);
			// TODO: Maybe send winner name on display winner so making another socket
		}
	};

	// Game Isn't ending at right time
	// const checkWinner = (boardArray: Array<string>) => {
	// 	const lines = [
	// 		[0, 3, 6],
	// 		[1, 4, 7],
	// 		[2, 5, 8],
	// 		[0, 4, 8],
	// 		[2, 4, 6],
	// 		[0, 1, 2],
	// 		[3, 4, 5],
	// 		[6, 7, 8],
	// 	];

	// 	//let board = boardArray;
	// 	let result;
	// 	let gameEnd = false;

	// 	// SOMETHING not right here at all
	// 	for (let i = 0; i < lines.length; i++) {
	// 		if (boardArray[lines[i][0]] == boardArray[lines[i][1]] && boardArray[lines[i][1]] == boardArray[lines[i][2]]) {
	// 			result = boardArray[lines[i][0]];
	// 		}
	// 	}

	// 	if (isTotalMoves == 9) {
	// 		result = 'draw';
	// 	}

	// 	gameEnd = result === 'X' || result === 'O' || result === 'draw' ? true : false;

	// 	//let winnerName: string | undefined = '';
	// 	// need to make this less
	// 	if (result == 'X') {
	// 		setWinner('host');
	// 		// winnerName = 'startedGame';
	// 	} else if (result == 'O') {
	// 		setWinner('joinGame');
	// 		// winnerName = 'joinGame';
	// 	} else if (result == 'draw') {
	// 		setWinner('Draw');
	// 		//winnerName = 'Draw';
	// 	}

	// 	setIsGameEnded(gameEnd);
	// 	return gameEnd;
	// };

	// Used to update the board useState
	const updateArray = (number: number, board: Array<string>, turn: string) => {
		const arrayCopy = [...board];
		arrayCopy[number] = turn;

		return arrayCopy;
	};

	// Now this is running more than once// DON'T know what to do anymore...
	const sendChanges = () => {
		socket.on('board-turn', (array: string[], turn: string, gameEnded: boolean, playerTurn: string, winner: string) => {
			// setIsBoard(array);
			// setIsTurn(turn == 'X' ? 'O' : 'X');
			// setIsGameEnded(gameEnded);
			// setIsPlayersTurn(playerTurn);
			// setWinner(winner);
			setGamePlay({
				...gamePlay,
				board: array,
				boardTurn: turn == 'X' ? 'O' : 'X',
				isGameEnded: gameEnded,
				playersTurn: playerTurn,
				theWinner: winner,
			});
			console.log(winner + ' sending');
		});

		//checkWinner(boardArray);
	};

	// Renders to many times and win check is behind
	useEffect(() => {
		sendChanges();
		// socket.on('board-turn', (array: string[], turn: string, gameEnded: boolean, playerTurn: string) => {
		// 	setIsBoard(array);
		// 	setIsTurn(turn == 'X' ? 'O' : 'X');
		// 	setIsGameEnded(gameEnded);
		// 	setIsPlayersTurn(playerTurn);
		// 	// setWinner(winner);
		// });
		return () => {
			sendChanges();
		};
	}, [gamePlay.board]); // boardArray : Try this

	return (
		<div className='flex w-72 flex-wrap mt-6 mb-6 cursor-pointer' onClick={clicked}>
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
