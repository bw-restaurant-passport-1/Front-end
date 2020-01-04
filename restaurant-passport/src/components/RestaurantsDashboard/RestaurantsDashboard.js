import React from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard.js";
import {Link} from "react-router-dom";

const RestaurantsDashboard = () => {

    //Save the data for 3 of each section
    
    const restaurant = {
        restaurantName: "Michael’s Food Place",
        restaurantPictureURL: "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg",
        rating: 3,
        been_here: true,
        
    };


    return (

        <div>
            
            <div className="rest_sections">
                <div className="rest_header">
                    <h2 className="rest_title">Added Restaurants</h2>
                    <Link to="/dashboard/restaurants">See All</Link>
                </div>
                
                <div className="restaurants_container">
                    <RestaurantCard restaurant= {restaurant}/>
                    <RestaurantCard restaurant= {restaurant}/>
                    <RestaurantCard restaurant= {restaurant}/>
                </div>
                
            </div>
            <div className="rest_sections">
                <div className="rest_header">
                    <h2 className="rest_title">Stamped Restaurants</h2>
                    {/* when taken to link display only stamped restaurants */}
                    <Link to="/dashboard/restaurants">See All</Link>
                </div>
                
                <div className="restaurants_container">
                    <RestaurantCard restaurant= {restaurant}/>
                    <RestaurantCard restaurant= {restaurant}/>
                    <RestaurantCard restaurant= {restaurant}/>
                </div>
                
            </div>
            <div className="rest_sections">
                <div className="rest_header">
                    <h2 className="rest_title">Recommended Restaurants</h2>
                    {/* when taken to link display only recommended restaurants */}
                    <Link to="/dashboard/restaurants">See All</Link>
                </div>
                
                <div className="restaurants_container">
                    <RestaurantCard restaurant= {restaurant}/>
                    <RestaurantCard restaurant= {restaurant}/>
                    <RestaurantCard restaurant= {restaurant}/>
                </div>
                
            </div>
        </div>
    )

}

export default RestaurantsDashboard;