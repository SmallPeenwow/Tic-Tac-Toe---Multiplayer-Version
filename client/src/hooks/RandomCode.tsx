export function GeneratorRoomCode() {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	let codeGenerated: string = '';

	for (let i = 0; i < 20; i++) {
		codeGenerated += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return { codeGenerated };
}

// The code needs to be set to both start and join game
