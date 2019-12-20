import React from 'react';
import RestaurantLoginPage from './components/restaurantLoginPage';
import restaurantCreateAccountPage from './components/restaurantCreateAccoutPage';
import { Route } from 'react-router-dom';
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard.js";

function App() {
<<<<<<< HEAD
  return (
    <div className='App'>
      <Route exact path='/' component={RestaurantLoginPage} />
      <Route path='/register' component={restaurantCreateAccountPage} />
    </div>
  );
=======
	return (
		<div className='App'>
			<Route exact path='/' component={restaurantLoginPage} />
			<Route path='/register' component={restaurantCreateAccountPage} />
      <Route path='/dashboard' component={Dashboard} />
		</div>
	);
>>>>>>> origin
}
export default App;
