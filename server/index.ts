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

	//callBack: function // should check the room number that has been sent to it
	socket.on('check-room', (room: string, callback: any) => {
		let roomSpace = checkRoomFunction(socket, room);
		callback(roomSpace);
	});

	socket.on('join-room', (roomId: string) => {
		socket.join(roomId);

		let joined = returnPlayerJoined(socket, roomId); // Needs to return false when two players in room

		io.emit('joined', joined);
	});

	// Must either make it the second player leaves when player one leaves
	socket.on('leave-room', (roomId: string, playerType: string) => {
		socket.leave(roomId);

		let leftGame = returnPlayerJoined(socket, roomId); // Needs to return true if there is only 1 player in the room
		console.log(socket.adapter.rooms);

		// This makes all the players leave and the room not exist
		if (playerType === 'startedGame') {
			io.in(roomId).socketsLeave(roomId);
		}

		io.emit('left-room', leftGame);
	});

	// Return the X or O value
	socket.on('board-function', (room: string, boardArray: Array<string>[], isTurn: string, gameEnded: boolean) => {
		socket.to(room).emit('board-turn', boardArray, isTurn, gameEnded);
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

// Checks to see when player 2 joins the room
const returnPlayerJoined = (socket: any, roomId: string) => {
	let joined = false;

	socket.adapter.rooms.forEach((value: any, key: any) => {
		if (key === roomId && value.size === 2) {
			joined = true;
		}
	});

	return joined;
};

http.listen(1338, function () {
	console.log('listening on port :1338');
});
