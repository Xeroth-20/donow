import React, { createContext } from 'react';

export interface BoardColumnProperties {
	color: 'default' | 'orange' | 'pink' | 'purple';
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
		color: 'default',
		label: 'Por hacer',
		icon: 'hexagon',
		value: 'TODO',
	},
});
