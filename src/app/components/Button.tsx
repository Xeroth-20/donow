import React, {
	FunctionComponent,
	PropsWithChildren,
	MouseEventHandler,
} from 'react';

interface ButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	color?: 'accent' | 'flat' | 'gray';
	variant?: 'sm' | 'md';
	type?: 'button' | 'submit' | 'reset';
	block?: boolean;
}

const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
	onClick,
	color,
	variant,
	type,
	block,
	children,
}) => {
	const classes = `btn btn-${variant!} btn-${color!} ${
		block ? 'btn-block' : ''
	}`.trim();

	return (
		<button className={classes} type={type} onClick={onClick}>
			{children}
		</button>
	);
};

Button.defaultProps = {
	color: 'accent',
	variant: 'md',
	type: 'button',
	block: false,
};

export default Button;
