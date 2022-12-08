import Board from '../components/Board';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { socket } from '../App';
import DisplayRoomCode from '../components/DisplayRoomCode';
import { useEffect, useState } from 'react';
import DisplayPlayerTurn from '../components/DisplayPlayerTurn';
import PlayAgain from '../components/PlayAgain';

// Add onclick for socket.io functions to make the rooms disconnect

// Must make check to see who started and joined game
// will do a check on server side to see if player join to get rid of DisplayRoomCode
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
	});
	const [isPlayerJoined, setIsPlayerJoined] = useState(false); // TODO: check how value is used
	const [trackScore, setTrackScore] = useState(0); // Will be used for each different player might need to make an array or object on server side to keep track with the player id with score if rematch
	const navigate = useNavigate();

	// Stuff here being run multiple times

	if (!isPlayerJoined) {
		socket.emit('join-room', id);
	}

	const leaveGame = (roomId: string | undefined, playerType: string | undefined) => {
		socket.emit('leave-room', roomId, playerType);
	};

	socket.on('joined', (players: boolean) => {
		setIsPlayerJoined(players);
		console.log('peen');
	});

	// End of stuff multiple times

	const LeftRoomCheck = (playerLeft: boolean, player: string) => {
		setIsPlayerJoined(playerLeft);
		if (player === 'host') {
			navigate('/');
		}
	};

	// Need clean up function
	useEffect(() => {
		socket.on('left-room', (playerLeft: boolean, player: string) => {
			LeftRoomCheck(playerLeft, player);
		});

		return () => {
			LeftRoomCheck;
		};
	}, [isPlayerJoined]);

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
						{/* Need to do an emit with socket.io for player display with you and player 1 ?? Will probably need to do something on the server side for this */}
						<p>You</p>
						<p>0</p>
					</div>
					<div className='border-l-2 border-l-white basis-0.5 '></div>
					<div className='flex capitalize flex-col p-2 px-4 basis-32 overflow-hidden'>
						<p>{type === 'host' ? 'Player 2' : 'Player 1'}</p>
						<p>0</p>
					</div>
				</div>
				<Link to='/' className='button-style absolute bottom-16 left-10 button-color-one w-28' onClick={() => leaveGame(id, type)}>
					Rage Quit
				</Link>
			</div>
			<PlayAgain isGameEnded={gamePlay.isGameEnded} gamePlay={gamePlay} setGamePlay={setGamePlay} />
		</div>
	);
};

export default GameArea;
