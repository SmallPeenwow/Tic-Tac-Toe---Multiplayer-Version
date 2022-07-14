import { useState } from 'react';
import GameButtons from '../components/GameButtons';

const StartNew = () => {
	const [isPlayerName, setIsPlayerName] = useState('');

	const setName = (event: any) => {
		setIsPlayerName(event.target.value);
	};

	return (
		<div className='min-h-screen flex flex-col text-white text-center justify-center items-center bg-main-background'>
			<div className='flex flex-col gap-10 visible'>
				<input type='text' className='input-field' placeholder='Enter Name' maxLength={15} value={isPlayerName} onChange={setName} />
				<div className='flex justify-around mt-4'>
					<GameButtons playerName={isPlayerName} setIsPlayerName={setIsPlayerName} />
				</div>
			</div>
		</div>
	);
};

export default StartNew;
