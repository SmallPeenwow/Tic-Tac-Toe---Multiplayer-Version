import { useState } from 'react';
import { Link } from 'react-router-dom';
import { socket } from '../App';
import { validationCheck } from '../hooks/joinRoomCheck';
import BackButton from './BackButton';

const [isValid, setIsValid] = useState(false);

// Socket io function goes here
const joinRoom = (playerName: string, roomCode: string) => {
	const { isValid } = validationCheck({ name: playerName, roomId: roomCode });
	if (isValid) {
		//socket.emit('join-room', room);
		setIsValid(isValid);
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
