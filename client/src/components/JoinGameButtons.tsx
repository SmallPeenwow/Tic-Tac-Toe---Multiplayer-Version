import { Link } from 'react-router-dom';
import { socket } from '../App';

import BackButton from './BackButton';

type JoinGameProps = {
	roomCode: string;
	isValid: boolean;
	isNameEntered: boolean;
};

const JoinGameButtons = ({ roomCode, isValid, isNameEntered }: JoinGameProps) => {
	const joinRoom = (valid: boolean, name: boolean, roomId: string) => {
		if (name) {
			if (valid) {
				socket.emit('join-room', roomId);
			} else {
				console.log('The room you trying to access already has two players'); // Will get snackbar later for this
			}
		} else {
			console.log('name is empty'); // Will be used for snackbar
		}
	};

	return (
		<>
			<BackButton />
			<Link
				// to={isValid ? `/gameArea/joinGame-${roomCode}` : '#'}
				to={isValid ? `/gameArea/joinGame` : '#'}
				className='button-style button-color-one w-24'
				onClick={() => joinRoom(isValid, isNameEntered, roomCode)}
			>
				Let's Go
			</Link>
		</>
	);
};

export default JoinGameButtons;
