import { Routes, Route } from 'react-router-dom';
import GameArea from './pages/GameArea';
import JoinGame from './pages/JoinGame';
import LandingPage from './pages/LandingPage';
import StartNew from './pages/StartNew';
import { io } from 'Socket.io-client';

export const socket = io('http://localhost:1338');
socket.on('connect', () => {
	// socket.emit('connect-user', 'peen');
	//socket.emit('join-room, room'); // room is a unique room name
	console.log(socket.id);
	//This is part of a callback
	// socket.emit('join-room', room, message => {
	// 	console.log(message);
	// })
});

// socket.on('receive', (message) => {
// 	console.log('message');
// });

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/startNew' element={<StartNew />} />
				<Route path='/JoinGame' element={<JoinGame />} />
				<Route path='/gameArea/:type' element={<GameArea />} />
			</Routes>
		</>
	);
}

export default App;
