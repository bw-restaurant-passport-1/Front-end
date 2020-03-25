import React, { useState, useEffect } from "react";
import "../../styles/styles.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import FaStar from "react-icons/lib/fa/star";
import {connect} from 'react-redux'
import {fetchRestaurantAll} from "../../actions/index"


const RestaurantList = (props) =>{
    
    let restaurants = [];


    //here we can filter by category, rating, city

    const [searchTerm, setSearchTerm] = useState({category: "", rating: 0, city: ""});

    // place what ever data from props to display on page.
    const [searchResults, setSearchResults] = useState(restaurants)

    useEffect(()=>{
        props.fetchRestaurantAll()
        
    },[])

    useEffect(()=>{
        props.fetchRestaurantAll();
        // restaurants = props.allRestaurants;

        console.log(restaurants,"we double here")
        let searchKey = Object.keys(searchTerm).filter(key => searchTerm[key] !== "" && searchTerm[key] !== 0).toString();

        console.log("Search Key:", searchTerm[searchKey]);

        // console.log(restaurants.filter(rest => rest[SearchKey]));

        let results = [];

        if(searchKey === "") {
            results = props.allRestaurants.map(x => x);
        } else if(!isNaN(searchTerm[searchKey])) {
            results = props.allRestaurants.filter(rest => {
                return rest[searchKey] === (searchTerm[searchKey]);
            });
        } else {
            results = props.allRestaurants.filter(rest => {
                return rest[searchKey].toLowerCase().includes(searchTerm[searchKey].toLowerCase());
            });
        }

 

       
        console.log(searchResults);

        setSearchResults(results);

    },[searchTerm])

    const handleChange = (e) => {
        e.preventDefault();
        setHover(0);
        setSearchTerm({category: "", rating: 0, city: "", [e.target.name]: e.target.value});
        
        // console.log(searchTerm,"Search Term");
    };

    const handleClickStar = (e,index) => {
        setSearchTerm({})
        setHover(index);
        // console.log(index);
        setSearchTerm({category: "", city: "", rating: index})
        // console.log(searchTerm);
    }
    
    let stars = [];

    const [HoverIdx, setHover] = useState();

    const StarRated = ({handleClick, HoverIdx, index}) => {
        return (
            <>
            {HoverIdx >= index ?
                <span onClick={e => {
                    handleClick(e,index);
                    console.log("clicked");   
                }
                }>
                    <FaStar color="gold" />
                </span> 
                :
                <span onClick={e => {
                    handleClick(e,index);
                    console.log("clicked");
                }    
                }>
                    <FaStar />
                </span>
            }
            </>
        )};



    for (let i = 0; i < 5; i++) {
        stars.push(<StarRated key={i} handleClick={handleClickStar} HoverIdx={HoverIdx} index={i + 1}/>)
    }


 
    const handleReset = (e) => {
        e.preventDefault();
        setSearchTerm({category: "", rating: 0, city: ""});
        setHover(0);
    }


    return (
        <div className="main_container">

            <form className="rest_form" onReset={handleReset}>
                <legend>Filter Restaurants by:</legend>
                <label htmlFor="category">Category</label>
                <input
                    id="category"
                    type="text"
                    name="category"
                    onChange={handleChange}
                    value={searchTerm.category}
                />


                <label htmlFor="rating">Rating</label>
                <div className="rating">{stars}</div>


                <label htmlFor="city">City</label>
                <input
                    id="city"
                    type="text"
                    name="city"
                    onChange={handleChange}
                    value={searchTerm.city}
                />
                <button type="reset" value="reset">Clear Filter</button>
            </form>
            
            <div >
                <div className="rest_header">
                    <h2 className="rest_title">{/* title that is being searched */}</h2>
                </div>
                {/* <h2> Title of the list of restaurants</h2> */}
                {/* Map over date to display what ever selected opton was on dashboard. */}
                <div className="restaurants_container">

                    {searchResults.length <= 0  ? 
                            <h2>Nothing was found!</h2>
                        : 
                        searchResults.map( restdata => {
                            // console.log(rest);
                            return <RestaurantCard key ={restdata.id} restaurant={restdata} props={props}/>;
                        }) 
                    }
                </div>  
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        allRestaurants: state.allRestaurants
    }
}

export default connect(mapStateToProps, {fetchRestaurantAll})(RestaurantList);