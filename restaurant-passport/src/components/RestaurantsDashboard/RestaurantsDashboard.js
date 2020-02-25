import React, { useEffect, useState} from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard.js";
import {fetchRestaurantAll} from '../../actions/index';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import LoadingCard from "../RestaurantCard/LoadingCard.js";
import compass from "react-icons/lib/fa/compass";

const RestaurantsDashboard = ({ allRestaurants, isFetching,fetchRestaurantAll}) => {

    //Save the data for 3 of each section
    // console.log(props)

    // const restaurant = {
    //     restaurantName: "Michael’s Food Place",
    //     restaurantPictureURL: "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg",
    //     rating: 3,
    //     been_here: true,
        
    // };
  

    const rest = allRestaurants

     const [topsRecent, setTopRecent] = useState([])

     

    
    useEffect(()=> {
        

        fetchRestaurantAll()

        for(let x=0;x<3;x++){
            console.log(rest)
            setTopRecent([...topsRecent, allRestaurants[x]])
        }


    }, [])


    return (

        <div>
            
            <div className="rest_sections">
                <div className="rest_header">
                    <h2 className="rest_title">Added Restaurants</h2>
                    <Link to="/dashboard/restaurants/added-section">See All</Link>
                </div>
                
                <div
                 className="restaurants_container">
                    {allRestaurants && allRestaurants.map(x => <RestaurantCard key ={x.id} restaurant={x}/>)}
                </div>
                
            </div>


            <div className="rest_sections">
                <div className="rest_header">
                    <h2 className="rest_title">Stamped Restaurants</h2>
                    {/* when taken to link display only stamped restaurants */}
                    <Link to='/dashboard/restaurants/stamped'>See All</Link>
                </div>
                
                <div className="restaurants_container">
                    {/* {topsRecent && topsRecent.map(x => <RestaurantCard restaurant={x}/>)} */}
                </div>
                
            </div>
            <div className="rest_sections">
                <div className="rest_header">
                    <h2 className="rest_title">Recommended Restaurants</h2>
                    {/* when taken to link display only recommended restaurants */}
                    <Link to="/dashboard/restaurants/recommended">See All</Link>
                </div>
                
                <div className="restaurants_container">
                    {}
                </div>
                
            </div>
        </div>
    )

}
const mapStateToProps = state => {

    return {
        isFetching: state.isFetching,
        allRestaurants: state.allRestaurants,

    }
}

export default connect(mapStateToProps, {fetchRestaurantAll})(RestaurantsDashboard);