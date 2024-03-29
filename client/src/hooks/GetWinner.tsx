type WinnerProps = {
	player: string | undefined;
	isWinner: string | undefined;
};

export function GetWinner({ player, isWinner }: WinnerProps) {
	let won: string | undefined;

	if (isWinner === 'joinGame' && player === 'host') {
		won = 'Player 2 Wins';
	} else if (isWinner === 'host' && player === 'joinGame') {
		won = 'Player 1 Wins';
	} else if (isWinner === 'Draw') {
		won = 'Draw';
	} else {
		won = 'You Win';
	}

	return { won };
}
