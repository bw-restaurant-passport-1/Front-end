import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FaBookmarkO from 'react-icons/lib/fa/bookmark-o';
import FaStar from 'react-icons/lib/fa/star';
import { Router } from 'react-router';

// FaBookmarkO react-icons/lib/fa/bookmark-o
// FaBookmark react-icons/lib/fa/bookmark        filled
//FaStar react-icons/lib/fa/star

//FaTicket react-icons/lib/fa/ticket

const RestaurantCard = ({ restaurant }) => {
	const BookMarkMe = () => {
		console.log(restaurant);
	};

	return (
		<div className='rest_card'>
			<div className='img_container'>
				{restaurant.been_here ? <img className='been_here' src='../../images/Been_Here.png' /> : null}
				<img
					className='rest_img'
					src={
						restaurant.restaurantPictureURL ? (
							restaurant.restaurantPictureURL
						) : (
							'../../images/restaurant_placeholder.jpg'
						)
					}
					alt={restaurant.restaurantName}
				/>
				{/* Add action to bookmark as well */}
				<a className='bookmark' onClick={BookMarkMe}>
					<FaBookmarkO size={32} />
				</a>
			</div>

			<div className='rest_info'>
				<h3>{restaurant.restaurantName}</h3>
				<div className='rating_container'>
					Rating:
					<span className='rating'>
						{restaurant.rating >= 0.5 ? <FaStar className='gold' /> : <FaStar />}
						{restaurant.rating >= 1.5 ? <FaStar className='gold' /> : <FaStar />}
						{restaurant.rating >= 2.5 ? <FaStar className='gold' /> : <FaStar />}
						{restaurant.rating >= 3.5 ? <FaStar className='gold' /> : <FaStar />}
						{restaurant.rating >= 4.5 ? <FaStar className='gold' /> : <FaStar />}
					</span>
				</div>
				<a className='see_reviews'>See Reviews </a>
			</div>
		</div>
	);
};

export default RestaurantCard;
