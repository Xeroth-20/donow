import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import LogoutButton from './LogoutButton';

const PageHeader: FunctionComponent = () => {
	const logged = useSelector<Store, boolean>((state) => state.logged);

	return (
		<header className="page-header">
			<div className="nav-container">
				<Link className="brand" to="/">
					Donow
				</Link>
				<Navbar />
			</div>
			<div className="page-header-actions-container">
				{logged && (
					<div className="page-header-action">
						<LogoutButton />
					</div>
				)}
			</div>
		</header>
	);
};

export default PageHeader;
