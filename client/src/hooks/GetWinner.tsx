type WinnerProps = {
	player: string | undefined;
	isWinner: string | undefined;
};

export function GetWinner({ player, isWinner }: WinnerProps) {
	let winner: string | undefined;
	console.log(player);
	console.log(isWinner);

	if (isWinner === 'joinGame' && player === 'startedGame') {
		winner = 'Player 2 Wins';
	} else if (isWinner === 'startedGame' && player === 'joinGame') {
		winner = 'Player 1 Wins';
	} else if (isWinner === 'Draw') {
		winner = 'Draw';
	} else {
		winner = 'You Win';
	}

	return { winner };
}
