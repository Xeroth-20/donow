import React, { Fragment, FunctionComponent, PropsWithChildren } from 'react';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';

const LoginGuard: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
	const logged = useSelector<Store, boolean>((state) => state.logged);
	return <Fragment>{logged ? <Redirect to="/" /> : children}</Fragment>;
};

export default LoginGuard;
