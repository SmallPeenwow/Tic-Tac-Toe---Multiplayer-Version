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
	socket.on('check-room', (room: string, callback: any) => {
		if (!(socket.rooms.size <= 2)) {
			callback(false);
		}
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

http.listen(1338, function () {
	console.log('listening on port :1338');
});
