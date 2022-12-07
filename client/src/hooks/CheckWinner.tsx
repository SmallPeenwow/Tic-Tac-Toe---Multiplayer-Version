type CheckWinnerProps = {
	board: string[];
	totalMoves: number;
};
// Not working

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

	//let board = boardArray;
	let winnerName: string = '';
	let result;
	let gameEnd = false;

	// SOMETHING not right here at all
	for (let i = 0; i < lines.length; i++) {
		if (board[lines[i][0]] == board[lines[i][1]] && board[lines[i][1]] == board[lines[i][2]]) {
			result = board[lines[i][0]];
		}
	}

	if (totalMoves == 9) {
		result = 'draw';
	}

	gameEnd = result === 'X' || result === 'O' || result === 'draw' ? true : false;

	// need to make this less
	if (result == 'X') {
		winnerName = 'host';
	} else if (result == 'O') {
		winnerName = 'joinGame';
	} else if (result == 'draw') {
		winnerName = 'Draw';
	}

	//setIsGameEnded(gameEnd);
	return { gameEnd, winnerName };
};
