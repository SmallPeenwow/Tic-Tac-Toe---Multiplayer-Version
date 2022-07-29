import React from 'react';

type DisplayRoomCodeProps = {
	codeGenerated: string | undefined;
};

const DisplayRoomCode = ({ codeGenerated }: DisplayRoomCodeProps) => {
	return (
		<div className='fixed z-10 flex items-center justify-center h-screen w-screen bg-black/95'>
			<div className='fixed flex text-white flex-col items-center justify-center gap-5'>
				<h2 className='text-3xl mb-3'>Waiting for player to connect...</h2>
				<p>Give your friend the following room id to connect</p>
				<div className='flex gap-6 flex-col justify-center items-center w-2/3'>
					<p className='text-xl flex justify-center items-center font-semibold pb-2 border-b-2 border-white w-full'>{codeGenerated}</p>
					<button className='py-1 px-3 text-lg rounded-sm font-bold bg-white text-black'>Copy</button>
				</div>
			</div>
		</div>
	);
};

export default DisplayRoomCode;
