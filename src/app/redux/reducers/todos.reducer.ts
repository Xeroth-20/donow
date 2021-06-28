import { Reducer } from 'redux';

const todos: Reducer<Todos, TodosAction> = (state = {}, { type, payload }) => {
	const KEY = 'todos';
	switch (type) {
		case 'ADD_TODO':
			const addTodo = () => {
				const todos: ITodo[] = state[payload.userId] || [];
				if (payload.todo) {
					todos.push(payload.todo);
				}

				const newState = { ...state, [payload.userId]: todos };
				localStorage.setItem(KEY, JSON.stringify(newState));

				return newState;
			};
			return addTodo();

		case 'UPDATE_TODO':
			const updateTodo = () => {
				const todos = state[payload.userId] || [];
				if (payload.todo) {
					const index = todos.findIndex((todo) => todo.id === payload.todo!.id);
					if (index > -1) {
						const newState = {
							...state,
							[payload.userId]: ([] as ITodo[]).concat(
								todos.slice(0, index),
								[payload.todo],
								todos.slice(index + 1)
							),
						};
						localStorage.setItem(KEY, JSON.stringify(newState));

						return newState;
					}
				}

				return state;
			};
			return updateTodo();

		case 'REMOVE_TODO':
			const removeTodo = () => {
				const todos: ITodo[] = state[payload.userId] || [];
				let filteredTodos = payload.todoId
					? todos.filter((todo) => todo.id !== payload.todoId)
					: todos;
				const newState = { ...state, [payload.userId]: filteredTodos };
				localStorage.setItem(KEY, JSON.stringify(newState));

				return newState;
			};

			return payload.todoId ? removeTodo() : state;

		default:
			const todos = localStorage.getItem(KEY);
			return todos ? JSON.parse(todos) : state;
	}
};

export default todos;
