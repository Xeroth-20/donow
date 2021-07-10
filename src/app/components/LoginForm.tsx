import React, {
	useState,
	FunctionComponent,
	FormEventHandler,
	ChangeEventHandler,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from './../redux/actions/users.action';
import { setCurrentUser } from './../redux/actions/user.action';
import { login } from './../redux/actions/logged.action';
import useField from './../hooks/use-field';
import UserSelectBox from './UserSelectBox';
import Input from './Input';
import Button from './Button';
import { validateUserName } from './../functions/field-validators';

const LoginForm: FunctionComponent = () => {
	const users = useSelector<Store, IUser[]>((state) =>
		Object.values(state.users)
	);
	const [usernameField, setUsernameField] = useField('', (username) =>
		validateUserName(username, null)
	);
	const dispatch = useDispatch();

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		if (usernameField.error === null) {
			const existingUser = users.find(
				(user) => user.username === usernameField.value
			);
			const user: IUser = existingUser || {
				id: Date.now().toString(16),
				username: usernameField.value,
				signupDate: new Date(),
			};

			if (!existingUser) {
				dispatch(addUser(user));
			}

			dispatch(setCurrentUser(user));
			dispatch(login());
		}
	};

	const handleUsernameChange: ChangeEventHandler<HTMLInputElement> = ({
		target,
	}) => {
		setUsernameField(target.value);
	};

	const handleUserSelect = (user: IUser | null) => {
		setUsernameField(user ? user.username : '');
	};

	return (
		<form className="login-form" onSubmit={handleSubmit}>
			<div className="form-group">
				<h3 className="form-title">Inicia sesión</h3>
			</div>
			<div className="form-group">
				<Input
					placeholder="Nombre de usuario"
					value={usernameField.value}
					onChange={handleUsernameChange}
				/>
				{usernameField.error && usernameField.dirty && (
					<small className="hint-error">{usernameField.error}</small>
				)}
			</div>
			<div className="form-group">
				<Button type="submit" variant="sz-md" color="accent" block>
					Ingresar
				</Button>
			</div>
			<div className="form-group">
				<p className="hint">Tambien ingresa con un usuario existente</p>
			</div>
			<div className="form-group">
				<UserSelectBox onUserSelect={handleUserSelect} />
			</div>
		</form>
	);
};

export default LoginForm;
