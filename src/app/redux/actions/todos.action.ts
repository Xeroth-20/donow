export const addTodo: TodosActionCreator = (payload) => {
	return { type: 'ADD_TODO', payload };
};

export const removeTodo: TodosActionCreator = (payload) => {
	return { type: 'REMOVE_TODO', payload };
};
