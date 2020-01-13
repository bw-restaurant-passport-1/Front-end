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
			<a href="https://bw-restaurant-passport-1.github.io/User-Interface/about.html">About</a>
			<Link to='/dashboard/add-restaurant'>
				Add Restaurant
			</Link>
			<Link to ='/dashboard'>Profile</Link>
			<HeaderWithLogOut />
			<div className='dark-mode__toggle'>
				<div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'} />
			</div>
		</nav>
	);
};

export default Navbar;
