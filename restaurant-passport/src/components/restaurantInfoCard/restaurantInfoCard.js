import React from 'react';
import { updateRestaurant } from '../../actions';
import map from '../images/map_image.jpg';
import FaStar from 'react-icons/lib/fa/star';

const RestaurantInfoCard = ({restaurantData, avgRating, formState}) => {
    
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
					<img className='info_img' src={map} />
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

export default RestaurantInfoCard;