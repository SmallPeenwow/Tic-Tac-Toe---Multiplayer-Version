import { useState } from 'react';
import { socket } from '../App';

// const sockets =  socket.of('/').adapter.sockets(new Set());

// const s = socket.sockets.adapter.rooms

// TODO: need to grab room codes from server

interface ValidationProps {
	name: string;
	roomId: string;
}

export function validationCheck({ name, roomId }: ValidationProps) {
	let valid: boolean;
	let roomSpace: boolean = true;

	socket.emit('check-room', { room: roomId }, (response: any) => {
		checkRoom(response);
	});

	const checkRoom = (response: any) => {
		roomSpace = response;
	};

	if (name.length !== 0 && roomId.length !== 0 && roomId.length === 20 && roomSpace) {
		valid = true;
	} else {
		valid = false;
		//message = 'Not able to join game because already two players';
	}

	return { valid, roomSpace };
}
