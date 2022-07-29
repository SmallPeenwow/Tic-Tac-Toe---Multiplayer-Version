import { useState } from 'react';
import { Link } from 'react-router-dom';
import { socket } from '../App';
import { validationCheck } from '../hooks/joinRoomCheck';

import BackButton from './BackButton';

type JoinGameProps = {
	roomCode: string;
	playerName: string;
	isValid: boolean;
	isNameEntered: boolean;
};

const JoinGameButtons = ({ roomCode, playerName, isValid, isNameEntered }: JoinGameProps) => {
	// const [isValid, setIsValid] = useState(false);

	// const joinRoom = (name: string, roomId: string) => {
	// 	// Checks to see if all finds are met before
	// 	const { valid, roomSpace } = validationCheck({ name: name, roomId: roomId });

	// 	if (valid) {
	// 		if (roomSpace) {
	// 			//socket.emit('join-room', roomId);
	// 			setIsValid(true);
	// 			socket.emit('join-room', 'yes');
	// 		} else {
	// 			console.log('The room you trying to access already has two players'); // Will get snackbar later for this
	// 		}
	// 	}
	// };
	const joinRoom = (valid: boolean, name: boolean) => {
		if (name) {
			if (valid) {
				//socket.emit('join-room', roomId);
				socket.emit('join-room', 'yes');
			} else {
				console.log('The room you trying to access already has two players'); // Will get snackbar later for this
			}
		} else {
			console.log('name is empty'); // Will be used for snackbar
		}
	};

	// const checkInput = (playerName: string, roomCode: string) => {
	// 	setIsValid(valid);
	// };
	//checkInput(isPlayerName, isRoomCode);
	return (
		<>
			<BackButton />
			<Link
				// to={isValid ? `/gameArea/joinGame-${roomCode}` : '#'}
				to={isValid ? `/gameArea/joinGame` : '#'}
				className='button-style button-color-one w-24'
				onClick={() => joinRoom(isValid, isNameEntered)}
			>
				Let's Go
			</Link>
		</>
	);
};

export default JoinGameButtons;
