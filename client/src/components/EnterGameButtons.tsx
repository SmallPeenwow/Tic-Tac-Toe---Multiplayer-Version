import { useContext } from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';
import SocketContext from '../context/socket';

// Socket io function must go here

// must also create random room id for user and then display it to screen and must wait until the user joins the room before it goes away

type PlayerNameProp = {
	playerName: string;
};

//TODO make check that would stop user if they don't have name
const EnterGameButtons = ({ playerName }: PlayerNameProp) => {
	const socket = useContext(SocketContext);

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
