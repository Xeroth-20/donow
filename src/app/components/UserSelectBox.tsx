import React, { useState, FunctionComponent, MouseEventHandler } from 'react';
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
			unselect = userSelected.username === user.username;
		}

		setUserSelected(unselect ? null : user);

		if (onUserSelect) {
			onUserSelect(unselect ? null : user);
		}
	};

	return (
		<div className="user-select-box">
			{users.map((user) => {
				const selected =
					userSelected !== null && userSelected.username === user.username;
				const classes = `usb-item ${selected && 'selected'}`.trim();

				return (
					<div
						key={user.username}
						className={classes}
						onClick={createUsbItemSelectHandler(user)}
					>
						{user.username}
					</div>
				);
			})}
		</div>
	);
};

export default UserSelectBox;
