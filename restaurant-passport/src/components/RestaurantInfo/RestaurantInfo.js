import React, { useState, useEffect } from 'react';
import styles from '../../styles/styles.css';
import FaStar from 'react-icons/lib/fa/star';
import useForm from 'react-hook-form';
// import { register } from '../../serviceWorker';
import {connect} from 'react-redux';
import {fetchRestaurantById, fetchRestaurantReviews, addReview} from '../../actions/index';
import RestaurantInfoCard from '../restaurantInfoCard/restaurantInfoCard'

import ReviewCard from "./ReviewCard";
import { useParams } from 'react-router';


const RestaurantsInfo = (props) => {

	const {id} = useParams()
	const restaurantData = props.restaurantId;
	// const reviewData = props.reviews;
	// Fake data
	// const [ restaurantData, setRestaurantData ] = useState({
	// 	id                   : 1,
	// 	restaurantName       : "Chili's",
	// 	streetAddress        : '3917 S Gilbert Rd',
	// 	city                 : 'Gilbert',
	// 	zipcode              : '85296',
	// 	phoneNumber          : '(480) 812-4636',
	// 	websiteURL           : 'www.chilis.com',
	// 	restaurantPictureURL : 'https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg',
	// });


	

	const [ reviewData, setReviewData ] = useState([
		{ user_id: '2', restaurant_id: '1', stamped: true, notes: 'It was great', myRating: '3' },
		{ user_id: '2', restaurant_id: '1', stamped: false, notes: 'It was great', myRating: '5' },
	])

console.log( 'data', props.restaurantId);



	const { register, formState, handleSubmit, errors, setValue } = useForm();


	const onReviewSubmit = (data, e) => {
		e.preventDefault();
		console.log('data submit', data)
		props.addReview(data)
	}



	console.log(errors)



	//to display the avg rating for restaurnat selected
	const [ avgRating, setAvgRating ] = useState(0);

	useEffect(() => {
		props.fetchRestaurantById(id);
		props.fetchRestaurantReviews(id);
		
		
		console.log(reviewData)
		const avgTotal = reviewData.reduce((acc, curr) => {
			let total = parseInt(acc.myRating) + parseInt(curr.myRating);
			let avg = total / reviewData.length;
			return avg;
		});

		setAvgRating(avgTotal);


	}, []);


	// to set stars for review
	const [HoverIdx, setHover] = useState();

	const handleClickStar = (e,index) => {
		setHover(index);
	}
	
	let stars = [];
	const StarRated = ({handleClick, HoverIdx, index}) => {
        return (
            <>
			{HoverIdx >= index ?
				<span className="star_rating_review">
					<FaStar
						
						onClick={e => {
							handleClick(e,index);
							setValue("myRating", `${index}`)
							   
						}} color="gold" 
					/> 
				</span>
				:
				<span  className="star_rating_review">
					<FaStar
						onClick={e => {
							
							handleClick(e,index);
							setValue("myRating", `${index}`)
							 
						}} 
					/>
				</span>
            }
            </>
		)
	};
		
	for (let i = 0; i < 5; i++) {
        stars.push(<StarRated key={i} handleClick={handleClickStar} HoverIdx={HoverIdx} index={i + 1}/>)
	}

	//////////////////////////////
	return (
		<div
		className='info_card'>
			{restaurantData.map (restaurantData => {
				return <RestaurantInfoCard key={restaurantData.id} restaurantData={restaurantData} avgRating={avgRating} formState={formState} FaStar={FaStar}/>
			})
		}
			<div className="review_container">
				<form className="review_form" onSubmit={e => handleSubmit(e, onReviewSubmit)}>
					<label htmlFor="notes" className="notes_label">Review</label>
					<input
						className= {`notes ${errors.notes ? "add_rating_errors": ""}`}
						type="text"
						placeholder="Write Review here"
						name="notes"
						ref={register({required: true})}
					/>
					<label htmlFor="stamped">Been Here?</label>
					<input
						className="been_here_review"
						 type="checkbox"
						 name="stamped"
						 ref={register({required: false})}
					/>

					<div className="review_rating">
						<input 
							type="radio"
							name="myRating"
							ref={register({required: true})}
							value="1"
						/>
						<input 
							type="radio"
							name="myRating"
							ref={register({required: true})}
							value="2"
						/>
						<input 
							type="radio"
							name="myRating"
							ref={register({required: true})}
							value="3"
						/>
						<input 
							type="radio"
							name="myRating"
							ref={register({required: true})}
							value="4"
						/>
						<input 
							type="radio"
							name="myRating"
							ref={register({required: true})}
							value="5"
						/>
						{stars}

					</div>

					<button className="buttons_info review_button" type= "submit">POST</button>

				</form>
				<div className="reviews">
					<h2>Reviews</h2>
					<div className="review_section">
						
						{
							props.reviews.length < 1 ? <h2>No reviews</h2> 
							:
							props.reviews.map(reviewer => {
								return <ReviewCard key={reviewer.name} reviewer={reviewer}/>
							})
						}
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
    return {
		restaurantId: state.restaurantId,
		reviews: state.restaurantReviews
    }
}

export default connect(mapStateToProps, {fetchRestaurantById, fetchRestaurantReviews, addReview}) (RestaurantsInfo);
