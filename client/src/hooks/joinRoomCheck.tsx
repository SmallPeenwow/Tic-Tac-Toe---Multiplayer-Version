//import { socket } from '../App';

// const sockets =  socket.of('/').adapter.sockets(new Set());

// const s = socket.sockets.adapter.rooms

// TODO: need to grab room codes from server

type ValidationProps = {
	name: string;
	roomId: string;
};

export function validationCheck({ name, roomId }: ValidationProps) {
	let valid: boolean;

	if (name.length !== 0 && roomId.length !== 0 && roomId.length === 20) {
		valid = true;
	} else {
		valid = false;
	}

	return { valid };
}
