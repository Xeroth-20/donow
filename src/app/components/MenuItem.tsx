import React, { FunctionComponent, PropsWithChildren } from 'react';

interface MenuItemProps {
	onClick?: () => void;
}

const MenuItem: FunctionComponent<PropsWithChildren<MenuItemProps>> = ({
	onClick,
	children,
}) => {
	return (
		<div className="menu-item">
			<div
				className="menu-item-btn"
				onClick={(e) => {
					e.preventDefault();
					if (onClick) onClick();
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default MenuItem;
