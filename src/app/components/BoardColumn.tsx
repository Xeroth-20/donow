import React, { FunctionComponent } from 'react';
import BoardColumnContext, { IBoardColumnContext } from './BoardColumnContext';
import TodoItem from './TodoItem';
import AddTaskButton from './AddTaskButton';

interface BoardColumnProps {
	items: ITodoItem[];
	context: IBoardColumnContext;
}

const BoardColumn: FunctionComponent<BoardColumnProps> = ({
	items,
	context,
}) => {
	return (
		<div className="board-column">
			<BoardColumnContext.Provider value={context}>
				<h3 className="board-column-name">
					<i className={`${context.current.icon} bcn-icon`}></i>
					<span>{context.current.label}</span>
				</h3>
				{items.map((item) => (
					<div key={item.id} className="todo-item-container">
						<TodoItem item={item} />
					</div>
				))}
				<AddTaskButton>Agregar tarea</AddTaskButton>
			</BoardColumnContext.Provider>
		</div>
	);
};

export default BoardColumn;
