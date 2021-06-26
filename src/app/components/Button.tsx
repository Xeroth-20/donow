import React, {
	FunctionComponent,
	PropsWithChildren,
	MouseEventHandler,
} from 'react';

interface ButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	color?: 'accent' | 'flat';
	type?: 'button' | 'submit' | 'reset';
	block?: boolean;
}

const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
	onClick,
	color,
	type,
	block,
	children,
}) => {
	const classes = `btn btn-${color!} ${block ? 'btn-block' : ''}`.trim();

	return (
		<button className={classes} type={type} onClick={onClick}>
			{children}
		</button>
	);
};

Button.defaultProps = {
	color: 'accent',
	type: 'button',
	block: false,
};

export default Button;
