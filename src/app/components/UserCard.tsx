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
			<div className="user-info">
				<div className="user-main">
					<div className="user-welcome">Bienvenido</div>
					<div className="user-title">
						<div className="user-name">{user.username}</div>
						<IconButton
							type="button"
							color="flat"
							icon="bi-pencil-fill"
							onClick={() => setOpenModal(true)}
						/>
					</div>
				</div>
				<div className="user-created-at">
					Usuario registrado el {new Date(user.signupDate).toLocaleDateString()}
				</div>
			</div>
		</div>
	);
};

export default UserCard;
