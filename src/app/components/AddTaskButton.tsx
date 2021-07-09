import React, { useContext, FunctionComponent, PropsWithChildren } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoItem } from './../redux/actions/todo-items.action';
import TodoContext from './TodoContext';
import BoardColumnContext from './BoardColumnContext';

const AddTaskButton: FunctionComponent<PropsWithChildren<{}>> = ({
	children,
}) => {
	const todo = useContext(TodoContext) as ITodoPopulated;
	const boardColumnContext = useContext(BoardColumnContext);
	const dispatch = useDispatch();

	const handleAddTaskClick = () => {
		const task: ITodoItem = {
			id: Date.now().toString(16),
			description: '',
			state: boardColumnContext.current.value,
			creationDate: new Date(),
		};
		dispatch(addTodoItem({ todoId: todo.id, todoItem: task }));
	};

	return (
		<button
			className="add-task-button"
			type="button"
			onClick={handleAddTaskClick}
		>
			<i className="bi-plus-circle atb-icon" />
			<span>{children}</span>
		</button>
	);
};

export default AddTaskButton;
