import React, { useContext, useMemo, FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import todoStats from './../functions/todo-stats';
import TodoContext from './TodoContext';
import TodoStats from './TodoStats';

const TodoCard: FunctionComponent = () => {
	const user = useSelector<Store, IUser>((state) => state.user as IUser);
	const todo = useContext(TodoContext) as ITodoPopulated;
	const stats = useMemo(() => todoStats(todo), [todo.items]);

	return (
		<div className="todo-card">
			<div className="todo-main">
				<span className="user-name">{user.username}</span>
				<span className="todo-name">{todo.name}</span>
				<div className="stats">
					<div className="todo-stats-container">
						<TodoStats variant="small">Por hacer {stats.todo}</TodoStats>
					</div>
					<div className="todo-stats-container">
						<TodoStats variant="small">Haciendo {stats.doing}</TodoStats>
					</div>
					<div className="todo-stats-container">
						<TodoStats variant="small">Hechos {stats.done}</TodoStats>
					</div>
				</div>
			</div>
			<div className="todo-created-at">
				Lista creada el {new Date(todo.creationDate).toLocaleDateString()}
			</div>
		</div>
	);
};

export default TodoCard;
