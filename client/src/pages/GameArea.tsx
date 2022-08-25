import Board from '../components/Board';
import { useParams, Link } from 'react-router-dom';
import { socket } from '../App';
import DisplayRoomCode from '../components/DisplayRoomCode';
import { useState } from 'react';
import DisplayPlayerTurn from '../components/DisplayPlayerTurn';

// Add onclick for socket.io functions to make the rooms disconnect

// Must make check to see who started and joined game
// will do a check on server side to see if player join to get rid of DisplayRoomCode
// TODO: leave-room socket doesn't work without an error of memory leak

const GameArea = () => {
	const { id, type } = useParams();
	const [isPlayerJoined, setIsPlayerJoined] = useState(false);
	const [isTrackScore, setIsTrackScore] = useState(0); // Will be used for each different player might need to make an array or object on server side to keep track with the player id with score if rematch
	const [isWinner, setIsWinner] = useState('');
	const [isTurn, setIsTurn] = useState('X');
	const [isPlayersTurn, setIsPlayersTurn] = useState('startedGame');

	socket.emit('join-room', id);

	socket.on('joined', (players: boolean) => {
		setIsPlayerJoined(players);
	});

	// Will also do a check in here to see if host player leaves then other player must return to home page
	socket.on('left-room', (playerLeft: boolean) => {
		setIsPlayerJoined(playerLeft);
	});

	const leaveGame = (playerId: string | undefined, playerType: string | undefined) => {
		socket.emit('leave-room', playerId, playerType);
	};

	return (
		<div className='min-h-screen flex flex-col text-white text-center justify-center items-center bg-main-background'>
			{type !== 'joinGame' && !isPlayerJoined ? <DisplayRoomCode codeGenerated={id} /> : ''}
			{isPlayerJoined ? <DisplayPlayerTurn player={type} playerTurn={isPlayersTurn} /> : ''}
			<div className='flex flex-col justify-center items-center h-full w-full'>
				<h1 className='text-5xl'></h1>
				<Board
					roomId={id}
					playerCheck={type}
					setWinner={setIsWinner}
					isTurn={isTurn}
					setIsTurn={setIsTurn}
					isPlayersTurn={isPlayersTurn}
					setIsPlayersTurn={setIsPlayersTurn}
				/>
				<h2 className='border-b-2 border-b-white w-72 text-2xl'>Score Board</h2>
				<div className='flex justify-center text-xl w-72'>
					<div className='flex capitalize flex-col p-2 px-4 basis-32 overflow-hidden'>
						{/* Need to do an emit with socket.io for player display with you and player 1 ?? Will probably need to do something on the server side for this */}
						<p>You</p>
						<p>0</p>
					</div>
					<div className='border-l-2 border-l-white basis-0.5 '></div>
					<div className='flex capitalize flex-col p-2 px-4 basis-32 overflow-hidden'>
						<p>{type === 'startedGame' ? 'Player 2' : 'Player 1'}</p>
						<p>0</p>
					</div>
				</div>
				<Link to='/' className='button-style absolute bottom-16 left-10 button-color-one w-28' onClick={() => leaveGame(id, type)}>
					Rage Quit
				</Link>
			</div>
		</div>
	);
};

export default GameArea;
