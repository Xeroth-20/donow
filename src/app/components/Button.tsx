import React, {
	FunctionComponent,
	PropsWithChildren,
	MouseEventHandler,
} from 'react';

type Size = 'sz-sm' | 'sz-md';
type Breakpoint = 'br-sm' | 'br-md' | 'br-lg' | 'br-xl';
type ButtonVariant = Size | `${Breakpoint}-${Size}`;

interface ButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	color?: 'accent' | 'flat' | 'gray';
	variant?: ButtonVariant | ButtonVariant[];
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
	const variants =
		typeof variant === 'string'
			? `btn-${variant}`
			: variant!.reduce((acc, curr) => {
					return `${acc} btn-${curr}`.trim();
			  }, '');
	const classes = `btn ${variants} btn-${color!} ${
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
	variant: 'sz-md',
	type: 'button',
	block: false,
};

export default Button;
