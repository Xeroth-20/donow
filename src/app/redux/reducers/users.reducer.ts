import { Reducer } from 'redux';

const users: Reducer<Users, UsersAction> = (state = {}, { type, payload }) => {
	const KEY = 'users';
	switch (type) {
		case 'ADD_USER':
			const userExists = Boolean(state[payload.username]);
			const newState = userExists
				? state
				: { ...state, [payload.username]: payload };
			localStorage.setItem(KEY, JSON.stringify(newState));

			return newState;
		default:
			const users = localStorage.getItem(KEY);
			return users ? JSON.parse(users) : state;
	}
};

export default users;
