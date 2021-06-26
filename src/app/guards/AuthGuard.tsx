import React, { Fragment, FunctionComponent, PropsWithChildren } from 'react';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';

const AuthGuard: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
	const logged = useSelector<Store, boolean>((state) => state.logged);
	return <Fragment>{logged ? children : <Redirect to="/login" />}</Fragment>;
};

export default AuthGuard;
