import React from 'react';
import { Link } from 'react-router-dom';

import HeaderWithLogOut from './logout';
import { useDarkMode } from '../dark-mode-hooks/useDarkMode';

const Navbar = () => {
	const [ darkMode, setDarkMode ] = useDarkMode();
	const toggleMode = (e) => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};
	return (
		<nav className='nav_bar'>
			<a className='titlenav'>Restaurant Passport</a>
			<a>About</a>
			<Link to='/dashboard/add-restaurant'>
				<a> Add Restaurant </a>{' '}
			</Link>
			<a>Profile</a>
			<HeaderWithLogOut />
			<div className='dark-mode__toggle'>
				<div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'} />
			</div>
		</nav>
	);
};

export default Navbar;
