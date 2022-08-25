import { useState } from 'react';
import EnterGameButtons from '../components/EnterGameButtons';

const StartNew = () => {
	const [isPlayerName, setIsPlayerName] = useState('');
	const [isNameEntered, setIsNameEntered] = useState(true);

	const setName = (event: any) => {
		setIsPlayerName(event.target.value);
	};

	const checkNameValue = (name: string) => {
		setIsNameEntered(true);
	};

	return (
		<div className='min-h-screen flex flex-col text-white text-center justify-center items-center bg-main-background'>
			<div className='flex flex-col gap-10 visible'>
				<input
					type='text'
					className={isNameEntered ? 'input-field input-correct' : 'input-field input-error'}
					placeholder='Enter Name'
					maxLength={15}
					value={isPlayerName}
					onChange={() => {
						setName(event);
						checkNameValue(isPlayerName);
					}}
				/>
				<div className='flex justify-around mt-4'>
					<EnterGameButtons playerName={isPlayerName} setIsNameEntered={setIsNameEntered} />
				</div>
			</div>
		</div>
	);
};

export default StartNew;
