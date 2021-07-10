import { Reducer } from 'redux';

const KEY = 'user';
const getUserLocalStorage = (): IUser | undefined => {
	const user = localStorage.getItem(KEY);
	return user && JSON.parse(user);
};

const setUserLocalStorage = (user: User) => {
	localStorage.setItem(KEY, JSON.stringify(user));
};

const user: Reducer<User, UserAction> = (state = {}, { type, payload }) => {
	switch (type) {
		case 'SET_USER':
			const newState = payload || state;
			setUserLocalStorage(newState);

			return newState;

		case 'REMOVE_USER':
			setUserLocalStorage({});
			return {};

		default:
			const user = getUserLocalStorage();
			return user || state;
	}
};

export default user;
