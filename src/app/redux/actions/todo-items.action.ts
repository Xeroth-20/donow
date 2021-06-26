export const addTodoItem: TodoItemsActionCreator = (payload) => {
	return { type: 'ADD_TODO_ITEM', payload };
};

export const updateTodoItem: TodoItemsActionCreator = (payload) => {
	return { type: 'UPDATE_TODO_ITEM', payload };
};

export const removeTodoItem: TodoItemsActionCreator = (payload) => {
	return { type: 'REMOVE_TODO_ITEM', payload };
};
