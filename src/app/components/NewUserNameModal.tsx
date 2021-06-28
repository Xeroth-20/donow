import React, {
	useState,
	useEffect,
	useRef,
	FunctionComponent,
	FormEventHandler,
	ChangeEventHandler,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './Modal';
import Input from './Input';
import Button from './Button';

interface NewUserNameModal {
	close?: () => void;
}

const NewUserNameModal: FunctionComponent<NewUserNameModal> = ({ close }) => {
	const [newUserName, setNewUserName] = useState<string>('');
	const user = useSelector<Store, IUser>((state) => state.user as IUser);
	const ref = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		if (ref.current) {
			ref.current.focus();
		}
	});

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
	};

	const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
		setNewUserName(target.value);
	};

	return (
		<Modal>
			<div className="new-username-modal">
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<div className="num-title">
							Editar nombre de usuario <i className="bi-pencil" />
						</div>
					</div>
					<div className="form-group">
						<Input
							ref={ref}
							placeholder={user.username}
							value={newUserName}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<div className="form-row">
							<div className="form-col-auto">
								<Button color="flat" type="button" onClick={close}>
									Cancelar
								</Button>
							</div>
							<div className="form-col">
								<Button color="accent" type="submit" block>
									Guardar
								</Button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</Modal>
	);
};

export default NewUserNameModal;
