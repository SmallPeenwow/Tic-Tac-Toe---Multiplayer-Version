import { Link } from 'react-router-dom';
import BackButton from './BackButton';

type PlayerNameProp = {
	playerName: string;
};

//TODO make check that would stop user if they don't have name
const EnterGameButtons = ({ playerName }: PlayerNameProp) => {
	return (
		<>
			<BackButton />
			<Link to={playerName.length !== 0 ? `/gameArea/${playerName}` : '#'} className='button-style button-color-one w-24'>
				Let's Go
			</Link>
		</>
	);
};

export default EnterGameButtons;
