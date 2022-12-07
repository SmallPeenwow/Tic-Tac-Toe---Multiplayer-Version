import { GamePlay } from '../pages/GameArea';

type PlayAgainProps = {
	isGameEnded: boolean;
	// setIsWinner: (active: string) => void;
	// setIsTurn: (active: string) => void;
	// setIsPlayersTurn: (active: string) => void;
	// setIsGameEnded: (active: boolean) => void;
	// setIsBoard: (data: string[]) => void;
	// setIsTotalMoves: (active: number) => void;
	gamePlay: GamePlay;
	setGamePlay: React.Dispatch<React.SetStateAction<GamePlay>>;
};

//TODO: Send this to player side also
// TODO: Don't think player X is working and should look at giving own turns
// TODO: Maybe make this a function in GameArea for when other player leaves so board is clear and values reset
const PlayAgain = ({
	isGameEnded,
	gamePlay,
	setGamePlay,
}: //  setIsWinner, setIsTurn, setIsPlayersTurn, setIsGameEnded, setIsBoard, setIsTotalMoves
PlayAgainProps) => {
	const restartGame = () => {
		setGamePlay({ ...gamePlay, theWinner: '', boardTurn: 'X', isGameEnded: false, playersTurn: 'host', board: Array().fill(''), totalMoves: 1 });
		// setIsWinner('');
		// setIsTurn('X');
		// setIsGameEnded(false);
		// setIsPlayersTurn('host');
		// setIsBoard(Array(9).fill(''));
		// setIsTotalMoves(1);
	};

	return (
		<>
			<div className={!isGameEnded ? 'hidden' : 'animate-fadeIn absolute bottom-28 object-center'}>
				<button onClick={restartGame} className='button-color-one button-style'>
					Play Again?
				</button>
			</div>
		</>
	);
};

export default PlayAgain;
