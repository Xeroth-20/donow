import { Reducer } from 'redux';

const todoItems: Reducer<TodoItems, TodoItemsAction> = (
	state = {},
	{ type, payload }
) => {
	const KEY = 'todoItems';
	switch (type) {
		case 'ADD_TODO_ITEM':
			const addTodoItem = () => {
				const todoItems = state[payload.todoId] || [];
				if (payload.todoItem) {
					todoItems.push(payload.todoItem);
				}

				const newState = { ...state, [payload.todoId]: [...todoItems] };
				localStorage.setItem(KEY, JSON.stringify(newState));

				return newState;
			};
			return addTodoItem();

		case 'UPDATE_TODO_ITEM':
			const updateTodoItem = () => {
				const todoItems = state[payload.todoId] || [];
				if (payload.todoItem) {
					const index = todoItems.findIndex(
						(todoItem) => todoItem.id === payload.todoItem!.id
					);

					if (index > -1) {
						const newState = {
							...state,
							[payload.todoId]: ([] as ITodoItem[]).concat(
								todoItems.slice(0, index),
								[payload.todoItem],
								todoItems.slice(index + 1)
							),
						};
						localStorage.setItem(KEY, JSON.stringify(newState));

						return newState;
					}
				}

				return state;
			};
			return updateTodoItem();

		case 'REMOVE_TODO_ITEM':
			const removeTodoItem = () => {
				const todoItems = state[payload.todoId] || [];
				const filteredTodoItems = payload.todoItemId
					? todoItems.filter((todoItem) => todoItem.id !== payload.todoItemId)
					: todoItems;
				const newState = { ...state, [payload.todoId]: filteredTodoItems };
				localStorage.setItem(KEY, JSON.stringify(newState));

				return newState;
			};
			return payload.todoItemId ? removeTodoItem() : state;

		default:
			const todoItems = localStorage.getItem(KEY);
			return todoItems ? JSON.parse(todoItems) : state;
	}
};

export default todoItems;
