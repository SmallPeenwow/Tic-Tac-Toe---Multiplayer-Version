import { useState } from 'react';
import { Link } from 'react-router-dom';
//import { socket } from '../App';
import { validationCheck } from '../hooks/joinRoomCheck';
import { GeneratorRoomCode } from '../hooks/RandomCode';

import BackButton from './BackButton';

type JoinGameProps = {
	playerName: string;
	roomCode: string;
};

//setIsValid(validationCheck(playerName, roomCode))

const JoinGameButtons = ({ playerName, roomCode }: JoinGameProps) => {
	const [isValid, setIsValid] = useState(false);

	// Socket io function goes here
	const joinRoom = (playerName: string, roomCode: string, codeGenerated: string) => {
		const { valid } = validationCheck({ name: playerName, roomId: roomCode, codeGenerate: codeGenerated });

		if (valid) {
			//socket.emit('join-room', room);
			setIsValid(isValid);
		}
	};

	const { codeGenerated } = GeneratorRoomCode(); // should maybe have this in the start App.tsx or send over server to check if entered in correctly but for now this will be tested here

	return (
		<>
			<BackButton />
			<Link
				to={isValid ? `/gameArea/${playerName}` : '#'}
				className='button-style button-color-one w-24'
				onClick={() => joinRoom(playerName, roomCode, codeGenerated)}
			>
				Let's Go
			</Link>
		</>
	);
};

export default JoinGameButtons;
