import { Reducer } from 'redux';

const KEY = 'users';
const getUsersLocalStorage = (): Users | undefined => {
	const users = localStorage.getItem(KEY);
	return users && JSON.parse(users);
};

const setUsersLocalStorage = (users: Users) => {
	localStorage.setItem(KEY, JSON.stringify(users));
};

const users: Reducer<Users, UsersAction> = (state = {}, { type, payload }) => {
	switch (type) {
		case 'ADD_USER':
			const addUser = () => {
				const userExists = Boolean(state[payload.username]);
				const newState = userExists
					? state
					: { ...state, [payload.id]: payload };
				setUsersLocalStorage(newState);

				return newState;
			};
			return addUser();

		case 'UPDATE_USER':
			const updateUser = () => {
				const userExists = Boolean(state[payload.id]);
				const newState = userExists
					? { ...state, [payload.id]: payload }
					: state;
				setUsersLocalStorage(newState);

				return newState;
			};

			return updateUser();

		default:
			const users = getUsersLocalStorage();
			return users || state;
	}
};

export default users;
