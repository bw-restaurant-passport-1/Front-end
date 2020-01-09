import React, { useState } from 'react';
import styles from '../../styles/styles.css';
import FaStar from 'react-icons/lib/fa/star';

const RestaurantsInfo = ({ restaurant }) => {
	return (
		<div className='rest_card'>
			<div className='img_container'>
				<img className='info_img' src='../../images/restaurant_placeholder.jpg' />
			</div>
			<div>
				<h1> Restaurant Name </h1>
			</div>
			{/* <div className='rating_container'>
				Rating:
				<span className='rating'>
					{restaurant.rating >= 3.5 ? <FaStar className='gold' /> : <FaStar />}
					{restaurant.rating >= 4.5 ? <FaStar className='gold' /> : <FaStar />}
				</span>
			</div> */}
		</div>
	);
};

export default RestaurantsInfo;
