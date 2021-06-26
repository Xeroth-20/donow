import { Reducer } from 'redux';

const loggedReducer: Reducer<boolean, LoggedAction> = (
	state = false,
	action
) => {
	const KEY = 'logged';
	switch (action.type) {
		case 'LOGIN':
			localStorage.setItem(KEY, 'true');
			return true;
		case 'LOGOUT':
			localStorage.setItem(KEY, 'false');
			return false;
		default:
			const logged = localStorage.getItem(KEY);
			return logged ? logged === 'true' : state;
	}
};

export default loggedReducer;
