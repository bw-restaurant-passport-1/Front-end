import React from 'react';
import RestaurantLoginPage from './components/restaurantLoginPage';
import RestaurantCreateAccountPage from './components/restaurantCreateAccountPage';
import { Route } from 'react-router-dom';
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard.js";

function App() {
	return (
		<div className='App'>
			<Route exact path='/' component={RestaurantLoginPage} />
			<Route path='/register' component={RestaurantCreateAccountPage} />
      <Route path='/dashboard' component={Dashboard} />
		</div>
	);
}
export default App;
