import { socket } from '../App';

type ValidationProps = {
	name: string;
	roomId: string;
};

export async function validationCheck({ name, roomId }: ValidationProps) {
	let valid: boolean;
	let roomSpace: boolean = true;

	socket.emit('check-room', { room: roomId }, (response: boolean) => {
		//checkRoom(response);
		console.log(typeof response);
		roomSpace = response;
	});

	// const checkRoom = async (response: any) => {
	// 	roomSpace = response;
	// };

	if (name.length !== 0 && roomId.length === 20) {
		valid = true;
	} else {
		valid = false;
		//message = 'Not able to join game because already two players';
	}
	console.log(valid, roomSpace);
	return { valid, roomSpace };
}
