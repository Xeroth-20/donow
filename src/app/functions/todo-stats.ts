export interface Stats {
	todo: number;
	doing: number;
	done: number;
}

const todoStats = (todo: ITodoPopulated): Stats => {
	return todo.items.reduce<Stats>(
		(acc, item) => {
			if (item.state === 'TODO') {
				acc.todo += 1;
			} else if (item.state === 'DOING') {
				acc.doing += 1;
			} else if (item.state === 'DONE') {
				acc.done += 1;
			}

			return acc;
		},
		{ todo: 0, doing: 0, done: 0 }
	);
};

export default todoStats;
