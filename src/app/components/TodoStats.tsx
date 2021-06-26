import React, { FunctionComponent, PropsWithChildren } from 'react';

interface TodoStatsProps {
	variant?: 'default' | 'small';
}

const TodoStats: FunctionComponent<PropsWithChildren<TodoStatsProps>> = ({
	variant,
	children,
}) => {
	const classes = `todo-stats ${variant ? variant : ''}`.trim();
	return <div className={classes}>{children}</div>;
};

TodoStats.defaultProps = {
	variant: 'default',
};

export default TodoStats;
