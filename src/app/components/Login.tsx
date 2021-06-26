import React, { FunctionComponent } from 'react';
import LoginImage from './LoginImage';
import LoginForm from './LoginForm';

const Login: FunctionComponent = () => {
	return (
		<div className="login">
			<div className="left-side">
				<LoginImage />
			</div>
			<div className="right-side">
				<LoginForm />
			</div>
		</div>
	);
};

export default Login;
