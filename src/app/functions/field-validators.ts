export const validateUserName = (
	username: string,
	users: IUser[] | null
): string | null => {
	if (!username) {
		return 'El nombre de usuario no puede estar vacio.';
	} else if (/\s/g.test(username)) {
		return 'Los espacios en blanco no están permitidos.';
	} else if (!/^[a-z0-9áéíóú#$%&\(\)*_\+-]*$/i.test(username)) {
		return 'Simbolos permitidos (# $ - % & ( ) * _ +).';
	} else if (username.length < 3) {
		return 'Mínimo de cáracteres 3.';
	} else if (username.length > 12) {
		return 'Máximo de cáracteres 12.';
	} else if (users && users.some((user) => user.username === username)) {
		return 'El nombre de usuario ya existe.';
	}

	return null;
};

export const validateTodoName = (todoname: string): string | null => {
	if (!todoname.trim()) {
		return 'El nombre de la lista no puede estar vacia.';
	} else if (todoname.trim().length >= 50) {
		return `El máximo de carácteres es 50. Caracteres actuales ${
			todoname.trim().length
		}`;
	}

	return null;
};
