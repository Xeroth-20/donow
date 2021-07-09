import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from './../redux/actions/logged.action';
import { setCurrentUser } from './../redux/actions/user.action';
import Button from './Button';

const LogoutButton: FunctionComponent = () => {
	const dispatch = useDispatch();

	const handleLogoutClick = () => {
		dispatch(setCurrentUser());
		dispatch(logout());
	};

	return (
		<Button
			type="button"
			color="gray"
			variant="sz-sm"
			onClick={handleLogoutClick}
		>
			<i className="bi-door-open" /> Salir
		</Button>
	);
};

export default LogoutButton;
