import React, {
	useState,
	FunctionComponent,
	ReactNode,
	PropsWithChildren,
	MouseEventHandler,
} from 'react';

interface MenuButtonProps {
	text: ReactNode;
}

const MenuButton: FunctionComponent<PropsWithChildren<MenuButtonProps>> = ({
	text,
	children,
}) => {
	const [open, setOpen] = useState<boolean>(false);

	const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
		e.preventDefault();
		setOpen((prevState) => !prevState);
	};

	return (
		<div
			className="menu-button"
			tabIndex={0}
			onClick={handleClick}
			onBlur={() => setOpen(false)}
		>
			{text}
			{open && children}
		</div>
	);
};

export default MenuButton;
