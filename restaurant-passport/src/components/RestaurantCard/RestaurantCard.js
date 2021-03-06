import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FaBookmarkO from 'react-icons/lib/fa/bookmark-o';
import FaStar from 'react-icons/lib/fa/star';
import { Router } from 'react-router';

import {connect} from 'react-redux';
import {getRestaurantById} from '../../actions/index'

import placeholder from '../images/restaurant_placeholder.jpg';
import stamped from '../images/Been_Here.png';

// import { axiosWithAuth } from '../../utils/axiosWithAuth';

// FaBookmarkO react-icons/lib/fa/bookmark-o
// FaBookmark react-icons/lib/fa/bookmark        filled
//FaStar react-icons/lib/fa/star

//FaTicket react-icons/lib/fa/ticket

// user_id	String
// restaurant_id
// stamped	bool	Will be stored as a 0 (false) or 1 (true)
// notes	String	The review
// myRating	String	Should be 1 through 5

const RestaurantCard = ({ restaurant }, props) => {
	console.log(restaurant);
    console.log(restaurant.id,'id a thing?');
    const theID = restaurant.id;

	//fake data
	const [ restaurantReviews, setRestaurantReviews ] = useState([
		{ user_id: '2', restaurant_id: '1', stamped: true, notes: 'It was great', myRating: '3' },
		{ user_id: '2', restaurant_id: '1', stamped: false, notes: 'It was great', myRating: '5' },
	]);

	const [ avgRating, setAvgRating ] = useState(0);

	const [ userReviewData, setUserReviewData ] = useState([]);
	// console.log(props)
	// get user id that is signed in to match with reviews to show if they stamped it.

	const user_id = '2';

    // const clickHandle = e=>{
    //     e.preventDefault();
    //     props.getRestaurantById(theID);
    // }

	useEffect(() => {
		// axiosWithAuth().get(`/api/passports/restaurants/${restaurant.id}`).then((res)=> {
		//     console.log(res);
		//      setRestaurantReviews(res.data)
		// },(error) =>{
		//     console.log(error);
		// })
		const avgTotal = restaurantReviews.reduce((acc, curr) => {
			let total = parseInt(acc.myRating) + parseInt(curr.myRating);
			let avg = total / restaurantReviews.length;
			return avg;
		});

		const user = restaurantReviews.find((rest) => {
			return rest.user_id === user_id;
		});

		setUserReviewData(user);

		console.log(userReviewData);

		setAvgRating(avgTotal);
	}, []);

	const BookMarkMe = () => {
		console.log(restaurant);
	};

	console.log(userReviewData);
	  
	return (
		<div className='rest_card'>
			<div className='img_container'>
				{userReviewData.stamped ? <img className='been_here' src={stamped} /> : null}
				
	{restaurant.restaurantPictureURL ? <img className='rest_img' src={restaurant.restaurantPictureURL} alt={restaurant.restaurantName}/> : <img className='rest_img' src= {placeholder} alt='placeholder'/> }
				<a className='bookmark' onClick={BookMarkMe}>
					<FaBookmarkO size={32} />
				</a>
			</div>

			<div className='rest_info'>
				{restaurant && <h3>{restaurant.restaurantName}</h3>}
				<div className='rating_container'>
					Rating:
					<span className='rating'>
						{avgRating >= 0.5 ? <FaStar className='gold' /> : <FaStar />}
						{avgRating >= 1.5 ? <FaStar className='gold' /> : <FaStar />}
						{avgRating >= 2.5 ? <FaStar className='gold' /> : <FaStar />}
						{avgRating >= 3.5 ? <FaStar className='gold' /> : <FaStar />}
						{avgRating >= 4.5 ? <FaStar className='gold' /> : <FaStar />}
					</span>
				</div>
				
			</div>

            <Link to={`/dashboard/restaurants/${restaurant.id}`  } className='see_reviews'>See Reviews </Link>

		</div>
	);
};

const mapStateToProps = state => {
    return {
        singleRestaurant: state.singleRestaurant
    }
}

export default connect(mapStateToProps, {getRestaurantById})(RestaurantCard);
