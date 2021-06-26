import { Reducer } from 'redux';

const user: Reducer<User, UserAction> = (state = {}, { type, payload }) => {
	const KEY = 'user';
	switch (type) {
		case 'SET_USER':
			const newState = payload || state;
			localStorage.setItem(KEY, JSON.stringify(newState));

			return newState;
		case 'REMOVE_USER':
			localStorage.setItem(KEY, '{}');
			return {};
		default:
			const user = localStorage.getItem(KEY);
			return user ? JSON.parse(user) : state;
	}
};

export default user;
