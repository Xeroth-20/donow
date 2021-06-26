import React, { FunctionComponent } from 'react';
import PageHeader from './../components/PageHeader';
import ParentContainer from './../components/ParentContainer';
import ChildContainer from './../components/ChildContainer';
import Login from './../components/Login';

const LoginPage: FunctionComponent = () => {
	return (
		<div className="login-page">
			<ParentContainer>
				<PageHeader />
				<ChildContainer>
					<Login />
				</ChildContainer>
			</ParentContainer>
		</div>
	);
};

export default LoginPage;
