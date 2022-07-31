import React from 'react';

type DisplayRoomCodeProps = {
	codeGenerated: string | undefined;
};

const DisplayRoomCode = ({ codeGenerated }: DisplayRoomCodeProps) => {
	return (
		<div className='fixed z-10 flex items-center justify-center h-screen w-screen bg-black/95'>
			<div className='fixed flex text-white flex-col items-center justify-center gap-5'>
				<h2 className='text-3xl mb-3 cursor-default'>Waiting for player to connect...</h2>
				<p className='cursor-default'>Give your friend the following room id to connect</p>
				<div className='flex gap-6 flex-col justify-center items-center w-8/12'>
					<input
						className='text-xl text-center font-semibold pb-2 border-b-2 bg-transparent border-white w-full cursor-text'
						value={codeGenerated}
						disabled
					></input>
					<button
						className='py-1 px-2.5 text-lg rounded-sm font-bold bg-white text-black hover:bg-neutral-400 active:border-sky-400 border-transparent border-solid border-2'
						onClick={() => navigator.clipboard.writeText(codeGenerated !== undefined ? codeGenerated : '')}
					>
						Copy
					</button>
				</div>
			</div>
		</div>
	);
};

export default DisplayRoomCode;
