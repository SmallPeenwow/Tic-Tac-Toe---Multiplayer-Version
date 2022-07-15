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

	// This displays message to user
	socket.on('connect-user', (message) => {
		socket.broadcast.emit('receive', message);
	});

	//Whenever someone disconnects this piece of code executed
	socket.on('disconnect', function () {
		console.log('A user disconnected');
	});
});

http.listen(1338, function () {
	console.log('listening on port :1338');
});
