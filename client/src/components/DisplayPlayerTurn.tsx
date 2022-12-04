import { useEffect, useState } from 'react';
import { socket } from '../App';
import { GetWinner } from '../hooks/GetWinner';

type PlayerProp = {
	player: string | undefined;
	playerTurn: string;
	isWinner: string | undefined;
	isGameEnded: boolean;
	roomId: string | undefined;
};

// TODO: Looping multiple times here
const DisplayPlayerTurn = ({ player, playerTurn, isWinner, isGameEnded, roomId }: PlayerProp) => {
	// const [playerWinner, setPlayerWinner] = useState('');
	// console.log(playerWinner + ' top');

	// socket.emit('send-winner', isWinner, roomId);

	// useEffect(() => {
	// 	// This seems to be working
	// 	socket.on('receive-winner', (playerWinner: string) => {
	// 		player = playerWinner;
	// 	});
	// }, [isGameEnded]);

	// // socket.on('send-winner', (playerWinner: string, roomId: string) => {
	// // 	player = playerWinner; // Maybe use let instead of setting it
	// // });

	// //MAYBE MOVE TO GAMEAREA
	// const getWinnerHere = (player: string | undefined, isWinner: string | undefined) => {
	// 	let winner: string | undefined;

	// 	if (isWinner === 'joinGame' && player === 'startedGame') {
	// 		winner = 'Player 2 Wins';
	// 	} else if (isWinner === 'startedGame' && player === 'joinGame') {
	// 		winner = 'Player 1 Wins';
	// 	} else if (isWinner === 'Draw') {
	// 		winner = 'Draw';
	// 	} else {
	// 		winner = 'You Win';
	// 	}

	// 	setPlayerWinner(winner);
	// };

	// useEffect(() => {
	// 	getWinnerHere(player, isWinner);
	// }, [isGameEnded]);

	const { winner } = GetWinner({ player, isWinner });

	return (
		<>
			{!isGameEnded ? (
				<div className='display-turn-once'>{player === playerTurn ? 'Your' : `Player ${player === 'startedGame' ? "2's" : "1's"}`} Turn</div>
			) : (
				<div className='display-turn-once'>{winner}</div>
			)}
		</>
	);
};

export default DisplayPlayerTurn;
