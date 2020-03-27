import React from "react";
import FaStar from 'react-icons/lib/fa/star';


const ReviewCard = ({reviewer}) => {
    
    console.log("reviewer", reviewer)
    
    
    return (
        <div className="reviewer_info">
            <div className="reviewer_name_img">
                <div className="reviewer_img">
                    {reviewer.avatarURL? <img src={reviewer.avatarURL} alt ={reviewer.name}/> : null }
                </div>
                <h3>{reviewer.name}</h3>
            </div>
            <div className="reviewer_review">
                <p>{reviewer.notes}</p>
                <span className="reviewer_rating">
                        {reviewer.myRating >= 0.5 ? <FaStar color='gold' /> : <FaStar />}
						{reviewer.myRating >= 1.5 ? <FaStar color='gold' /> : <FaStar />}
						{reviewer.myRating >= 2.5 ? <FaStar color='gold' /> : <FaStar />}
						{reviewer.myRating >= 3.5 ? <FaStar color='gold' /> : <FaStar />}
						{reviewer.myRating >= 4.5 ? <FaStar color='gold' /> : <FaStar />}
                </span>
            </div>
        </div>
    )
}

export default ReviewCard;