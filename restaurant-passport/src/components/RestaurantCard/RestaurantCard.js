import React from "react";

import {FaBookmarkO} from "react-icons/lib/fa";



// FaBookmarkO react-icons/lib/fa/bookmark-o
// FaBookmark react-icons/lib/fa/bookmark        filled
//FaStar react-icons/lib/fa/star

//FaTicket react-icons/lib/fa/ticket



const RestaurantCard = () => {

    const restaurant = {
        name: "Michael’s Food Place",
        img: "",
        rating: 3,
        been_here: true,

    }


    const BookMarkMe = () => {
        console.log(restaurant);
    }



    return (
        <div className="rest_card">
            <div className="img_container">
                {restaurant.been_here ? <img className="been_here" src="../../images/Been_Here.png" /> : null}
                <img className="rest_img" src={!restaurant.img ==="" ? restaurant.img : "../../images/restaurant_placeholder.jpg"} alt={restaurant.name} />
                {/* Add action to bookmark as well */}
                <a className="bookmark"  onClick ={BookMarkMe}><FaBookmarkO size={32} color="rgba(160, 160, 160, 0.87)"/></a>
            </div>
            
            <div className="rest_info">
                <h3>{restaurant.name}</h3>
                <p>Rating:</p>
                <p>See Reviews</p>
                <div>
                    
                </div>
            </div>


        </div>
    )
}

export default RestaurantCard;