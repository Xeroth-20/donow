export const setCurrentUser: UserActionCreator = (payload) => {
	return { type: 'SET_USER', payload };
};

export const removeCurrentUser: UserActionCreator = () => {
	return { type: 'REMOVE_USER' };
};
