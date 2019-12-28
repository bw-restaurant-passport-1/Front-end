import React from 'react';
import { Link } from 'react-router-dom';

const HeaderWithLogOut = () => {
	return (
		<Link className='log-out' to='/' onClick={() => localStorage.removeItem('token')}>
			Sign Out
		</Link>
	);
};

export default HeaderWithLogOut;
