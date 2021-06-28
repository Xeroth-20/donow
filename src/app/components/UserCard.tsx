import React, { useState, FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import NewUserNameModal from './NewUserNameModal';
import IconButton from './IconButton';

const UserCard: FunctionComponent = () => {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const user = useSelector<Store, User>((state) => state.user) as IUser;

	return (
		<div className="user-card">
			{openModal && <NewUserNameModal close={() => setOpenModal(false)} />}
			<div className="img-container">
				<img
					className="user-img"
					src="/assets/imgs/golden-retriever.jpg"
					alt="User image"
				/>
			</div>
			<div className="user-main">
				<span className="user-welcome">Bienvenido</span>
				<div className="user-title">
					<div className="user-title-name">{user.username}</div>
					<div className="user-title-actions">
						<IconButton
							type="button"
							color="flat"
							icon="bi-pencil-fill"
							onClick={() => setOpenModal(true)}
						/>
					</div>
				</div>
			</div>
			<div className="user-created-at">
				Usuario registrado el {new Date(user.signupDate).toLocaleDateString()}
			</div>
		</div>
	);
};

export default UserCard;
