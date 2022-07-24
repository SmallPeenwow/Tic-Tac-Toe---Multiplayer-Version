import { useState } from 'react';
import { Link } from 'react-router-dom';
import { socket } from '../App';
import { validationCheck } from '../hooks/joinRoomCheck';
import BackButton from './BackButton';

const [isValid, setIsValid] = useState(false);

// Socket io function goes here
const joinRoom = (playerName: string, roomCode: string) => {
	//socket.emit('join-room', room);
	setIsValid(validationCheck(playerName, roomCode));
	if (isValid) {
	}
};

type JoinGameProps = {
	playerName: string;
	roomCode: string;
};

//setIsValid(validationCheck(playerName, roomCode))

const JoinGameButtons = ({ playerName, roomCode }: JoinGameProps) => {
	return (
		<>
			<BackButton />
			<Link
				to={isValid ? `/gameArea/${playerName}` : '#'}
				className='button-style button-color-one w-24'
				onClick={() => joinRoom(playerName, roomCode)}
			>
				Let's Go
			</Link>
		</>
	);
};

export default JoinGameButtons;
