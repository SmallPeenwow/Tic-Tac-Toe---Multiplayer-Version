import { useEffect, useState } from 'react';
import { socket } from '../App';
import JoinGameButtons from '../components/JoinGameButtons';
import { validationCheck } from '../hooks/joinRoomCheck';

const JoinGame = () => {
	const [isPlayerName, setIsPlayerName] = useState('');
	const [isRoomCode, setIsRoomCode] = useState('');
	const [isValid, setIsValid] = useState(false);
	const [isRoomAvailable, setIsRoomAvailable] = useState(false);
	const [isNameEmpty, setNameIsEmpty] = useState(false);
	const [isRoomIdEmpty, setRoomIdIsEmpty] = useState(false);

	const setName = (event: any) => {
		setIsPlayerName(event.target.value);
		setValuesTrue();
	};

	const setRoomId = (event: any) => {
		setIsRoomCode(event.target.value);
		setValuesTrue();
	};

	// Probably redo this to be more clean : TODO
	const setValuesTrue = () => {
		setNameIsEmpty(false);
		setRoomIdIsEmpty(false);
	};

	useEffect(() => {
		const load = async () => {
			socket.emit('check-room', { room: isRoomCode }, (response: boolean) => {
				setIsRoomAvailable(response);
			});

			const { valid } = await validationCheck({ name: isPlayerName, roomId: isRoomCode });

			setIsValid(valid);
		};

		load().catch((error) => {
			console.log('fook');
		});
	}, [isRoomCode, isPlayerName]);

	return (
		<div className='min-h-screen flex flex-col text-white text-center justify-center items-center bg-main-background'>
			<div className='flex flex-col gap-10'>
				<input
					type='text'
					className={isNameEmpty ? 'input-field input-error' : 'input-field input-correct'}
					placeholder='Enter Name'
					maxLength={15}
					value={isPlayerName}
					onChange={setName}
				/>
				<input
					type='text'
					className={isRoomIdEmpty ? 'input-field input-error' : 'input-field input-correct'}
					placeholder='Room ID'
					value={isRoomCode}
					onChange={setRoomId}
					maxLength={20}
				/>
				<div className='flex justify-around mt-4'>
					<JoinGameButtons
						isValid={isValid}
						isRoomAvailable={isRoomAvailable}
						roomCode={isRoomCode}
						playerName={isPlayerName}
						setNameEmpty={setNameIsEmpty}
						setRoomIdEmpty={setRoomIdIsEmpty}
					/>
				</div>
			</div>
		</div>
	);
};

export default JoinGame;
