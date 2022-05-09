# Camryn Bowden Project - Tic Tac Toe (Multiplayer)
![main image](https://raw.githubusercontent.com/codedamn-projects/Tic-Tac-Toe-Multiplayer/master/designs/cover-image.png)

### Landing Page 
The maximum number of players is 2. So there can only exist two connections to the web socket (from player1 - server & player2 - server)

![home page](https://raw.githubusercontent.com/codedamn-projects/Tic-Tac-Toe-Multiplayer/master/designs/Landing%20Page%20%5BDesktop%5D.png)


### Start New
On clicking `Start New` the user is prompted to enter his name. On submitting a random room code is generated. The player-1 has to share the room code with player-2 to join the game. 

![name prompt](https://raw.githubusercontent.com/codedamn-projects/Tic-Tac-Toe-Multiplayer/master/designs/Player%201%20-%20Details.png)

On clicking on `Let's Go` the user is prompted to copy the room code and share it with player-2

![room code prompt](https://raw.githubusercontent.com/codedamn-projects/Tic-Tac-Toe-Multiplayer/master/designs/Player%201%20-%20Prompt.png)

### Join Game
Player 2 is supposed to join the game by clicking on `Join Game` the player-2 is prompted to Enter his name along with the room code

![Join Game for player 2](https://raw.githubusercontent.com/codedamn-projects/Tic-Tac-Toe-Multiplayer/master/designs/Player%202%20-%20Join%20Prompt.png)

## Backend Tasks

1. Creating a new room id when a new users starts a new game 
2. Temporarily storing the value in a file or in a object
3. Creating a web socket using socket.io (Reference : [Server API](https://socket.io/docs/v4/server-api/) & [Client API](https://socket.io/docs/v4/client-api/))
4. Making sure the socket connection is working properly
5. On completing the game and if a user clicks on `Play Again` button, the game data should be reset. 

## Technologies Used

1. Socket.io for web sockets
2. Tailwind CSS for User Interface
