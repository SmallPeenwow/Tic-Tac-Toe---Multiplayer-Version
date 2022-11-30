import { useEffect, useState } from 'react';
import { socket } from '../App';

type PlayerProp = {
	player: string | undefined;
	playerTurn: string;
	isWinner: string | undefined;
	isGameEnded: boolean;
	roomId: string | undefined;
};

const DisplayPlayerTurn = ({ player, playerTurn, isWinner, isGameEnded, roomId }: PlayerProp) => {
	const [playerWinner, setPlayerWinner] = useState('');

	socket.emit('send-winner', isWinner, roomId);

	useEffect(() => {
		// This seems to be working
		socket.on('receive-winner', (playerWinner: string) => {
			player = playerWinner;
			console.log(player);
		});
	}, [isGameEnded]);

	// socket.on('send-winner', (playerWinner: string, roomId: string) => {
	// 	player = playerWinner; // Maybe use let instead of setting it
	// });

	const getWinnerHere = (player: string | undefined, isWinner: string | undefined) => {
		let winner: string | undefined;

		if (isWinner === 'joinGame' && player === 'startedGame') {
			winner = 'Player 2 Wins';
		} else if (isWinner === 'startedGame' && player === 'joinGame') {
			winner = 'Player 1 Wins';
		} else if (isWinner === 'Draw') {
			winner = 'Draw';
		} else {
			winner = 'You Win';
		}

		setPlayerWinner(winner);
	};

	useEffect(() => {
		getWinnerHere(player, isWinner);
	}, [isGameEnded]);

	return (
		<>
			{!isGameEnded ? (
				<div className='display-turn-once'>{player === playerTurn ? 'Your' : `Player ${player === 'startedGame' ? "2's" : "1's"}`} Turn</div>
			) : (
				<div className='display-turn-once'>{playerWinner}</div>
			)}
		</>
	);
};

export default DisplayPlayerTurn;
