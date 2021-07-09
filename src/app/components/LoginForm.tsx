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
import UserSelectBox from './UserSelectBox';
import Input from './Input';
import Button from './Button';

const LoginForm: FunctionComponent = () => {
	const [username, setUsername] = useState<string>('');
	const users = useSelector<Store, Users>((state) => state.users);
	const dispatch = useDispatch();

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const user: IUser = {
			username,
			signupDate: new Date(),
		};

		if (!users[username]) {
			dispatch(addUser(user));
		}

		dispatch(setCurrentUser(user));
		dispatch(login());
	};

	const handleUsernameChange: ChangeEventHandler<HTMLInputElement> = ({
		target,
	}) => {
		setUsername(target.value);
	};

	return (
		<form className="login-form" onSubmit={handleSubmit}>
			<div className="form-group">
				<h3 className="form-title">Inicia sesión</h3>
			</div>
			<div className="form-group">
				<Input
					placeholder="Nombre de usuario"
					value={username}
					onChange={handleUsernameChange}
				/>
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
				<UserSelectBox
					onUserSelect={(user) => setUsername(user ? user.username : '')}
				/>
			</div>
		</form>
	);
};

export default LoginForm;
