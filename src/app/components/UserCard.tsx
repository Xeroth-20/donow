import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

const UserCard: FunctionComponent = () => {
	const user = useSelector<Store, User>((state) => state.user) as IUser;

	return (
		<div className="user-card">
			<div className="img-container">
				<img
					className="user-img"
					src="/assets/imgs/golden-retriever.jpg"
					alt="User image"
				/>
			</div>
			<div className="user-main">
				<span className="user-welcome">Bienvenido</span>
				<span className="user-name">{user.username}</span>
			</div>
			<div className="user-created-at">
				Usuario registrado el {new Date(user.signupDate).toLocaleDateString()}
			</div>
		</div>
	);
};

export default UserCard;
