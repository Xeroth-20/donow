import React, { useContext, useMemo, FunctionComponent } from 'react';
import TodoContext from './TodoContext';
import { BoardColumnProperties } from './BoardColumnContext';
import BoardColumn from './BoardColumn';

const boardColumns: BoardColumnProperties[] = [
	{
		color: 'orange',
		label: 'Por hacer',
		icon: 'bi-hexagon',
		value: 'TODO',
	},
	{ color: 'pink', label: 'Haciendo', icon: 'bi-hexagon-half', value: 'DOING' },
	{
		color: 'purple',
		label: 'Hechos',
		icon: 'bi-hexagon-fill',
		value: 'DONE',
	},
];

interface Tasks {
	TODO: ITodoItem[];
	DOING: ITodoItem[];
	DONE: ITodoItem[];
}

const Board: FunctionComponent = () => {
	const todo = useContext(TodoContext) as ITodoPopulated;
	const tasks = useMemo<Tasks>(() => {
		return todo.items.reduce<Tasks>(
			(acc, todoItem) => {
				if (todoItem.state === 'TODO') {
					acc.TODO.push(todoItem);
				} else if (todoItem.state === 'DOING') {
					acc.DOING.push(todoItem);
				} else if (todoItem.state === 'DONE') {
					acc.DONE.push(todoItem);
				}

				return acc;
			},
			{
				TODO: [],
				DOING: [],
				DONE: [],
			}
		);
	}, [todo]);

	return (
		<div className="board">
			{boardColumns.map((boardColumn, i, arr) => {
				const others = arr.slice(0, i).concat(arr.slice(i + 1));
				return (
					<div key={boardColumn.value} className="board-column-container">
						<BoardColumn
							context={{
								current: boardColumn,
								others,
							}}
							items={tasks[boardColumn.value]}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Board;
