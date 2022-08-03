import { Link } from 'react-router-dom';

import BackButton from './BackButton';

type JoinGameProps = {
	roomCode: string;
	isValid: boolean;
	isRoomAvailable: boolean;
};

const JoinGameButtons = ({ roomCode, isValid, isRoomAvailable }: JoinGameProps) => {
	let joinGameValidation = isValid === true && isRoomAvailable === true ? true : false;
	console.log(isValid, isRoomAvailable);

	// TODO: Work on validation for empty room code also
	const joinRoom = (valid: boolean, name: boolean, roomId: string) => {
		if (name) {
			console.log('name is empty'); // Will be used for snackbar
		} else if (valid) {
			console.log('The room you trying to access already has two players'); // Will get snackbar later for this
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
