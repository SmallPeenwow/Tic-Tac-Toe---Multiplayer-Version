import Board from '../components/Board';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { socket } from '../App';
import DisplayRoomCode from '../components/DisplayRoomCode';
import { useEffect, useState } from 'react';
import DisplayPlayerTurn from '../components/DisplayPlayerTurn';
import PlayAgain from '../components/PlayAgain';

// Add onclick for socket.io functions to make the rooms disconnect

// TODO: leave-room socket doesn't work without an error of memory leak
// TODO: Make text on left empty until player joins
// TODO: fix socket issues with leaving room and checking room users
// TODO: For host when other player leaves must default values

export type GamePlay = {
	theWinner: string;
	boardTurn: string;
	isGameEnded: boolean;
	playersTurn: string;
	board: string[];
	totalMoves: number;
	trackScore: number;
};

enum Player {
	winner = '',
	host = 'host',
}

enum BoardValue {
	value = 'X',
}

const GameArea = () => {
	const { id, type } = useParams();
	const [gamePlay, setGamePlay] = useState<GamePlay>({
		theWinner: Player.winner,
		boardTurn: BoardValue.value,
		isGameEnded: false,
		playersTurn: Player.host,
		board: Array(9).fill(''),
		totalMoves: 1,
		trackScore: 0,
	});
	const [isPlayerJoined, setIsPlayerJoined] = useState(false);
	const [playerTwoTrackScore, setPlayerTwoTrackScore] = useState(0);
	const navigate = useNavigate();

	if (!isPlayerJoined) {
		socket.emit('join-room', id);

		socket.on('joined', (players: boolean) => {
			setIsPlayerJoined(players);
		});
	}

	if (gamePlay.isGameEnded) {
		socket.emit('send-score', gamePlay.trackScore, id);

		socket.on('score-sent', (score: number) => {
			setPlayerTwoTrackScore(score);
		});
	}

	const leaveGame = (roomId: string | undefined, playerType: string | undefined) => {
		socket.emit('leave-room', roomId, playerType);
	};

	const LeftRoomCheck = (playerLeft: boolean, player: string) => {
		setIsPlayerJoined(playerLeft);

		if (player === 'host') {
			navigate('/');
		} else {
			setGamePlay({
				...gamePlay,
				theWinner: '',
				boardTurn: 'X',
				isGameEnded: false,
				playersTurn: 'host',
				board: Array(9).fill(''),
				totalMoves: 1,
			});
		}
	};

	socket.on('left-room', (playerLeft: boolean, player: string) => {
		LeftRoomCheck(playerLeft, player);
	});

	return (
		<div className='min-h-screen flex flex-col text-white text-center justify-center items-center bg-main-background'>
			{type !== 'joinGame' && !isPlayerJoined && <DisplayRoomCode codeGenerated={id} />}
			{isPlayerJoined && <DisplayPlayerTurn player={type} gamePlay={gamePlay} />}
			<div className='flex flex-col justify-center items-center h-full w-full'>
				<h1 className='text-5xl'></h1>
				<Board roomId={id} playerCheckType={type} gamePlay={gamePlay} setGamePlay={setGamePlay} />
				<h2 className='border-b-2 border-b-white w-72 text-2xl'>Score Board</h2>
				<div className='flex justify-center text-xl w-72'>
					<div className='flex capitalize flex-col p-2 px-4 basis-32 overflow-hidden'>
						<p>You</p>
						<p>{gamePlay.trackScore}</p>
					</div>
					<div className='border-l-2 border-l-white basis-0.5 '></div>
					<div className='flex capitalize flex-col p-2 px-4 basis-32 overflow-hidden'>
						<p>{type === 'host' ? 'Player 2' : 'Player 1'}</p>
						<p>{playerTwoTrackScore}</p>
					</div>
				</div>
				<Link
					to='/'
					className='button-style absolute bottom-16 left-10 button-color-one w-28 z-30'
					onClick={() => leaveGame(id, type)}
				>
					Rage Quit
				</Link>
			</div>
			<PlayAgain gamePlay={gamePlay} roomId={id} playerIdentifier={type} setGamePlay={setGamePlay} />
		</div>
	);
};

export default GameArea;
