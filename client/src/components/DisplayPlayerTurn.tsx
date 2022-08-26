import { GetWinner } from '../hooks/GetWinner';

type PlayerProp = {
	player: string | undefined;
	playerTurn: string;
	isWinner: string | undefined;
	isGameEnded: boolean;
};

const DisplayPlayerTurn = ({ player, playerTurn, isWinner, isGameEnded }: PlayerProp) => {
	const { winner } = GetWinner({ player: player, isWinner: isWinner });

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
