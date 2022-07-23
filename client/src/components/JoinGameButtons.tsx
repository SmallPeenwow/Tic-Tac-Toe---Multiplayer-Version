import { Link } from 'react-router-dom';
import BackButton from './BackButton';

// Socket io function goes here

type JoinGameProps = {
	playerName: string;
	roomCode: string;
};

const JoinGameButtons = ({ playerName, roomCode }: JoinGameProps) => {
	return (
		<>
			<BackButton />
			<Link
				to={
					playerName.length !== 0 && roomCode.length !== 0 && roomCode.match(/^this must be code for socket connection$/)
						? `/gameArea/${playerName}`
						: '#'
				}
				className='button-style button-color-one w-24'
			>
				Let's Go
			</Link>
		</>
	);
};

export default JoinGameButtons;
