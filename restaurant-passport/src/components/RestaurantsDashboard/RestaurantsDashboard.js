import React, { useEffect} from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard.js";
import {fetchRestaurant} from '../../actions/index';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

const RestaurantsDashboard = (props) => {

    //Save the data for 3 of each section
    const restaurant = props.restaurants
    // const restaurant = {
    //     restaurantName: "Michael’s Food Place",
    //     restaurantPictureURL: "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg",
    //     rating: 3,
    //     been_here: true,
        
    // };
      
    useEffect(()=> {
        props.fetchRestaurant(1);
    }, [])

    return (

        <div>
            
            <div className="rest_sections">
                <div className="rest_header">
                    <h2 className="rest_title">Added Restaurants</h2>
                    <Link to="/dashboard/restaurants">See All</Link>
                </div>
                
                <div
                 className="restaurants_container">
                    {restaurant.map(restaurant => {
                        return (
                        <div>
                         <RestaurantCard key ={restaurant.id} restaurant= {restaurant}/>
                         </div>
                         )
                    })}
                </div>
                
            </div>
            <div className="rest_sections">
                <div className="rest_header">
                    <h2 className="rest_title">Stamped Restaurants</h2>
                    {/* when taken to link display only stamped restaurants */}
                    <Link to="/dashboard/restaurants">See All</Link>
                </div>
                
                <div className="restaurants_container">
                    {restaurant.map(restaurant => {
                        return  <RestaurantCard key ={restaurant.id} restaurant= {restaurant}/>
                    })}
                </div>
                
            </div>
            <div className="rest_sections">
                <div className="rest_header">
                    <h2 className="rest_title">Recommended Restaurants</h2>
                    {/* when taken to link display only recommended restaurants */}
                    <Link to="/dashboard/restaurants">See All</Link>
                </div>
                
                <div className="restaurants_container">
                    {restaurant.map(restaurant => {
                        return  <RestaurantCard key ={restaurant.id} restaurant= {restaurant}/>
                    })}
                </div>
                
            </div>
        </div>
    )

}
const mapStateToProps = state => {
    return {
        restaurants: state.restaurants
    }
}

export default connect(mapStateToProps, {fetchRestaurant})(RestaurantsDashboard);