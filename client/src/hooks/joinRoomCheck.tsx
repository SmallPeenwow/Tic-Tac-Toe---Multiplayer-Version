import { socket } from '../App';

// const sockets =  socket.of('/').adapter.sockets(new Set());

// const s = socket.sockets.adapter.rooms

type ValidationProps = {
	name: string;
	roomId: string;
};

export function validationCheck({ name, roomId }: ValidationProps) {
	let isValid: boolean;

	if (name.length !== 0 && roomId.length !== 0 && roomId.match(/^this must be code for socket connection$/)) {
		isValid = true;
	} else {
		isValid = false;
	}

	return { isValid };
}
