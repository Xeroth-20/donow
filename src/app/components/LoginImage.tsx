import React, { FunctionComponent } from 'react';

const LoginImage: FunctionComponent = () => {
	return (
		<div className="login-image">
			<img
				className="thumb"
				src="/assets/svgs/login-image.svg"
				alt="Login image"
			/>
			<p className="description">¡Empieza ahora!</p>
		</div>
	);
};

export default LoginImage;
