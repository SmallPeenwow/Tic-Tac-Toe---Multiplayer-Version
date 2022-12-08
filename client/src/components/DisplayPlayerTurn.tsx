import { GetWinner } from '../hooks/GetWinner';
import { GamePlay } from '../pages/GameArea';

type PlayerProp = {
	player: string | undefined;
	gamePlay: GamePlay;
};

// TODO: Looping multiple times here
const DisplayPlayerTurn = ({ player, gamePlay }: PlayerProp) => {
	const { won } = GetWinner({ player, isWinner: gamePlay.theWinner });

	return (
		<>
			{!gamePlay.isGameEnded ? (
				<div className='display-turn-once'>{player === gamePlay.playersTurn ? 'Your' : `Player ${player === 'host' ? "2's" : "1's"}`} Turn</div>
			) : (
				<div className='display-turn-once'>{won}</div>
			)}
		</>
	);
};

export default DisplayPlayerTurn;
