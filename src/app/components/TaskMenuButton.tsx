import React, { useContext, FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import {
	updateTodoItem,
	removeTodoItem,
} from './../redux/actions/todo-items.action';
import TodoContext from './TodoContext';
import BoardColumnContext from './BoardColumnContext';
import MenuButton from './MenuButton';
import Menu from './Menu';
import MenuItem from './MenuItem';

interface TaskMenuButtonProps {
	item: ITodoItem;
}

const TaskMenuButton: FunctionComponent<TaskMenuButtonProps> = ({ item }) => {
	const todo = useContext(TodoContext) as ITodo;
	const { others } = useContext(BoardColumnContext);
	const dispatch = useDispatch();

	const createStateChangeHandler = (newState: ITodoItemState) => () => {
		dispatch(
			updateTodoItem({
				todoId: todo.id,
				todoItem: { ...item, state: newState },
			})
		);
	};

	const handleRemoveClick = () => {
		dispatch(removeTodoItem({ todoId: todo.id, todoItemId: item.id }));
	};

	const text = <i className="bi-three-dots-vertical"></i>;

	return (
		<MenuButton text={text}>
			<Menu side="right">
				{others &&
					others.map((boardColumn) => (
						<MenuItem
							key={boardColumn.value}
							onClick={createStateChangeHandler(boardColumn.value)}
						>
							<i className={boardColumn.icon} /> Mover a{' '}
							{boardColumn.label.toLowerCase()}
						</MenuItem>
					))}
				<MenuItem onClick={handleRemoveClick}>
					<i className="bi-trash"></i> Remover
				</MenuItem>
			</Menu>
		</MenuButton>
	);
};

export default TaskMenuButton;
