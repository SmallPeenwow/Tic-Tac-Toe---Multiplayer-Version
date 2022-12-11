import { socket } from '../App';
import { GamePlay } from '../pages/GameArea';

type PlayAgainProps = {
	roomId: string | undefined;
	isPlayerJoined: boolean;
	gamePlay: GamePlay;
	setGamePlay: React.Dispatch<React.SetStateAction<GamePlay>>;
};

//TODO: Send this to player side also
// TODO: Don't think player X is working and should look at giving own turns
// TODO: Maybe make this a function in GameArea for when other player leaves so board
const PlayAgain = ({ isPlayerJoined, gamePlay, setGamePlay, roomId }: PlayAgainProps) => {
	const restartGame = () => {
		//ResetState({ gamePlay, setGamePlay, isPlayerJoined, roomId });
		setGamePlay({ ...gamePlay, theWinner: '', boardTurn: 'X', isGameEnded: false, playersTurn: 'host', board: Array().fill(''), totalMoves: 1 });
		// const StateChanged = (game: GamePlay) => {
		// 	setGamePlay({ ...game, theWinner: '', boardTurn: 'X', isGameEnded: false, playersTurn: 'host', board: Array().fill(''), totalMoves: 1 });
		// };
	};

	if (isPlayerJoined && gamePlay.isGameEnded) {
		socket.emit('reset-board', gamePlay, roomId); // TODO: must do on server side and make sure this side is alright
		socket.on('board-reset', (game: GamePlay) => {
			// StateChanged(game); will fix
		});
	}

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
