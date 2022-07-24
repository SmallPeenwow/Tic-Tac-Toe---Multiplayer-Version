import { useState } from 'react';
import { Link } from 'react-router-dom';
//import { socket } from '../App';
import { validationCheck } from '../hooks/joinRoomCheck';

import BackButton from './BackButton';

type JoinGameProps = {
	playerName: string;
	roomCode: string;
};

const JoinGameButtons = ({ playerName, roomCode }: JoinGameProps) => {
	const [isValid, setIsValid] = useState(false);

	// Socket io function goes here
	const joinRoom = (playerName: string, roomCode: string) => {
		const { valid } = validationCheck({ name: playerName, roomId: roomCode });

		if (valid) {
			//socket.emit('join-room', room);
			setIsValid(isValid);
		}
	};

	return (
		<>
			<BackButton />
			<Link to={isValid ? `/gameArea/joinGame` : '#'} className='button-style button-color-one w-24' onClick={() => joinRoom(playerName, roomCode)}>
				Let's Go
			</Link>
		</>
	);
};

export default JoinGameButtons;
