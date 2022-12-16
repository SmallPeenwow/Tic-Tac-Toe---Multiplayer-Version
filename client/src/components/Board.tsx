import { useEffect } from 'react';
import { socket } from '../App';
import { CheckWinner } from '../hooks/CheckWinner';
import { GamePlay } from '../pages/GameArea';

type BoardProps = {
	roomId: string | undefined;
	playerCheckType: string | undefined; // This is either startedGame OR joinGame
	gamePlay: GamePlay;
	setGamePlay: React.Dispatch<React.SetStateAction<GamePlay>>;
};

const Board = ({ roomId, playerCheckType, gamePlay, setGamePlay }: BoardProps) => {
	const boardArray: string[] = gamePlay.board;

	const clicked = (event: React.MouseEvent<HTMLDivElement>) => {
		event.preventDefault();

		// Will stop the rest of the code from running when is true
		if (gamePlay.isGameEnded || gamePlay.playersTurn !== playerCheckType) {
			return;
		}

		// The number of the div data-square
		let squareValue = parseInt((event.target as HTMLDivElement).dataset.square ?? '');

		if (gamePlay.board[squareValue] === '') {
			let newArray: string[] = updateArray(squareValue, gamePlay.board, gamePlay.boardTurn);

			boardArray.splice(0, gamePlay.board.length, ...newArray);

			(event.target as HTMLDivElement).textContent = gamePlay.boardTurn;

			const { gameEnd, winnerName } = CheckWinner({ board: gamePlay.board, totalMoves: gamePlay.totalMoves });

			setGamePlay({
				...gamePlay,
				isGameEnded: gameEnd,
				theWinner: winnerName,
				boardTurn: gamePlay.boardTurn == 'X' ? 'O' : 'X',
				totalMoves: gamePlay.totalMoves++,
				playersTurn: playerCheckType === 'host' ? 'joinGame' : 'host',
			});
			socket.emit('board-function', roomId, boardArray, gamePlay.boardTurn, gameEnd, playerCheckType, winnerName);
		}
	};

	// Used to update the board useState
	const updateArray = (number: number, board: Array<string>, turn: string) => {
		const arrayCopy = [...board];
		arrayCopy[number] = turn;

		return arrayCopy;
	};

	// This keeps increasing when ran
	const sendChanges = () => {
		socket.on('board-turn', (array: string[], turn: string, gameEnded: boolean, playerTurn: string, winner: string) => {
			setGamePlay({
				...gamePlay,
				board: array,
				boardTurn: turn == 'X' ? 'O' : 'X',
				isGameEnded: gameEnded,
				playersTurn: playerTurn,
				totalMoves: gamePlay.totalMoves++,
				theWinner: winner,
			});
			console.log(winner + ' sending'); // Gets called more times when board value changed
		});
	};

	useEffect(() => {
		sendChanges();

		return () => {
			sendChanges();
		};
	}, [gamePlay.board]);

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
