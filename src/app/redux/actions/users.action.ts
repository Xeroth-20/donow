export const addUser: UsersActionCreator = (payload) => {
	return { type: 'ADD_USER', payload };
};

export const updateUser: UsersActionCreator = (payload) => {
	return { type: 'UPDATE_USER', payload };
};
