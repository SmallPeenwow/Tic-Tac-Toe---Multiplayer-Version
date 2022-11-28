import { Routes, Route } from 'react-router-dom';
import GameArea from './pages/GameArea';
import JoinGame from './pages/JoinGame';
import LandingPage from './pages/LandingPage';
import StartNew from './pages/StartNew';
import { io } from 'Socket.io-client';

export const socket = io('http://localhost:1338');
socket.on('connect', () => {
	console.log(socket.io + ' io');
});

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/startNew' element={<StartNew />} />
				<Route path='/JoinGame' element={<JoinGame />} />
				<Route path='/gameArea/:id/:type' element={<GameArea />} />
			</Routes>
		</>
	);
}

export default App;
