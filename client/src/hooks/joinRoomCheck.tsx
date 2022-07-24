import { socket } from '../App';

// const sockets =  socket.of('/').adapter.sockets(new Set());

// const s = socket.sockets.adapter.rooms

export function validationCheck(name: string, roodId: string) {
	if (name.length !== 0 && roodId.length !== 0 && roodId.match(/^this must be code for socket connection$/)) {
		return true;
	} else {
		return false;
	}
}
