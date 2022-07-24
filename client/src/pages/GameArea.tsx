import Board from '../components/Board';
import { useParams, Link } from 'react-router-dom';
import { socket } from '../App';

// Add onclick for socket.io functions to make the rooms disconnect

// Must make check to see who started and joined game

const GameArea = () => {
	const { type } = useParams();
	console.log(type);

	return (
		<div className='min-h-screen flex flex-col text-white text-center justify-center items-center bg-main-background'>
			<div className='flex flex-col justify-center items-center h-full w-full'>
				<h1 className='text-5xl'></h1>
				<Board />
				<h2 className='border-b-2 border-b-white w-72 text-2xl'>Score Board</h2>
				<div className='flex justify-center text-xl'>
					<div className='flex capitalize flex-col p-2 px-4 w-28 overflow-hidden'>
						<p>you</p>
						<p>0</p>
					</div>
					<div className='border-l-2 border-l-white'></div>
					<div className='flex capitalize flex-col p-2 px-4 w-28 overflow-hidden'>
						<p>Player2</p>
						<p>0</p>
					</div>
				</div>
				<Link to='/' className='button-style absolute bottom-16 left-10 button-color-one w-28' onClick={() => socket.emit('leave-room', type)}>
					Rage Quit
				</Link>
			</div>
		</div>
	);
};

export default GameArea;
