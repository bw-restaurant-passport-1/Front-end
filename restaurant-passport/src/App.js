import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import RestaurantLoginPage from './components/accounts/restaurantLoginPage';
import RestaurantCreateAccountPage from './components/accounts/restaurantCreateAccountPage';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

import './styles/reset.css';


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

			<PrivateRoute path='/dashboard' component={NavBar} />

			<PrivateRoute exact path='/dashboard' component={Dashboard} />

			<PrivateRoute exact path='/dashboard/restaurants/:section' component={RestaurantList} />

			<PrivateRoute exact path='/dashboard/add-restaurant' component={AddRestaurant} />

			<PrivateRoute path='/dashboard' component={Footer} />

			<PrivateRoute exact path='/dashboard/restaurant/:restaurantName/:id' component= {RestaurantInfo}/>
		</div>
	);
}
export default App;
