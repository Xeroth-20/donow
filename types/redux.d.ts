interface Store {
	user: User;
	users: Users;
	todos: Todos;
	todoItems: TodoItems;
	logged: boolean;
}

/* User */
type UserActionType = 'SET_USER' | 'REMOVE_USER';

interface UserAction {
	type: UserActionType;
	payload?: IUser;
}

interface UserActionCreator {
	(payload?: IUser): UserAction;
}

/* Users */
type UsersActionType = 'ADD_USER';

interface UsersAction {
	type: UsersActionType;
	payload: IUser;
}

interface UsersActionCreator {
	(payload: IUser): UsersAction;
}

/* Todos */
type TodosActionType = 'ADD_TODO' | 'UPDATE_TODO' | 'REMOVE_TODO';

interface TodosActionPayload {
	userId: string;
	todoId?: string;
	todo?: ITodo;
}

interface TodosAction {
	type: TodosActionType;
	payload: TodosActionPayload;
}

interface TodosActionCreator {
	(payload: TodosActionPayload): TodosAction;
}

/* Todo items */
type TodoItemsActionType =
	| 'ADD_TODO_ITEM'
	| 'UPDATE_TODO_ITEM'
	| 'REMOVE_TODO_ITEM';

interface TodoItemsActionPayload {
	todoId: string;
	todoItem?: ITodoItem;
	todoItemId?: string;
}

interface TodoItemsAction {
	type: TodoItemsActionType;
	payload: TodoItemsActionPayload;
}

interface TodoItemsActionCreator {
	(payload: TodoItemsActionPayload): TodoItemsAction;
}

/* Logged */
type LoggedActionType = 'LOGIN' | 'LOGOUT';

interface LoggedAction {
	type: LoggedActionType;
}

interface LoggedActionCreator {
	(): LoggedAction;
}
