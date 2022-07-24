//import { socket } from '../App';

// const sockets =  socket.of('/').adapter.sockets(new Set());

// const s = socket.sockets.adapter.rooms

// TODO: need to grab room codes from server

type ValidationProps = {
	name: string;
	roomId: string;
	codeGenerate: string;
};

export function validationCheck({ name, roomId, codeGenerate }: ValidationProps) {
	let valid: boolean;

	let regex = new RegExp(`^${codeGenerate}$`);

	if (name.length !== 0 && roomId.length !== 0 && regex.test(roomId)) {
		valid = true;
	} else {
		valid = false;
	}

	return { valid };
}
