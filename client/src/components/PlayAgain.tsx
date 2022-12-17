import { socket } from '../App';
import { GamePlay } from '../pages/GameArea';

type PlayAgainProps = {
	roomId: string | undefined;
	gamePlay: GamePlay;
	// trackScore: number;
	playerIdentifier: string | undefined;
	// setTrackScore: (action: number) => void;
	setGamePlay: React.Dispatch<React.SetStateAction<GamePlay>>;
};

const PlayAgain = ({ gamePlay, roomId, playerIdentifier, setGamePlay }: PlayAgainProps) => {
	const restartGame = () => {
		setGamePlay({
			...gamePlay,
			theWinner: '',
			boardTurn: 'X',
			isGameEnded: false,
			playersTurn: 'host',
			board: Array(9).fill(''),
			totalMoves: 1,
			trackScore: playerIdentifier === gamePlay.theWinner ? gamePlay.trackScore + 1 : gamePlay.trackScore,
		});

		socket.emit('reset-board', roomId);
	};

	socket.on('board-reset', () => {
		restartGame;
	});

	return (
		<>
			<div className={!gamePlay.isGameEnded ? 'hidden' : 'animate-fadeIn absolute bottom-28 object-center'}>
				<button onClick={restartGame} className='button-color-one button-style'>
					Play Again?
				</button>
			</div>
		</>
	);
};

export default PlayAgain;
