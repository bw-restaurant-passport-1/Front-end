import React, { useState, useEffect } from 'react';
import styles from '../../styles/styles.css';
import FaStar from 'react-icons/lib/fa/star';
import useForm from 'react-hook-form';

const RestaurantsInfo = ({ restaurant }) => {
	const { formState } = useForm();
	const { isSubmitting, setSubmitting } = useState(false);
	const onSubmit = (data, e) => {
		e.preventDefault();
	};

	const [ restaurantData, setRestaurantData ] = useState({
		id                   : 1,
		restaurantName       : "Chili's",
		streetAddress        : '3917 S Gilbert Rd',
		city                 : 'Gilbert',
		zipcode              : '85296',
		phoneNumber          : '(480) 812-4636',
		websiteURL           : 'www.chilis.com',
		restaurantPictureURL : 'https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg',
	});

	const [ reviewData, setReviewData ] = useState([
		{ user_id: '2', restaurant_id: '1', stamped: true, notes: 'It was great', myRating: '3' },
		{ user_id: '2', restaurant_id: '1', stamped: false, notes: 'It was great', myRating: '5' },
	]);

	const [ avgRating, setAvgRating ] = useState(0);

	useEffect(() => {
		const avgTotal = reviewData.reduce((acc, curr) => {
			let total = parseInt(acc.myRating) + parseInt(curr.myRating);
			let avg = total / reviewData.length;
			return avg;
		});

		setAvgRating(avgTotal);
	}, []);
	return (
		<div className='info_card'>
			<div className='img_container'>
				{restaurantData && <img className='info_img' src={restaurantData.restaurantPictureURL} />}
				{/* <img className='info_img' src='../../images/restaurant_placeholder.jpg' /> */}
			</div>
			<div>
				<h1 className='info-title'> {restaurantData.restaurantName} </h1>
			</div>
			<div className='info_ratings'>
				Rating:
				<span className='rating'>
					{avgRating >= 0.5 ? <FaStar className='gold' /> : <FaStar />}
					{avgRating >= 1.5 ? <FaStar className='gold' /> : <FaStar />}
					{avgRating >= 2.5 ? <FaStar className='gold' /> : <FaStar />}
					{avgRating >= 3.5 ? <FaStar className='gold' /> : <FaStar />}
					{avgRating >= 4.5 ? <FaStar className='gold' /> : <FaStar />}
				</span>
			</div>
			<button disabled={formState.isSubmitting} className='buttons_info' type='submit'>
				Edit Details
			</button>
			<div className='img_container'>
				<img className='info_img' src='../../images/map_image.jpg' />
			</div>
			<div className='address_info'>
				<h1> Address: </h1>
				<p className='address'>
					12345 w <br /> Everywhere <br /> Chicago, IL
				</p>
			</div>
			<button disabled={formState.isSubmitting} className='buttons_info' type='submit'>
				Get Directions!
			</button>
		</div>
	);
};

export default RestaurantsInfo;
