type ValidationProps = {
	name: string;
	roomId: string;
};

export async function validationCheck({ name, roomId }: ValidationProps) {
	let valid: boolean;

	if (name.length !== 0 && roomId.length === 20) {
		valid = true;
	} else {
		valid = false;
	}

	return { valid };
}
