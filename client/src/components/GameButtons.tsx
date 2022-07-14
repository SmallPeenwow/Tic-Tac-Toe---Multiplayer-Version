import React from 'react';
import { Link } from 'react-router-dom';

type PlayerNameProp = {
	playerName: string;
	setIsPlayerName: (active: string) => void;
};

//TODO make check that would stop user if they don't have name
const GameButtons = ({ playerName, setIsPlayerName }: PlayerNameProp) => {
	const resetInputField = () => {
		setIsPlayerName('');
		// setIsRoomCode("");
	};

	return (
		<>
			<Link to='/' className='button-style button-color-two w-24' onClick={resetInputField}>
				Back
			</Link>
			<Link to={`/gameArea/${playerName}`} className='button-style button-color-one w-24' onClick={resetInputField}>
				Let's Go
			</Link>
		</>
	);
};

export default GameButtons;