import React, {useState, useEffect} from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard.js";
import {Link} from "react-router-dom";

import { axiosWithAuth } from "../../utils/axiosWithAuth.js";

const RestaurantsDashboard = (props) => {

    //Save the data for 3 of each section


    const [restaurants , setRestaurants] = useState([]);
    

    // const [allRestaurants, setAllRest] = useState(props.restaurants);


    const [allStamptedRest, setAllStampedRest] = useState([]);
    const [allRecommendedRest, setAllRecommendedRest] = useState([]);
    
    const restaurant = {
        "id": 1,
		"restaurantName": "Chili's",
		"streetAddress": "3917 S Gilbert Rd",
		"city": "Gilbert",
		"zipcode": "85296",
		"phoneNumber": "(480) 812-4636",
		"websiteURL": "www.chilis.com",
		"restaurantPictureURL": "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg"
    };

    // console.log(props)


    useEffect(()=> {
        axiosWithAuth().get('/api/restaurants').then((res)=> {
            console.log(res);
            setRestaurants(res.data);
            
        },(error) =>{
            console.log(error);
        })

 


    },[])

    const loadingRest = () => {
        return (
            <div>loading</div>
        )
    }

    console.log(restaurants)

    

    return (

        <div>
            
            <div className="rest_sections">
                <div className="rest_header">
                    <h2 className="rest_title">Added Restaurants</h2>
                    <Link to="/dashboard/restaurants">See All</Link>
                </div>
                
                <div className="restaurants_container">
                    {/* DO a loop to show only 3 items here */}
                    

                    
                    {/* <RestaurantCard restaurant= {restaurant}/> */}
                    <RestaurantCard restaurant= {restaurants[0]}/>
                    <RestaurantCard restaurant= {restaurants[1]}/>
                    <RestaurantCard restaurant= {restaurants[3]}/>
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