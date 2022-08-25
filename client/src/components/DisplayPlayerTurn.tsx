type PlayerProp = {
	player: string | undefined;
	seen: boolean;
	show: (active: boolean) => void;
};

const DisplayPlayerTurn = ({ player, show, seen }: PlayerProp) => {
	const setDisplayType = () => {
		show(true);
	};

	return (
		<div className={seen ? 'hidden' : 'display-turn-once'} onClick={setDisplayType}>
			You Are
			<div className='text-8xl'>{player === 'startedGame' ? 'X' : 'O'}</div>
		</div>
	);
};

export default DisplayPlayerTurn;
