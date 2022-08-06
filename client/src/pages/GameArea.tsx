import Board from '../components/Board';
import { useParams, Link } from 'react-router-dom';
import { socket } from '../App';
import DisplayRoomCode from '../components/DisplayRoomCode';
import { useState } from 'react';

// Add onclick for socket.io functions to make the rooms disconnect

// Must make check to see who started and joined game
// will do a check on server side to see if player join to get rid of DisplayRoomCode

const GameArea = () => {
	const { id, type } = useParams();
	const [isPlayerJoined, setIsPlayerJoined] = useState(false);
	const [isTrackScore, setIsTrackScore] = useState(0); // Will be used for each different player might need to make an array or object on server side to keep track with the player id with score if rematch

	socket.emit('join-room', id);

	socket.on('joined', (players: boolean) => {
		setIsPlayerJoined(players);
	});

	socket.on('left-room', (playerLeft: boolean) => {
		setIsPlayerJoined(playerLeft);
	});

	return (
		<div className='min-h-screen flex flex-col text-white text-center justify-center items-center bg-main-background'>
			{type !== 'joinGame' && !isPlayerJoined ? <DisplayRoomCode codeGenerated={id} /> : ''}
			<div className='flex flex-col justify-center items-center h-full w-full'>
				<h1 className='text-5xl'></h1>
				<Board />
				<h2 className='border-b-2 border-b-white w-72 text-2xl'>Score Board</h2>
				<div className='flex justify-center text-xl'>
					<div className='flex capitalize flex-col p-2 px-4 w-28 overflow-hidden'>
						{/* Need to do an emit with socket.io for player display with you and player 1 */}
						<p>you</p>
						<p>0</p>
					</div>
					<div className='border-l-2 border-l-white'></div>
					<div className='flex capitalize flex-col p-2 px-4 w-28 overflow-hidden'>
						<p>Player2</p>
						<p>0</p>
					</div>
				</div>
				<Link to='/' className='button-style absolute bottom-16 left-10 button-color-one w-28' onClick={() => socket.emit('leave-room', id)}>
					Rage Quit
				</Link>
			</div>
		</div>
	);
};

export default GameArea;
