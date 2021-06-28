import React, { FunctionComponent, MouseEventHandler } from 'react';

interface IconButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	color?: 'accent' | 'flat';
	type?: 'button' | 'submit' | 'reset';
	icon?: string;
}

const IconButton: FunctionComponent<IconButtonProps> = ({
	color,
	type,
	icon,
	onClick,
}) => {
	const classes = `btn-icon btn-icon-${color}`;
	return (
		<button className={classes} type={type} onClick={onClick}>
			<i className={icon} />
		</button>
	);
};

IconButton.defaultProps = {
	color: 'accent',
	type: 'button',
};

export default IconButton;
