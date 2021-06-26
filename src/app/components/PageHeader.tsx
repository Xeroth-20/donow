import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ThemeToggler from './ThemeToggler';

const PageHeader: FunctionComponent = () => {
	return (
		<header className="page-header">
			<div className="nav-container">
				<Link className="brand" to="/">
					Donow
				</Link>
				<Navbar />
			</div>
			<div className="actions-container">
				<ThemeToggler />
			</div>
		</header>
	);
};

export default PageHeader;
