import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
	// const resetInputField  = () => {
	//   setIsPlayerName("");
	//   setIsRoomCode("");
	// };

	return (
		<div className='min-h-screen flex flex-col text-white text-center justify-center items-center bg-main-background'>
			<header className='text-4xl font-medium mb-6'>
				<h3>Tic Tac Toe</h3>
			</header>
			<Link to='/startNew' className='button-style button-color-one mt-4 w-52'>
				Start New
			</Link>
			<Link to='/joinGame' className='button-style button-color-two mt-6 w-52'>
				Join Game
			</Link>
		</div>
	);
};

export default LandingPage;
