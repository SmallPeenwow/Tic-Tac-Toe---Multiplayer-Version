import { Link } from 'react-router-dom';
import { socket } from '../App';

import BackButton from './BackButton';

type JoinGameProps = {
	roomCode: string;
	isValid: boolean;
	isRoomAvailable: boolean;
};

const JoinGameButtons = ({ roomCode, isValid, isRoomAvailable }: JoinGameProps) => {
	let joinGameValidation = isValid === true && isRoomAvailable === true ? true : false;

	const joinRoom = (valid: boolean, name: boolean, roomId: string) => {
		if (!name) {
			console.log('name is empty'); // Will be used for snackbar
			if (!valid) {
				console.log('The room you trying to access already has two players'); // Will get snackbar later for this
				// socket.emit('join-room', roomId);
			}
		}
	};

	return (
		<>
			<BackButton />
			<Link
				to={joinGameValidation ? `/gameArea/${roomCode}/joinGame` : '#'}
				className='button-style button-color-one w-24'
				onClick={() => joinRoom(isValid, isRoomAvailable, roomCode)}
			>
				Let's Go
			</Link>
		</>
	);
};

export default JoinGameButtons;
