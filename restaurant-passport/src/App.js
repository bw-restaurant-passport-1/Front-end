import React from 'react';
import RestaurantLoginPage from './components/accounts/restaurantLoginPage';
import RestaurantCreateAccountPage from './components/accounts/restaurantCreateAccountPage';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard.js';
import NavBar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';

function App() {
	return (
		<div className='App'>
			<Route exact path='/' component={RestaurantLoginPage} />
			<Route path='/register' component={RestaurantCreateAccountPage} />
      		<PrivateRoute path='/dashboard' component={NavBar} />
			  <PrivateRoute path="/dashboard" component={Dashboard} />
			<PrivateRoute path='/dashboard' component={Footer} />
		</div>
	);
}
export default App;
