import React from 'react';
import { Link } from 'react-router-dom';

type PlayerNameProp = {
	playerName: string;
};

//TODO make check that would stop user if they don't have name
const GameButtons = ({ playerName }: PlayerNameProp) => {
	return (
		<>
			<Link to='/' className='button-style button-color-two w-24'>
				Back
			</Link>
			<Link to={`/gameArea/${playerName}`} className='button-style button-color-one w-24'>
				Let's Go
			</Link>
		</>
	);
};

export default GameButtons;
