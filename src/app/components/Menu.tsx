import React, { FunctionComponent, PropsWithChildren } from 'react';

interface MenuProps {
	side: 'top' | 'right' | 'bottom' | 'left';
}

const Menu: FunctionComponent<PropsWithChildren<MenuProps>> = ({
	side,
	children,
}) => {
	return <div className="menu">{children}</div>;
};

export default Menu;
