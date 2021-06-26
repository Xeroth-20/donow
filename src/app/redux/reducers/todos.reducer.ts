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
