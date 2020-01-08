import React from 'react';
import RestaurantLoginPage from './components/accounts/restaurantLoginPage';
import RestaurantCreateAccountPage from './components/accounts/restaurantCreateAccountPage';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard.js';
import NavBar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import RestaurantList from './components/RestaurantList/RestaurantList.js';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.js';
import AddRestaurant from './components/AddRestaurant/AddRestaurant.js';
import RestaurantInfo from './components/RestaurantInfo/RestaurantInfo';

function App() {
	return (
		<div className='App'>
			<ScrollToTop />
			<Route exact path='/' component={RestaurantLoginPage} />
			<Route path='/register' component={RestaurantCreateAccountPage} />

			<Route exact path='/dashboard' component={Dashboard} />

			<Route path='/dashboard' component={NavBar} />

			<Route path='/dashboard/restaurants' component={RestaurantList} />

			<Route path='/dashboard/add-restaurant' component={AddRestaurant} />

			<Route path='/dashboard' component={Footer} />
			<Route path='dashboard/restaurant/info' component={RestaurantInfo} />
		</div>
	);
}
export default App;
