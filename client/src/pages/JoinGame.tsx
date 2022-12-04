import { useEffect, useState } from 'react';
import { socket } from '../App';
import JoinGameButtons from '../components/JoinGameButtons';
import { validationCheck } from '../hooks/joinRoomCheck';

const JoinGame = () => {
	const [playerName, setPlayerName] = useState('');
	const [roomCode, setRoomCode] = useState('');
	const [isValid, setIsValid] = useState(false);
	const [isRoomAvailable, setIsRoomAvailable] = useState(false);
	const [isNameEmpty, setIsNameEmpty] = useState(true);
	const [isRoomId, setIsRoomId] = useState(true);

	const setName = (event: any) => {
		setPlayerName(event.target.value);
	};

	const setRoomId = (event: any) => {
		setRoomCode(event.target.value);
	};

	useEffect(() => {
		const { valid } = validationCheck({ name: playerName, roomId: roomCode });
		setIsValid(valid);

		socket.emit('check-room', { room: roomCode }, (response: boolean) => {
			setIsRoomAvailable(response);
		});
	}, [roomCode, playerName]);

	return (
		<div className='min-h-screen flex flex-col text-white text-center justify-center items-center bg-main-background'>
			<div className='flex flex-col gap-10'>
				<input
					type='text'
					className={isNameEmpty ? 'input-field input-correct' : 'input-field input-error'}
					placeholder='Enter Name'
					maxLength={15}
					value={playerName}
					onChange={setName}
				/>
				<input
					type='text'
					className={isRoomId ? 'input-field input-correct' : 'input-field input-error'}
					placeholder='Room ID'
					value={roomCode}
					onChange={setRoomId}
					maxLength={20}
				/>
				<div className='flex justify-around mt-4'>
					<JoinGameButtons
						isValid={isValid}
						isRoomAvailable={isRoomAvailable}
						isNameEmpty={isNameEmpty}
						roomCode={roomCode}
						playerName={playerName}
						setIsNameEmpty={setIsNameEmpty}
						setRoomIdEmpty={setIsRoomId}
					/>
				</div>
			</div>
		</div>
	);
};

export default JoinGame;
