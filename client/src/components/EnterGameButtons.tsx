import { Link } from 'react-router-dom';
import { GeneratorRoomCode } from '../hooks/RandomCode';
import BackButton from './BackButton';
import { socket } from '../App';

type PlayerNameProp = {
	playerName: string;
};

//TODO make check that would stop user if they don't have name
const EnterGameButtons = ({ playerName }: PlayerNameProp) => {
	const { codeGenerated } = GeneratorRoomCode();

	const createRoom = (room: string) => {
		if (playerName.length !== 0) {
			socket.emit('create-room', room);
		}
	};

	return (
		<>
			<BackButton />
			<Link
				to={playerName.length !== 0 ? `/gameArea/${codeGenerated}` : '#'}
				className='button-style button-color-one w-24'
				onClick={() => createRoom(codeGenerated)}
			>
				Let's Go
			</Link>
		</>
	);
};

export default EnterGameButtons;
