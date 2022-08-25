import { Link } from 'react-router-dom';

import BackButton from './BackButton';

interface JoinGameProps {
	roomCode: string;
	isValid: boolean; // Is for name and roomId
	isRoomAvailable: boolean; // To check if there are two players in the room already
	playerName: string;
	setNameEmpty: (active: boolean) => void;
	setRoomIdEmpty: (active: boolean) => void;
}

const JoinGameButtons = ({ roomCode, isValid, isRoomAvailable, playerName, setNameEmpty, setRoomIdEmpty }: JoinGameProps) => {
	let joinGameValidation = isValid === true && isRoomAvailable === true ? true : false;

	// TODO: Work on validation for empty room code also
	const joinRoom = (valid: boolean, roomAvailable: boolean, roomId: string, name: string) => {
		setNameEmpty(name.length > 0 ? false : true);
		setRoomIdEmpty(roomId.length > 0 ? false : true);

		if (!roomAvailable) {
			console.log('The room you trying to access already has two players'); // Will get snackbar later for this
		} else if (!valid) {
			console.log('name is empty'); // Will be used for snackbar
		}
	};

	return (
		<>
			<BackButton />
			<Link
				to={joinGameValidation ? `/gameArea/${roomCode}/joinGame` : '#'}
				className='button-style button-color-one w-24'
				onClick={() => joinRoom(isValid, isRoomAvailable, roomCode, playerName)}
			>
				Let's Go
			</Link>
		</>
	);
};

export default JoinGameButtons;
