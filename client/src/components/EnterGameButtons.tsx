import { Link } from 'react-router-dom';
import { GeneratorRoomCode } from '../hooks/RandomCode';
import BackButton from './BackButton';

type PlayerNameProp = {
	playerName: string;
};

const EnterGameButtons = ({ playerName }: PlayerNameProp) => {
	const { codeGenerated } = GeneratorRoomCode();

	return (
		<>
			<BackButton />
			<Link to={playerName.length !== 0 ? `/gameArea/${codeGenerated}/startedGame` : '#'} className='button-style button-color-one w-24'>
				Let's Go
			</Link>
		</>
	);
};

export default EnterGameButtons;
