import React, { ReactElement } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import AuthGuard from './guards/AuthGuard';
import LoginPage from './pages/LoginPage';
import LoginGuard from './guards/LoginGuard';
import ErrorPage from './pages/ErrorPage';
import withGuard from './functions/with-guard';

const routes: ReactElement<RouteProps>[] = [
	<Route key="/" path="/" component={withGuard(HomePage, AuthGuard)} exact />,
	<Route
		key="/todos/:id"
		path="/todos/:id"
		component={withGuard(TodoPage, AuthGuard)}
		exact
	/>,
	<Route
		key="/login"
		path="/login"
		component={withGuard(LoginPage, LoginGuard)}
		exact
	/>,
	<Route key="*" path="*" component={ErrorPage} />,
];

export default routes;
