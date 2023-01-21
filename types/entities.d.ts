interface IUser {
	id: string;
	username: string;
	signupDate: Date;
}

interface ITodoItem {
	id: string;
	description: string;
	state: ITodoItemState;
	creationDate: Date;
}

interface ITodo {
	id: string;
	name: string;
	creationDate: Date;
}

interface ITodoPopulated extends ITodo {
	items: ITodoItem[];
}

type ITodoItemState = 'TODO' | 'DOING' | 'DONE';

type User = IUser | {};

interface Users {
	[key: string]: IUser;
}

interface Todos {
	[key: string]: ITodo[];
}

interface TodoItems {
	[key: string]: ITodoItem[];
}
