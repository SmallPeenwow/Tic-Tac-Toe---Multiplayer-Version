import { Link } from 'react-router-dom';
import BackButton from './BackButton';

interface JoinGameProps {
	roomCode: string;
	isValid: boolean;
	isRoomAvailable: boolean;
	playerName: string;
	isNameEmpty: boolean;
	setIsNameEmpty: (active: boolean) => void;
	setRoomIdEmpty: (active: boolean) => void;
}

const JoinGameButtons = ({ roomCode, isValid, isRoomAvailable, playerName, isNameEmpty, setIsNameEmpty, setRoomIdEmpty }: JoinGameProps) => {
	// TODO: Work on validation for empty room code also
	const joinRoom = (isRoomAvailable: boolean, roomId: string, name: string) => {
		setIsNameEmpty(name.length !== 0 ? true : false);
		setRoomIdEmpty(roomId.length === 20 ? true : false);

		if (!isRoomAvailable) {
			console.log('The room you trying to access already has two players'); // Will get snackbar later for this
		} else if (!name) {
			console.log('name is empty'); // Will be used for snackbar
		}
	};

	return (
		<>
			<BackButton />
			<Link
				to={isRoomAvailable && isNameEmpty && isValid ? `/gameArea/${roomCode}/joinGame` : '#'}
				className='button-style button-color-one w-24'
				onClick={() => joinRoom(isRoomAvailable, roomCode, playerName)}
			>
				Let's Go
			</Link>
		</>
	);
};

export default JoinGameButtons;
