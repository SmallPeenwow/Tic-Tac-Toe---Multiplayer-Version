import DisplayWinner from '../components/DisplayWinner';

type PlayerProp = {
	player: string | undefined;
	playerTurn: string;
};

const DisplayPlayerTurn = ({ player, playerTurn }: PlayerProp) => {
	return <div className='display-turn-once'>{player === playerTurn ? 'Your' : `Player ${player === 'startedGame' ? "2's" : "1's"}`} Turn</div>;
};

export default DisplayPlayerTurn;
