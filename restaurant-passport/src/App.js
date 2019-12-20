import React from 'react';
import restaurantLoginPage from './components/restaurantLoginPage';
import restaurantCreateAccountPage from './components/restaurantCreateAccoutPage';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Route exact path='/' component={restaurantLoginPage} />
			<Route path='/register' component={restaurantCreateAccountPage} />
		</div>
	);
}
export default App;
