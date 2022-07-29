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

		const { valid, roomSpace } = validationCheck({ name: isPlayerName, roomId: isRoomCode });
		console.log(roomSpace);
		console.log(valid);
	};

	// setIsValid(roomSpace);
	// setIsNameEntered(valid);

	// const joinRoom = (name: string, roomId: string) => {
	// 	// Checks to see if all finds are met before

	// 	const { valid, roomSpace } = validationCheck({ name: name, roomId: roomId });
	// 	console.log(roomSpace);
	// 	console.log(valid);
	// 	setIsValid(roomSpace);
	// 	setIsNameEntered(valid);
	// };

	return (
		<div className='min-h-screen flex flex-col text-white text-center justify-center items-center bg-main-background'>
			<div className='flex flex-col gap-10'>
				<input type='text' className='input-field' placeholder='Enter Name' maxLength={15} value={isPlayerName} onChange={setName} />
				<input type='text' className='input-field' placeholder='Room ID' value={isRoomCode} onChange={setRoomId} maxLength={20} />
				<div className='flex justify-around mt-4'>
					<JoinGameButtons roomCode={isRoomCode} playerName={isPlayerName} isValid={isValid} isNameEntered={isNameEntered} />
				</div>
			</div>
		</div>
	);
};

export default JoinGame;
