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

	//result = await GetResult(lines, board);
	for (let i = 0; i < lines.length; i++) {
		if (board[lines[i][0]] === board[lines[i][1]] && board[lines[i][1]] === board[lines[i][2]]) {
			result = board[lines[i][0]];
		}
	}

	if (totalMoves == 9) {
		result = 'draw';
	}

	gameEnd = result === 'X' || result === 'O' || result === 'draw' ? true : false;

	console.log(result + ' result');
	//winnerName = await CheckResult(result);
	if (result == 'X') {
		winnerName = 'host';
	} else if (result == 'O') {
		winnerName = 'joinGame';
	} else if (result == 'draw') {
		winnerName = 'Draw';
	}

	console.log(winnerName + ' winner');
	console.log(gameEnd + ' game end');

	//setIsGameEnded(gameEnd);
	return { gameEnd, winnerName };
};

const GetResult = async (lines: number[][], board: string[]) => {
	for (let i = 0; i < lines.length; i++) {
		if (board[lines[i][0]] === board[lines[i][1]] && board[lines[i][1]] === board[lines[i][2]]) {
			return board[lines[i][0]];
		}
	}
};

const CheckResult = async (result: string | undefined) => {
	if (result == 'X') {
		return 'host';
	} else if (result == 'O') {
		return 'joinGame';
	} else if (result == 'draw') {
		return 'Draw';
	} else {
		return '';
	}
};
