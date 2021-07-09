import React, {
	useContext,
	FunctionComponent,
	ChangeEventHandler,
} from 'react';
import { useDispatch } from 'react-redux';
import { updateTodoItem } from './../redux/actions/todo-items.action';
import TodoContext from './TodoContext';
import TextArea from './TextArea';
import TaskMenuButton from './TaskMenuButton';

export interface TodoItemProps {
	item: ITodoItem;
}

const TodoItem: FunctionComponent<TodoItemProps> = ({ item }) => {
	const todo = useContext(TodoContext) as ITodo;
	const dispatch = useDispatch();

	const handleDescriptionChange: ChangeEventHandler<HTMLTextAreaElement> = ({
		target,
	}) => {
		dispatch(
			updateTodoItem({
				todoId: todo.id,
				todoItem: { ...item, description: target.value },
			})
		);
	};

	return (
		<div className="todo-item">
			<div className="description-container">
				<TextArea
					className="description"
					placeholder="Escribe una tarea"
					value={item.description}
					onChange={handleDescriptionChange}
				/>
			</div>
			<div className="menu-container">
				<TaskMenuButton item={item} />
			</div>
		</div>
	);
};

export default TodoItem;
