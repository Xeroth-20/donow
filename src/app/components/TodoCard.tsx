import React, { useState, useContext, useMemo, FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import todoStats from './../functions/todo-stats';
import TodoContext from './TodoContext';
import TodoStats from './TodoStats';
import NewTodoNameModal from './NewTodoNameModal';
import IconButton from './IconButton';

const TodoCard: FunctionComponent = () => {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const user = useSelector<Store, IUser>((state) => state.user as IUser);
	const todo = useContext(TodoContext) as ITodoPopulated;
	const stats = useMemo(() => todoStats(todo), [todo.items]);

	return (
		<div className="todo-card">
			{openModal && <NewTodoNameModal close={() => setOpenModal(false)} />}
			<div className="todo-info">
				<div className="todo-info-header">
					<div className="user-name">{user.username}</div>
					<div className="todo-created-at">
						Lista creada el {new Date(todo.creationDate).toLocaleDateString()}
					</div>
				</div>
				<div className="todo-main">
					<div className="todo-title">
						<div className="todo-name">{todo.name}</div>
						<IconButton
							type="button"
							color="flat"
							icon="bi-pencil-fill"
							onClick={() => setOpenModal(true)}
						/>
					</div>
					<div className="stats">
						<div className="todo-stats-container">
							<TodoStats variant="small">
								<i className="bi-hexagon" /> {stats.todo}
							</TodoStats>
						</div>
						<div className="todo-stats-container">
							<TodoStats variant="small">
								<i className="bi-hexagon-half" /> {stats.doing}
							</TodoStats>
						</div>
						<div className="todo-stats-container">
							<TodoStats variant="small">
								<i className="bi-hexagon-fill" /> {stats.done}
							</TodoStats>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodoCard;
