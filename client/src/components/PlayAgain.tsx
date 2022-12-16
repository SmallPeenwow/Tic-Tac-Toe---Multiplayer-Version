import { socket } from '../App';
import { GamePlay } from '../pages/GameArea';

type PlayAgainProps = {
	roomId: string | undefined;
	gamePlay: GamePlay;
	trackScore: number;
	playerIdentifier: string | undefined;
	setTrackScore: (action: number) => void;
	setGamePlay: React.Dispatch<React.SetStateAction<GamePlay>>;
};

const PlayAgain = ({ gamePlay, roomId, playerIdentifier, trackScore, setGamePlay, setTrackScore }: PlayAgainProps) => {
	const restartGame = () => {
		setGamePlay({
			...gamePlay,
			theWinner: '',
			boardTurn: 'X',
			isGameEnded: false,
			playersTurn: 'host',
			board: Array(9).fill(''),
			totalMoves: 1,
		});

		if (playerIdentifier === gamePlay.theWinner) {
			setTrackScore(trackScore++);
		}

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
