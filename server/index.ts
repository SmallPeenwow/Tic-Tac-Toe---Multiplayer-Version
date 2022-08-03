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

	socket.on('create-room', (room: string) => {
		socket.join(room);
	});

	//callBack: function // should check the room number that has been sent to it
	socket.on('check-room', (room: string, callback: any) => {
		let roomSpace = checkRoomFunction(socket, room);
		callback(roomSpace);
	});

	socket.on('join-room', (roomId: string) => {
		socket.join(roomId);
	});

	// SOmething for the board game to send back response
	socket.on('join', (roomId: string, callback: any) => {
		socket.join(roomId);
		let playersJoin: boolean = false;

		let room = roomId === null && undefined ? 'null' : Object.values(roomId)[0];

		socket.adapter.rooms.forEach((value: any, key: any) => {
			if (key === room && value.size >= 2) {
				playersJoin = true;
			}
		});

		callback(playersJoin);
	});

	// TODO: Must test this to see if works
	socket.on('leave-room', (roomId: string) => {
		socket.leave(roomId);
		console.log('Left');
	});

	//Whenever someone disconnects this piece of code executed
	socket.on('disconnect', function () {
		console.log('A user disconnected');
	});
});

const checkRoomFunction = (socket: any, room: string) => {
	let roomSpace = true;

	// Converts room to string because comes as an object
	let valueOne = room === null && undefined ? 'null' : Object.values(room)[0];

	// Checks if there are 2 players are in a room together and sends back false if there are 2 players
	socket.adapter.rooms.forEach((value: any, key: any) => {
		if (key === valueOne && value.size >= 2) {
			roomSpace = false;
		}
	});

	return roomSpace;
};

//?? Could be used actually
// const getRoomIdString = (roomId: string) => {
// 	// Converts room to string because comes as an object
// 	let id = roomId === null && undefined ? 'null' : Object.values(roomId)[0];
// 	return id;
// };

http.listen(1338, function () {
	console.log('listening on port :1338');
});
