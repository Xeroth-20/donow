import React, {
	useEffect,
	useRef,
	FunctionComponent,
	FormEventHandler,
	ChangeEventHandler,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from './../redux/actions/user.action';
import { updateUser } from './../redux/actions/users.action';
import useField from './../hooks/use-field';
import Modal from './Modal';
import Input from './Input';
import Button from './Button';
import { validateUserName } from './../functions/field-validators';

interface NewUserNameModal {
	close?: () => void;
}

const NewUserNameModal: FunctionComponent<NewUserNameModal> = ({ close }) => {
	const user = useSelector<Store, IUser>((state) => state.user as IUser);
	const users = useSelector<Store, IUser[]>((state) =>
		Object.values(state.users)
	);
	const [usernameField, setUsernameField, setUsernameFieldDirty] = useField(
		'',
		(username) => validateUserName(username, users)
	);
	const ref = useRef<HTMLInputElement | null>(null);
	const dispatch = useDispatch();

	useEffect(() => {
		if (ref.current) {
			ref.current.focus();
		}
	}, []);

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		if (usernameField.error === null) {
			const userModified: IUser = {
				...user,
				username: usernameField.value,
			};
			dispatch(updateUser(userModified));
			dispatch(setCurrentUser(userModified));

			if (close) {
				close();
			}
		} else {
			setUsernameFieldDirty(true);
		}
	};

	const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
		setUsernameField(target.value);
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
							value={usernameField.value}
							onChange={handleChange}
						/>
						{usernameField.error && usernameField.dirty && (
							<small className="hint-error">{usernameField.error}</small>
						)}
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
