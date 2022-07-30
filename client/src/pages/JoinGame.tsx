import { useEffect, useState } from 'react';
import JoinGameButtons from '../components/JoinGameButtons';
import { validationCheck } from '../hooks/joinRoomCheck';

const JoinGame = () => {
	const [isPlayerName, setIsPlayerName] = useState('');
	const [isRoomCode, setIsRoomCode] = useState('');
	const [isValid, setIsValid] = useState(false);
	const [isNameEntered, setIsNameEntered] = useState(false);

	const setName = (event: any) => {
		setIsPlayerName(event.target.value);
	};

	const setRoomId = (event: any) => {
		setIsRoomCode(event.target.value);
	};

	useEffect(() => {
		const { valid, roomSpace } = validationCheck({ name: isPlayerName, roomId: isRoomCode });

		setIsValid(roomSpace);
		setIsNameEntered(valid);
	}, [isRoomCode]);

	return (
		<div className='min-h-screen flex flex-col text-white text-center justify-center items-center bg-main-background'>
			<div className='flex flex-col gap-10'>
				<input type='text' className='input-field' placeholder='Enter Name' maxLength={15} value={isPlayerName} onChange={setName} />
				<input type='text' className='input-field' placeholder='Room ID' value={isRoomCode} onChange={setRoomId} maxLength={20} />
				<div className='flex justify-around mt-4'>
					<JoinGameButtons isValid={isValid} isNameEntered={isNameEntered} roomCode={isRoomCode} />
				</div>
			</div>
		</div>
	);
};

export default JoinGame;
