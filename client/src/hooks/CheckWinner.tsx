type CheckWinnerProps = {
	board: string[];
	totalMoves: number;
};

export const CheckWinner = ({ board, totalMoves }: CheckWinnerProps) => {
	const lines = [
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
	];

	let winnerName: string = '';
	let result;
	let gameEnd = false;

	for (let i = 0; i < lines.length; i++) {
		if (result === undefined) {
			result = InnerLoop(lines[i], board);
		}
	}

	if (totalMoves == 9) {
		result = 'draw';
	}

	gameEnd = result === 'X' || result === 'O' || result === 'draw' ? true : false;

	if (result == 'X') {
		winnerName = 'host';
	} else if (result == 'O') {
		winnerName = 'joinGame';
	} else if (result == 'draw') {
		winnerName = 'Draw';
	}

	return { gameEnd, winnerName };
};

const InnerLoop = (lines: number[], board: string[]) => {
	if (board[lines[0]] === board[lines[1]] && board[lines[1]] === board[lines[2]]) return board[lines[0]];
};
