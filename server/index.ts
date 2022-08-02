const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
	cors: {
		origin: ['http://localhost:1337'],
	},
});

app.get('/', function (req: any, res: any) {
	res.send('Howdy!');
});

//Whenever someone connects this gets executed
io.on('connection', function (socket: any) {
	console.log('A user connected');
	console.log(socket.id);

	// This displays message to user
	// socket.on('connect-user', (message: any, room: any) => {
	// 	// if (room !== '') {
	// 	// 	socket.to(room).emit('message', message);
	// 	// }
	// 	console.log(message);
	// 	//socket.broadcast.emit('receive', message);
	// });

	// This will be for when the users join the same room
	// socket.on('join-room', (room: string, callback: any) => {
	// 	socket.join(room);
	// 	callback(`Joined ${room}`); // sends message back of room joined // sends back code functions
	// });

	socket.on('create-room', (room: string) => {
		socket.join(room);
		console.log(room);
	});

	//callBack: function // should check the room number that has been sent to it
	socket.on('check-room', async (room: string, callback: any) => {
		// if (!(socket.rooms.size <= 2)) {
		// 	callback(false);
		// }

		// Converts room to string because comes as an object
		let valueOne = room === null && undefined ? 'null' : Object.values(room)[0];

		// Checks if there are 2 players are in a room together and sends back false if there are 2 players
		socket.adapter.rooms.forEach((value: any, key: any) => {
			if (key === valueOne && value.size === 2) {
				callback(false);
			}
		});

		// const socketsId = await fetchUsers(valueOne); // Possibly could be used
		// console.log('socketId', socketsId.rooms);
		// for (const s of socketsId) {
		// 	console.log(s.id);
		// 	console.log(s.rooms);
		// }
	});

	socket.on('join-room', (roomId: string) => {
		if (socket.rooms.size <= 2) {
			socket.join(roomId);
			console.log(roomId);
			console.log('yes');
			console.log(socket.rooms.size); // use this to make a check function
		} else {
			console.log(roomId);
			console.log('no');
			console.log(socket.rooms.size); // use this to make a check function
		}
	});

	socket.on('leave-room', (roomId: string) => {
		socket.leave(roomId);
		console.log(roomId);
	});

	//Whenever someone disconnects this piece of code executed
	socket.on('disconnect', function () {
		console.log('A user disconnected');
	});
});

const fetchUsers = async (room: any) => {
	// Test this again because of string conversion
	const sockets = await io.in(room).fetchSockets();
	//return await io.fetchSockets();
	return sockets;
};

const fetchClients = (room: any) => {
	// Test this again because of string conversion
	return io.of(`/${room}`).adapter.rooms;
};

http.listen(1338, function () {
	console.log('listening on port :1338');
});
