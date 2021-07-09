import React, { useMemo, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import todoStats from './../functions/todo-stats';
import TodoStats from './TodoStats';

interface TodoPreviewProps {
	todo: ITodoPopulated;
}

const TodoPreview: FunctionComponent<TodoPreviewProps> = ({ todo }) => {
	const stats = useMemo(() => todoStats(todo), [todo.items]);

	return (
		<div className="todo-preview">
			<div className="todo-preview-header">
				<div className="todo-preview-title">
					<Link className="todo-preview-link" to={`/todos/${todo.id}`}>
						{todo.name}
					</Link>
				</div>
				<div className="todo-created-at">
					Creado el {new Date(todo.creationDate).toLocaleDateString()}
				</div>
			</div>
			<div className="todo-preview-body">
				<TodoStats>
					<i className="bi-hexagon" /> {stats.todo}
				</TodoStats>
				<TodoStats>
					<i className="bi-hexagon-half" /> {stats.doing}
				</TodoStats>
				<TodoStats>
					<i className="bi-hexagon-fill" /> {stats.done}
				</TodoStats>
			</div>
		</div>
	);
};

export default TodoPreview;
