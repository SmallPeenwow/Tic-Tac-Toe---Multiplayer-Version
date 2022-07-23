// import { io } from 'Socket.io-client';
import { createContext } from 'react';
import { io } from 'socket.io-client';

export const socket = io('http://localhost:1338');
const SocketContext = createContext(socket);

export default SocketContext;
