import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar: FunctionComponent = () => {
	const logged = useSelector<Store, boolean>((state) => state.logged);
	return (
		<nav className="navbar">
			<ul className="navbar-list">
				{true && (
					<li className="navbar-item">
						<Link to="/">Inicio</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
