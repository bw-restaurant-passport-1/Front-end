import React from 'react';
import {connect} from 'react-redux';
import {getRestaurantById} from '../../actions/index'

const RestaurantInfoCard = ({restaurantData, avgRating, FaStar, formState},props) => {
	let single = props.singleRest;
    console.log('rest info card', restaurantData)
    return (
<div className="rest_info">
				<div className='img_container'>
					{restaurantData && <img className='info_img' src={restaurantData.restaurantPictureURL} />}
					{/* <img className='info_img' src='../../images/restaurant_placeholder.jpg' /> */}
				</div>
				<div>
					<h1 className='info_title'> {restaurantData.restaurantName} </h1>
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
						{restaurantData.streetAddress}
					</p>
				</div>
				<button disabled={formState.isSubmitting} className='buttons_info' type='submit'>
					Get Directions!
				</button>
            </div>
            )
}

const mapStateToProps = state => {
    return {
        restaurants: state.restaurants,
		singleRest: state.singleRestaurant
    }
}

export default connect(mapStateToProps, {getRestaurantById}) (RestaurantInfoCard);