import React, { useState, useEffect } from 'react';
import styles from '../../styles/styles.css';
import FaStar from 'react-icons/lib/fa/star';
import useForm from 'react-hook-form';
// import { register } from '../../serviceWorker';
import {connect} from 'react-redux';
import {fetchRestaurantById, fetchRestaurantReviews, addReview} from '../../actions/index';
import RestaurantInfoCard from '../restaurantInfoCard/restaurantInfoCard'

import ReviewCard from "./ReviewCard";
import { useParams } from 'react-router-dom';


const RestaurantsInfo = (props) => {

	console.log(props)

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




console.log( 'resturant data', props.restaurantId);

	const [ratingDisplay, setRatingDisplay] = useState(0)



	const { register, formState, handleSubmit, errors, setValue } = useForm();


	const onReviewSubmit = (data, e) => {
		e.preventDefault();
		console.log('data submit', data)

		// props.addReview(data)
	}



	console.log("error",errors)
	console.log("formstate", formState)



	useEffect(() => {
		props.fetchRestaurantById(id);
		props.fetchRestaurantReviews(id);
		


	}, []);

	useEffect(()=> {
		console.log("use effect on reviews", props.username)

		props.reviews.forEach((rev) => {
			console.log(rev,"reviews loop")
			if(rev.name === props.username){
				setValue("notes", rev.notes)
			}
		})

	},[props.reviews])

	return (
		<div
		className='info_card'>
			{restaurantData.map (restaurantData => {
				return <RestaurantInfoCard key={restaurantData.id} restaurantData={restaurantData}  formState={formState}/>
			})
		}
		
			<div className="review_container">
				<form className="review_form" onSubmit={handleSubmit(onReviewSubmit)}>
					<label htmlFor="notes" className="notes_label">Review</label>
					<input
						className= {`notes ${errors.notes ? "add_rating_errors": ""}`}
						type="Textarea"
						placeholder={ errors.notes ? "Your Review Required*" : "Your Review"}
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
						{errors.myRating && `Please add your rating!` }
						
						<span className={`rating ${ ratingDisplay === 5 && "checked"}`}
							onClick={() =>{
								setValue("myRating", `5`);
								setRatingDisplay(5);
							}}
						>
							<input type="radio" name="myRating" id="5" value="5" ref={register({required: true})}/>
							<label for="5" className="fa fa-star">
							</label>
						</span>

						<span className={`rating ${ ratingDisplay === 4 && "checked"}`}
							onClick={() =>{
								setValue("myRating", `4`)
								setRatingDisplay(4);
							}}
						>
							<input type="radio" name="myRating" id="4" value="4" ref={register({required: true})}/>
							<label for="4" className={`fa fa-star `}>
							</label>
						</span>

						<span className={`rating ${ ratingDisplay === 3 && "checked"}`}
							onClick={() =>{
								setValue("myRating", `3`)
								setRatingDisplay(3);
							}}
						>
							<input type="radio" name="myRating" id="3" value="3" ref={register({required: true})}/>
							<label for="3" className={`fa fa-star `}>
							</label>
						</span>

						<span className={`rating ${ ratingDisplay === 2 && "checked"}`}
							onClick={() =>{
								setValue("myRating", `2`)
								setRatingDisplay(2);
							}}
						>
							<input type="radio" name="myRating" id="2" value="2" ref={register({required: true})}/>
							<label for="2" className={`fa fa-star `}>
							</label>
						</span>

						<span className={`rating ${ ratingDisplay === 1 && "checked"}`}
							onClick={() =>{
								setValue("myRating", `1`)
								setRatingDisplay(1);
							}}
						>
							<input type="radio" name="myRating" id="1" value="1" ref={register({required: true})}/>
							<label for="1" className={`fa fa-star `}>
							</label>
						</span>
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
		reviews: state.restaurantReviews,
		username : state.user.username
    }
}

export default connect(mapStateToProps, {fetchRestaurantById, fetchRestaurantReviews, addReview}) (RestaurantsInfo);
