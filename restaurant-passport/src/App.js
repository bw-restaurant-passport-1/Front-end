import React from 'react';
import restaurantLoginPage from './components/restaurantLoginPage';
import restaurantCreateAccountPage from './components/restaurantCreateAccoutPage';
import { Route } from 'react-router-dom';
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard.js";

function App() {
	return (
		<div className='App'>
			<Route exact path='/' component={restaurantLoginPage} />
			<Route path='/register' component={restaurantCreateAccountPage} />
      <Route path='/dashboard' component={Dashboard} />
		</div>
	);
}
export default App;
