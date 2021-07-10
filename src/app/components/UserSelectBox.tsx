import React, { useState, FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

interface UserSelectBoxProps {
	onUserSelect?: (user: IUser | null) => void;
}

const UserSelectBox: FunctionComponent<UserSelectBoxProps> = ({
	onUserSelect,
}) => {
	const [userSelected, setUserSelected] = useState<IUser | null>(null);
	const users = useSelector<Store, IUser[]>((state) => {
		return Object.values(state.users);
	});

	const createUsbItemSelectHandler = (user: IUser) => () => {
		let unselect = false;
		if (userSelected) {
			unselect = userSelected.id === user.id;
		}

		setUserSelected(unselect ? null : user);

		if (onUserSelect) {
			onUserSelect(unselect ? null : user);
		}
	};

	return (
		<div className="user-select-box">
			{users.length > 0 ? (
				users.map((user) => {
					const selected = userSelected !== null && userSelected.id === user.id;
					const classes = `usb-item ${selected ? 'selected' : ''}`.trim();

					return (
						<div
							key={user.id}
							className={classes}
							onClick={createUsbItemSelectHandler(user)}
						>
							{user.username}
						</div>
					);
				})
			) : (
				<p className="no-usb-item">No hay usuarios registrados.</p>
			)}
		</div>
	);
};

export default UserSelectBox;
