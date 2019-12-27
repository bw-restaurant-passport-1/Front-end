import React from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard.js";
import {Link} from "react-router-dom";

const RestaurantsDashboard = () => {

    //Save the data for 3 of each section
    


    return (

        <div>
            
            <div>
                <div className="rest_header">
                    <h2 className="rest_title">Added Restaurants</h2>
                    <Link to="/dashboard/restaurants">See All</Link>
                </div>
                
                <div className="restaurants_container">
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                </div>
                
            </div>
            {/* <div className="stamped_restaurants">

            </div>
            <div className="recommended_restaurants">

            </div> */}
        </div>
    )

}

export default RestaurantsDashboard;