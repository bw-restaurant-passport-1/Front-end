import React from "react";
import FaStar from 'react-icons/lib/fa/star';


const ReviewCard = (props) => {
    
    const user = props.reviewer;
    
    return (
        <div className="reviewer_info">
            <div className="reviewer_name_img">
                <div className="reviewer_img">
                    <img/>
                </div>
                <h3>Adrian</h3>
            </div>
            <div className="reviewer_review">
                <p>I love the food and people there! Recommended!</p>
                <span className="reviewer_rating">
                        {user.myRating >= 0.5 ? <FaStar className='gold' /> : <FaStar />}
						{user.myRating >= 1.5 ? <FaStar className='gold' /> : <FaStar />}
						{user.myRating >= 2.5 ? <FaStar className='gold' /> : <FaStar />}
						{user.myRating >= 3.5 ? <FaStar className='gold' /> : <FaStar />}
						{user.myRating >= 4.5 ? <FaStar className='gold' /> : <FaStar />}
                </span>
            </div>
        </div>
    )
}

export default ReviewCard;