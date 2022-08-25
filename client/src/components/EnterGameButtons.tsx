import { Link } from 'react-router-dom';
import { GeneratorRoomCode } from '../hooks/RandomCode';
import BackButton from './BackButton';

interface PlayerNameProp {
	playerName: string;
	setIsNameEntered: (active: boolean) => void;
}

const EnterGameButtons = ({ playerName, setIsNameEntered }: PlayerNameProp) => {
	const { codeGenerated } = GeneratorRoomCode();

	const checkNameValue = (name: string) => {
		setIsNameEntered(name.length > 0 ? true : false);
	};

	return (
		<>
			<BackButton />
			<Link
				to={playerName.length !== 0 ? `/gameArea/${codeGenerated}/startedGame` : '#'}
				className='button-style button-color-one w-24'
				onClick={() => checkNameValue(playerName)}
			>
				Let's Go
			</Link>
		</>
	);
};

export default EnterGameButtons;
