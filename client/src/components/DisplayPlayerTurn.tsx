import { GetWinner } from '../hooks/GetWinner';

type PlayerProp = {
	player: string | undefined;
	playerTurn: string;
	winner: string | undefined;
	isGameEnded: boolean;
};

// TODO: Looping multiple times here
const DisplayPlayerTurn = ({ player, playerTurn, winner, isGameEnded }: PlayerProp) => {
	const { won } = GetWinner({ player, isWinner: winner });

	return (
		<>
			{!isGameEnded ? (
				<div className='display-turn-once'>{player === playerTurn ? 'Your' : `Player ${player === 'host' ? "2's" : "1's"}`} Turn</div>
			) : (
				<div className='display-turn-once'>{won}</div>
			)}
		</>
	);
};

export default DisplayPlayerTurn;
