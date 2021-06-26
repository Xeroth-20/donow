import React, { createContext } from 'react';

export interface BoardColumnProperties {
	label: string;
	icon: string;
	value: ITodoItemState;
}

export interface IBoardColumnContext {
	current: BoardColumnProperties;
	others?: BoardColumnProperties[];
}

export default createContext<IBoardColumnContext>({
	current: {
		label: 'Por hacer',
		icon: 'hexagon',
		value: 'TODO',
	},
});
