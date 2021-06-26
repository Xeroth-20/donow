import { combineReducers } from 'redux';
import user from './user.reducer';
import users from './users.reducer';
import todos from './todos.reducer';
import todoItems from './todo-items.reducer';
import logged from './logged.reducer';

export default combineReducers<Store>({
	user,
	users,
	todos,
	todoItems,
	logged,
});
