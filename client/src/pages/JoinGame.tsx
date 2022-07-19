import { useState } from 'react';
import JoinGameButtons from '../components/JoinGameButtons';

const JoinGame = () => {
	const [isPlayerName, setIsPlayerName] = useState('');
	const [isRoomCode, setIsRoomCode] = useState('');

	const setName = (event: any) => {
		setIsPlayerName(event.target.value);
	};

	const setRoomId = (event: any) => {
		setIsRoomCode(event.target.value);
	};

	return (
		<div className='min-h-screen flex flex-col text-white text-center justify-center items-center bg-main-background'>
			<div className='flex flex-col gap-10'>
				<input type='text' className='input-field' placeholder='Enter Name' maxLength={15} value={isPlayerName} onChange={setName} />
				<input type='text' className='input-field' placeholder='Room ID' value={isRoomCode} onChange={setRoomId} />
				<div className='flex justify-around mt-4'>
					<JoinGameButtons playerName={isPlayerName} roomCode={isRoomCode} />
				</div>
			</div>
		</div>
	);
};

export default JoinGame;
